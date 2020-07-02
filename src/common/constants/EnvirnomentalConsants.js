const envVaribles = process.env
const config = {}

Object.keys(envVaribles).forEach(variable => {
   if (variable.includes('REACT_APP')) {
      const envKey = ''
      variable.replace('REACT_APP_', '')
      config[envKey] = envVaribles[variable]
   }
})
export default config
