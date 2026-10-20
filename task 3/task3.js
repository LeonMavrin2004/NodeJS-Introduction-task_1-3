const arr = [1, 2, 0, 4, 3, 2, 0, 0, 2, 3, 4, 0];

let count = 0;
for (let i = 0; i < arr.length; i++) {
    count += Number(arr[i] === 0);
}

console.log(count);
