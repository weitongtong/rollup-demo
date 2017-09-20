// entry.js

import * as modules from './module.js'
import { version } from '../../package.json'

var v = version
console.log(v)
modules.weWant()
