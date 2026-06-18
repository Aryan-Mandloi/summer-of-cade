const { GoogleGenAI } = require('@google/genai');

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
console.log("AI Controller initialized with key ending in:", process.env.GEMINI_API_KEY ? process.env.GEMINI_API_KEY.slice(-5) : 'UNDEFINED');

// Feature 1: AI Counselor Chat
const counselorChat = async (req, res) => {
  const { message } = req.body;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-1.5-flash',
      contents: [
        {
          role: 'user',
          parts: [{ text: `You are a professional child welfare and adoption assistant. Provide ethical, safe, legally aware, compassionate and practical guidance while prioritizing child protection. The user asks: ${message}` }]
        }
      ]
    });
    
    res.status(200).json({ reply: response.text });
  } catch (error) {
    console.error('AI Counselor Error:', error.message);
    
    // If it fails (e.g. 503 high demand, or 401 invalid key), we must return the actual error.
    res.status(500).json({ 
      reply: `Gemini API Error: ${error.message}` 
    });
  }
};

// Feature 2: Readiness Assessment
const assessReadiness = async (req, res) => {
  const { questionnaire } = req.body;

  try {
    const prompt = `Evaluate the following parent questionnaire for adoption readiness. 
    Analyze emotional readiness, financial stability, family support, parenting preparedness, and long-term commitment.
    Return a JSON object with: 
    - score (number 0-100)
    - strengths (array of strings)
    - concerns (array of strings)
    - recommendations (array of strings)
    
    Questionnaire Data: ${JSON.stringify(questionnaire)}`;

    const response = await ai.models.generateContent({
      model: 'gemini-1.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      }
    });

    const result = JSON.parse(response.text);
    res.status(200).json(result);
  } catch (error) {
    console.error('Readiness Assessment Error:', error);
    res.status(500).json({ message: 'Failed to assess readiness' });
  }
};

module.exports = {
  counselorChat,
  assessReadiness
};
