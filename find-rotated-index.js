function findRotatedIndex(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Target found
        }

        // Determine which side is sorted
        if (arr[left] <= arr[mid]) { // Left side is sorted
            if (arr[left] <= target && target < arr[mid]) {
                right = mid - 1; // Target is in the left half
            } else {
                left = mid + 1; // Target is in the right half
            }
        } else { // Right side is sorted
            if (arr[mid] < target && target <= arr[right]) {
                left = mid + 1; // Target is in the right half
            } else {
                right = mid - 1; // Target is in the left half
            }
        }
    }

    return -1; // Target not found
}

module.exports = findRotatedIndex