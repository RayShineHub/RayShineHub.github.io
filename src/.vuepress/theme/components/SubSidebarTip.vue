<script>
export default {
  computed: {
    headers () {
      const headers = (this.$page.headers || []).filter(header => header.level === 2)
      return headers
    }
  },
  methods: {},
  render (h) {
    // add by RayShine
    // 增加提示
    return h('div', {
      class: { 'sub-sidebar-tip': true },
      style: { width: (this.$page.headers || []).length > 0 ? '12rem' : '0' }
    }, 'ON THIS PAGE')
  }
}

</script>

<style lang="stylus" scoped>
.sub-sidebar-tip
  width: 12rem !important
  position: fixed
  top: 9rem !important
  bottom: 10rem !important
  right: 8rem !important
  font-weight: 700
</style>

