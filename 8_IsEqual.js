const obj1 = {
    a: "a",
    b: 1,
    c: ["a", "b", "c"],
    d: {
        e: null,
        f: -1,
    }
}

const obj2 = {
    a: "a",
    b: 1,
    c: ["a", "b", "c"],
    d: {
        f: -1,
        e: null,
    }
}

function isEqual1(objA, objB) {
    let a = JSON.stringify(objA)
    let b = JSON.stringify(objB)

    return a.split("").sort().join("") === b.split("").sort().join("");
}


function isEqual2(objA, objB) {
    const checkObjects = (objA && objB && typeof objA === 'object' && typeof objB === 'object');
    
    if(checkObjects && Object.keys(objA).length === Object.keys(objB).length) {
        return Object.keys(objA).reduce((equal, key) => {
            return equal && isEqual2(objA[key], objB[key])
        }, true);
    } else {
        return objA === objB
    }
}


console.log(isEqual1(obj1, obj2));
console.log(isEqual2(obj1, obj2));