<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{ data }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: {}
    }
  },
  mounted () {
    // 載入環境變數
    console.log(import.meta.env.VITE_TEXT)
    // 取出路徑
    const url = import.meta.env.VITE_PATH
    // 取得遠端陣列
    this.$http.get(url)
    .then((res) => {
      console.log(res)
      this.data = res.data.results[0]
      console.log(this.data)
    })
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
