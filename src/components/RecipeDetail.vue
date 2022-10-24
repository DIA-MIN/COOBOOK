<template>
  <div class="modal_wrapper">
    <div class="modal">
      <font-awesome-icon
        icon="fa-solid fa-square-xmark"
        class="icon_close"
        @click="$emit('close-modal')"
      />
      <div class="submary">
        <img :src="recipe.ATT_FILE_NO_MK" alt="recipe_detail_img" />
        <h2>{{ recipe.RCP_NM }} 레시피</h2>
      </div>
      <div class="info">
        <span class="info_title">영양 정보</span>
        <ul class="list_info">
          <li>
            <span>열량</span>
            <span>{{ recipe.INFO_ENG }}</span>
          </li>
          <li>
            <span>탄수화물</span>
            <span>{{ recipe.INFO_CAR }}</span>
          </li>
          <li>
            <span>단백질</span>
            <span>{{ recipe.INFO_PRO }}</span>
          </li>
          <li>
            <span>지방</span>
            <span>{{ recipe.INFO_FAT }}</span>
          </li>
          <li>
            <span>나트륨</span>
            <span>{{ recipe.INFO_NA }}</span>
          </li>
        </ul>
      </div>
      <div class="ingredient">
        <span class="ingredient_title">필요한 재료</span>
        <ul class="list_ingredient">
          <li v-for="ingredient in getRecipeDetail" :key="ingredient">
            <span>{{ ingredient }}</span>
          </li>
        </ul>
      </div>
      <div class="process">
        <span class="process_title">조리 과정</span>
        <ul class="list_process">
          <li v-for="manual in getManual" :key="manual">
            <img :src="manual.img" alt="manual_img" />
            <span>{{ manual.explain }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    recipe: {
      type: Object
    }
  },
  data() {
    return {}
  },
  setup() {},
  created() {
    console.log(this.recipe)
  },
  mounted() {},
  unmounted() {},
  computed: {
    getRecipeDetail() {
      return this.recipe.RCP_PARTS_DTLS.replaceAll('\n', ',')
        .replaceAll(',,', ',')
        .replaceAll('),', ').')
        .split('.')
        .filter((detail) => detail.includes('('))
        .map((detail) => (detail[0] === ' ' ? detail.replace(' ', '') : detail))
    },
    getManual() {
      const manuals = []
      const manualImgs = []
      const process = []
      Object.keys(this.recipe)
        .filter((atr) => atr.includes('MANUAL'))
        .filter((manual) => this.recipe[manual])
        .sort()
        .forEach((manual) => {
          manual.includes('MANUAL_IMG')
            ? manualImgs.push(manual)
            : manuals.push(manual)
        })

      for (let manual = 0; manual < manuals.length; manual++) {
        process.push({
          explain: this.recipe[manuals[manual]],
          img: this.recipe[manualImgs[manual]]
        })
      }
      // console.log(manuals, manualImgs)
      return process
    }
  }
}
</script>
<style lang="scss" scoped>
.modal_wrapper {
  width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 15;
  background-color: rgba(0, 0, 0, 0.4);

  .modal {
    @extend .scroll;
    display: flex;
    padding: 1.5rem;
    flex-direction: column;
    width: 900px;
    height: 650px;
    border-radius: 10px;
    background-color: white;
    overflow: auto;
    align-items: center;

    .icon_close {
      position: sticky;
      top: 0;
      cursor: pointer;
      align-self: flex-end;
      font-size: 30px;
      color: $mainColor;

      &:hover {
        transform: scale(1.2);
        transition: 0.4s ease;
      }
    }

    .submary {
      position: relative;
      padding: 1.5rem 0;
      img {
        width: 600px;
        height: 400px;
        border-radius: 10px;
      }

      h2 {
        position: absolute;
        top: 30px;
        color: white;
        background: $mainColor;
        padding: 1rem;
        border-top-right-radius: 15px;
        // border-bottom-right-radius: 5px;
      }
    }

    .info {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: $mainTextColor;
      margin-bottom: 3rem;

      .info_title {
        font-size: 24px;
        padding-bottom: 5px;
        border-bottom: 5px solid $mainColor;
        margin-bottom: 20px;
      }

      .list_info {
        display: flex;
        li {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 1rem;
          margin: 0 10px;
          // background-color: $subColor;
          border: 3px solid $mainColor;
          border-radius: 20px;

          span {
            &:last-child {
              color: $mainColor;
              margin-top: 5px;
              border-radius: 10px;
            }
          }
        }
      }
    }

    .ingredient {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 3rem;

      .ingredient_title {
        font-size: 24px;
        padding-bottom: 5px;
        border-bottom: 5px solid $mainColor;
        margin-bottom: 20px;
      }

      .list_ingredient {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        column-gap: 15px;
        row-gap: 15px;

        li {
          color: $mainTextColor;
          text-align: center;
        }
      }
    }

    .process {
      display: flex;
      flex-direction: column;
      align-items: center;

      .process_title {
        font-size: 24px;
        padding-bottom: 5px;
        border-bottom: 5px solid $mainColor;
        margin-bottom: 20px;
      }

      .list_process {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        li {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1rem 0;
          width: 550px;

          img {
            // width: 300px;
            // height: 300px;
            width: 100%;
            border-radius: 10px;
            margin-bottom: 10px;
          }

          span {
            color: $mainTextColor;
            font-size: 20px;
          }
        }
      }
    }
  }
}
</style>
