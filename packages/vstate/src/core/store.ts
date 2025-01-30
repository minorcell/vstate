import { reactive } from 'vue';

export function defineStore(id: string, options: any) {
    const state = reactive(options.state());
    const actions = options.actions;

    const boundActions = Object.keys(actions).reduce((acc, key) => {
        acc[key] = actions[key].bind(state);
        return acc;
    }, {} as Record<string, any>);

    return function useStore() {
        return {
            state,
            ...boundActions,
        };
    };
}