<script>
import { isActive } from '@theme/helpers/utils'

export default {
  computed: {
    headers () {
      const headers = (this.$page.headers || []).filter(header => header.level === 2)
      return headers
    }
  },
  methods: {
    isLinkActive (header) {
      const active = isActive(this.$route, this.$page.path + '#' + header.slug)
      if (active) {
        setTimeout(() => {
          // console.log(document.querySelector(`.${header.slug}`))
          document.querySelector(`.${header.slug}`).scrollIntoView()
        }, 300)
      }
      return active
    }
  },
  render (h) {
    // add by RayShine
    // 增加提示
    return h('ul', {
      class: { 'sub-sidebar-wrapper': true },
      style: { width: (this.$page.headers || []).length > 0 ? '12rem' : '0' }
    }, [
      ...(this.$page.headers || []).map(header => {
        return h('li', {
          class: {
            active: this.isLinkActive(header),
            [`level-${header.level}`]: true
          },
          attr: { key: header.title }
        }, [
          h('router-link', {
            class: { 'sidebar-link': true, [`${header.slug}`]: true, [`depth-${header.level}`]: true },
            props: { to: `#${header.slug}` }
          }, header.title)
        ])
      })
    ])
  }
}

</script>

<style lang="stylus" scoped>
.sub-sidebar-tip
  width 12rem
  padding-left 0
  list-style none
  font-size 15px
.sub-sidebar-wrapper
  width 12rem
  padding-left 0
  list-style none
  font-size 12px
  line-height: 1.25rem
  li
    padding .2rem 0
    cursor pointer
    border-left 1px solid var(--border-color)
    a
      padding 0.35rem 1rem 0.35rem 0rem
      color var(--text-color)
    &:hover
      a
       color $accentColor
    &.active
      border-left 1px solid $accentColor
      a
       color $accentColor
    &.level-1
      padding-left .4rem
    &.level-2
      padding-left .9rem
    &.level-3
      padding-left 1.1rem
.depth-2
  font-weight: 800
.depth-3
  font-weight: 400
  font-size: 12px !important
</style>

