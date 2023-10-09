import React, { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faPen } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import { firebaseAuth } from "../../firebase";
// import { fireStore } from './../firebase';

const Button = styled.button`
  position: absolute;
  top : 220px;
  right: 4%;
  margin: 20px 12px;
  background-color:  #98eecc;
  padding: 12px;
  border-radius: 6px;
  font-size: 0.9em;
  line-height: 1.25rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  outline: none;
  border: none;
  cursor: pointer;
  svg {
    color: #fff;
  }
  font-weight: bold;
  color: #fff;
  @media screen and (max-width: 768px){
    top : 123px;
  }
`;

function Ckeditor({ title, postData }) {
  const [isModal, setIsModal] = useState(false);
  const navigate = useNavigate();
  const userState = useSelector((state) => state.user);
  const [writeData, setWriteData] = useState();
  const [message, setMessage] = useState("");
  const [fileUrl, setFileUrl] = useState("");

  const {view} = useParams()
  // console.log(userState);

  useEffect(() => {
    if (postData) {
      setWriteData(postData.content);
    }
  }, [postData]);




  
  const [posts,setPosts] = useState()
  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const q = query(
          collection(getFirestore(), "board"),
          orderBy("timestamp", "desc")
        );

        const snapShot = await getDocs(q);

        const postArray = snapShot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          isLiked: doc.data().likes
        }));
        
        setPosts(postArray);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, [view]);










  const dataSubmit = async () => {
    if (title.length === 0 || writeData.length === 0) {
      alert("제목 혹은 내용을 입력해주세요");
      return;
    } 

    try {

      

      //  수정기능
       if(view){
          const postRef = doc(getFirestore(), "board",view);
          await updateDoc(postRef, {
            title: title,
            content: writeData,
          })
          alert ("게시물이 수정되었습니다")
          navigate(`/board`);
      
      }else{
      
      
        
              addDoc(collection(getFirestore(), "board"), {
                title: title,
                content: writeData,
                view: 1,
                uid: userState.uid,
                name: userState.data.name,
                timestamp: serverTimestamp(),
                file: fileUrl,
                likes: true,
              });
        
              alert("게시글 등록에 성공했습니다!");
              navigate(`/board`);
      
      
      
      }

    } catch (error) {
      alert(error);
    
      setMessage(error);
    }
  };





  const uploadToFirebase = async (file) => {
    const storageRef = ref(getStorage(), "images/" + file.name);
    // 만들 폴더명 써주기
    const upload = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject) => {
      upload.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(upload.snapshot.ref).then((result) => {
            resolve(result);
            setFileUrl(result);
          });
        }
      );
    });
  };
  // 사진 넣는 기능
  function UploadAdapter(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return {
        upload: async () => {
          const file = await loader.file;
          const downURL = await uploadToFirebase(file);
          return { default: downURL };
        },
      };
    };
  }

  
  return (
    <>
      <Button onClick={dataSubmit}>
          <FontAwesomeIcon icon={faPaperPlane}/>
          <p>업로드</p>
      </Button>
      <CKEditor
        editor={ClassicEditor}
        data={writeData}
        config={{
          placeholder: "내용을 입력하세요.",
          extraPlugins: [UploadAdapter],
          resizeOptions: [
            {
              name: "resizeImage",
              label: "Resize Image",
              value: "300px",
            },
          ],
        }}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setWriteData(data);
          console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />
    </>
  );
}

export default Ckeditor;
