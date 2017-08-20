const topojson = require('topojson')
const topoJson = require('./us-states.json')
const D3Node = require('d3-node')
const d3 = D3Node.d3

const defaultStyles = `
    .states { pointer-events: none; fill: #ccc; stroke: #fff; stroke-width: 1px; stroke-linejoin: round;}
`

function statesMap ({ stateNameField = 'State', valueField = 'Population', data, colors, scale, styles = defaultStyles } = {}) {
  const d3n = new D3Node({ styles })
  const projection = d3.geoAlbersUsa()
  const path = d3.geoPath().projection(projection)

  // create Map object for the State lookup
  const dataMap = new Map()
  data.forEach((item) => dataMap.set(item[stateNameField], item[valueField]))

  // State color fill
  const fill = function (d) {
    const colorScale = d3.scaleThreshold()
      .domain(scale)
      .range(colors)

    const statePopulation = dataMap.get(d.properties.STATE)
    return colorScale(statePopulation / 100000)
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
