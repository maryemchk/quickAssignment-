import axios from 'axios';

const API_URL = 'https://rickandmortyapi.com/api/character';

export const fetchCharacters = async (query) => {
  try {
    const response = await axios.get(`${API_URL}?name=${query}`);
    console.log("API response:", response.data);  // Log API response to console
    return response.data.results || [];  // Return character data
  } catch (error) {
    console.error("Error fetching characters:", error);
    return [];  // Return empty array if error occurs
  }
};
