export const keyboardKeyList = {
	ArrowDown: "ArrowDown",
	ArrowUp: "ArrowUp",
	ArrowRight: "ArrowRight",
	ArrowLeft: "ArrowLeft",
	Enter: "Enter",
	NumpadEnter: "Enter",
};

export const breakpoints = {
	desktop: 1024,
	tablet: 768,
	mobile: 480,
};

export const players = {
	Alloha: (id, api) => `https://harald-as.newplayjj.com/?kp=${id}&token=${api}`,
	Collaps: (id) => `https://api.atomics.ws/embed/kp/${id}`,
	VideoCDN: (id) => `https://p.lumex.space/j3mqebEPqCLB?domain=nayteruz.github.io&kp_id=${id}`,
	HDVB: async (id, api) => {
		const url = `https://apivb.com/api/videos.json?id_kp=${id}&token=${api}`;
		try {
			const res = await fetch(url);
			const data = await res.json();
			if (Array.isArray(data) && data.length > 0 && data[0].iframe_url) {
				return data[0].iframe_url;
			}
		} catch (e) {
			console.error("HDVB error:", e);
		}
		return null;
	},
	Kodik: (id) => `https:////kodik.cc/find-player?kinopoiskID=${id}`,
	Трейлер: (id) => `https://api.atomics.ws/embed/trailer-kp/${id}`,
};

export const pagesTitle = {
	MAIN: "Список последних новинок",
	LAST_VIEWS: "Последние просмотренные",
	FAVORITE: "Избранные фильмы/мультики и тд",
};
