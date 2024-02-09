import React, { useCallback, useRef, useState } from "react";
import "react-quill/dist/quill.snow.css";
import styles from "./WritePost.module.css";
import MarkdownEditor from "@uiw/react-markdown-editor";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { EditorSelection } from "@codemirror/state";

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
  buttonProps: {},
  icon: (
    <div>
      <span className={styles.commandQuote}>
        <strong>''</strong>
      </span>
    </div>
  ),
  execute: ({ state, view }) => {
    if (!state || !view) return;
    const lineInfo = view.state.doc.lineAt(view.state.selection.main.from);
    let mark = "> ";
    const matchMark = lineInfo.text.match(/^>\s/);
    if (matchMark && matchMark[0]) {
      mark = "";
    }
    view.dispatch({
      changes: {
        from: lineInfo.from,
        to: lineInfo.to,
        insert: `${mark}${lineInfo.text}`,
      },
      // selection: EditorSelection.range(lineInfo.from + mark.length, lineInfo.to),
      selection: { anchor: view.state.selection.main.from + mark.length },
    });
  },
};

const cancelline = {
  name: "cancelline",
  keyCommand: "cancelline",
  prefix: "~~",
  buttonProps: {},
  icon: (
    <div>
      <i>
        <s className={styles.commandCancelLine}>T</s>
      </i>
    </div>
  ),
  execute: ({ state, view }) => {
    if (!state || !view) return;
    view.dispatch(
      view.state.changeByRange((range) => ({
        changes: [
          { from: range.from, insert: "~~" },
          { from: range.to, insert: "~~" },
        ],
        range: EditorSelection.range(range.from + 2, range.to + 2),
      }))
    );
  },
};

const italic = {
  name: "italic",
  keyCommand: "italic",
  prefix: "*",
  buttonProps: {},
  icon: (
    <div>
      <i className={styles.commandItalic}>I</i>
    </div>
  ),
  execute: ({ state, view }) => {
    if (!state || !view) return;
    view.dispatch(
      view.state.changeByRange((range) => ({
        changes: [
          { from: range.from, insert: "*" },
          { from: range.to, insert: "*" },
        ],
        range: EditorSelection.range(range.from + 1, range.to + 1),
      }))
    );
  },
};

const bold = {
  name: "bold",
  keyCommand: "bold",
  prefix: "**",
  buttonProps: {},
  icon: (
    <div>
      <b className={styles.commandBold}>B</b>
    </div>
  ),
  execute: ({ state, view }) => {
    if (!state || !view) return;
    view.dispatch(
      view.state.changeByRange((range) => ({
        changes: [
          { from: range.from, insert: "**" },
          { from: range.to, insert: "**" },
        ],
        range: EditorSelection.range(range.from + 2, range.to + 2),
      }))
    );
  },
};

