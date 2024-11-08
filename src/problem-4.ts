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

function calculateShapeArea(param: Shape): number {
  if (param.shape === "circle") {
    const areaOfCircle: number = parseFloat(
      (Math.PI * param.radius * param.radius).toFixed(2)
    );
    return areaOfCircle;
  } else if (param.shape === "rectangle") {
    const areaOfRectangle: number = param.width * param.height;
    return areaOfRectangle;
  }
  throw new Error("Please provide valid shape type");
}
