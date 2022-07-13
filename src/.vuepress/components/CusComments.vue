<template>
  <div
    class="comments-wrapper"
    v-show="isShowComments">
    <ClientOnly>
      <component
        :is="componentName"
        :options="options" />
    </ClientOnly>
  </div>
</template>

<script>
import Valine from './CommentModels/Valine.vue'
import Vssue from './CommentModels/Vssue.vue'
import Waline from './CommentModels/Waline.vue'
export default {
  name: 'CusComments',
  components: { Valine, Vssue, Waline },
  props: {
    isShowComments: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    solution () {
      const {
        $themeConfig: { valineConfig, vssueConfig, walineConfig },
        $themeLocaleConfig: { valineConfig: valineLocalConfig, vssueConfig: vssueLocalConfig }
      } = this

      let solution = ''
      if (valineLocalConfig !== undefined || valineConfig !== undefined) {
        solution = 'valine'
      } else if (vssueLocalConfig !== undefined || vssueConfig !== undefined) {
        solution = 'vssue'
      } else if (walineConfig !== undefined) {
        solution = 'waline'
      }
      return solution
    },
    options () {
      const {
        $themeConfig: { valineConfig, vssueConfig, walineConfig},
        $themeLocaleConfig: { valineConfig: valineLocalConfig, vssueConfig: vssueLocalConfig }
      } = this

      if (valineLocalConfig !== undefined || valineConfig !== undefined) {
        return valineLocalConfig || valineConfig
      } else if (vssueLocalConfig !== undefined || vssueConfig !== undefined) {
        return vssueLocalConfig || vssueConfig
      } else if (walineConfig !== undefined) {
        return walineConfig
      }
      return null
    },
    componentName () {
      const solution = this.solution
      return solution === 'valine' ? 'Valine' : solution === 'vssue' ? 'Vssue' : solution === 'waline' ? 'Waline' : ''
    }
  },
  mounted () {
    this.$themeConfig.commentsSolution = this.solution
  }
}
</script>
