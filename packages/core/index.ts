import { makeInstaller } from '@zz_components_library/utils'
import components from './components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import '@zz_components_library/theme/index.css'

// 图标引入
library.add(fas)

//使用者使用时可以用vue的plugin来使用，并将组件挂载到vue实例上
const installer = makeInstaller(components)
export * from '@zz_components_library/components'
export default installer