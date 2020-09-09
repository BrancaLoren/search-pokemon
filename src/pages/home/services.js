
import { API_MAX_ABILITIES, API_ROOT, IMG_ROOT } from '../../assets/constants'
import axios from 'axios';
import 'regenerator-runtime/runtime'

let abilitiesData = [];

export const getAllAbilities = () => {
	const abilitiesRequests = [];
	for (let index = 1; index <= API_MAX_ABILITIES; index++) {
		abilitiesRequests.push(axios.get(`${API_ROOT}ability/${index}`));
	}

	return axios.all(abilitiesRequests).then(axios.spread((...responses) => {
		abilitiesData.push(responses);
		return responses;
	})).catch(errors => {
		console.log('---ERROR-->', errors);
	});
}

export const initData = async (limit = 50) => {
	if (!abilitiesData.lenght) {
		return getAllAbilities().then(res => {
			return getPokemons(limit);
		});
	} else {
		return getPokemons(limit);
	}
};

export const getPokemons = (limit) => {
	return axios.get(`${API_ROOT}pokemon?offset=20&limit=${limit}`).then((pokemons) => {
		return handleData(pokemons.data);
	});
}




const handleData = (pokemons) => {
	const totalPokemons = [];
	for (let i = 0; i < pokemons.results.length; i++) {
		let item = new Object;

		item.name = pokemons.results[i].name;
		let url = pokemons.results[i].url;
		url = url.split('/');
		let id = url[url.length - 2];
		item.img = IMG_ROOT + id + '.png';
		item.abilities = [];

		const abilities = [];
		abilitiesData[0].map(ab => {
			ab.data.pokemon.map(pk => {
				if (pk.pokemon.name === pokemons.results[i].name) {
					abilities.push({ [ab.data.name]: ab.data.effect_entries[0].effect });
				}
			});
		});

		item.abilities.push(abilities);

		totalPokemons.push(item);
	}
	return totalPokemons;
};
