function split(array) {
    var firstHalf = []
    var secondHalf = []
    if (array.length % 2 == 0) {
        for (var i = 0; i < array.length / 2; i++) {
            firstHalf.push(array[i])
            secondHalf.push(array[array.length / 2 + i])
        }
    }
    else {
        for (var i = 0; i < Math.round(array.length / 2); i++) {
            firstHalf.push(array[i])
            secondHalf.push(array[Math.round(array.length / 2) + i])
        }
        secondHalf.pop()
    }
    return [firstHalf, secondHalf]
}

function merge(arr1, arr2) {
    var arr = []
    arr = arr1.concat(arr2)
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                var temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}

function mergeSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                var temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}