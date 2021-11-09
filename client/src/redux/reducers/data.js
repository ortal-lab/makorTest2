import produce from "immer";
import createReducer from "./utilsReducer";
const initialState = {
    bids:[],
    asks:[]
};
const methods = {
    setBids(state, action) {
        state.bids = action.payload;

    },
    setAsks(state, action) {
        state.asks = action.payload;

    }

};
export default produce(
    (state, action) => createReducer(state, action, methods),
    initialState
);
