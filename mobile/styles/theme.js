import { StyleSheet } from 'react-native'
import { COLORS } from '../utils/constants'

export const commonStyles = StyleSheet.create({
	card: {
		backgroundColor: COLORS.background.card,
		borderRadius: 12,
		padding: 16,
		borderWidth: 1,
		borderColor: COLORS.border.default,
	},
	cardLarge: {
		backgroundColor: COLORS.background.card,
		borderRadius: 12,
		padding: 24,
		borderWidth: 1,
		borderColor: COLORS.border.default,
	},
	shadow: {
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.3,
		shadowRadius: 8,
		elevation: 8,
	},
	textPrimary: {
		color: COLORS.text.primary,
		fontSize: 16,
	},
	textSecondary: {
		color: COLORS.text.secondary,
		fontSize: 14,
	},
	textMuted: {
		color: COLORS.text.muted,
		fontSize: 12,
	},
})
