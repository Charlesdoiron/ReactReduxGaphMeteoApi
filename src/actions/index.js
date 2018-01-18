import axios from 'axios';

const API_KEY = '12936122bc133e5becf7f70e7a746308'
const ROOT_URL =`http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url =`${ROOT_URL}&q=${city},fr`;
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		// Ici request est un promise (on le voit en console.log), avec la paquet redux promise 
		//(qui est un middleware, la valeur 'request' est automatiquement traitée comme une promise.
		// Le middleware arrete l'action, attends que la promise sont 'calculée' puis retourne la data 
		payload: request
	};
}