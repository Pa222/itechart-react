export const validateEmail = (email) => {
    const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regEx.test(email) && email.length >= 6){
        return true;
    }
    return false;
}

export const validatePassword = (pass) => {
    return pass.length >= 6;
}