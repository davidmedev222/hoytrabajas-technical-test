import { getApiUrl } from "./api.helper";

const API_URL = getApiUrl();

/**
 * Centralized API endpoint configuration for version 1
 * Contains all API routes used throughout the application
 * @example
 * ```ts
 * fetch(API_V1.PRODUCTS); // GET all products
 * fetch(API_V1.CART);     // GET cart contents
 * ```
 */
export const API_V1 = {
	/** Endpoint for product-related operations */
	PRODUCTS: `${API_URL}/products`,
	/** Endpoint for shopping cart operations */
	CART: `${API_URL}/cart`,
};
