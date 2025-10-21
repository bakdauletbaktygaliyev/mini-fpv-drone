import { StyleSheet, Text, View } from 'react-native'

export default function InfoPanel({ type }) {
	if (type === 'welcome') {
		return (
			<View style={styles.welcomeContainer}>
				<Text style={styles.welcomeTitle}>
					🎮 Connect to your drone to start flying!
				</Text>
				<Text style={styles.welcomeSubtitle}>
					Use virtual joysticks for intuitive control
				</Text>
			</View>
		)
	}

	return (
		<View style={styles.guideContainer}>
			<Text style={styles.guideTitle}>📖 Quick Guide:</Text>
			<View style={styles.guideContent}>
				<Text style={styles.guideText}>
					• <Text style={styles.bold}>Left Stick:</Text> Up/Down = Altitude,
					Left/Right = Rotation
				</Text>
				<Text style={styles.guideText}>
					• <Text style={styles.bold}>Right Stick:</Text> Up/Down =
					Forward/Back, Left/Right = Strafe
				</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	welcomeContainer: {
		backgroundColor: 'rgba(30, 58, 138, 0.3)',
		borderWidth: 1,
		borderColor: '#1d4ed8',
		borderRadius: 12,
		padding: 24,
		marginTop: 24,
		alignItems: 'center',
	},
	welcomeTitle: {
		fontSize: 18,
		color: '#fff',
		marginBottom: 8,
		textAlign: 'center',
	},
	welcomeSubtitle: {
		fontSize: 14,
		color: '#94a3b8',
		textAlign: 'center',
	},
	guideContainer: {
		backgroundColor: 'rgba(30, 58, 138, 0.3)',
		borderWidth: 1,
		borderColor: '#1d4ed8',
		borderRadius: 12,
		padding: 16,
		marginTop: 24,
	},
	guideTitle: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#fff',
		marginBottom: 12,
	},
	guideContent: {
		gap: 8,
	},
	guideText: {
		fontSize: 14,
		color: '#cbd5e1',
		lineHeight: 20,
	},
	bold: {
		fontWeight: 'bold',
	},
})
