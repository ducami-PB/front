<script setup>
import Sidebar from './Sidebar.vue';
import { ref, computed } from 'vue';

const liCount = ref(0);
const urlInfo = ref('');

const mainDataWrapHeight = computed(() => {
  const baseHeight = 400;
  const additionalHeightPerItem = 200;
  return liCount.value > 2 
    ? baseHeight + (liCount.value - 2) * additionalHeightPerItem
    : baseHeight;
});

const addListItem = () => {
  urlInfo.value = prompt('무슨 사이트 인가요');
  liCount.value++;
  console.log(liCount.value);
};
</script>

<template>
  <div style="display: flex;">
    <Sidebar />
    <div class="wrap">
      <div class="banner"></div>

      <div class="bookmark-list">
        <div class="bookmark-text-wrap">
          <h1 class="bookmark-text">북마크</h1>
          <button class="plus-button" @click="addListItem">+</button>
        </div>

        <div class="main-data-wrap" :style="{ height: mainDataWrapHeight + 'px' }">
          <div class="main-data" v-for="n in liCount" :key="n">
            <h2 class="main-data-text">{{ urlInfo }}</h2>
            <h2 class="link-text">바로가기</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrap {
  display: flex;
  width: calc(100vw - 292px);
  height: 100vh;
  align-items: center;
  flex-direction: column;
}
.banner {
  width: 70vw;
  height: 26vh;
  margin-top: 40px;
  border-radius: 14px;
  background-image: url('/Users/yongjin/Desktop/동아리_프로젝트(리엑트)/front/public/Frame 2.png');
  background-size: cover;
}
.bookmark-list {
  width: 70vw;
  height: 60vh;
  margin-top: 30px;
  border-radius: 14px;
  box-shadow: 0px 0px 6px 5px whitesmoke;
  overflow-y: scroll;
}
.bookmark-text-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70vw;
  height: 7.5vh;
  margin-top: 10px;
}
.plus-button {
  background: none;
  border: none;
  font-size: 40px;
  margin-right: 30px;
}
.main-data-wrap {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 70vw;
}
.main-data {
  width: 50vw;
  height: 20vh;
  box-shadow: 0px 0px 6px 5px whitesmoke;
  border-radius: 14px;
  margin: 15px;
}
.main-data-text,.bookmark-text {
  margin-left: 30px;
}
.link-text {
  margin-top: 70px;
  margin-left: 600px;
}
</style>
