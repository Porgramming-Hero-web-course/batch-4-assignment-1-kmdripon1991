"use strict";
function updateProfile(obj, fieldsToUpdate) {
    return Object.assign(Object.assign({}, obj), fieldsToUpdate);
}
