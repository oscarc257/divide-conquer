function findRotationCount(arr) {
    let left = 0;
    let right = arr.length - 1;

    // If the array is not rotated
    if (arr[left] < arr[right]) {
        return 0;
    }

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        // Check if mid is the smallest element
        if (arr[mid] > arr[mid + 1]) {
            return mid + 1; // The index of the smallest element
        }
        if (arr[mid] < arr[mid - 1]) {
            return mid; // The index of the smallest element
        }

        // Determine which side is unsorted
        if (arr[left] <= arr[mid]) {
            left = mid + 1; // Move to the right side
        } else {
            right = mid - 1; // Move to the left side
        }
    }

    return 0; // In case no rotations are found, which shouldn't happen with distinct numbers
}

module.exports = findRotationCount