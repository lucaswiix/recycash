import uuid from 'uuid/v4';

const INITIAL_STATE = {
        data: [
            {
                id: uuid(),
                name: 'Lucas',
                email:"m@m.com",
                password:"123456",
                balance:0,
                history:[],
                achievements:[{
                    id: 1,
                    title: '50KG Reciclados',
                    isDone: false
                  },
                  {
                    id: 2,
                    title: 'Amigo da natureza',
                    isDone: false
                  },
                  {
                    id: 3,
                    title: 'Novo usuario',
                    isDone: false
                  },
                  {
                    id: 4,
                    title: 'Bom reciclador',
                    isDone: false
                  }]
            },
            {
                id: uuid(),
                name: 'henrique',
                email:"n@m.com",
                password:"123456",
                balance:0,
                history:[],
                achievements:[{
                    id: 1,
                    title: '50KG Reciclados',
                    isDone: false
                  },
                  {
                    id: 2,
                    title: 'Amigo da natureza',
                    isDone: false
                  },
                  {
                    id: 3,
                    title: 'Novo usuario',
                    isDone: false
                  },
                  {
                    id: 4,
                    title: 'Bom reciclador',
                    isDone: false
                  }]
            },
        ],
}


export default function users(state = INITIAL_STATE, { type, payload }){
    switch (type) {
        case 'ADD_USER':
            return { data: 
              [ 
                ...state.data, 
                { ...payload, 
                  achievements: state.data[0].achievements,
                   history: [] 
                }]}
        case 'LIST_USER':
            return state.data;
        default:
            return state;
    }
}