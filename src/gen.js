'use strict'

import {formatTime, setColor} from './util'

const genCCSub = body => {
  const subtitles = body.slice(2).reduce(
    (acc, [tagName, {t, d}, text], i) => {
      const {startTime, endTime} = formatTime(t, d)

      const subtitle = `${i}\n${startTime} --> ${endTime}\n${text}\n\n`

      return acc + subtitle
    },
    ''
  )

  return subtitles
}

const genSub = body => {
  const lineObjs = body.slice(2).filter(
    (lineObj) => lineObj.length > 2
  )

  const subtitles = lineObjs.reduce(
    (acc, [tagName, {t, d}, ...words], lineNum) => {
      const text = words.length > 1
        ? words.map(word => setColor(word)).join(' ')
        : words

      const nextLineObj = lineObjs[lineNum + 1]
      const nextT = nextLineObj !== undefined
        ? nextLineObj[1].t
        : undefined

      const {startTime, endTime} = formatTime(t, d, nextT)

      const subtitle = `${acc}${lineNum}\n${startTime} --> ${endTime}\n${text}\n\n`

      return subtitle
    },
    ''
  )

  return subtitles
}

const genStyleSub = json => {
  //todo ass
}

const gen = json => {
  if (json[0] !== 'timedtext' || json[1].format !== '3') {
    throw Error('only timedtext with format 3 expected.')
  }

  if (json[2][0] === 'body') {
    // CC srt sub
    return genCCSub(json[2])
  }

  // auto srt sub without youtube-like styling
  return genSub(json[3])
  // return genStyleSub(json)
}

export default gen
