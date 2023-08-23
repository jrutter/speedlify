module.exports = {
	name: "VFC", // optional, falls back to object key
	description: "VF Sites",
	options: {
		runs: 1,
		//frequency: 60 * 23, // (in minutes)
        frequency: 1,
        freshChrome: "run"
	},
	urls: [
        "https://www.vans.com/",
        "https://www.timberland.com/",
        "https://www.thenortface.com/",
        "https://www.dickies.com/",
        "https://www.icebreaker.com/",
        "https://www.altrarunning.com/",
        "https://www.smartwool.com/",
        "https://us.supreme.com/"
	]
};
