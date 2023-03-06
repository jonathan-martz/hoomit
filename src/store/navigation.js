import { defineStore } from 'pinia'

export const useNavigationStore = defineStore('navigation', {
    state: () => {
        return { open: false }
    },
    actions: {
        toggle() {
            this.open = !this.open;
        },
    },
})
