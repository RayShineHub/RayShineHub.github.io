/* eslint-disable no-proto */
import 'aos/dist/aos.css'
import 'axios'
// import '../public/font/iconfont.css'
import postMixin from '@theme/mixins/posts'
import localMixin from '@theme/mixins/locales'
import smoothscroll from '@theme/mixins/smoothscroll'
import { interceptRouterError, fixRouterError404, RouterSmoothScroll} from '@theme/helpers/other'
import { addLinkToHead } from '@theme/helpers/utils'

export default ({
  Vue,
  siteData,
  isServer,
  router
}) => {
  Vue.mixin(postMixin)
  Vue.mixin(localMixin)
  Vue.mixin(smoothscroll)
  if (!isServer) {
    addLinkToHead('//at.alicdn.com/t/c/font_2506918_o631b7iqpme.css')
    // registerCodeThemeCss(siteData.themeConfig.codeTheme)
  }
  

  RouterSmoothScroll(Vue, router)
  interceptRouterError(router)
  fixRouterError404(router)
}
