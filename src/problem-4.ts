type Circle = {
  shape: "circle";
  radius: number;
};
type Rectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};

type Shape = Circle | Rectangle;

function calculateShapeArea(param: Shape) {
  if (param.shape === "circle") {
    return (Math.PI * param.radius * param.radius).toFixed(2);
  } else if (param.shape === "rectangle") {
    return param.width * param.height;
  }
}

// const result1 = calculateShapeArea({ shape: "circle", radius: 5 });
// const result2 = calculateShapeArea({ shape: "rectangle", width: 4, height:6 });
// console.log(result1);
// console.log(result2);
