
const Reducer = (state, action) => {
    if (action.type === "UPDATE"){
        state[action.name] = action.value;
        state['formattedData'] = JSON.stringify({email: state.email, password: state.password});
    }
    if (state.email !== '' && state.password !== ''){
        state['isAuthorized'] = true;
    }

    return Object.assign({}, state);
}

export default Reducer;