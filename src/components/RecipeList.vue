<template>
  <div class="container">
    <ul class="list">
      <li
        v-for="recipe in paginatedData"
        :key="recipe.RCP_SEQ"
        @click="openModal(recipe)"
      >
        <div class="recipe_img">
          <div class="img_blur"></div>
          <img :data-lazy="recipe.ATT_FILE_NO_MAIN" v-lazyload />
          <font-awesome-icon
            icon="fa-solid fa-star"
            :class="
              scraps.length
                ? getScrapsSEQ.includes(recipe.RCP_SEQ)
                  ? 'icon_star clamp'
                  : 'icon_star'
                : 'icon_star'
            "
            @click.stop="
              scraps.length
                ? getScrapsSEQ.includes(recipe.RCP_SEQ)
                  ? delScrap(recipe)
                  : setScrap(recipe)
                : setScrap(recipe)
            "
          />
        </div>
        <span>{{ recipe.RCP_NM }}</span>
      </li>
    </ul>
    <div class="pagination" v-if="paginatedData.length">
      <button :disabled="page === 0" @click="prevPage">이전</button>
      <div class="page_info">
        <div v-if="totalPage !== 0">
          <span>{{ resetPage + 1 }}</span> / {{ totalPage }} 페이지
        </div>
        <div v-if="totalPage === 0">첫 페이지</div>
      </div>
      <button :disabled="page >= totalPage - 1" @click="nextPage">다음</button>
    </div>
    <RecipeDetail
      v-if="isClicked"
      @close-modal="isClicked = false"
      :recipe="recipe"
    />
  </div>
</template>
<script>
import RecipeDetail from '@/components/RecipeDetail.vue'

export default {
  name: 'RecipeList',
  components: { RecipeDetail },
  props: {
    recipes: {
      type: Array
    },
    types: {
      type: String
    }
  },
  data() {
    return {
      allRecipe: [],
      page: 0,
      pagePerItem: 30,
      isClicked: false,
      recipe: {},
      scraps: JSON.parse(localStorage.getItem('recipeScrap')) || []
    }
  },
  created() {
    if (this.types === 'scrap') {
      this.allRecipe = this.recipes
    }
  },
  computed: {
    totalPage() {
      const recipes =
        this.types === 'scrap'
          ? this.allRecipe
          : this.filterRecipe.length
          ? this.filterRecipe
          : this.recipes
      let recipeLeng = recipes.length
      let recipeSize = this.pagePerItem
      let page = Math.floor(recipeLeng / recipeSize)

      if (recipeLeng % recipeSize > 0) page += 1

      return page
    },
    paginatedData() {
      const recipes =
        this.types === 'scrap'
          ? this.allRecipe
          : this.filterRecipe.length
          ? this.filterRecipe
          : this.recipes
      const start = this.page * this.pagePerItem
      const end = start + this.pagePerItem

      return recipes.slice(start, end)
    },
    filterRecipe() {
      if (this.$store.state.COOK_WAY && this.$store.state.COOK_TYPE) {
        this.page = 0
        return this.recipes.filter(
          (recipe) =>
            recipe.RCP_WAY2 === this.$store.state.COOK_WAY &&
            recipe.RCP_PAT2 === this.$store.state.COOK_TYPE
        )
      } else if (this.$store.state.COOK_WAY) {
        this.page = 0
        return this.recipes.filter(
          (recipe) => recipe.RCP_WAY2 === this.$store.state.COOK_WAY
        )
      } else if (this.$store.state.COOK_TYPE) {
        this.page = 0
        return this.recipes.filter(
          (recipe) => recipe.RCP_PAT2 === this.$store.state.COOK_TYPE
        )
      }
      return []
    },
    resetPage() {
      if (this.$store.state.isReset) {
        this.page = 0
        this.$store.commit('setRest', false)
      }
      return this.page
    },
    getScrapsSEQ() {
      return this.scraps.map((scrap) => scrap.RCP_SEQ)
    }
  },
  methods: {
    prevPage() {
      this.page -= 1
    },
    nextPage() {
      this.page += 1
    },
    openModal(recipe) {
      this.recipe = recipe
      this.isClicked = true
    },
    setScrap(scrap) {
      this.scraps = [...this.scraps, scrap]
      localStorage.setItem('recipeScrap', JSON.stringify(this.scraps))
    },
    delScrap(scrap) {
      this.scraps = this.scraps.filter((item) => item.RCP_SEQ !== scrap.RCP_SEQ)
      this.allRecipe = this.allRecipe.filter(
        (item) => item.RCP_SEQ !== scrap.RCP_SEQ
      )
      localStorage.setItem('recipeScrap', JSON.stringify(this.scraps))
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 3rem;

  .list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    row-gap: 1rem;
    justify-content: center;
    padding: 3rem;

    li {
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      padding: 8px;
      border-radius: 10px;

      .recipe_img {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        .img_blur {
          display: none;
          position: absolute;
          border-radius: 10px;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.4);
          z-index: 1;
        }

        img {
          position: relative;
          width: 100%;
          border-radius: 10px;
        }

        .icon_star {
          display: none;
          position: absolute;
          color: white;
          font-size: 24px;
          top: 10px;
          right: 10px;
          z-index: 2;
        }

        .icon_star.clamp {
          color: $subColor;
        }
      }

      span {
        color: $mainTextColor;
        padding: 8px 0;
      }

      &:hover {
        transform: scale(1.1) translateY(-10px);
        transition: 0.4s ease;

        .recipe_img {
          .icon_star,
          .img_blur {
            display: block;
          }
        }
      }
    }
  }
  .pagination {
    color: $mainTextColor;
    display: flex;
    align-items: center;
    button {
      cursor: pointer;
      width: 70px;
      height: 45px;
      text-align: center;
      background-color: $subColor;
      border-radius: 10px;
      margin: 0 1.5rem;

      &:hover {
        background-color: $mainColor;
        color: white;
        transition: 0.3s ease;
      }
    }

    .page_info {
      text-align: center;
      width: 110px;
      span {
        color: $mainColor;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .container {
    .list {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      padding: 2rem;

      li {
        .icon_star {
          font-size: 14px;
        }

        .icon_star.clamp {
          color: $subColor;
        }
      }

      span {
        font-size: 14px;
      }
    }
  }
  .pagination {
    button {
      width: 60px;
      height: 35px;
      margin: 0 1.25rem;
    }

    .page_info {
      width: 110px;
      font-size: 14px;
    }
  }
}

@media screen and (max-width: 500px) {
  .container {
    .list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      padding: 2rem;
    }
  }
}
</style>
