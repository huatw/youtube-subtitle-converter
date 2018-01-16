'use strict'

const isDocumentNode = nodeType => nodeType === 9

const isTextNode = nodeType => nodeType === 3

const reduceAttr = attributes => {
  const attrs = Array.from(attributes)

  const props = attrs.reduce(
    (acc, {nodeName, nodeValue}) => {
      acc[nodeName] = nodeValue
      return acc
    },
    {}
  )

  return props
}

const xmlToJson = (
  {nodeType, childNodes, nodeName, nodeValue, attributes}
) => {
  if (isDocumentNode(nodeType)) {
    return xmlToJson(childNodes[0])
  }

  if (isTextNode(nodeType)) {
    return nodeValue
  }

  if (nodeName === undefined) {
    return
  }

  const props = reduceAttr(attributes)

  const children = Array.from(childNodes).map(node =>
    xmlToJson(node)
  )

  const root = [nodeName, props, ...children]

  return root
}

const strToXML = str => new DOMParser().parseFromString(
  str.split('\n').join(''),
  "text/xml"
)

const parse = str => xmlToJson(strToXML(str))

export default parse
