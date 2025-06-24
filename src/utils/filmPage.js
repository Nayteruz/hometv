import axios from "axios";

export function getFilmInfo(callback) {
	axios
		.get("https://kinopoiskapiunofficial.tech/api/v2.2/films/" + 1, {
			headers: {
				"X-API-KEY": "filmStore.apiKey",
				"Content-Type": "application/json",
			},
		})
		.then((req) => {
			callback?.(req);
		})
		.catch(() => {
			return { data: [] };
		});
}
