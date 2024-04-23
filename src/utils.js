const crypto = require('crypto');

/**
 * Converts a time string in the format "HH:MM:SS" to seconds.
 * @param {string} time - The time string to convert.
 * @returns {number} The time in seconds.
 */
function getTimestamp(time) {
	const arr = time.split(":");
	return parseInt(arr[0]) * 3600 + parseInt(arr[1]) * 60 + parseInt(arr[2]);
}

/**
 * Generates options for making a POST request.
 * @param {string} target - The target URL.
 * @param {Object} opt - The request options.
 * @returns {Object} The POST options.
 */
function post_options(target, opt) {
	return {
		url: `https://www.heavens-above.com/${target}lat=39.9042&lng=116.4074&loc=%E5%8C%97%E4%BA%AC%E5%B8%82&alt=52&tz=ChST`,
		method: "POST",
		json: true,
		body: opt,
		headers: {
			// Headers...
		}
	};
}

/**
 * Generates options for making a GET request.
 * @param {string} target - The target URL.
 * @returns {Object} The GET options.
 */
function get_options(target) {
	return {
		url: `https://www.heavens-above.com/${target}lat=39.9042&lng=116.4074&loc=%E5%8C%97%E4%BA%AC%E5%B8%82&alt=52&tz=ChST`,
		method: "GET",
		headers: {
			// Headers...
		}
	};
}

/**
 * Generates options for making a GET request for an image.
 * @param {string} target - The target URL of the image.
 * @returns {Object} The image GET options.
 */
function image_options(target) {
	return {
		url: target,
		method: "GET",
		headers: {
			// Headers...
		}
	};
}

/**
 * Generates options for making a GET request for an iridium.
 * @param {string} target - The target URL.
 * @returns {Object} The iridium GET options.
 */
function iridium_options(target) {
	return {
		url: target,
		method: "GET",
		headers: {
			// Headers...
		}
	};
}

/**
 * Calculates the MD5 hash of a string.
 * @param {string} str - The string to hash.
 * @returns {string} The MD5 hash.
 */
function md5(str) {
	return crypto.createHash('md5').update(str).digest('hex');
}

module.exports = {
	getTimestamp,
	post_options,
	get_options,
	image_options,
	iridium_options,
	md5
};
