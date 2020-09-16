/**
 * @fileoverview stats
 * @author Eric Xue <eric.xue@hotmail.com> (https://s-erxue.github.io)
 * @version 1.0.0
 * @license MIT
 */

/**
 * No data error
 * @constructor
 * @extends Error
 */
class NoDataError extends Error {
	constructor() {
		const message = "Data cannot be empty";
		super(message);

		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, NoDataError);
		}

		this.name = "NoDataError";
		this.message = message;
		const date = new Date();
	}
}

/**
 * Arithmetic mean
 * @param {number[]} data
 * @returns {number}
 * @throws {NoDataError}
 */
function mean(data) {
	if(data.length !== 0) {
		return data.reduce((a, b) => a+b) / data.length;
	} else {
		throw new NoDataError();
	}
}

module.exports = {
	NoDataError,
	mean
}