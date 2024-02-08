export function formatTime(time: string) {
  const [hours, minutes] = time.split(':')
  return `${hours}:${minutes}`
}

export function formatDate(dateString: string) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const date = new Date(dateString)
  const day = date.getDate()
  const month = months[date.getMonth()]
  const year = date.getFullYear()
  return `${day} ${month} ${year}`
}

export function incrementTimeByOneHour(time: string) {
  let [hours, minutes] = time.split(':')
  hours = (parseInt(hours, 10) + 1).toString().padStart(2, '0')
  return `${hours}:${minutes}`
}
