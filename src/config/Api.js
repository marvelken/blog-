
import axios from "axios";


export const blogList = async () => {
  const url = `
  https://api.buttercms.com/v2/posts?auth_token=767c664c86c2ff763b469e66e988781c473129ae`;
  return axios.get(url).then((res) => {
    return res.data.data;
    
  });
};




