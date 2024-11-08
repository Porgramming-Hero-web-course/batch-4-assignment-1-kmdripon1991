"use strict";
function calculateShapeArea(param) {
    if (param.shape === "circle") {
        const areaOfCircle = parseFloat((Math.PI * param.radius * param.radius).toFixed(2));
        return areaOfCircle;
    }
    else if (param.shape === "rectangle") {
        const areaOfRectangle = param.width * param.height;
        return areaOfRectangle;
    }
    throw new Error("Please provide valid shape type");
}
