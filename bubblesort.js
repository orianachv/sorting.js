function bubbleSort(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (array[j] < array[i]) {
                swap(i, j, array)
            }
        }
    }
    return array
}

function swap(i, j, array) {
    var temp = array[i]
    array[i] = array[j]
    array[j] = temp
}