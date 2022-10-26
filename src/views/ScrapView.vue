<template>
  <div class="home">
    <div v-if="recipes.length < 1" class="msg">스크랩된 레시피가 없습니다.</div>
    <RecipeList :recipes="recipes" types="scrap" />
  </div>
</template>
<script>
import RecipeList from '@/components/RecipeList.vue'

export default {
  components: {
    RecipeList
  },
  data() {
    return {
      recipes: JSON.parse(localStorage.getItem('recipeScrap')) || []
    }
  }
}
</script>
<style lang="scss" scoped>
.msg {
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    color: $mainColor;
  }
}
</style>
