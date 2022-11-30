import axios from "axios";
const API_KEY = '31022343-0d1a1c169c137ef485c7c7bd9';
const PER_PAGE = 12;
export const getImages = async(imageName="", page) => {
    const { data } = await axios.get(
      `https://pixabay.com/api/?q=${imageName}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`
    );
    
    return data;
    
};