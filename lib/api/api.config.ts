import { getApiUrl } from "./api.helper";

const API_URL = getApiUrl();

export const API_V1 = {
	PRODUCTS: `${API_URL}/products`,
	CART: `${API_URL}/cart`,
};
