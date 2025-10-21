import { useRef, useState } from 'react'
import { Animated, PanResponder, StyleSheet, Text, View } from 'react-native'

export default function VirtualJoystick({ label, onMove, size = 220 }) {
	const [position] = useState(new Animated.ValueXY({ x: 0, y: 0 }))
	const maxDistance = size / 2 - 20

	const panResponder = useRef(
		PanResponder.create({
			onStartShouldSetPanResponder: () => true,
			onMoveShouldSetPanResponder: () => true,
			onPanResponderGrant: () => {},
			onPanResponderMove: (_, gesture) => {
				let deltaX = gesture.dx
				let deltaY = gesture.dy

				const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)

				if (distance > maxDistance) {
					const angle = Math.atan2(deltaY, deltaX)
					deltaX = Math.cos(angle) * maxDistance
					deltaY = Math.sin(angle) * maxDistance
				}

				position.setValue({ x: deltaX, y: deltaY })

				const normalizedX = deltaX / maxDistance
				const normalizedY = -deltaY / maxDistance

				onMove(normalizedX, normalizedY)
			},
			onPanResponderRelease: () => {
				Animated.spring(position, {
					toValue: { x: 0, y: 0 },
					useNativeDriver: false,
				}).start()
				onMove(0, 0)
			},
		})
	).current

	return (
		<View style={styles.container}>
			<Text style={styles.label}>{label}</Text>
			<View style={[styles.joystickArea, { width: size, height: size }]}>
				{/* Крестообразные линии */}
				<View style={styles.horizontalLine} />
				<View style={styles.verticalLine} />

				{/* Центральная точка */}
				<View style={styles.centerDot} />

				{/* Ручка джойстика */}
				<Animated.View
					{...panResponder.panHandlers}
					style={[
						styles.handle,
						{
							transform: [
								{ translateX: position.x },
								{ translateY: position.y },
							],
						},
					]}
				>
					<View style={styles.handleInner} />
				</Animated.View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		marginBottom: 16,
	},
	label: {
		fontSize: 14,
		fontWeight: '600',
		color: '#cbd5e1',
		marginBottom: 8,
	},
	joystickArea: {
		backgroundColor: 'rgba(51, 65, 85, 0.5)',
		borderRadius: 9999,
		borderWidth: 2,
		borderColor: '#475569',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative',
	},
	horizontalLine: {
		position: 'absolute',
		width: '100%',
		height: 1,
		backgroundColor: '#475569',
	},
	verticalLine: {
		position: 'absolute',
		width: 1,
		height: '100%',
		backgroundColor: '#475569',
	},
	centerDot: {
		position: 'absolute',
		width: 8,
		height: 8,
		borderRadius: 4,
		backgroundColor: '#64748b',
	},
	handle: {
		position: 'absolute',
		width: 64,
		height: 64,
		borderRadius: 32,
		backgroundColor: '#3b82f6',
		borderWidth: 4,
		borderColor: '#60a5fa',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.3,
		shadowRadius: 8,
		elevation: 8,
	},
	handleInner: {
		flex: 1,
		borderRadius: 32,
		backgroundColor: 'rgba(255, 255, 255, 0.3)',
	},
})
