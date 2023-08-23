module.exports = {
	name: "Sample", // optional, falls back to object key
	description: "The default sites that get tested",
	options: {
		runs: 1,
		frequency: 60 * 23, // (in minutes)
        freshChrome: "run"
	},
	urls: [
        "https://www.vans.com/",
        "https://www.timberland.com/",
	]
};
