const initialState = {
    asteroid:''
}

type Props={
    type:string;
    payload:any;
}

export default (state = initialState, { type, payload }:Props) => {
    switch (type) {

    case 'SET_ASTEROID':
        return { ...state, asteroid:payload }

    default:
        return state
    }
}
