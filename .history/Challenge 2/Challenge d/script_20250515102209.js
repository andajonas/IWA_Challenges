/* import company from './config.js'
import year from './config.js' */
import { company, year } from './config'

const message = '© ' + company + ' (' + year + ')'
document.querySelector('footer').innerText = message
