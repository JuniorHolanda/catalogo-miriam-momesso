export const setSotorage = (key, value) => {
	localStorage.setItem(key, value);
};

export const deleteSotorage = (key) => {
	localStorage.removeItem(key);
};

export const getSotorage = (key) => {
	localStorage.getItem(key);
};
