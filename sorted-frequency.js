function sortedFrequency(arr, target) {
    const firstIndex = findFirstIndex(arr, target);
    const lastIndex = findLastIndex(arr, target);
    
    // If the number is not found, return 0
    if (firstIndex === -1) return 0;

    // The frequency is the difference between last and first indices plus one
    return lastIndex - firstIndex + 1;
}

function findFirstIndex(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let firstIndex = -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            firstIndex = mid; // Found the target, but keep searching left
            right = mid - 1;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return firstIndex;
}

function findLastIndex(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let lastIndex = -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            lastIndex = mid; // Found the target, but keep searching right
            left = mid + 1;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return lastIndex;
}

module.exports = sortedFrequency