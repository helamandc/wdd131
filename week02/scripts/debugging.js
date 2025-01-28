// const PI = 3.14;
// const radius = 3;
// let area = 0;
// area = radius * radius * PI;
// console.log(area);
// const radius1 = 4;
// area = radius1 * radius * PI;
// console.log(area);

// const PI = 3.14;
// let area = 0;
// function circleArea(radius) {
//     const area = radius * PI;
//     return area;
// }
// area = circleArea(3);
// console.log(area);

let scores = [100, 72, 83, 94, 88, 87];
let accumulator = 0;
let count = 0;
scores.forEach(score => {
    if (score > 87) {
        accumulator += score;
        count++;
    }
});
if (count > 0) {
    console.log(accumulator / count);
} else {
    console.log("No scores reported.");
}