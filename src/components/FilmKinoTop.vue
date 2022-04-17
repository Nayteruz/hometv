<template>
  <div>
    <div class="film__init" ref="film__init"></div>
  </div>
</template>

<script>
export default {
  methods: {
    kinoTopPlayer() {
      this.$refs.film__init.innerHTML = '';
      let filmElem = document.createElement('div');
      filmElem.setAttribute('data-kinopoisk', this.$route.params.id);
      filmElem.setAttribute('id', 'kinoplayertop')

      let script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = '//kinoplayer.top/top.js';

      this.$refs.film__init.appendChild(filmElem)
      this.$refs.film__init.appendChild(script)
      /* eslint-disable */
      setTimeout(()=>{
        runKinoplayertop();
      },500)

    },
  },
  mounted() {
    this.kinoTopPlayer();
  }
}
</script>

<style scoped>

</style>