import { geminiInstance } from "./axios";

export const getMovieRecommendations = async (userPreferences) => {
  try {
    const prompt = `Act as a movie recommendation expert. Based on the following preferences, suggest 5 movies:
    ${userPreferences}
    
    Format your response as a JSON array with objects containing:
    - title: movie title
    - year: release year
    - reason: brief explanation why this movie matches the preferences`;

    const response = await geminiInstance.post(
      "/models/gemini-1.5-pro:generateContent",
      {
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
        generationConfig: {
          temperature: 0.7,
          topK: 32,
          topP: 1,
          maxOutputTokens: 1024,
        },
      }
    );

    // Parse the response text as JSON
    const recommendations = JSON.parse(
      response.data.candidates[0].content.parts[0].text
    );
    return recommendations;
  } catch (error) {
    console.error("Error getting movie recommendations:", error);
    throw error;
  }
};
