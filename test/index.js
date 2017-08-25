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
const scale = [ // for state populations
  0, 600000, 800000, 1500000, 2500000, 5000000, 9000000, 20000000, 400000000
]

output(`./test/output`, d3nMap({ data, colors, scale }))
