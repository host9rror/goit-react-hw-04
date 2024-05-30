import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
const ACCESS_KEY = "shACk5C_ifX3fCmqEw3T1rVcg4-l_Ll-L6gBwxogGQ8";

export const fetchPhotosWithQuery = async (keyword, page = 1, perPage = 10) => {
  try {
    const response = await axios.get(`/search/photos`, {
      params: {
        query: keyword,
        page: page,
        per_page: perPage,
        client_id: ACCESS_KEY
      }
    });
    
    return {
      images: response.data.results,
      hasMore: response.data.total_pages > page
    };
  } catch (error) {
    console.error("Error fetching photos:", error);
    throw error;
  }
};
