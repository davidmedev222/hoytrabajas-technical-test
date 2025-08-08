import type { ApiError as ApiErrorOptions } from "./api.model";

export class ApiError extends Error {
	public code: string;

	constructor({ message, code }: ApiErrorOptions) {
		super(message);
		this.code = code;
	}
}
