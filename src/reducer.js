export const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            ++action.menu.order;
            return [...new Set([...state, action.menu])];
        case 'decrement':
            if (action.menu.order > 0) {
                --action.menu.order;
            }
            return [...new Set([...state, action.menu])];
        default:
            return state;
    }
};
