export const validateEmail = (email) => {
    const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regEx.test(email) && email.length >= 6){
        return true;
    }
    alert("Entered email less then 6 symbols or not real email address")
    return false;
}

export const validatePassword = (pass) => {
    if (pass && pass.length >= 6){
        return true;
    }
    alert("Entered password less then 6 symbols");
    return false;
}

