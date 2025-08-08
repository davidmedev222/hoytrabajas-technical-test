import { NextResponse } from "next/server";
import z from "zod";
import { ApiError } from "./api.error";

export function getApiUrl() {
	const url = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api/v1";

	const formattedUrl = url.endsWith("/") ? url.slice(0, -1) : url;
	return formattedUrl;
}

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
