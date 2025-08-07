import React, { useEffect, useRef } from 'react';
import Editor from '@monaco-editor/react';
import * as Y from 'yjs';
import { WebrtcProvider } from 'y-webrtc';
import { MonacoBinding } from 'y-monaco';

const CodeEditor = () => {
  const editorRef = useRef(null);
  const ydocRef = useRef(new Y.Doc());
  const providerRef = useRef(null);

  useEffect(() => {
    providerRef.current = new WebrtcProvider('room-name-abc', ydocRef.current);
  }, []);

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;

    const yText = ydocRef.current.getText('monaco');
    new MonacoBinding(
      yText,
      editor.getModel(),
      new Set([editor]),
      providerRef.current.awareness
    );
  };

  return (
    <div style={{ height: '100vh' }}>
      <Editor
        height="100%"
        defaultLanguage="python"
        theme="vs-dark"
        defaultValue="// Start coding..."
        onMount={handleEditorDidMount}
      />
    </div>
  );
};

export default CodeEditor;
