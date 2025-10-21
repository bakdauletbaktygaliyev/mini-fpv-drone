import { MaterialCommunityIcons } from '@expo/vector-icons'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function ConnectionPanel({
	isConnected,
	connectionType,
	onConnect,
}) {
	return (
		<View style={styles.container}>
			<View style={styles.statusRow}>
				{isConnected ? (
					<View style={styles.connectedStatus}>
						<MaterialCommunityIcons
							name={connectionType === 'wifi' ? 'wifi' : 'bluetooth'}
							size={20}
							color='#4ade80'
						/>
						<Text style={styles.connectedText}>
							Connected ({connectionType.toUpperCase()})
						</Text>
					</View>
				) : (
					<View style={styles.disconnectedStatus}>
						<MaterialCommunityIcons name='wifi-off' size={20} color='#94a3b8' />
						<Text style={styles.disconnectedText}>Disconnected</Text>
					</View>
				)}
			</View>

			<View style={styles.buttonsRow}>
				<TouchableOpacity
					style={[
						styles.button,
						styles.wifiButton,
						isConnected && connectionType === 'wifi' && styles.connectedButton,
					]}
					onPress={() => onConnect('wifi')}
				>
					<Text style={styles.buttonText}>
						{isConnected && connectionType === 'wifi' ? 'Disconnect' : 'WiFi'}
					</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={[
						styles.button,
						styles.bluetoothButton,
						isConnected &&
							connectionType === 'bluetooth' &&
							styles.connectedButton,
					]}
					onPress={() => onConnect('bluetooth')}
				>
					<Text style={styles.buttonText}>
						{isConnected && connectionType === 'bluetooth'
							? 'Disconnect'
							: 'Bluetooth'}
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'rgba(30, 41, 59, 0.5)',
		borderRadius: 12,
		padding: 16,
		marginBottom: 16,
		borderWidth: 1,
		borderColor: '#475569',
	},
	statusRow: {
		marginBottom: 12,
	},
	connectedStatus: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
	},
	connectedText: {
		color: '#4ade80',
		fontWeight: '600',
		fontSize: 16,
	},
	disconnectedStatus: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
	},
	disconnectedText: {
		color: '#94a3b8',
		fontSize: 16,
	},
	buttonsRow: {
		flexDirection: 'row',
		gap: 8,
	},
	button: {
		flex: 1,
		paddingVertical: 12,
		paddingHorizontal: 16,
		borderRadius: 8,
		alignItems: 'center',
	},
	wifiButton: {
		backgroundColor: '#2563eb',
	},
	bluetoothButton: {
		backgroundColor: '#4f46e5',
	},
	connectedButton: {
		backgroundColor: '#16a34a',
	},
	buttonText: {
		color: '#fff',
		fontWeight: '600',
		fontSize: 16,
	},
})
