function countZeroes(arr) {
    let left = 0;
    let right = arr.length - 1;

    // Binary search to find the first occurrence of 0
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        // Check if mid is the first 0
        if (arr[mid] === 0) {
            // If it's the first element or the previous element is 1, we found our first 0
            if (mid === 0 || arr[mid - 1] === 1) {
                return arr.length - mid; // Number of zeros is total length minus the index of the first zero
            }
            right = mid - 1; // Search in the left half
        } else {
            left = mid + 1; // Search in the right half
        }
    }

    // If we exit the loop without finding a zero, it means there are no zeros
    return 0;
}

module.exports = countZeroes