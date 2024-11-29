<script setup>
import { ref } from 'vue';

const sidebarTextColor = ref('white');
const sidebarImgSrc = ref('public/Group 5.png');
const sidebarBackground = ref('rgba(134, 182, 239, 1');

const onHandlerImgText = () => {
  sidebarTextColor.value = 'rgba(134, 182, 239, 1)';
  sidebarImgSrc.value = 'public/Group 6.png';
  sidebarBackground.value = 'white';
};

const onMouseOutHandler = () => {
  sidebarTextColor.value = 'white';
  sidebarImgSrc.value = 'public/Group 5.png';
  sidebarBackground.value = 'rgba(134, 182, 239, 1';
};

</script>

<template>
  <div>
    <div class="sidebar">
      <h1 class="logoText">b.p</h1>
      <button 
        class="wrap-link-button" 
        @mouseover="onHandlerImgText" 
        @mouseleave="onMouseOutHandler"
         :style='{backgroundColor: sidebarBackground}'
        >
       
        <img 
          :src="sidebarImgSrc"
          alt="아이콘 넣어야 함"
          class="sidebar-img"
        >
        <h1 
          class="sidebarText" 
          :style="{ color: sidebarTextColor }"
        >
          북마크
        </h1>
      </button>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  height: 100vh;
  width: 292px;
  background-color: rgba(134, 182, 239, 1);
  border: 1px solid rgba(134, 182, 239, 1);
}

.logoText {
  font: bold;
  color: white;
  margin-left: 30px;
}

.wrap-link-button {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
  width: 200px;
  height: 65px;
  margin-left: 90px;
  border-radius: 25px 0px 0px 25px;
  background-color: rgba(134, 182, 239, 1);
  border: none;
}

.sidebarText {
  color: white;
}

.sidebar-img {
  width: 3.8vw;
  height: 6.5vh;
  margin-right: 25px;
}
</style>
