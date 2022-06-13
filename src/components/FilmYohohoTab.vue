<template>
  <div>
    <div class="film__init" ref="player_init_item"></div>
  </div>
</template>

<script>
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";

export default {
  name: 'FilmYohohoTab',
  setup(){
    const route = useRoute();
    const player_init_item = ref(null);

    function yohohoPlayer(el){
      let filmElem = document.createElement('div');
      filmElem.setAttribute('data-resize', '1');
      filmElem.setAttribute('data-tv', '1');
      filmElem.setAttribute('data-kinopoisk', route?.params?.id);
      filmElem.setAttribute('id', 'yohoho')

      let script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = '//yohoho.cc/yo.js';

      el.value.appendChild(filmElem)
      el.value.appendChild(script)
    }

    onMounted(()=>{
      yohohoPlayer(player_init_item);
    })
    return {
      player_init_item
    }
  }
}
</script>