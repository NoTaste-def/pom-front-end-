import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import styles from "./WritePost.module.css";
import MDEditor, { commands } from "@uiw/react-md-editor";
import edit from "../../../Icons/edit.gif";
import staticEdit from "../../../Icons/static-edit.png";
import exit from "../../../Icons/exit.gif";
import staticExit from "../../../Icons/static-exit.png";
import deleteIcon from "../../../Icons/delete.gif";
import staticDelete from "../../../Icons/static-delete.png";

// https://velog.io/@hskwon517/React-Quill-%EC%97%90%EB%94%94%ED%84%B0-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0
// 나중에 이미지, 태그 서버로 보낼때 참고.

const quote = {
  name: "quote",
  keyCommand: "quote",
  buttonProps: { "aria-label": "Insert Quote" },
  icon: (
    <div>
      <span>""</span>
    </div>
  ),
  execute: (state, api) => {
    let modifyText = `> ${state.selectedText}\n`;
    if (!state.selectedText) {
      modifyText = `> `;
    }
    api.replaceSelection(modifyText);
  },
};

const cancelline = {
  name: "cancelline",
  keyCommand: "cancelline",
  buttonProps: { "aria-label": "Insert CancelLine" },
  icon: (
    <div>
      <i>
        <s>T</s>
      </i>
    </div>
  ),
  execute: (state, api) => {
    let modifyText = `~~${state.selectedText}~~\n`;
    if (!state.selectedText) {
      modifyText = `~~텍스트~~`;
    }
    api.replaceSelection(modifyText);
  },
};

const italic = {
  name: "italic",
  keyCommand: "italic",
  buttonProps: { "aria-label": "Insert Italic" },
  icon: (
    <div>
      <i>I</i>
    </div>
  ),
  execute: (state, api) => {
    let modifyText = `*${state.selectedText}*\n`;
    if (!state.selectedText) {
      modifyText = `*텍스트*`;
    }
    api.replaceSelection(modifyText);
  },
};

const bold = {
  name: "bold",
  keyCommand: "bold",
  buttonProps: { "aria-label": "Insert Bold" },
  icon: (
    <div>
      <b>B</b>
    </div>
  ),
  execute: (state, api) => {
    let modifyText = `**${state.selectedText}**\n`;
    if (!state.selectedText) {
      modifyText = `**텍스트**`;
    }
    api.replaceSelection(modifyText);
  },
};

const title4 = {
  name: "title4",
  keyCommand: "title4",
  buttonProps: { "aria-label": "Insert title4" },
  icon: (
    <div className={styles.firstTitle}>
      H<span className={styles.titlenumb1}>4</span>
    </div>
  ),
  execute: (state, api) => {
    let modifyText = `#### ${state.selectedText}\n`;
    if (!state.selectedText) {
      modifyText = `#### `;
    }
    api.replaceSelection(modifyText);
  },
};

const title3 = {
  name: "title3",
  keyCommand: "title3",
  buttonProps: { "aria-label": "Insert title3" },
  icon: (
    <div className={styles.firstTitle}>
      H<span className={styles.titlenumb1}>3</span>
    </div>
  ),
  execute: (state, api) => {
    let modifyText = `### ${state.selectedText}\n`;
    if (!state.selectedText) {
      modifyText = `### `;
    }
    api.replaceSelection(modifyText);
  },
};

const title2 = {
  name: "title2",
  keyCommand: "title2",
  buttonProps: { "aria-label": "Insert title3" },
  icon: (
    <div className={styles.firstTitle}>
      H<span className={styles.titlenumb1}>2</span>
    </div>
  ),
  execute: (state, api) => {
    let modifyText = `## ${state.selectedText}\n`;
    if (!state.selectedText) {
      modifyText = `## `;
    }
    api.replaceSelection(modifyText);
  },
};

const title1 = {
  name: "title1",
  keyCommand: "title1",
  buttonProps: { "aria-label": "Insert title1" },
  icon: (
    <div className={styles.firstTitle}>
      H<span className={styles.titlenumb1}>1</span>
    </div>
  ),
  execute: (state, api) => {
    let modifyText = `# ${state.selectedText}\n`;
    if (!state.selectedText) {
      modifyText = `# `;
    }
    api.replaceSelection(modifyText);
  },
};

const WritePost = () => {
  const [input, setInput] = useState("");
  const [isHoverEdit, setHoverEdit] = useState(false);
  const [isHoverExit, setHoverExit] = useState(false);
  const [isHoverDel, setHoverDel] = useState(false);

  const onMouseEdit = () => {
    setHoverEdit(true);
  };
  const leaveMouseEdit = () => {
    setHoverEdit(false);
  };

  const onMouseExit = () => {
    setHoverExit(true);
  };
  const leaveMouseExit = () => {
    setHoverExit(false);
  };

  const onMouseDel = () => {
    setHoverDel(true);
  };
  const leaveMouseDel = () => {
    setHoverDel(false);
  };

  const PH = "제목을 입력하세요";
  return (
    <div className={styles.Container}>
      <div className={styles.leftSide}>
        <form className={styles.InputForm}>
          <div className={styles.titleSet}>
            <input type="textarea" placeholder={PH}></input>
          </div>
          <div className={styles.Wrap}>
            <div className={styles.md} data-color-mode="light">
              <MDEditor
                style={{ zIndex: "0" }}
                autoFocus={true}
                visibleDragbar={false}
                highlightEnable={true}
                value={input}
                height={"79vh"}
                onChange={setInput}
                commands={[
                  title1,
                  title2,
                  title3,
                  title4,
                  commands.divider,
                  bold,
                  italic,
                  cancelline,
                  commands.divider,
                  quote,
                ]}
                extraCommands={[]}
                preview="edit"
                components={{
                  toolbar: (command, disabled, executeCommand) => {
                    if (command.keyCommand === "code") {
                      return (
                        <button
                          aria-label="Insert code"
                          disabled={disabled}
                          onClick={(evn) => {
                            evn.stopPropagation();
                            executeCommand(command, command.groupName);
                          }}
                        >
                          Code
                        </button>
                      );
                    }
                  },
                }}
              />
            </div>
          </div>
          <div className={styles.footerContainer}>
            <button
              onMouseEnter={onMouseExit}
              onMouseLeave={leaveMouseExit}
              className={styles.exitBtn}
            >
              {isHoverExit ? (
                <img src={exit} alt="" />
              ) : (
                <img src={staticExit} alt="" />
              )}
            </button>
            <button
              onMouseEnter={onMouseEdit}
              onMouseLeave={leaveMouseEdit}
              className={styles.submitBtn}
            >
              {isHoverEdit ? (
                <img src={edit} alt="" />
              ) : (
                <img src={staticEdit} alt="" />
              )}
            </button>
            <button
              onMouseEnter={onMouseDel}
              onMouseLeave={leaveMouseDel}
              className={styles.deleteBtn}
            >
              {isHoverDel ? (
                <img src={deleteIcon} alt="" />
              ) : (
                <img src={staticDelete} alt="" />
              )}
            </button>
          </div>
        </form>
      </div>

      <div className={styles.rightSide}>
        <MDEditor.Markdown
          source={input}
          style={{
            whiteSpace: "pre-wrap",
            background: "white",
            color: "black",
          }}
        />
      </div>
    </div>
  );
};

export default WritePost;
