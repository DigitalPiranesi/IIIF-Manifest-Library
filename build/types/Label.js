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
var lib = require("../lib");
// TODO: Actually make the labels be able to have
// multiple languages. Not important now.
/**
 * Usage:
 *
 * var label = new Label();
 *
 * label.addValue('en', ['Hello world!', 'Hi world!']);
 * label.addValue('fr', 'Bonjour, monde!');
 */
var Label = /** @class */ (function () {
    /**
     * @param languageCode The two-character language code for this label
     * @param values Optional, pre-defined values to insert.
     */
    function Label(languageCode, values) {
        this.languageMap = new Map();
        if (languageCode !== undefined) {
            this.languageMap.set(languageCode, values || []);
        }
    }
    /**
     * This functions adds an entire language to the label, with the option of an
     * array of strings.
     *
     * @param languageCode The two-character code for the language. See https://github.com/ladjs/i18n-locales for a list of them.
     * @param value Either a single string or an array of strings to which to set the label for this language.
     * @return
     */
    Label.prototype.addValue = function (languageCode, value) {
        var _array = this.languageMap.get(languageCode);
        if (_array !== undefined) {
            lib.addAll(_array, value);
        }
        else {
            _array = [];
            lib.addAll(_array, value);
            this.languageMap.set(languageCode, _array);
        }
        return _array;
    };
    /**
     * Fetches all of the strings for a specific language code.
     *
     * @param languageCode The two-character language code.
     * @return An array of the strings associated with that language or null if it is unset.
     */
    Label.prototype.getValues = function (languageCode) {
        return this.languageMap.get(languageCode) || null;
    };
    /**
     * Fetches the entire collection of languages and strings as a single object.
     *
     * @return An array of `{"--": [ ] }` objects where "--" is the two character language code.
     */
    Label.prototype.getObject = function () {
        var e_1, _a;
        var array_of_values = {};
        try {
            for (var _b = __values(this.languageMap.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                var element = this.languageMap.get(key) || [];
                var key1 = key;
                if (element.length === undefined && element.length <= 0) {
                    continue;
                }
                array_of_values[key1] = element;
                console.log(array_of_values[key1]);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return array_of_values;
    };
    /**
     * Returns this label as a properly formatted `label` manifest object string
     * rather than a stringified version of this class.
     */
    Label.prototype.toJSONString = function () {
        return JSON.stringify(this.getObject());
    };
    return Label;
}());
exports.default = Label;
