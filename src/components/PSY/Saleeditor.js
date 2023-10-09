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
  setDoc,
  getDoc,
  getFirestore,
  serverTimestamp,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import {getStorage, ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage'


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

function Saleeditor({ title, postData }) {
  const [isModal, setIsModal] = useState(false);
  const navigate = useNavigate();
  const userState = useSelector((state) => state.user);
  const [writeData, setWriteData] = useState();
  const [fileUrl, setFileUrl] = useState("");

  useEffect(() => {
    if (postData) {
      setWriteData(postData.content);
    }
  }, [postData]);

  const dataSubmit = async () => {
    if (title.length === 0) {
      alert("제목을 입력해주세요");
      return;
    } else if (writeData.length === 0) {
      alert("내용을 입력해주세요");
      return;
    }

    try {
      addDoc(collection(getFirestore(), "market"), {
        title: title,
        content: writeData,
        view: 1,
        uid: userState.uid,
        name: userState.data.name,
        timestamp: serverTimestamp(),
        file: fileUrl,
        likes: true,
      });

      alert("게시글이 성공적으로 등록되었습니다");
      navigate(`/salepage`);
    } catch (error) {
      alert(error);
      setIsModal(!isModal);
    }
  };

  const uploadToFirebase = async (file) => {
    // 만들 폴더명 써야한다!
    const storageRef = ref(getStorage(), "marketimg/" + file.name);
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
  // 사진 기능
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
      <Button onClick={dataSubmit}>업로드</Button>
      <CKEditor
        editor={ClassicEditor}
        data={writeData}
        config={{
          placeholder: "내용을 입력하세요.",
          extraPlugins: [UploadAdapter],
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

export default Saleeditor;
