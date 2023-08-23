module.exports = {
	name: "Sample", // optional, falls back to object key
	description: "The default sites that get tested",
	options: {
		runs: 3,
		frequency: 60, // (in minutes)
	},
	urls: [
		"https://www.thenorthface.com/",
        "https://www.vans.com/",
        "https://www.timberland.com/",
        "https://www.dickies.com/"
	]
};
