const express = require('express');
const { VertexAI } = require('@google-cloud/vertexai');
const cors = require('cors');

// Initialize Vertex with your Cloud project and location
const vertex_ai = new VertexAI({
  project: 'saladhr-meal-ri',
  location: 'us-central1'
});
const model = 'gemini-1.0-pro-002';

// Instantiate the models
const generativeModel = vertex_ai.preview.getGenerativeModel({
  model: model,
  generationConfig: {
    'maxOutputTokens': 2048,
    'temperature': 1,
    'topP': 1,
  },
  safetySettings: [
    {
      'category': 'HARM_CATEGORY_HATE_SPEECH',
      'threshold': 'BLOCK_MEDIUM_AND_ABOVE'
    },
    {
      'category': 'HARM_CATEGORY_DANGEROUS_CONTENT',
      'threshold': 'BLOCK_MEDIUM_AND_ABOVE'
    },
    {
      'category': 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
      'threshold': 'BLOCK_MEDIUM_AND_ABOVE'
    },
    {
      'category': 'HARM_CATEGORY_HARASSMENT',
      'threshold': 'BLOCK_MEDIUM_AND_ABOVE'
    }
  ],
});

const app = express();
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies

// Updated route for generating recommendations
app.post('/generate-recommendation', async (req, res) => {
  const { input1, input2, input3 } = req.body;
  const prompt = `Give me bullet point recommendations to sustainably reduce my buisiness waste based on the following priority inputs: Input 1: ${input1} Input 2: ${input2} Input 3: ${input3}`;

  console.log('Prompt:', prompt); // Log the prompt

  const requestData = {
    contents: [{ role: 'user', parts: [{ text: prompt }] }]
  };

  try {
    const generatedItems = await generateRecommendation(requestData);
    res.json(generatedItems);
  } catch (error) {
    console.error('Error generating recommendation:', error);
    res.status(500).send('Error generating recommendation');
  }
});

// New route for generating supply list recommendations
app.post('/generate-supply-list-recommendation', async (req, res) => {
  const { supplies } = req.body;
  const suppliesString = supplies.map(supply => `${supply.name}: ${supply.description} (${supply.weight} kg)`).join(', ');
  const prompt = `Give me bullet point recommendations for optimizing my supply list based on the following supplies: ${suppliesString}`;

  console.log('Prompt:', prompt); // Log the prompt

  const requestData = {
    contents: [{ role: 'user', parts: [{ text: prompt }] }]
  };

  try {
    const generatedItems = await generateRecommendation(requestData);
    res.json(generatedItems);
  } catch (error) {
    console.error('Error generating supply list recommendation:', error);
    res.status(500).send('Error generating supply list recommendation');
  }
});

// New route for generating vision AI recommendations
app.post('/generate-vision-ai-recommendation', async (req, res) => {
  const { appleCount } = req.body;
  const prompt = `Please provide some recipe recommendations for ${appleCount} apples`;

  console.log('Prompt:', prompt); // Log the prompt

  const requestData = {
    contents: [{ role: 'user', parts: [{ text: prompt }] }]
  };

  try {
    const generatedItems = await generateRecommendation(requestData);
    res.json(generatedItems);
  } catch (error) {
    console.error('Error generating vision AI recommendation:', error);
    res.status(500).send('Error generating vision AI recommendation');
  }
});

async function generateRecommendation(reqData) {
  try {
    const streamingResp = await generativeModel.generateContentStream(reqData);
    let generatedItems = [];
    for await (const item of streamingResp.stream) {
      const text = item.candidates[0]?.content?.parts[0]?.text;
      if (text) {
        generatedItems.push({ text });
      }
    }
    return generatedItems;
  } catch (error) {
    throw error;
  }
}

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});