import { StyleSheet, Text, View } from 'react-native'
import VirtualJoystick from './VirtualJoystick'

export default function JoysticksPanel({
	leftStick,
	rightStick,
	onLeftMove,
	onRightMove,
}) {
	return (
		<View style={styles.container}>
			{/* Left Joystick */}
			<View style={styles.joystickContainer}>
				<VirtualJoystick
					label='Throttle & Yaw'
					onMove={onLeftMove}
					size={220}
				/>
				<View style={styles.valuesRow}>
					<View style={styles.valueBox}>
						<Text style={styles.valueLabel}>Throttle</Text>
						<Text style={styles.valueText}>
							{(leftStick.y * 100).toFixed(0)}%
						</Text>
					</View>
					<View style={styles.valueBox}>
						<Text style={styles.valueLabel}>Yaw</Text>
						<Text style={styles.valueText}>
							{(leftStick.x * 100).toFixed(0)}%
						</Text>
					</View>
				</View>
			</View>

			{/* Right Joystick */}
			<View style={styles.joystickContainer}>
				<VirtualJoystick label='Pitch & Roll' onMove={onRightMove} size={220} />
				<View style={styles.valuesRow}>
					<View style={styles.valueBox}>
						<Text style={styles.valueLabel}>Pitch</Text>
						<Text style={styles.valueText}>
							{(rightStick.y * 100).toFixed(0)}%
						</Text>
					</View>
					<View style={styles.valueBox}>
						<Text style={styles.valueLabel}>Roll</Text>
						<Text style={styles.valueText}>
							{(rightStick.x * 100).toFixed(0)}%
						</Text>
					</View>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		gap: 24,
		marginBottom: 24,
	},
	joystickContainer: {
		backgroundColor: 'rgba(30, 41, 59, 0.5)',
		borderRadius: 12,
		padding: 24,
		borderWidth: 1,
		borderColor: '#475569',
		alignItems: 'center',
	},
	valuesRow: {
		flexDirection: 'row',
		gap: 12,
		marginTop: 16,
		width: '100%',
		maxWidth: 300,
	},
	valueBox: {
		flex: 1,
		backgroundColor: 'rgba(51, 65, 85, 0.5)',
		borderRadius: 8,
		padding: 12,
		alignItems: 'center',
	},
	valueLabel: {
		fontSize: 12,
		color: '#94a3b8',
		marginBottom: 4,
	},
	valueText: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#fff',
	},
})
