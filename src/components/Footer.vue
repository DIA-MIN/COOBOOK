<template>
  <div class="container">
    Copyright ⓒ 2022 Park Min Seok. All Rights Reserved.
  </div>
</template>
<script>
export default {
  name: 'Footer'
}
</script>
<style lang="scss" scoped>
.container {
  color: $mainTextColor;
  border-top: 3px solid transparent;
  border-image: linear-gradient(to right, $mainColor, $subColor);
  border-image-slice: 1;
  background-color: white;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 500px) {
  .container {
    font-size: 12px;
  }
}
</style>
