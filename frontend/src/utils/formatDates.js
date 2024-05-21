export const formatTodayDate = () => {
	const today = new Date()
	return `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, 0)}-${today.getDate().toString().padStart(2, 0)}`
}

export const formatNowTime = () => {
	const today = new Date()
	return `${today.getHours().toString().padStart(2, 0)}:${today.getMinutes().toString().padStart(2, 0)}`
}
