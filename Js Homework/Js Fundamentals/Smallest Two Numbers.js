function smallestDuo(arr) {
    let sorted = arr.sort((a, b) => a - b);
    let result = sorted.slice(0, 2);
    return result.join(' ');
}