<template>
  <div>
    <Header />
    <Banner />
    <h2 v-if="isLoading === false">
      '<span>{{ searchData }}</span
      >'에 대한 검색 결과는 다음과 같습니다. <span>{{ recipes.length }}</span
      >건
    </h2>
    <Loader v-if="isLoading === true" />
    <RecipeList v-if="isLoading === false" :recipes="recipes" types="search" />
    <Footer />
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Banner from '@/components/Banner.vue'
import RecipeList from '@/components/RecipeList.vue'
import Loader from '@/components/Loader.vue'
import Footer from '@/components/Footer.vue'
import axios from 'axios'

export default {
  components: {
    Header,
    Banner,
    RecipeList,
    Loader,
    Footer
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
h2 {
  padding-left: 6.5rem;
  margin-bottom: 0;

  span {
    color: $mainColor;
  }
}
</style>
