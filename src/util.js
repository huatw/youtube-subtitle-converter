'use strict'

const msToObj = n => ({
  d: Math.floor(n / 86400000),
  hr: Math.floor(n / 3600000) % 24,
  min: Math.floor(n / 60000) % 60,
  s: Math.floor(n / 1000) % 60,
  ms: Math.floor(n) % 1000
})

const leftPad = (str, len = 2, n = 0) => String(str).padStart(len, n)

function formatMs (inputMs) {
  const {d, hr, min, s, ms} = msToObj(inputMs)
  const timeStr = `${leftPad(hr)}:${leftPad(min)}:${leftPad(s)},${leftPad(ms, 3)}`
  return timeStr
}

const formatTime = (t, d, nextT) => {
  t = parseInt(t, 10)
  d = parseInt(d, 10)
  let end = t + d

  if (nextT !== undefined) {
    nextT = parseInt(nextT, 10)
    if (end > nextT) {
      end = nextT
    }
  }

  return {
    startTime: formatMs(t),
    endTime: formatMs(end)
  }
}

// setColor by text accuracy
const setColor = ([tagName, {ac}, text]) => {
  ac = parseInt(ac, 10)

  if (ac === 252) {
    return text
  }

  if (ac < 200) {
    return `<font color=#888888>${text}</font>`
  }

  return `<font color=#cccccc>${text}</font>`
}

export {
  setColor,
  formatTime
}
