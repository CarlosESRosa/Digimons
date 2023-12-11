const axios = require('axios');

const fetchDigimons = async () => {
	const response = await axios({
		method: 'get',
		url: 'https://digimon-api.vercel.app/api/digimon'
	});

	return response.data;
}


module.exports = { fetchDigimons };