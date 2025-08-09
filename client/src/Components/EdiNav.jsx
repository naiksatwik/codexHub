import React from 'react';
import axios from 'axios';

export const EdiNav = ({ language, setLanguage, code, setOutput, input }) => {
  
  const runCode = async () => {
    try {
      const payload = {
        code,
        stdin: input || "",
        language,
        versionIndex: "0"
      };

      const res = await axios.post(
        'http://localhost:5000/api/code/run',
        payload,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      // Assuming your backend returns output in res.data.output
      setOutput(res.data.output || "No output received");

    } catch (error) {
      console.error("Run code error:", error);
      setOutput("Error running code");
    }
  };

  return (
    <div className="w-full h-[7%] bg-black flex items-center justify-evenly">
      <button
        className="py-2 px-5 bg-green-500 border-2 border-white rounded-xl"
        onClick={runCode}
        disabled={!language || !code.trim()}
        title={!language ? "Select a language first" : !code.trim() ? "Write some code to run" : "Run code"}
      >
        Run
      </button>
      <select
        className="p-2 rounded bg-gray-600 text-white border border-gray-600"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="">-- Choose Language --</option>
        <option value="python3">Python3</option>
        <option value="java">Java</option>
        <option value="cpp">C++</option>
      </select>
    </div>
  );
};
