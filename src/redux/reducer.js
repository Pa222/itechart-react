
const Reducer = (state, action) => {
    if (action.type === "UPDATE"){
        state[action.name] = action.value;
        state['formattedData'] = JSON.stringify({email: state.email, password: state.password});
    }

    return Object.assign({}, state);
}

export default Reducer;