import { makeInstaller } from '@zz_components_library/utils'
import components from './components'

//使用者使用时可以用vue的plugin来使用，并将组件挂载到vue实例上
const installer = makeInstaller(components)
export * from '@zz_components_library/components'
export default installer