const { Digimons } = require('../database/models');
const { Sequelize } = require('sequelize');
const errorHandler = require('../utils/errorHandler');


const getDigimons = async () => {
	const digimons = await Digimons.findAll();

	return digimons;
};

const getDigimonsByName = async (name) => {
	// Essa Query desconsidera letras HIGHER e LOWER e retorna também os digimons que incluirem o "name" passado
	const digimons = await Digimons.findAll({
		where: Sequelize.where(
			Sequelize.fn('LOWER', Sequelize.col('name')),
			'LIKE',
			`%${name.toLowerCase()}%`
		)
	});
	if (!name) throw errorHandler(403, 'Passe o nome de um digimon como parametro para realizar a pesquisa');
	if (digimons.length == 0) throw errorHandler(404, 'Nenhum Digimon foi encontrado com esse nome');

	return digimons;
};

const getDigimonsByLevel = async (level) => {
	const digimons = await Digimons.findAll({
		where: { level }
	});

	if (digimons.length == 0) throw errorHandler(404, 'Nenhum Digimon foi encontrado com esse level');

	return digimons;
};

const postDigimons = async (body) => {
	if (!body.name) throw errorHandler(400, 'Todos os campos (name, img, level) devem estar preenchidos.');
	if (!body.img) throw errorHandler(400, 'Todos os campos (name, img, level) devem estar preenchidos.');
	if (!body.level) throw errorHandler(400, 'Todos os campos (name, img, level) devem estar preenchidos.');

	const digimonAlreadyExists = await Digimons.findOne({ where: { name: body.name } });
	if (digimonAlreadyExists) throw errorHandler(401, 'Digimon já existe');

	const digimons = await Digimons.create({
		name: body.name, img: body.img, level: body.level
	});

	return digimons;
};

const deleteDigimons = async (id) => {
	const digimonToDelete = await Digimons.findByPk(id);
	if (!digimonToDelete) throw errorHandler(400, 'Digimon não encontrado');
	await digimonToDelete.destroy();
	return { success: true, message: 'Digimon excluído com sucesso' };
};

const updateDigimons = async (id, payload) => {
	const digimonToUpdate = await Digimons.findByPk(id);
	if (!digimonToUpdate) throw errorHandler(400, 'Digimon não encontrado');

	await digimonToUpdate.update(payload);
	return digimonToUpdate;
};

module.exports = {
	getDigimons,
	getDigimonsByName,
	getDigimonsByLevel,
	postDigimons,
	deleteDigimons,
	updateDigimons
};