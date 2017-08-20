## Choropleth Map of US States :earth_americas:

geocoded markers (via CSV) with radius representing a datapoint

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

const stateNameField = 'State'
const valueField = 'Population'
const colors = [
  'rgb(255,245,240)', 'rgb(254,224,210)', 'rgb(252,187,161)',
  'rgb(252,146,114)', 'rgb(251,106,74)', 'rgb(239,59,44)',
  'rgb(203,24,29)', 'rgb(165,15,21)', 'rgb(103,0,13)'
]
const scale = [1, 4, 8, 15, 20, 30, 40, 50, 60]

const map = d3nMap({ data, colors, scale, stateNameField, valueField })
map.svgString() // returns <svg>
```

See [test](./test/index.js) for actual usage.

##### Output the test map to an image (PNG)
```
npm test
```

## API

#### Options 
`{ data, colors, scale, [ stateNameField, valueField ] }`
