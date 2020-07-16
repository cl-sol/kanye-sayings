import {
    FETCHING_QUOTE_START,
    FETCHING_QUOTE_SUCCESS,
    FETCHING_QUOTE_FAILURE
} from "../actions"

const initialState = {
    title: "Kanye Sayings",
    loading: false,
    quote: null,
    isFetching: false,
    error: ""
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_QUOTE_START:
            return {
                ...state,
                isFetching: true,
                error: ""
            };

        case FETCHING_QUOTE_SUCCESS:
            return {
                ...state,
                quote: action.payload,
                isFetching: false
            };
        default: 
            return state;
    }
};