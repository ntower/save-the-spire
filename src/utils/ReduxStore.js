import {createStore} from "redux";


const types = {
    SELECT_CARDS: 'CARDS',
    SELECT_RELICS: 'RELICS',
    SELECT_BASIC: 'BASIC',
    SELECT_ADVANCED: 'ADVANCED',
    UPDATE_JSON: 'UPDATE JSON',
    ADD_CARD: 'ADD CARD',
    UPDATE_CHECKBOX: 'UPDATE CHECKBOX',
    UPDATE_SEARCH: 'UPDATE SEARCH'
};

const reducer = (state, action) => {
    if (action.type === types.SELECT_CARDS) {
        return {
            ...state,
            Cards: {
                selected: true,
                color: '#2e282a'
            },
            Relics: {
                selected: false,
                color: '#3e383a'
            }
        };
    }
    else if (action.type === types.SELECT_RELICS){
        return {
            ...state,
            Cards: {
                selected: false,
                color: '#3e383a'
            },
            Relics: {
                selected: true,
                color: '#2e282a'
            }
        };
    }
    else if (action.type === types.SELECT_BASIC){
        return {
            ...state,
            Basic: {
                selected: true,
                color: '#2e282a'
            },
            Advanced: {
                selected: false,
                color: '#3e383a'
            }
        };
    }
    else if (action.type === types.SELECT_ADVANCED){
        return {
            ...state,
            Basic: {
                selected: false,
                color: '#3e383a'
            },
            Advanced: {
                selected: true,
                color: '#2e282a'
            }
        };
    }
    else if (action.type === types.UPDATE_JSON){
        return {
            ...state,
            data: action.payload
        };
    }
    else if (action.type === types.UPDATE_CHECKBOX){
        return {
            ...state,
            checkbox: action.payload
        };
    } else if (action.type === types.UPDATE_SEARCH) {
        return {
            ...state,
            searchTerm: action.payload
        };
    }
    return state
};

const initialState = {
    Cards: {
        selected: true,
        color: '#2e282a'
    },
    Relics: {
        selected: false,
        color: '#3e383a'
    },
    Basic: {
        selected: true,
        color: '#2e282a'
    },
    Advanced: {
        selected: false,
        color: '#3e383a'
    },
    data: {
        current_health: 80,
        max_health: 80,
        gold: 99,
        hand_size: 5,
        cards: [],
        relics: []
    },
    searchTerm: '',
    upgraded: false
};

const store = createStore(reducer, initialState);

export {
    store, types
}