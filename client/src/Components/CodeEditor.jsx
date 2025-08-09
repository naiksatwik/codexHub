import React, { useState } from "react";
import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";
import Editor from "@monaco-editor/react";
import { Output } from "./Output";

export const CodeEditor = ({ language, code, setCode, output, input, setInput }) => {
  
  function handleEditorDidMount(editor, monaco) {
    // Custom black theme
    monaco.editor.defineTheme("customBlack", {
      base: "vs-dark",
      inherit: true,
      rules: [
        { token: "", background: "000000", foreground: "FFFFFF" },
        { token: "comment", foreground: "6A9955" },
        { token: "keyword", foreground: "C586C0" },
        { token: "string", foreground: "CE9178" },
      ],
      colors: {
        "editor.background": "#000000",
        "editorLineNumber.foreground": "#5A5A5A",
        "editorCursor.foreground": "#FFFFFF",
        "editor.selectionBackground": "#264F78",
        "editorLineNumber.activeForeground": "#C6C6C6",
      },
    });
    monaco.editor.setTheme("customBlack");
  }

  return (
    <div className="w-full h-[93%]">
      {/* Vertical split: Top editor, Bottom IO section */}
      <PanelGroup direction="vertical">
        {/* TOP: Code Editor */}
        <Panel className="bg-black text-white flex flex-col">
          <Editor
            height="100%"
            language={language || "javascript"}
            defaultValue="// Start coding..."
            theme="vs-dark"
            onMount={handleEditorDidMount}
            value={code}
            onChange={(value) => setCode(value)}
            options={{
              fontSize: 18,
              minimap: { enabled: false },
              automaticLayout: true,
              smoothScrolling: true,
            }}
          />
        </Panel>

        <PanelResizeHandle className="bg-gray-700 h-1 cursor-row-resize" />

        {/* BOTTOM: Input + Output horizontally */}
        <Panel defaultSize={40} maxSize={60} className="bg-black text-white">
          <PanelGroup direction="horizontal">
            {/* LEFT: Input box */}
            <Panel className="p-3 flex flex-col bg-gray-900 rounded-tr-xl">
              <h2 className="text-green-400 text-lg mb-2 font-semibold">Input</h2>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter your input here..."
                className="flex-1 p-2 rounded bg-black text-white border border-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </Panel>

            <PanelResizeHandle className="bg-gray-700 w-1 cursor-col-resize" />

            {/* RIGHT: Output display */}
            <Panel className="p-3 flex flex-col bg-gray-900 rounded-tl-xl">
              <h2 className="text-blue-400 text-lg mb-2 font-semibold">Output</h2>
              <div className="flex-1 overflow-auto p-2 bg-black border border-gray-700 rounded">
                <Output output={output} />
              </div>
            </Panel>
          </PanelGroup>
        </Panel>
      </PanelGroup>
    </div>
  );
};
