export const updateState = (name, value) => {
    return {
        type: 'UPDATE',
        name,
        value,
    }
}