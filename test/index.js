const output = require('d3node-output')
const fs = require('fs')
const d3nMap = require('../')
const csvString = fs.readFileSync('./test/StatePopulations.csv').toString()
const data = d3nMap.csvParse(csvString)

const colors = [ // 9-color scheme (blue)
  '#f7fbff', '#deebf7', '#c6dbef',
  '#9ecae1', '#6baed6', '#4292c6',
  '#2171b5', '#08519c', '#08306b'
]
const scale = [ // for state populations
  0, 600000, 800000, 1500000, 2500000, 5000000, 9000000, 20000000, 400000000
]

output(`./test/output`, d3nMap({ data, colors, scale }))
