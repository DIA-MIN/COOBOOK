<template>
  <div class="home">
    <Header />
    <Banner />
    <h2 v-if="recipes.length < 1">스크랩된 레시피가 없습니다.</h2>
    <RecipeList :recipes="recipes" types="scrap" />
    <Footer />
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Banner from '@/components/Banner.vue'
import RecipeList from '@/components/RecipeList.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header,
    Banner,
    RecipeList,
    Footer
  },
  data() {
    return {
      recipes: JSON.parse(localStorage.getItem('recipeScrap')) || []
    }
  }
}
</script>
<style lang="scss" scoped>
h2 {
  padding-left: 6.5rem;
  margin-bottom: 0;

  span {
    color: $mainColor;
  }
}
</style>
