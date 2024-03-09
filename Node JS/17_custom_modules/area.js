const calculateRectangleArea = (length, breadth) => {
    return length * breadth;
}

const calculateCircleArea = (radius) => {
    return 3.14 * radius * radius;
}

const calculateTriangleArea = (base, height) => {
    return 0.5 * base * height;
}

module.exports = {
    calculateRectangleArea,
    calculateCircleArea,
    calculateTriangleArea
}