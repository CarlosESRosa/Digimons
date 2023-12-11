const digimonService = require('../services/digimonService');

const getDigimons = async (req, res, next) => {
	try {
		const digimons = await digimonService.getDigimons();

		res.status(200).json(digimons);
	} catch (error) {
		console.log(error.message);
		next(error);
	}
};

const getDigimonsByName = async (req, res, next) => {
	try {
		const digimons = await digimonService.getDigimonsByName(req.params.name);

		res.status(200).json(digimons);
	} catch (error) {
		console.log(error.message);
		next(error);
	}
};

const getDigimonsByLevel = async (req, res, next) => {
	try {
		const digimons = await digimonService.getDigimonsByLevel(req.params.level);

		res.status(200).json(digimons);
	} catch (error) {
		console.log(error.message);
		next(error);
	}
};

const postDigimons = async (req, res, next) => {
	try {
		const digimons = await digimonService.postDigimons(req.body);

		res.status(200).json(digimons);
	} catch (error) {
		console.log(error.message);
		next(error);
	}
};

const deleteDigimons = async (req, res, next) => {
	try {
		const digimons = await digimonService.deleteDigimons(req.params.id);

		res.status(200).json(digimons);
	} catch (error) {
		console.log(error.message);
		next(error);
	}
};

const updateDigimons = async (req, res, next) => {
	try {
		const digimons = await digimonService.updateDigimons(req.params.id, req.body);

		res.status(200).json(digimons);
	} catch (error) {
		console.log(error.message);
		next(error);
	}
};

module.exports = {
	getDigimons,
	getDigimonsByName,
	getDigimonsByLevel,
	postDigimons,
	deleteDigimons,
	updateDigimons
};