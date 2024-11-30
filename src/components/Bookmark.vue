<script setup>
import Sidebar from './Sidebar.vue';
import { ref } from 'vue';

const info = ref({})

const handleForm =(e) => { // 받아온 값마다 지정돼있는 name을 loginData에서 찾아 그에 맞는 값을(value) 추가함
        const {name, value} = e.target;
        info.value = {...info.value, [name]: value};
        console.log(info.value);
    }


</script>



<template>
    <div style="display: flex;">
        <Sidebar />
        <div class="wrap">
            <h1 class="main-text">북마크 추가</h1>
            <div class="br"></div>
            <div class="input-box-wrap1">

                <div class="input-box">
                    <h2 class="input-text">이름</h2>
                        <input 
                        class="input" 
                        placeholder="북마크의 이름을 입력해주세요"
                        name="Name"
                        @input="handleForm"
                    />
                </div>

                <div class="input-box">
                    <h2 class="input-text">링크주소</h2>
                    <input 
                        class="input"
                        placeholder='북마크의 주소를 입력해주세요' 
                        name="url"
                        @input="handleForm"
                    />
                </div>
               
            </div>
            <div class="input-box-wrap2">
                <h2 class="input-text">내용</h2>
                <textarea 
                    class="textarea" 
                    placeholder="북마크의 내용을 입력해주세요"
                    name="reason"
                    @input="handleForm"
                ></textarea>

                <button class="submit-button">추가</button>
            </div>
        </div>
    </div>

</template>




<style scoped>
.wrap {
  display: flex;
  width: calc(100vw - 292px);
  height: 100vh;
  flex-direction: column;
}
.main-text{
    color:rgba(99, 170, 255, 1);
    margin-left: 60px;
    margin-top:58px;
    margin-bottom: 10px;;
}
.br{
    width:1000px;
    height:0.1px;
    margin-left: 60px;
    border: 1px solid rgba(217, 217, 217, 1);
}
.input-box-wrap1{
    display: flex;
    flex-direction: row;
    width:1000px;
    height:130px;
    margin-left: 60px;
    margin-top: 40px;
}
.input-box{
    width:500px;
    height:170px;
}
.input-text{
    color: rgba(134, 182, 239, 1);
    margin-left: 10px;
}
.input{
    width:391px;
    height:65px;
    box-shadow: 0px 0px 5px 5px whitesmoke;
    border:none;
    border-radius: 15px;
    margin-left: 40px;
    padding-left: 10px;
}

.input-box-wrap2{
    width:1000px;
    height:1200px;
    margin-left:60px;
}
.textarea{
    width:874px;
    height:254px;
    margin-left:30px;
    box-shadow: 0px 0px 5px 5px whitesmoke;
    border:none;
    border-radius: 15px;
    margin-top:20px;
    padding-left:40px;
    padding-top:10px;

}
.submit-button{
    width:132px;
    height:62px;
    background-color: rgba(134, 182, 239, 1);
    border:none;
    border-radius: 10px;
    margin-left: 880px;
    margin-top: 50px;
    color:white;

}
</style>