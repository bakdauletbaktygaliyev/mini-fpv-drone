import { MaterialCommunityIcons } from '@expo/vector-icons'
import { StyleSheet, Text, View } from 'react-native'

export default function OrientationDisplay({ telemetry }) {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<MaterialCommunityIcons name='compass' size={20} color='#fff' />
				<Text style={styles.title}>Drone Orientation</Text>
			</View>

			<View style={styles.grid}>
				<View style={styles.box}>
					<Text style={styles.label}>Pitch</Text>
					<Text style={styles.value}>{telemetry.pitch.toFixed(1)}°</Text>
				</View>
				<View style={styles.box}>
					<Text style={styles.label}>Roll</Text>
					<Text style={styles.value}>{telemetry.roll.toFixed(1)}°</Text>
				</View>
				<View style={styles.box}>
					<Text style={styles.label}>Yaw</Text>
					<Text style={styles.value}>{telemetry.yaw.toFixed(1)}°</Text>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'rgba(30, 41, 59, 0.5)',
		borderRadius: 12,
		padding: 24,
		marginBottom: 24,
		borderWidth: 1,
		borderColor: '#475569',
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
		marginBottom: 16,
	},
	title: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#fff',
	},
	grid: {
		flexDirection: 'row',
		gap: 12,
	},
	box: {
		flex: 1,
		backgroundColor: 'rgba(51, 65, 85, 0.5)',
		borderRadius: 8,
		padding: 16,
		alignItems: 'center',
	},
	label: {
		fontSize: 14,
		color: '#94a3b8',
		marginBottom: 4,
	},
	value: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#fff',
	},
})