const title3 = {
  name: "title3",
  keyCommand: "title3",
  buttonProps: {},
  icon: (
    <div className={styles.commandTitle}>
      <strong>
        H<span className={styles.numTitle}>3</span>
      </strong>
    </div>
  ),
  execute: ({ state, view }) => {
    if (!state || !view) return;
    const lineInfo = view.state.doc.lineAt(view.state.selection.main.from);
    let mark = "###";
    const matchMark = lineInfo.text.match(/^###+/);
    if (matchMark && matchMark[0]) {
      const txt = matchMark[0];
      if (txt.length < 6) {
        mark = txt + "###";
      }
    }
    if (mark.length > 6) {
      mark = "###";
    }
    const title = lineInfo.text.replace(/^###+/, "");
    view.dispatch({
      changes: {
        from: lineInfo.from,
        to: lineInfo.to,
        insert: `${mark} ${title}`,
      },
      // selection: EditorSelection.range(lineInfo.from + mark.length, lineInfo.to),
      selection: { anchor: lineInfo.from + mark.length + 1 },
    });
  },
};

const title2 = {
  name: "title2",
  keyCommand: "title2",
  buttonProps: {},
  icon: (
    <div className={styles.commandTitle}>
      <strong>
        H<span className={styles.numTitle}>2</span>
      </strong>
    </div>
  ),
  execute: ({ state, view }) => {
    if (!state || !view) return;
    const lineInfo = view.state.doc.lineAt(view.state.selection.main.from);
    let mark = "##";
    const matchMark = lineInfo.text.match(/^##+/);
    if (matchMark && matchMark[0]) {
      const txt = matchMark[0];
      if (txt.length < 6) {
        mark = txt + "##";
      }
    }
    if (mark.length > 6) {
      mark = "##";
    }
    const title = lineInfo.text.replace(/^##+/, "");
    view.dispatch({
      changes: {
        from: lineInfo.from,
        to: lineInfo.to,
        insert: `${mark} ${title}`,
      },
      // selection: EditorSelection.range(lineInfo.from + mark.length, lineInfo.to),
      selection: { anchor: lineInfo.from + mark.length + 1 },
    });
  },
};

const title1 = {
  name: "title1",
  keyCommand: "title1",
  buttonProps: {},
  icon: (
    <div className={styles.commandTitle}>
      <strong>
        H<span className={styles.numTitle}>1</span>
      </strong>
    </div>
  ),
  execute: ({ state, view }) => {
    if (!state || !view) return;
    const lineInfo = view.state.doc.lineAt(view.state.selection.main.from);
    let mark = "#";
    const matchMark = lineInfo.text.match(/^#+/);
    if (matchMark && matchMark[0]) {
      const txt = matchMark[0];
      if (txt.length < 6) {
        mark = txt + "#";
      }
    }
    if (mark.length > 6) {
      mark = "#";
    }
    const title = lineInfo.text.replace(/^#+/, "");
    view.dispatch({
      changes: {
        from: lineInfo.from,
        to: lineInfo.to,
        insert: `${mark} ${title}`,
      },
      // selection: EditorSelection.range(lineInfo.from + mark.length, lineInfo.to),
      selection: { anchor: lineInfo.from + mark.length + 1 },
    });
  },
};

const todo = {
  name: "todo",
  keyCommand: "todo",
  button: {},
  icon: (
    <svg viewBox="0 0 48 48" fill="none" height="15" width="15">
      <path
        d="m5 10 3 3 6-6M5 24l3 3 6-6M5 38l3 3 6-6m7-11h22M21 38h22M21 10h22"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  execute: ({ state, view }) => {
    if (!state || !view) return;
    const lineInfo = view.state.doc.lineAt(view.state.selection.main.from);
    let mark = "- [ ]  ";
    const matchMark = lineInfo.text.match(/^-\s\[\s\]\s/);
    if (matchMark && matchMark[0]) {
      mark = "";
    }
    view.dispatch({
      changes: {
        from: lineInfo.from,
        to: lineInfo.to,
        insert: `${mark}${lineInfo.text}`,
      },
      // selection: EditorSelection.range(lineInfo.from + mark.length, lineInfo.to),
      selection: { anchor: view.state.selection.main.from + mark.length },
    });
  },
};

const image = {
  name: "image",
  keyCommand: "image",
  button: {},
  icon: (
    <svg fill="currentColor" viewBox="0 0 16 16" height="14" width="14">
      <path
        fillRule="evenodd"
        d="M1.75 2.5a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h.94a.76.76 0 0 1 .03-.03l6.077-6.078a1.75 1.75 0 0 1 2.412-.06L14.5 10.31V2.75a.25.25 0 0 0-.25-.25H1.75zm12.5 11H4.81l5.048-5.047a.25.25 0 0 1 .344-.009l4.298 3.889v.917a.25.25 0 0 1-.25.25zm1.75-.25V2.75A1.75 1.75 0 0 0 14.25 1H1.75A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25zM5.5 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM7 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"
      />
    </svg>
  ),
  execute: ({ state, view }) => {
    if (!state || !view) return;
    const main = view.state.selection.main;
    const txt = view.state.sliceDoc(
      view.state.selection.main.from,
      view.state.selection.main.to
    );
    view.dispatch({
      changes: {
        from: main.from,
        to: main.to,
        insert: `![](${txt})`,
      },
      selection: EditorSelection.range(main.from + 4, main.to + 4),
      // selection: { anchor: main.from + 4 },
    });
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

  const textRef = useRef();
  const handleResizeHeight = useCallback(() => {
    textRef.current.style.height = textRef.current.scrollHeight + "px";
  }, []);

  return (
    <div className={styles.Container}>
      <div className={styles.leftSide}>
        <div className={styles.titleSet}>
          <textarea
            placeholder={PH}
            style={{ height: "70px" }}
            ref={textRef}
            className={styles.TitleForm}
            onInput={handleResizeHeight}
          />
        </div>

        <div className={styles.Wrap}>
          <div className={styles.md} data-color-mode="light">
            <MarkdownEditor
              autoFocus={true}
              value={input}
              height={"79vh"}
              onChange={setInput}
              toolbars={[
                title1,
                title2,
                title3,
                bold,
                italic,
                cancelline,
                quote,
                todo,
                image,
                "link",
              ]}
              toolbarsMode={[]}
              enablePreview={false}
            />
          </div>
        </div>
      </div>

      <div className={styles.rightSide}>
        <MarkdownPreview
          source={input}
          style={{
            whiteSpace: "pre-wrap",
            background: "white",
            color: "black",
            overflowY: "auto",
          }}
        />
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
      </div>
    </div>
  );
};

export default WritePost;
