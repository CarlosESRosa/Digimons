const request = require('supertest');
const app = require('../../server');
const digimonService = require('../../services/digimonService');

describe('Testes para a rota /digimons', () => {
	it('Deve retornar uma lista de digimons e status 200', async () => {
		const listaDeDigimons = [
			{
				"id": 1,
				"name": "Koromon",
				"img": "https://digimon.shadowsmith.com/img/koromon.jpg",
				"level": "In Training"
			}
		];

		// Substitua a função getDigimons do serviço por uma função jest.fn() que retorna a lista de digimons
		digimonService.getDigimons = jest.fn().mockResolvedValue(listaDeDigimons);

		const response = await request(app).get('/digimons');
		expect(response.status).toBe(200);
		expect(response.body).toEqual(listaDeDigimons);
	});

	it('Deve lidar com erros retornando status 500 e chamando o próximo middleware de erro', async () => {
		// Substitua a função getDigimons do serviço por uma função jest.fn() que lança um erro
		digimonService.getDigimons = jest.fn().mockRejectedValue(new Error('Erro interno do servidor'));

		const response = await request(app).get('/digimons');
		expect(response.status).toBe(500);
		expect(response.body).toHaveProperty('menssagem');
		expect(response.body.menssagem).toBe('Erro interno do servidor');
	});
});


describe('Testes para a rota /digimons/name/:name', () => {
	it('Deve retornar uma lista de digimons e status 200', async () => {
		const nomeDoDigimon = 'Agumon';

		const listaDeDigimons = [
			{
				"id": 8,
				"name": "Agumon",
				"img": "https://digimon.shadowsmith.com/img/agumon.jpg",
				"level": "Rookie"
			},
			{
				"id": 48,
				"name": "Pagumon",
				"img": "https://digimon.shadowsmith.com/img/pagumon.jpg",
				"level": "In Training"
			},
			{
				"id": 148,
				"name": "SnowAgumon",
				"img": "https://digimon.shadowsmith.com/img/snowagumon.jpg",
				"level": "Rookie"
			}
		];

		digimonService.getDigimonsByName = jest.fn().mockResolvedValue(listaDeDigimons);

		const response = await request(app).get(`/digimons/name/${nomeDoDigimon}`);
		expect(response.status).toBe(200);
		expect(response.body).toEqual(listaDeDigimons);
	});

	it('Caso não encontre nenhum digimon deve retornar 404', async () => {
		const nomeDoDigimon = 'zyx';
		digimonService.getDigimonsByName = jest.fn().mockRejectedValue({
			status: 404,
			message: 'Nenhum Digimon foi encontrado com esse nome',
		});
		const response = await request(app).get(`/digimons/name/${nomeDoDigimon}`);
		expect(response.status).toBe(404);
		expect(response.body).toHaveProperty('menssagem');
		expect(response.body.menssagem).toBe('Nenhum Digimon foi encontrado com esse nome');
	});
});

describe('Testes para a rota /digimons/level/:level', () => {
	it('Deve retornar uma lista de digimons e status 200', async () => {
		const levelDoDigimon = 'In Training';

		const listaDeDigimons = [
			{
				"id": 1,
				"name": "Koromon",
				"img": "https://digimon.shadowsmith.com/img/koromon.jpg",
				"level": "In Training"
			},
			{
				"id": 2,
				"name": "Tsunomon",
				"img": "https://digimon.shadowsmith.com/img/tsunomon.jpg",
				"level": "In Training"
			},
			{
				"id": 3,
				"name": "Yokomon",
				"img": "https://digimon.shadowsmith.com/img/yokomon.jpg",
				"level": "In Training"
			}
		];

		digimonService.getDigimonsByLevel = jest.fn().mockResolvedValue(listaDeDigimons);

		const response = await request(app).get(`/digimons/level/${levelDoDigimon}`);
		expect(response.status).toBe(200);
		expect(response.body).toEqual(listaDeDigimons);
	});

	it('Caso não encontre nenhum digimon deve retornar 404', async () => {
		const levelDoDigimon = 'zyx';
		digimonService.getDigimonsByLevel = jest.fn().mockRejectedValue({
			status: 404,
			message: 'Nenhum Digimon foi encontrado com esse level',
		});
		const response = await request(app).get(`/digimons/level/${levelDoDigimon}`);
		expect(response.status).toBe(404);
		expect(response.body).toHaveProperty('menssagem');
		expect(response.body.menssagem).toBe('Nenhum Digimon foi encontrado com esse level');
	});
});