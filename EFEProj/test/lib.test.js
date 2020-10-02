/**
 * index.js
 * @authors binghongcha (hblvsjtu@163.com)
 * @date    2019-11-24 15:21:01
 * @version 0.0.1
 */

const assert = require("assert");
const { add } = require("../src/lib/utils");

/* eslint-disable */
describe("#utils.js", () => {
    describe("#sum()", () => {
        it("add(0) should return 1", () => {
            assert.strictEqual(add(0), 1);
        });
    });
});
