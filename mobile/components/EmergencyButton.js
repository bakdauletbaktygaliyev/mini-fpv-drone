import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function EmergencyButton({ onPress }) {
	return (
		<TouchableOpacity
			style={styles.button}
			onPress={onPress}
			activeOpacity={0.8}
		>
			<Text style={styles.text}>🚨 EMERGENCY STOP</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: '#dc2626',
		borderRadius: 12,
		padding: 20,
		marginBottom: 24,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.3,
		shadowRadius: 8,
		elevation: 8,
	},
	text: {
		color: '#fff',
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
	},
})
