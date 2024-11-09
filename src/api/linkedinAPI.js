import axios from "axios";

// Get the base URL from the environment variable
const BASE_URL = import.meta.env.REACT_APP_API_BASE_URL;

const getCompanyData = async (domain) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/company-data`, {
      params: { domain },
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
