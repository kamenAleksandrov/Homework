function calculateDistance(x1, y1, x2, y2) {
    let xDistance = x2 - x1;
    let yDistance = y2 - y1;
    return Math.sqrt(xDistance * xDistance + yDistance * yDistance);
}