<script setup>
import Sidebar from './Sidebar.vue';
import { ref } from 'vue/dist/vue.js';

const mainDataWrapHeight = ref(400);
const liCount = ref(0);
for(let i = 0; i < liCount+1; i++){
    if(liCount > 2){
        mainDataWrapHeight.value += 200;
    }
  
}
</script>


<template>
    <div style="display: flex;">
        <Sidebar />
        <div class="wrap">
            <div class="banner"></div>

            <div class="bookmark-list">
                <div class="bookmark-text-wrap">
                    <h1 class="bookmark-text">북마크</h1>
                    <button class="plus-button">+</button>
                </div>

                <div class="main-data-wrap" :style="{height:mainDataWrapHeight}">
                    <div class="main-data">
                        <h2 class="main-data-text">구글</h2>
                        <h2 class="link-text">바로가기</h2>
                    
                    </div>
<!-- 
                    <div class="main-data">
                        <h2 class="main-data-text">네이버</h2>
                        <h2 class="link-text">바로가기</h2>
                    
                    </div>
                  
                    <div class="main-data">
                        <h2 class="main-data-text">유튜브</h2>
                        <h2 class="link-text">바로가기</h2>
                    
                    </div> -->
                
                  
                
                </div>

            </div>
        </div>
    </div>
</template>




<style scoped>
.wrap{
    display: flex;
    width:calc(100vw - 292px);
    height:100vh;
    align-items: center;
    flex-direction: column;
}
.banner{
    width:70vw;
    height:26vh;
    border: 1px solid;
    margin-top:40px;
    border-radius: 14px;
    border:none;
    background-image: url('/Users/yongjin/Desktop/동아리_프로젝트(리엑트)/front/public/Frame 2.png');
    background-image: cover;
}
.bookmark-list{
    width:70vw;
    height:60vh;
    border: 1px solid;
    margin-top:30px;
    border-radius: 14px;
    border:none;
    box-shadow: 0px 0px 6px 5px whitesmoke;
    overflow-y: scroll;
    overflow-x:hidden;
}

.bookmark-text-wrap{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width:70vw;
    height:7.5vh;
    margin-top:10px;
}
.plus-button{
    background: none;
    border: none;
    font-size:40px;
    margin-right: 30px;
}
.bookmark-text{
    margin-left:30px;
}
.main-data-wrap{
    display: flex;
    align-items: center;
    flex-direction: column;
    width:70vw;
    height:400px;
}
.main-data{
    width:50vw;
    height:20vh;
    border:none;
    box-shadow: 0px 0px 6px 5px whitesmoke;
    border-radius: 14px;
    margin:15px;
}

.main-data-text{
    margin-left:30px;
}

.link-text{
    margin-top:70px;
    margin-left:600px;
    font-weight: 400;
}

</style>