<template>
  <div>
    <div class="film__init" ref="film__init"></div>
  </div>
</template>

<script>
export default {
  methods:{
    yohohoPlayer(){
      let filmElem = document.createElement('div');
      filmElem.setAttribute('data-resize', '1');
      filmElem.setAttribute('data-tv', '1');
      filmElem.setAttribute('data-kinopoisk', this.$route.params.id);
      filmElem.setAttribute('id', 'yohoho')

      let script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = '//yohoho.cc/yo.js';

      this.$refs.film__init.appendChild(filmElem)
      this.$refs.film__init.appendChild(script)
    },
  },

  mounted() {
    this.yohohoPlayer();
  }
}
</script>

<style scoped>

</style>