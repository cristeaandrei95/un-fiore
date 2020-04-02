import { SET_DRAWER } from "../actions/types";

const initialState = {
    drawer: false
};

const ui = (state = initialState, action) => {
    switch (action.type) {
        case SET_DRAWER:
            return {
                ...action.payload
            };
        default:
            return state;
    }
};

export default ui;
