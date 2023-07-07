export function showName(name){
    if(typeof name === 'string'){
        return name
    }
}

export function showLastName(lastName){
    console.log('this is the lastName shown: ', lastName);
}

export function showAge(age){
    console.log('this is the age shown: ', age);
}