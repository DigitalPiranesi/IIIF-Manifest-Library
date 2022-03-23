"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getURLExtension = exports.isDefined = exports.addAll = exports.softClone = exports.clone = exports.ASSERT = void 0;
/**
 * Make an assertion and halt execution if it fails.
 *
 * @param An assertion to check
 * @throws Error if assertion is false or undefined.
 * @return True if the assertion passes in case someone wants to make sure it does.
 */
function ASSERT(test) {
    if (test === undefined || !test) {
        throw new Error("Assertion failed: " + JSON.stringify(test));
    }
    else {
        return true;
    }
}
exports.ASSERT = ASSERT;
/**
 * Clones an object and removes all the functions, references, etc.
 * Think about this as a "hard clone" that only copies values, not references.
 *
 * @param obj The object to copy
 * @return Object without any references and functions.
 */
function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
exports.clone = clone;
/**
 * Clones an object but preserves its references in its properties.
 *
 * @param obj The object to copy.
 * @return A new object with all properties of the old.
 */
function softClone(obj) {
    return Object.assign({}, obj);
}
exports.softClone = softClone;
/**
 * Prototype function to add one or more values to an array without knowing what
 * the added value is or how many there are.
 *
 * @param obj The array object
 * @param value The value(s) to add to the array
 * @return The modified array or `null` if obj is not an array..
 */
function addAll(obj, value) {
    var e_1, _a;
    if (Array.isArray(obj)) {
        if (Array.isArray(value)) {
            try {
                for (var value_1 = __values(value), value_1_1 = value_1.next(); !value_1_1.done; value_1_1 = value_1.next()) {
                    var element = value_1_1.value;
                    obj.push(element);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (value_1_1 && !value_1_1.done && (_a = value_1.return)) _a.call(value_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        else {
            obj.push(value);
        }
        return obj;
    }
    else {
        return null;
    }
}
exports.addAll = addAll;
/**
 * Checks if an object is defined
 *
 * @return True if the type of the object is any other than undefined, false otherwise.
 */
function isDefined(obj) {
    return (typeof obj !== "undefined" ? true : false);
}
exports.isDefined = isDefined;
/**
 * Splits the URL from the file extension (e.g. `.txt`, `.json`).
 *
 * @return A string of the extension or undefined if no extension is possible.
 */
function getURLExtension(url) {
    var ret = url.split(/[#?]/)[0].split('.').pop().trim();
    return ret;
}
exports.getURLExtension = getURLExtension;
