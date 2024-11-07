import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import apiService from '../services/api';
export const useAppStore = defineStore('app', {
    state: () => ({
        images: [],
        currentImageIndex: 0,
    }),
    actions: {
        async getImages() {
            try {
                const result = await apiService.getImages();
                this.images = result;
            }
            catch (error) {
                console.log(error);
            }
        },
    },
});
