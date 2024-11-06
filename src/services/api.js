import axios from 'axios';

const apiService = {
    getImages: async () => {
        try {
            const response = await axios.get('https://picsum.photos/v2/list');
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    },
}

export default apiService;
