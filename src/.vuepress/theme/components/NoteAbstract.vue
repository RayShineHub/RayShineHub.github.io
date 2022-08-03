<template>
  <div class="abstract-wrapper">
    <NoteAbstractItem
      v-for="(item, index) in currentPageData"
      :key="item.path"
      :item="item"
      :num="index"
      :currentPage="currentPage"
      :currentTag="currentTag"
    />
    <pagation
      class="pagation"
      :total="data.length"
      :currentPage="currentPage"
      @getCurrentPage="getCurrentPage"
    />
  </div>
</template>

<script>
import { defineComponent, ref, toRefs, computed, onMounted } from 'vue'
import pagination from '@theme/mixins/pagination'
import NoteAbstractItem from './NoteAbstractItem'
import { useInstance } from '@theme/helpers/composable'
import Aos from 'aos'

export default defineComponent({
  mixins: [pagination],
  components: { NoteAbstractItem },
  props: ['data', 'currentTag'],

  setup (props, ctx) {
    const instance = useInstance()

    const { data } = toRefs(props)

    const currentPage = ref(1)

    const currentPageData = computed(() => {
      const start = (currentPage.value - 1) * instance.$perPage
      const end = currentPage.value * instance.$perPage

      return data.value.slice(start, end)
    })

    const getCurrentPage = async (page) => {
      currentPage.value = page
      instance._setStoragePage(page)
      await ctx.emit('paginationChange', page)
      setTimeout(() => { Aos.refresh() }, 500)
    }

    onMounted(() => {
      currentPage.value = instance._getStoragePage() || 1
    })

    return { currentPage, currentPageData, getCurrentPage }
  },
  watch: {
    $route () {
      this.currentPage = this._getStoragePage() || 1
    }
  }
})
</script>

<style lang="stylus" scoped>
.abstract-wrapper
  width 100%
</style>
