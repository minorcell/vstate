import { defineStore } from 'vstate';

export const useCounterStore = defineStore('counter', {
    state: () => ({
        count: 0,
    }),
    actions: {
        increment() {
            this.count++;
            console.log(this.count);
        },
    }
});