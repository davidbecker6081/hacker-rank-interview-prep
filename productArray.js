// Given an array of integers, return a new array such that each element at index i of the new array
// is the product of all the numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5],
// the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

// Follow-up: what if you can't use division?

export const productArray = (arr) => {
    // 3 loops

    // loop over arr to the right
    // track left product, not counting i
    // set i to left product
    let leftProduct = 1
    const leftArr = [1]
    for (let i = 1; i < arr.length; i++) {
        leftProduct = leftProduct * arr[i - 1]
        leftArr.push(leftProduct)
    }
    // [1, 3, 6]

    // loop over arr to left
    // track right product, not counting i
    // set i to right product
    let rightProduct = 1
    const rightArr = [1]
    for (let i = arr.length - 2; i >= 0; i--) {
        rightProduct = rightProduct * arr[i + 1]
        rightArr.unshift(rightProduct)
    }
    // [2, 1, 1]

    // loop over one of the arrays
    // multiple arr1[i] by arr2[i]
    const productArr = []
    for (let i = 0; i < arr.length; i++) {
        let product = leftArr[i] * rightArr[i]
        productArr.push([product])
    }

    return productArr
}