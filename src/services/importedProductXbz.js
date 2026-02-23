import axios from "axios";

const API_URL = 'https://back-end-catalogo-miriam-momesso-4pz4.onrender.com/imported';

export async function getProductsXbz() {
	try {
		const response = await axios.get(API_URL);
		return response.data;
	} catch (error) {
		console.error('Erro ao buscar produtos:', error.message);
		throw error; // repassa o erro para quem chamou
	}
}