import { useRef, useCallback } from "react";
import Editor, { OnMount, OnChange } from "@monaco-editor/react";
import { editor } from "monaco-editor";
import styled from "@emotion/styled";

export const CodeEditor = ({ editorHeight }: { editorHeight: number }) => {
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);

  const handleEditorChange: OnChange = useCallback((value?: string, event?: any) => {
    console.log("Here is the current model value:", value);
  }, []);

  const showValue = useCallback(() => {
    console.log(editorRef.current?.getValue());
  }, []);

  const handleEditorDidMount: OnMount = useCallback((editor: editor.IStandaloneCodeEditor, monacoInstance) => {
    editorRef.current = editor;

    monacoInstance.editor.defineTheme("customTheme", {
      base: "vs-dark",
      inherit: true,
      rules: [{ token: "comment", background: "28A745" }], // 주석 색상 변경 필요
      colors: {
        "editor.foreground": "#ffffff",
        "editor.background": "#32323a",
        "editorCursor.foreground": "#ffffff",
        "editor.lineHighlightBackground": "#17171b5d",
        "editorLineNumber.foreground": "#989898",
        "editor.selectionBackground": "#9898981a",
        "editor.inactiveSelectionBackground": "#9898981a",
      },
    });

    monacoInstance.editor.setTheme("customTheme");
  }, []);

  return (
    <CodeEditContain style={{ height: `${editorHeight}%` }}>
      <Editor
        defaultLanguage="java"
        defaultValue="// 코드를 작성해주세요"
        options={{
          fontSize: 14,
          minimap: { enabled: false },
          scrollbar: {
            vertical: "auto",
            horizontal: "auto",
            verticalScrollbarSize: 10,
            horizontalScrollbarSize: 10,
          },
          lineHeight: 24,
        }}
        onMount={handleEditorDidMount}
        onChange={handleEditorChange}
      />
    </CodeEditContain>
  );
};

const CodeEditContain = styled.section`
  min-height: 20%;
  overflow: auto;
`;
