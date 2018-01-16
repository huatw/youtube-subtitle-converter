'use strict'

import compile from './src/index'

// open devtool network, search timedtext for the url.
const CC = 'https://www.youtube.com/api/timedtext?key=yttt1&caps=asr&v=KSfhW1hTOvw&sparams=asr_langs%2Ccaps%2Cv%2Cexpire&hl=en_US&asr_langs=it%2Cfr%2Ces%2Cnl%2Cen%2Cko%2Cru%2Cde%2Cpt%2Cja&signature=48A721C335C36F3ACAFCFD058E0BD787B6015D2E.9CD58A48BBA09E37B5FE54A244634D968B3D94CD&expire=1494018635&lang=en&name=CC&fmt=srv3'
const autoSub = 'https://www.youtube.com/api/timedtext?key=yttt1&caps=asr&v=KSfhW1hTOvw&sparams=asr_langs%2Ccaps%2Cv%2Cexpire&hl=en_US&asr_langs=it%2Cfr%2Ces%2Cnl%2Cen%2Cko%2Cru%2Cde%2Cpt%2Cja&signature=48A721C335C36F3ACAFCFD058E0BD787B6015D2E.9CD58A48BBA09E37B5FE54A244634D968B3D94CD&expire=1494018635&kind=asr&lang=en&fmt=srv3'

const getSub = async (url) => {
  const response = await fetch(url)
  const xmlStr = await response.text()
  const sub = compile(xmlStr)
  console.log(sub)
  return sub
}

getSub(CC)
getSub(autoSub)
