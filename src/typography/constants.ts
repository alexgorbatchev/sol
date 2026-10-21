import type { FontSizes, FontSizeSetting } from "./types";

export const MIN_FONT_SIZE = 8;
export const MAX_FONT_SIZE = 32;

export const DEFAULT_FONT_SIZES: Readonly<FontSizes> = {
	searchInput: 18,
	searchResult: 14,
	searchDetail: 12,
	translation: 14,
	calendarTitle: 13,
	calendarTime: 11,
};

export const FONT_SIZE_SETTINGS: readonly FontSizeSetting[] = [
	{
		key: "searchInput",
		label: "Titles / search input",
		variable: "--font-size-search-input",
	},
	{
		key: "searchResult",
		label: "Search result names",
		variable: "--font-size-search-result",
	},
	{
		key: "searchDetail",
		label: "Search result details",
		variable: "--font-size-search-detail",
	},
	{
		key: "translation",
		label: "Translation text",
		variable: "--font-size-translation",
	},
	{
		key: "calendarTitle",
		label: "Calendar titles",
		variable: "--font-size-calendar-title",
	},
	{
		key: "calendarTime",
		label: "Calendar times",
		variable: "--font-size-calendar-time",
	},
];
