const axios = require('axios');
const { json } = require('express');

const runCodeJDoodle = async (req, res) => {
  const { code, stdin = "", language = "python3", versionIndex = "0" } = req.body;
  console.log(code)
  if (!code || !code.trim()) {
    return res.status(400).json({ error: "Code is required" });
  }

  try {
    const payload = {
      clientId: process.env.JDOODLE_CLIENT_ID,
      clientSecret: process.env.JDOODLE_CLIENT_SECRET,
      script: JSON.stringify(code),
      stdin: stdin || "",
      language,
      versionIndex,
      compileOnly: false,
    };

    const response = await axios.post(
      'https://api.jdoodle.com/v1/execute',
      payload,
      { headers: { 'Content-Type': 'application/json' }, timeout: 15000 } // 15 sec timeout
    );

    res.json({
      output: response.data.output || "",
      memory: response.data.memory,
      cpuTime: response.data.cpuTime,
      statusCode: response.data.statusCode
    });

  } catch (error) {
    console.error('JDoodle API error:', error.response?.data || error.message);
    res.status(500).json({
      error: 'Failed to run code',
      details: error.response?.data || error.message
    });
  }
};

module.exports = { runCodeJDoodle };
