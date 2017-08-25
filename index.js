const topojson = require('topojson')
const topoJson = require('./us-states.json')
const D3Node = require('d3-node')
const d3 = D3Node.d3

const defaultStyles = `
    .states { pointer-events: none; fill: #ccc; stroke: #fff; stroke-width: 1px; stroke-linejoin: round;}
`

function statesMap ({ data, colors, scale, stateNameField = 0, metricField = 1, styles = defaultStyles } = {}) {
  const d3n = new D3Node({ styles })
  const projection = d3.geoAlbersUsa()
  const path = d3.geoPath().projection(projection)

  let stateId = stateNameField
  if (Number.isInteger(stateNameField)) {
    stateId = Object.keys(data[0])[stateNameField]
  }

  let metricProp = metricField
  if (Number.isInteger(metricField)) {
    metricProp = Object.keys(data[0])[metricField]
  }

  // create Map object for the State lookup
  const dataMap = new Map()
  data.forEach((item) => {
    dataMap.set(item[stateId], item[metricProp])
  })

  // State color fill
  const fill = function (d) {
    const colorScale = d3.scaleThreshold()
      .domain(scale)
      .range(colors)

    const stateMetric = dataMap.get(d.properties.STATE)
    return colorScale(stateMetric)
  }

  const svg = d3n.createSVG(960, 500)

  svg.selectAll('.states')
    .data(topojson.feature(topoJson, topoJson.objects.states).features)
    .enter()
    .append('path')
    .attr('class', 'states')
    .attr('d', path)
    .style('fill', fill)

  return d3n
}

module.exports = statesMap
module.exports.d3 = d3
module.exports.map = d3.map
module.exports.dsvFormat = d3.dsvFormat
module.exports.csvParse = d3.csvParse
module.exports.scaleThreshold = d3.scaleThreshold
