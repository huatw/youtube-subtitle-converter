'use strict'

import gen from './gen'
import parse from './parser'

const compile = xmlStr => gen(parse(xmlStr))

export default compile