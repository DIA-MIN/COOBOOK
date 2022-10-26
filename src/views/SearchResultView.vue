<template>
  <div>
    <div v-if="isLoading === false" class="msg">
      '<span>{{ searchData }}</span
      >'에 대한 검색 결과는 다음과 같습니다.<span
        >&nbsp;{{ recipes.length }}</span
      >건
    </div>
    <Loader v-if="isLoading === true" />
    <RecipeList v-if="isLoading === false" :recipes="recipes" types="search" />
  </div>
</template>
<script>
import RecipeList from '@/components/RecipeList.vue'
import Loader from '@/components/Loader.vue'
import axios from 'axios'

export default {
  components: {
    RecipeList,
    Loader
  },
  data() {
    return {
      isLoading: false,
      recipes: [],
      searchData: '',
      total: ''
    }
  },
  setup() {},
  created() {
    this.isLoading = true
    this.getRecipes()
  },
  computed: {
    searchData() {
      this.getRecipes()
      return this.$route.query.searchData
    }
  },
  methods: {
    async getRecipes() {
      try {
        this.isLoading = true
        const options = {
          method: 'GET',
          url: `https://openapi.foodsafetykorea.go.kr/api/${process.env.VUE_APP_API_KEY}/COOKRCP01/json/1/1000/RCP_NM=${this.$route.query.searchData}`
        }
        const response = await axios.request(options)
        console.log(response.data.COOKRCP01)
        this.total = response.data.COOKRCP01.total_count
        if (response.data.COOKRCP01.total_count !== '0') {
          this.recipes = [...response.data.COOKRCP01.row]
        } else {
          this.recipes = []
        }
        this.isLoading = false
      } catch (error) {
        console.log(error)
      }
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
