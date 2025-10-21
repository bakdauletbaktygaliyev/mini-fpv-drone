export const COLORS = {
	primary: {
		blue: ['#2563eb', '#1d4ed8'],
		purple: ['#7c3aed', '#6d28d9'],
		green: ['#16a34a', '#15803d'],
		orange: ['#ea580c', '#c2410c'],
		red: ['#dc2626', '#b91c1c'],
	},
	background: {
		gradient: ['#0f172a', '#1e3a8a', '#0f172a'],
		card: 'rgba(30, 41, 59, 0.5)',
		input: 'rgba(51, 65, 85, 0.5)',
	},
	text: {
		primary: '#ffffff',
		secondary: '#cbd5e1',
		muted: '#94a3b8',
	},
	border: {
		default: '#475569',
		highlight: '#1d4ed8',
	},
	status: {
		connected: '#4ade80',
		disconnected: '#94a3b8',
		error: '#dc2626',
	},
}

export const JOYSTICK_CONFIG = {
	size: 220,
	handleSize: 64,
	maxDistance: 90, // size / 2 - 20
}

export const TELEMETRY_UPDATE_INTERVAL = 100 // ms

export const CONNECTION_TYPES = {
	WIFI: 'wifi',
	BLUETOOTH: 'bluetooth',
}
