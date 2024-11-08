"use strict";
function validateKeys(obj, keys) {
    const isExist = keys.every((key) => key in obj);
    return isExist;
}
