function mergeSort(array) {
    if (array.length <= 1) {
        return array
    }

    const middle = Math.floor(array.length / 2)
    const left  = array.slice(0, middle)
    const right = array.slice(middle)

    const sortedLeft = mergeSort(left)
    const sortedRight = mergeSort(right)
    
    return merge(sortedLeft, sortedRight)
}

function merge(left, right) {
    if (left.length === 0) return right
    if (right.length === 0) return left

    if (left[0] < right[0]) {
        return [left[0]].concat(merge(left.slice(1), right))
    } else {
        return [right[0]].concat(merge(left, right.slice(1)))
    }
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]))
console.log(mergeSort([105, 79, 100, 110])) 