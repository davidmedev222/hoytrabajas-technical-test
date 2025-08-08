/**
 * Represents a successful API response with data
 */
export interface ApiSuccess<T> {
	/** The data payload returned by the API */
	data: T;
	/** Success message describing the operation */
	message: string;
	/** Always null for successful responses */
	error: null;
}

/**
 * Represents a failed API response with error details
 */
export interface ApiFailure {
	/** Always null for failed responses */
	data: null;
	/** Error object containing failure details */
	error: ApiError;
}

/**
 * Describes an API error with message and categorized code
 */
export interface ApiError {
	/** Human-readable error description */
	message: string;
	/** Machine-readable error code for categorization */
	code: string;
}

/**
 * Union type representing all possible API response formats
 * Used throughout the application for consistent API response handling
 */
export type ApiResponse<T> = ApiSuccess<T> | ApiFailure;
