<script>
export default {
  functional: true,
  props: {
    type: {
      type: String,
      default: 'github'
    },
    text: String,
    vertical: {
      type: String,
      default: 'middle'
    }
  },
  render (h, { props }) {
    return h('i', {
      class: ['iconfont', props.type],
      style: {
        verticalAlign: props.vertical
      }
    })
  }
}
</script>

<style lang="stylus" scoped>
.iconfont
  font-size 1.3rem
</style>