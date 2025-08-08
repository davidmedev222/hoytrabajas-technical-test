import { NextResponse } from "next/server";
import z from "zod";
import { ApiError } from "./api.error";

/**
 * Constructs the API base URL based on environment configuration
 * @returns Formatted API URL without trailing slash
 */
export function getApiUrl() {
	const url = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api/v1";

	const formattedUrl = url.endsWith("/") ? url.slice(0, -1) : url;
	return formattedUrl;
}

/**
 * Standardizes error handling for API routes by converting various error types to NextResponse
 * @param error - Error object that can be ZodError, ApiError, Error, or unknown
 * @returns NextResponse with appropriate status code and error format
 * @example
 * ```ts
 * try {
 *   // ... API logic
 * } catch (error) {
 *   return handleApiError(error);
 * }
 * ```
 */
export function handleApiError(error: unknown) {
	console.error(error);

	if (error instanceof z.ZodError) {
		return NextResponse.json(
			{
				error: {
					message: "Validation failed.",
					code: "validation/error",
				},
				data: error.issues,
			},
			{ status: 400 },
		);
	}

	if (error instanceof ApiError) {
		return NextResponse.json(
			{
				error: {
					message: error.message,
					code: error.code,
				},
				data: null,
			},
			{ status: 400 },
		);
	}

	if (error instanceof Error) {
		return NextResponse.json(
			{
				error: {
					message: error.message,
					code: "server/internal-error",
				},
				data: null,
			},
			{ status: 500 },
		);
	}

	return NextResponse.json(
		{
			error: {
				message: "An unexpected server error occurred.",
				code: "server/internal-error",
			},
			data: null,
		},
		{ status: 500 },
	);
}
