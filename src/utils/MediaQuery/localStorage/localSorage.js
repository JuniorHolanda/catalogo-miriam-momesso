	export function setItemLocalStorage (key, value) {
		if (value === true) {
			localStorage.setItem(key, value);
		} else {
			localStorage.removeItem(key);
		}
	}