import React from "react";
import Quill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styles from "./WritePost.module.css";
// https://velog.io/@hskwon517/React-Quill-%EC%97%90%EB%94%94%ED%84%B0-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0
// 나중에 이미지, 태그 서버로 보낼때 참고.

const WritePost = () => {
  const modules = {
    toolbar: {
      container: [
        ["image", "link"],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "underline", "italic", "blockquote", "strike", "code-block"],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
        ],
        [{ align: [] }, { color: [] }, { background: [] }],
      ],
    },
  };
  const formats = [
    "code-block",
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "align",
    "color",
    "background",
  ];

  const PH = "제목을 입력하세요";
  return (
    <>
      <form>
        <div>
          <input type="text" placeholder={PH}></input>
        </div>
        <div className={styles.Wrap}>
          <Quill
            className={styles.toolbar}
            modules={modules}
            style={{ height: "600px" }}
            formats={formats}
            placeholder="당신의 노예를 찾아보세요..."
          >
            <div className={styles.inputFormat}></div>
          </Quill>
        </div>
      </form>
    </>
  );
};

export default WritePost;
