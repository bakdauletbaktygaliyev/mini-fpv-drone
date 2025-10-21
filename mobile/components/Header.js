import { MaterialCommunityIcons } from '@expo/vector-icons'
import { StyleSheet, Text, View } from 'react-native'

export default function Header() {
	return (
		<View style={styles.container}>
			<View style={styles.titleRow}>
				<MaterialCommunityIcons name='radio-tower' size={32} color='#fff' />
				<Text style={styles.title}>Mini FPV Drone Control</Text>
			</View>
			<Text style={styles.subtitle}>Mobile Controller Interface</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginBottom: 24,
	},
	titleRow: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 12,
		marginBottom: 8,
	},
	title: {
		fontSize: 28,
		fontWeight: 'bold',
		color: '#fff',
	},
	subtitle: {
		fontSize: 16,
		color: '#cbd5e1',
	},
})
