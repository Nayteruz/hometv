<template>
  <ul class="tab-titles">
    <li :class="{selected:playerNum===1}" @click="playerNum = 1">Плеер 1</li>
    <li :class="{selected:playerNum===2}" @click="playerNum = 2">Плеер 2</li>
  </ul>
  <FilmYohohoTab v-if="playerNum===1" />
  <FilmKinoTop v-if="playerNum===2" />
</template>

<script>
import FilmYohohoTab from "@/components/FilmYohohoTab.vue";
import FilmKinoTop from "@/components/FilmKinoTop.vue";
export default {
  components: {FilmYohohoTab, FilmKinoTop},
  data(){
    return {
      playerNum:1,
    }
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
.tab-titles {
  display: flex;
  align-items: center;
  gap:5px;
  padding: 0;
  margin:0 0 10px 0;
  list-style: none;
  li {
    padding: 10px 20px;
    cursor: pointer;
    background:#2c4f91;
    border-radius: 5px;
    &.selected, &:hover {
      background:#071f3a;
    }
  }
}

</style>