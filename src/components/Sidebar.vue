<script setup></script>



<template>
    <div>
        <div class="sidebar">
          <h1 class="logoText">B.P</h1>
          <div class="wrap-link-button">
            <img src="#" alt="아이콘 넣어야 함">
            <h1>북마크 </h1>
          </div>
        </div>
    </div>

       
</template>




<style scoped>
.sidebar{
    height: 100vh;
    width:292px;
    background-color: rgba(134, 182, 239, 1);
    border:1px solid rgba(134, 182, 239, 1);
}
.logoText{
    font:bold;
    color:white;
    margin-left:30px;
}
.wrap-link-button{
    display: flex;
    flex-direction: row;
    margin-top:30px;
    border: 1px solid;
    width: 220px;
    height:65px;
    margin-left:70px;
    border-radius:25px 0px 0px 25px;
}
</style>