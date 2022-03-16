var arr = ["The", "big", "cat",];

function removeDuplicates(arr) {
return [...new Set(arr)];
}

console.log(removeDuplicates(arr));
