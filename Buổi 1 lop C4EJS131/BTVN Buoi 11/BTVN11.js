// BTVN so 1:
var user = {
    name: 'Hieu',
    age: 18,
    appearance: {
        haircolor: 'black',
        skincolor: 'yellow',
        height: 1700,
        weight: 68
    }
}

function getkeys(object, result = []) {
    let keys = result;
    for (let key in object) {
        if (typeof object[key] !== 'object') {
            keys.push(key);
        } else {
            getkeys(object[key], keys)
        }
    }
    return keys;
}

console.log ('keys: ', getkeys(user));

// cách khác bài tập 1: 

function getkeys(object) {
    for (let key in object) {
        if (typeof object[key] !== 'object') {
            console.log(key);
        } else {
            getkeys(object[key]);
        }
    }
}

getkeys(user);


// practice recursion:

function countdown(num) {
    if (num > 0) {
        console.log(num);
        return countdown(num - 1);
    }
    return num;
}

countdown(10);

// BTVN 2: 

let array4 = [21, 4, 5, -1];

function insertelement(array4, index, element) {
    array4.splice(index, 0, element);
    return array4;
}

console.log(insertelement(array4,3,99));



