import React, { useState } from 'react';
import axios from 'axios';

export const EdiNav = ({ language, setLanguage, code, setOutput, input }) => {
  const [loading, setLoading] = useState(false);

  const runCode = async () => {
    console.log("Run clicked 🚀");
    try {
      setLoading(true);
      setOutput("Running...");  // show in terminal immediately
      console.log(code)
      const payload = {
        code,
        stdin: input || "",
        language: "cpp17",
        versionIndex: "0"
      };

      console.log("Payload:", payload);

      const res = await axios.post("http://localhost:5000/api/code/run", payload);

      console.log("API Response:", res.data);
      setOutput(res.data.output || "No output received");
    } catch (error) {
      console.error("Run code error:", error);
      setOutput("Error running code");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-[7%] bg-black flex items-center justify-evenly">
      <button
        onClick={runCode}
        className="py-2 px-8 bg-green-500 text-white rounded-xl"
      >
        {loading ? "Running..." : "Run"}
      </button>
    </div>
  );
};
