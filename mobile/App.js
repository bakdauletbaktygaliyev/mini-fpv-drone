import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react'
import { ScrollView, StatusBar, StyleSheet } from 'react-native'
import ConnectionPanel from './components/ConnectionPanel'
import EmergencyButton from './components/EmergencyButton'
import Header from './components/Header'
import InfoPanel from './components/InfoPanel'
import JoysticksPanel from './components/JoysticksPanel'
import OrientationDisplay from './components/OrientationDisplay'
import TelemetryGrid from './components/TelemetryGrid'
import useTelemetry from './hooks/useTelemetry'

export default function App() {
	const [isConnected, setIsConnected] = useState(false)
	const [connectionType, setConnectionType] = useState('wifi')
	const [leftStick, setLeftStick] = useState({ x: 0, y: 0 })
	const [rightStick, setRightStick] = useState({ x: 0, y: 0 })

	const telemetry = useTelemetry(isConnected, leftStick, rightStick)

	const handleConnect = type => {
		setConnectionType(type)
		setIsConnected(!isConnected)
	}

	const handleEmergencyStop = () => {
		setLeftStick({ x: 0, y: 0 })
		setRightStick({ x: 0, y: 0 })
		setIsConnected(false)
	}

	return (
		<>
			<StatusBar barStyle='light-content' />
			<LinearGradient
				colors={['#0f172a', '#1e3a8a', '#0f172a']}
				style={styles.container}
			>
				<ScrollView
					style={styles.scrollView}
					contentContainerStyle={styles.content}
					showsVerticalScrollIndicator={false}
				>
					<Header />

					<ConnectionPanel
						isConnected={isConnected}
						connectionType={connectionType}
						onConnect={handleConnect}
					/>

					{isConnected ? (
						<>
							<TelemetryGrid telemetry={telemetry} />

							<JoysticksPanel
								leftStick={leftStick}
								rightStick={rightStick}
								onLeftMove={setLeftStick}
								onRightMove={setRightStick}
							/>

							<OrientationDisplay telemetry={telemetry} />

							<EmergencyButton onPress={handleEmergencyStop} />

							<InfoPanel type='guide' />
						</>
					) : (
						<InfoPanel type='welcome' />
					)}
				</ScrollView>
			</LinearGradient>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	scrollView: {
		flex: 1,
	},
	content: {
		padding: 16,
		paddingTop: 50,
	},
})
