const output = require('d3node-output')
const fs = require('fs')
const d3nMap = require('../')
const csvString = fs.readFileSync('./test/StatePopulations.csv').toString()
const data = d3nMap.csvParse(csvString)

const colors = [
  'rgb(255,245,240)', 'rgb(254,224,210)', 'rgb(252,187,161)',
  'rgb(252,146,114)', 'rgb(251,106,74)', 'rgb(239,59,44)',
  'rgb(203,24,29)', 'rgb(165,15,21)', 'rgb(103,0,13)'
]
const scale = [1, 4, 8, 15, 20, 30, 40, 50, 60]

// const stateNameField = 'State' // optional
// const valueField = 'Population' // optional

output(`./test/output`, d3nMap({ data, colors, scale }))
