import { SET_DRAWER } from "./types";

export const setDrawer = value => (dispatch, getState) => {
    const { ui } = getState();

    console.log(ui);

    dispatch({
        type: SET_DRAWER,
        payload: { ...ui, drawer: value }
    });
};
