const files = require.context('.', false, /\.js$/)
console.log(files, '==========>>>')
console.log(files.keys(), '==========>>>')
let configRouters = []
files.keys().forEach(key => {
  if (key === './index.js') return
  console.log(files(key).default, ';;;;')
  configRouters = configRouters.concat(files(key).default)
})
// console.log(files.prototype)
export default configRouters
