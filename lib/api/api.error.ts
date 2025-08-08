import type { ApiError as ApiErrorOptions } from "./api.model";

/**
 * Custom error class for API-specific errors with categorized error codes
 * Extends native Error class with additional code property for error categorization
 * @example
 * ```ts
 * throw new ApiError({
 *   message: "Product not found",
 *   code: "product/not-found"
 * });
 * ```
 */
export class ApiError extends Error {
	/** Machine-readable error code for categorization and handling */
	public code: string;

	/**
	 * Creates a new API error instance
	 * @param param0 - Error configuration object
	 * @param param0.message - Human-readable error description
	 * @param param0.code - Machine-readable error code
	 */
	constructor({ message, code }: ApiErrorOptions) {
		super(message);
		this.code = code;
	}
}
