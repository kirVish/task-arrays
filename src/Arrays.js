export function arraySorting(data) {
    const mass = data.split(',');
    mass.sort((a, b) => a - b);
    let res = mass.join(',');
    return res;
}

export function arrayFiltering(data) {
    const res = data.filter((elem) => elem <= 100);
    return res;
}

export function arrayPushing(array1, array2) {
    const res = [];
    for (let i = 0; i < 5; i++) {
        res.push(array1[i]);
        res.push(array2[i]);
    }
    return res;
}
