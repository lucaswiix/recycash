import uuid from 'uuid/v4';

const INITIAL_STATE = {
        data: [
                    {
                        id: uuid(),
                        size: 35,
                        date: '20/11',
                        price: 12.53,
                        code: "12213326",
                        usedBy: null
                    },
                    {
                        id: uuid(),
                        date: '20/11',
                        size: 22,
                        price: 8.53,
                        code: "12213329",
                        usedBy: null
                    },
                    {
                        id: uuid(),
                        date: '20/11',
                        size: 19,
                        price: 7.53,
                        code: "12213310",
                        usedBy: null
                    },
                 ],
}


export default function recyclage(state = INITIAL_STATE, { type, payload }){
    switch (type) {
        case 'LIST_COURSE':
                return state.data;
        case 'ADD_COURSE':
            return { data: [ ...state.data, payload]};
        default:
            return state;
    }
}