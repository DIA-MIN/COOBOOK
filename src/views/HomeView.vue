<template>
  <div class="home">
    <Header />
    <Banner />
    <Category />
    <RecipeList />
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Banner from '@/components/Banner.vue'
import Category from '@/components/Category.vue'
import RecipeList from '@/components/RecipeList.vue'

export default {
  components: {
    Header,
    Banner,
    Category,
    RecipeList
  },
  data() {
    return {}
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
