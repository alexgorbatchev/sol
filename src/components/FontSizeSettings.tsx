import { observer } from "mobx-react-lite";
import { Text, TouchableOpacity, View } from "react-native";
import { useStore } from "store";
import {
	DEFAULT_FONT_SIZES,
	FONT_SIZE_SETTINGS,
	MAX_FONT_SIZE,
	MIN_FONT_SIZE,
} from "../typography/constants";

export const FontSizeSettings = observer(function FontSizeSettings() {
	const store = useStore();

	return (
		<View className="p-3 subBg gap-3 rounded-lg border border-lightBorder dark:border-darkBorder">
			<View className="flex-row items-center justify-between">
				<Text className="text-sm font-semibold">Font sizes</Text>
				<TouchableOpacity
					accessibilityRole="button"
					accessibilityLabel="Reset font sizes"
					onPress={() => store.ui.resetFontSizes()}
				>
					<Text className="text-sm text-blue-500">Reset</Text>
				</TouchableOpacity>
			</View>
			<Text className="text-xxs text-neutral-500 dark:text-neutral-400">
				Adjust each size independently. Changes apply immediately and are saved
				automatically.
			</Text>
			{FONT_SIZE_SETTINGS.map(({ key, label }) => {
				const size = store.ui.fontSizes[key];
				return (
					<View key={key} className="flex-row items-center gap-3">
						<Text className="flex-1 text-sm">{label}</Text>
						<TouchableOpacity
							accessibilityRole="button"
							accessibilityLabel={`Decrease ${label.toLowerCase()}`}
							disabled={size <= MIN_FONT_SIZE}
							onPress={() =>
								store.ui.setFontSize(key, Math.max(MIN_FONT_SIZE, size - 1))
							}
							className="px-3 py-1 rounded border border-color disabled:opacity-30"
						>
							<Text className="text-sm">−</Text>
						</TouchableOpacity>
						<Text
							className="text-sm w-16 text-center"
							accessibilityLabel={`${label}: ${size}, default ${DEFAULT_FONT_SIZES[key]}`}
						>
							{size}
						</Text>
						<TouchableOpacity
							accessibilityRole="button"
							accessibilityLabel={`Increase ${label.toLowerCase()}`}
							disabled={size >= MAX_FONT_SIZE}
							onPress={() =>
								store.ui.setFontSize(key, Math.min(MAX_FONT_SIZE, size + 1))
							}
							className="px-3 py-1 rounded border border-color disabled:opacity-30"
						>
							<Text className="text-sm">+</Text>
						</TouchableOpacity>
					</View>
				);
			})}
		</View>
	);
});
