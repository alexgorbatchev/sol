import {
	DEFAULT_FONT_SIZES,
	FONT_SIZE_SETTINGS,
	MAX_FONT_SIZE,
	MIN_FONT_SIZE,
} from "./constants";
import type { FontSizes } from "./types";

function isFontSizeConfig(value: unknown): value is Record<string, unknown> {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function isValidFontSize(value: unknown): value is number {
	return (
		typeof value === "number" &&
		Number.isFinite(value) &&
		value >= MIN_FONT_SIZE &&
		value <= MAX_FONT_SIZE
	);
}

export function normalizeFontSizes(value: unknown): FontSizes {
	const sizes: FontSizes = { ...DEFAULT_FONT_SIZES };
	if (!isFontSizeConfig(value)) return sizes;

	for (const { key } of FONT_SIZE_SETTINGS) {
		const size = value[key];
		if (isValidFontSize(size)) sizes[key] = size;
	}
	return sizes;
}

export function createFontSizeVariables(
	sizes: FontSizes,
): Record<string, string> {
	return Object.fromEntries(
		FONT_SIZE_SETTINGS.map(({ key, variable }) => [
			variable,
			`${sizes[key]}px`,
		]),
	);
}
