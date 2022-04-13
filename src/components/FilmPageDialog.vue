<template>
  <div class="film__init" ref="film__init"></div>
</template>

<script>
export default {
  props: ['film_id'],
  methods: {
    mountInit(){
      setTimeout(()=> {
        let filmElem = document.createElement('div');
        filmElem.setAttribute('data-resize', '1');
        filmElem.setAttribute('data-tv', '1');
        filmElem.setAttribute('data-kinopoisk', this.film_id);
        filmElem.setAttribute('id', 'yohoho')

        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '//yohoho.cc/yo.js';

        this.$refs.film__init.appendChild(filmElem)
        this.$refs.film__init.appendChild(script)
      },10)
    }
  },
  mounted() {
    this.mountInit();
  },
  beforeUpdate() {
    this.$refs.film__init.innerHTML = '';
  },
  updated(){
    this.mountInit();
  }
}
</script>

<style scoped lang="scss">

.film__show {
  background: #5077bf;
  outline: none;
  padding: 20px 40px;
  color: #fff;
  border-radius: 10px;
  border: none;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: darken(#5077bf, 10%);
  }
}

</style>