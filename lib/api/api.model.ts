export interface ApiSuccess<T> {
	data: T;
	message: string;
	error: null;
}

export interface ApiFailure {
	data: null;
	error: ApiError;
}

export interface ApiError {
	message: string;
	code: string;
}

export type ApiResponse<T> = ApiSuccess<T> | ApiFailure;
