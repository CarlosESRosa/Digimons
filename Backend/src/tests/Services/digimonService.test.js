const digimonService = require('../../services/digimonService');

describe('Testes para a rota /digimons', () => {
	it('Deve retornar uma lista de digimons e status 200', async () => {
		const mockDigimons = [
			{
				"id": 1,
				"name": "Koromon",
				"img": "https://digimon.shadowsmith.com/img/koromon.jpg",
				"level": "In Training"
			}
		];

		digimonService.getDigimons = jest.fn().mockResolvedValue(mockDigimons);
		const result = await digimonService.getDigimons();
		expect(result).toEqual(mockDigimons);
	});
});


describe('Testes para a rota /digimons/name/:name', () => {
	it('Deve retornar uma lista de digimons e status 200', async () => {
		const name = 'Koromon'
		const mockDigimons = [
			{
				"id": 1,
				"name": "Koromon",
				"img": "https://digimon.shadowsmith.com/img/koromon.jpg",
				"level": "In Training"
			}
		];

		digimonService.getDigimonsByName = jest.fn().mockResolvedValue(mockDigimons);
		const result = await digimonService.getDigimonsByName(name);
		expect(result).toEqual(mockDigimons);
	});
});

describe('Testes para a rota /digimons/level/:level', () => {
	it('Deve retornar uma lista de digimons e status 200', async () => {
		const name = 'In Training'
		const mockDigimons = [
			{
				"id": 1,
				"name": "Koromon",
				"img": "https://digimon.shadowsmith.com/img/koromon.jpg",
				"level": "In Training"
			}
		];

		digimonService.getDigimonsByLevel = jest.fn().mockResolvedValue(mockDigimons);
		const result = await digimonService.getDigimonsByLevel(name);
		expect(result).toEqual(mockDigimons);
	});
});