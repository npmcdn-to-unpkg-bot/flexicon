var SVGPack = require('svgpack')

SVGPack = new SVGPack('./src/svg/*.svg', {
  name:'flexicon',
  dist:'./dist'
})
