function dataFormate(dataStr) {
  const dt = new Date(dataStr)

  const y = dt.getFullYear()
  const m = padZero(dt.getMonth() + 1)
  const d = padZero(dt.getDate())
  
  const hh = padZero(dt.getHours())
  const mm = padZero(dt.getMinutes())
  const ss = padZero(dt.getSeconds())

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}

function padZero(a) {
  return a < 10 ? '0' + a : a
}

module.exports = {
  dataFormate
}