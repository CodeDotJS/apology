const got = require('got');

module.exports = () => {
	const url = 'https://apologygenerator.com/assets/apology.json';

	const returnMaxLength = obj => {
		const quote = obj.length;
		return Math.floor(Math.random() * quote);
	};

	return got(url, {json: true}).then(res => {
		const apology = res.body;

		const int = apology.introduction;
		const sad = apology.sadness;
		const exp = apology.explanation;
		const con = apology.conclusion;
		const apologies = `  ${int[returnMaxLength(int)] + ' ' + sad[returnMaxLength(sad)] + ' ' + exp[returnMaxLength(exp)] + ' ' + con[returnMaxLength(con)]}  `;

		return {
			apology: apologies
		};
	});
};
