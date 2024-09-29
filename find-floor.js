function findFloor(arr, x) {
    let left = 0;
    let right = arr.length - 1;
    let floorIndex = -1; // Initialize to -1 to handle cases where no floor exists

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        // If we find the exact match
        if (arr[mid] === x) {
            return arr[mid];
        }

        // If arr[mid] is less than x, it could be a potential floor
        if (arr[mid] < x) {
            floorIndex = mid; // Update floorIndex
            left = mid + 1; // Move to the right side to find a larger floor
        } else {
            right = mid - 1; // Move to the left side to find a smaller element
        }
    }

    // If floorIndex was updated, return the corresponding element; otherwise, return -1
    return floorIndex !== -1 ? arr[floorIndex] : -1;
}

module.exports = findFloor