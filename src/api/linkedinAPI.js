import axios from "axios";

// Get the base URL from the environment variable or fallback to localhost
const BASE_URL = "https://leadintel-server-sdk9.onrender.com";

const getCompanyData = async (domain) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/company-data`, {
      params: { domain },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      if (error.response.status === 401) {
        console.error("Unauthorized. Check your API key.");
      } else if (error.response.status === 429) {
        console.error("Rate limit exceeded. Try again later.");
      } else {
        console.error("Error fetching company data:", error.response.status);
      }
    } else {
      console.error("Error:", error.message);
    }
    throw error;
  }
};

export default getCompanyData;
