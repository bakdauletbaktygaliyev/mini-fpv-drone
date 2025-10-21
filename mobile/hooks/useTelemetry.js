import { useEffect, useState } from 'react'

export default function useTelemetry(isConnected, leftStick, rightStick) {
	const [telemetry, setTelemetry] = useState({
		battery: 87,
		altitude: 0,
		speed: 0,
		temperature: 24,
		signal: 100,
		pitch: 0,
		roll: 0,
		yaw: 0,
	})

	useEffect(() => {
		if (isConnected) {
			const interval = setInterval(() => {
				setTelemetry(prev => ({
					...prev,
					battery: Math.max(0, prev.battery - Math.random() * 0.1),
					altitude: Math.max(0, prev.altitude + leftStick.y * 0.5),
					speed: Math.sqrt(rightStick.x ** 2 + rightStick.y ** 2) * 15,
					temperature: 24 + Math.random() * 2,
					signal: 85 + Math.random() * 15,
					pitch: rightStick.y * 45,
					roll: rightStick.x * 45,
					yaw: leftStick.x * 180,
				}))
			}, 100)

			return () => clearInterval(interval)
		}
	}, [isConnected, leftStick, rightStick])

	return telemetry
}
