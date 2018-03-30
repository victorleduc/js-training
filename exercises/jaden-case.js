'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 * 
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

const capitalize = s => s[0].toUpperCase() + s.substr(1).toLowerCase();
const jadenCase = s => s.split(" ").map(capitalize).join(" ");

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, 'function')
assert.strictEqual(jadenCase("h"), "H")
assert.strictEqual(jadenCase("hElLo"), "Hello")
assert.strictEqual(jadenCase("hElLo my naMe Is vIcTor"), "Hello My Name Is Victor")
// End of tests */
