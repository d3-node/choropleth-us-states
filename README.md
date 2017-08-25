## Choropleth Map of US States :earth_americas:

Choropleth of US States via data and defined color scale 

![map](./test/output.png)

## Install
```bash
$ npm install @d3-node/choropleth-us-states --save
```

## Usage

```js
const d3nMap = require('@d3-node/choropleth-us-states')

// read CSV -> parse to json
const csv = fs.readFileSync('./StatePopulations.csv').toString()
const data = d3nMap.csvParse(csv)

const stateNameField = 'State' // optional, default = 1st column
const metricField = 'Population' // optional, default = 2nd column
const colors = [ // 9-color scheme (blue)
  '#f7fbff', '#deebf7', '#c6dbef',
  '#9ecae1', '#6baed6', '#4292c6',
  '#2171b5', '#08519c', '#08306b'
]
const scale = [ // color buckets for state populations
  0, 600000, 800000, 1500000, 2500000, 5000000, 9000000, 20000000, 400000000
]

const map = d3nMap({ data, colors, scale, stateNameField, metricField })
map.svgString() // returns <svg>
```

See [test](./test/index.js) for actual usage.

##### Output the test map to an image (PNG)
```
npm test
```

## API

#### Options 
`{ data, colors, scale, [ stateNameField, metricField ] }`
