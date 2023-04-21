<template>
  <div>
    <a :href="hit.url">
    </a>
    <h3>{{ hit.hierarchy.lvl0 }}</h3>
    <p v-html="hit._snippetResult.content.value"></p>
   </div>
</template>

<script>
import { defineComponent, h, ref, onMounted } from 'vue'
export default defineComponent({
  name: 'HitComponent',
  props: { hit: { type: Object, required: true }, chirden: Object},
  setup(props, ctx) {


    onMounted(() => {
      debugger
      console.log(props);
    })
  }
})
</script>