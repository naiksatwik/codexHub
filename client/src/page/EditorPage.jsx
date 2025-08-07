import React, { useState } from 'react';
import CodeEditor from '../Components/CodeEditor';

const EditorPage=()=> {
  const [code, setCode] = useState("// Start coding...");

  return (
    <div className="p-4">
      <CodeEditor code={code} setCode={setCode} />
    </div>
  );
}

export default EditorPage;
