export interface FontSizes {
	searchInput: number;
	searchResult: number;
	searchDetail: number;
	translation: number;
	calendarTitle: number;
	calendarTime: number;
}

export type FontSizeKey = keyof FontSizes;

export interface FontSizeSetting {
	key: FontSizeKey;
	label: string;
	variable: string;
}
