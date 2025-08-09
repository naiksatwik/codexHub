const axios = require('axios');

const runCodeJDoodle = async (req, res) => {
  const { code, stdin = "", language = "python3", versionIndex = "0" } = req.body;

  if (!code) {
    return res.status(400).json({ error: "Code is required" });
  }

  try {
    const response = await axios.post('https://api.jdoodle.com/v1/execute', {
      clientId: process.env.JDOODLE_CLIENT_ID,
      clientSecret: process.env.JDOODLE_CLIENT_SECRET,
      script: code,
      stdin: stdin,
      language: language,
      versionIndex: versionIndex,
      compileOnly: false,
    }, {
      headers: { 'Content-Type': 'application/json' }
    });

    // Forward JDoodle response
    res.json(response.data);

  } catch (error) {
    console.error('JDoodle API error:', error.message);
    res.status(500).json({ error: 'Failed to run code' });
  }
};

module.exports = { runCodeJDoodle };
