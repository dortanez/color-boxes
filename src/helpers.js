const randomArr = (arr) => {
    const copy = arr.slice()
    const array = [];
    for(let i = 0; i < arr.length; i++) {
        const ran = Math.floor(Math.random() * copy.length)
        array.push(copy.splice(ran, 1))
    }
    return array;
}

const choice = (arr) => {
    const ran = Math.floor(Math.random() * arr.length)
    return arr[ran];
}

export {choice, randomArr};