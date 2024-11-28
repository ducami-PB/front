<script setup></script>



<template>
    <div>
        <div class="sidebar">
          <h1 class="logoText">b.p</h1>
          <div class="wrap-link-button">
            <img 
                src="https://cdn-icons-png.flaticon.com/128/8138/8138580.png"
                alt="아이콘 넣어야 함"
                class="sidebar-img"
                >
            <h1 class="sidebar-text">북마크 </h1>
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
    align-items: center;
    margin-top:30px;
    width: 200px;
    height:65px;
    margin-left:90px;
    border-radius:25px 0px 0px 25px;
}
.sidebar-text{
    color:white;

}
.sidebar-img{
    width:3.4vw;
    height:5.5vh;
    margin-right:25px;
}
</style>