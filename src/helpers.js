const randomArr = (arr) => {
    const copy = arr.slice()
    const array = [];
    for(let i = 0; i < arr.length; i++) {
        const obj = {};
        const ran = Math.floor(Math.random() * copy.length)
        obj.color = copy.splice(ran, 1).join();
        obj.isSelected = false;
        array.push(obj)
    }
    return array;
}

const choice = (arr) => {
    const ran = Math.floor(Math.random() * arr.length)
    return arr[ran];
}

export {choice, randomArr};