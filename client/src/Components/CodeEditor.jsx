import React, { useEffect, useRef } from "react";
import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";
import { Output } from "./Output";
import Codemirror from "codemirror";

// Modes
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/python/python";
import "codemirror/mode/clike/clike"; 
// covers Java and C++

import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
import 'codemirror/theme/3024-night.css';

// Addons
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/closebrackets";
import ACTIONS from "../Actions";

export const CodeEditor = ({
  language,
  code,
  setCode,
  output,
  input,
  setInput,
  socketRef,
  roomId,
  onCodeChange,
}) => {


  const editorRef = useRef(null);


  useEffect(() => {

    async function init(){
    const textarea = document.getElementById("realtimeEditor");
  
    // Destroy old editor if it exists
    if (editorRef.current) {
      editorRef.current.toTextArea();
      editorRef.current = null;
    }
  
    // Map language prop to CodeMirror mode
    const modeMap = {
      javascript: { name: "javascript", json: true },
      python: "python",
      cpp: "text/x-c++src",
      java: "text/x-java",
    };
  
    editorRef.current = Codemirror.fromTextArea(textarea, {
      mode: "text/x-c++src",
      theme: "3024-night",
      autoCloseTags: true,
      autoCloseBrackets: true,
      lineNumbers: true,
    });
  
    editorRef.current.setSize("100%", "100%");
  
    // Sync state
    editorRef.current.on("change", (instance,changes) => {
    //  console.log('changes' , instance)
      const {origin} = changes;
      const code = instance.getValue();
      onCodeChange(code);
      setCode(code);
      if(origin !== 'setValue'){
          socketRef.current.emit(ACTIONS.CODE_CHANGE,{
            roomId,
            code,
          });
      }
    });
  }

  init();
  }, [language, setCode]);
  

  useEffect(()=>{
     if(socketRef.current){
      socketRef.current.on(ACTIONS.CODE_CHANGE,({code})=>{
        if(code !=  null){
          editorRef.current.setValue(code)
        }
      })
     }

     return() => {
      
      socketRef.current.off(ACTIONS.CODE_CHANGE);
     }
  },[socketRef.current])

  return (
    <div className="w-full h-[93%]">
      {/* Vertical split: Top editor, Bottom IO section */}
      <PanelGroup direction="vertical">
        {/* TOP: Code Editor */}
        <Panel className="bg-black text-white flex flex-col" defaultSize={60}>
          <textarea
            id="realtimeEditor"
            defaultValue={code}
            className="w-full h-full"
          ></textarea>
        </Panel>

        <PanelResizeHandle className="hover:bg-purple-400  bg-gray-800 h-1 cursor-row-resize" />

        {/* BOTTOM: Input + Output horizontally */}
        <Panel
          defaultSize={40}
          maxSize={60}
          className="bg-black text-white"
        >
          <PanelGroup direction="horizontal">
            {/* LEFT: Input box */}
            <Panel className="p-3 flex flex-col bg-black rounded-tr-xl">
              <h2 className="text-green-400 text-lg mb-2 font-semibold">
                Input
              </h2>
              <textarea
                defaultValue={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter your input here..."
                className="flex-1 p-2 rounded bg-black text-white border border-green-500 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </Panel>

            <PanelResizeHandle className="hover:bg-purple-400  bg-gray-800 w-1 cursor-col-resize" />

            {/* RIGHT: Output display */}
            <Panel className="p-3 flex flex-col bg-black rounded-tl-xl">
              <h2 className="text-blue-400 text-lg mb-2 font-semibold">
                Output
              </h2>
              <div className="flex-1 overflow-auto p-2 bg-black border border-blue-500 rounded">
                <Output output={output} />
              </div>
            </Panel>
          </PanelGroup>
        </Panel>
      </PanelGroup>
    </div>
  );
};
