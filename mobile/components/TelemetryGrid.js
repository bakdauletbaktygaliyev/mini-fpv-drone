import { MaterialCommunityIcons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet, Text, View } from 'react-native'

const TelemetryCard = ({ icon, label, value, colors }) => (
	<LinearGradient colors={colors} style={styles.card}>
		<View style={styles.cardHeader}>
			<MaterialCommunityIcons name={icon} size={20} color='#fff' />
			<Text style={styles.cardLabel}>{label}</Text>
		</View>
		<Text style={styles.cardValue}>{value}</Text>
	</LinearGradient>
)

export default function TelemetryGrid({ telemetry }) {
	return (
		<View style={styles.grid}>
			<TelemetryCard
				icon='battery'
				label='Battery'
				value={`${telemetry.battery.toFixed(1)}%`}
				colors={['#2563eb', '#1d4ed8']}
			/>
			<TelemetryCard
				icon='gauge'
				label='Altitude'
				value={`${telemetry.altitude.toFixed(1)}m`}
				colors={['#7c3aed', '#6d28d9']}
			/>
			<TelemetryCard
				icon='weather-windy'
				label='Speed'
				value={`${telemetry.speed.toFixed(1)} m/s`}
				colors={['#16a34a', '#15803d']}
			/>
			<TelemetryCard
				icon='thermometer'
				label='Temp'
				value={`${telemetry.temperature.toFixed(1)}°C`}
				colors={['#ea580c', '#c2410c']}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	grid: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		gap: 12,
		marginBottom: 24,
	},
	card: {
		width: '48%',
		borderRadius: 12,
		padding: 16,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.3,
		shadowRadius: 8,
		elevation: 8,
	},
	cardHeader: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
		marginBottom: 8,
	},
	cardLabel: {
		color: '#fff',
		fontSize: 14,
		fontWeight: '600',
	},
	cardValue: {
		color: '#fff',
		fontSize: 24,
		fontWeight: 'bold',
	},
})
