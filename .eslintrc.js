module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: ["plugin:vue/vue3-essential", "eslint:recommended"],
	parserOptions: {
		parser: "@babel/eslint-parser",
	},
	rules: {
		"no-console": ["warn", { allow: ["warn", "error"] }],
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
		"vue/no-deprecated-slot-attribute": "warn",
	},
};
