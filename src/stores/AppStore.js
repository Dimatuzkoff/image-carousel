import { defineStore } from 'pinia'
import apiService from '../services/api';
export const useAppStore = defineStore('app', {
    state: () => ({
        isLoading: false,
        images: [],
        currentImageIndex: 0,
        selectedImages: []
    }),
    actions: {
        async getImages() {
            try {
                this.isLoading = true;
                const result = await apiService.getImages();
                this.images = result;
            }
            catch (error) {
                console.log(error);
            }
            finally {
                this.isLoading = false;
            }
        },
    },
});
