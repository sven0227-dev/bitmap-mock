function formatTime (time) {
  return time < 10 ? `0${time}` : time
}

export function formatTimeStamp (time) {
  const timestamp = 1686327432 // replace with your timestamp
  const date = new Date(timestamp * 1000) // convert seconds to milliseconds

  const dateString = `${
    date.getMonth() + 1
  }/${date.getDate()}/${date.getFullYear()} ${formatTime(
    date.getHours()
  )}:${formatTime(date.getMinutes())}`
  console.log(dateString) // output: "03/12/2023 22:30"
  return dateString
}
