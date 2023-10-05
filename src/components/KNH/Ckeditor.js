import React, { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  serverTimestamp,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import {getStorage, ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage'
// import { fireStore } from './../firebase';

const Button = styled.button`
  border-radius: 0.5rem;
  margin: 20px 12px;
  background-color: #5fe2ae;
  padding: 0.625rem 1.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: bold;
  color: #fff;
  display: flex;
  align-items: center;
  outline: none;
  border: none;
  cursor: pointer;
`;

function Ckeditor({ title, postData }) {
  const [isModal, setIsModal] = useState(false);
  const navigate = useNavigate();
  const userState = useSelector((state) => state.user);
  const [writeData, setWriteData] = useState();
  const [message, setMessage] = useState("");
  const [fileUrl, setFileUrl] = useState("");


  console.log(userState);
  useEffect(() => {
    if (postData) {
      setWriteData(postData.content);
    }
  }, [postData]);

  const dataSubmit = async () => {
    if (title.length === 0) {
      setIsModal(!isModal);
      setMessage("제목을 입력해주세요");
      return;
    } else if (writeData.length === 0) {
      setIsModal(!isModal);
      setMessage("내용을 입력해주세요");
      return;
    }

    try {


      await addDoc(collection(getFirestore(), "board"), {
        title: title,
        content: writeData,
        view: 1,
        uid: userState.uid,
        name: userState.uid.name,
        timestamp: serverTimestamp(),
        file : fileUrl,
        likes: true,
      });

      alert("게시글이 성공적으로 등록되었습니다");
      navigate(`/board`)

    } catch (error) {
      alert(error);
      setIsModal(!isModal);
      setMessage(error);
    }
  };

  const uploadToFirebase = async (file) =>{
    const storageRef = ref(getStorage(), 'images/' + file.name)
    // 만들 폴더명 써주기 
    const upload = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject)=>{
            upload.on('state_changed',
            (snapshot)=>{
                
            },
            (error) =>{
                    reject(error)

                },
                ()=>{
                    getDownloadURL(upload.snapshot.ref).then(result=>{
                        resolve(result)
                        setFileUrl(result);

                    })
                }
            )
    })
}
// 사진 넣는 기능
function UploadAdapter(editor){
        editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
            return { 
                upload: async ()=>{
                    const file = await loader.file;
                    const downURL = await uploadToFirebase(file);
                    return {default : downURL}

                }

            }
        }
}
  return (
    <>
        <Button onClick={dataSubmit}>업로드</Button>
      <CKEditor
        editor={ClassicEditor}
        data={writeData}
        config={{
          placeholder: "내용을 입력하세요.",
          extraPlugins: [UploadAdapter]
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
