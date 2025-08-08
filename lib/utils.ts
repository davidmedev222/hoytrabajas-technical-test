import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines and optimizes CSS class names using clsx and tailwind-merge
 * @param inputs - Class values that can be strings, objects, arrays, or conditional classes
 * @returns Optimized className string with Tailwind conflicts resolved
 * @example
 * ```ts
 * cn("px-2 py-1", "px-4", { "bg-red-500": isError }) // "py-1 px-4 bg-red-500"
 * ```
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
