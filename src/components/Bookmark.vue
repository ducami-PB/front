<script setup>
import { useRouter } from 'vue-router';
import Sidebar from './Sidebar.vue';
import { ref } from 'vue';
import axios from 'axios';

const router = useRouter()

const info = ref({
    title:'',
    url:'',
    memo:''
})

const handleForm =(e) => { // 받아온 값마다 지정돼있는 name을 loginData에서 찾아 그에 맞는 값을(value) 추가함
        const {name, value} = e.target;
        info.value = {...info.value, [name]: value};
    }

const  Authorization = () => {
    let token = localStorage.getItem('ACCESS_TOKEN');
  if (token === 'undefined' || token === null) {
    return '로그인이 필요합니다.'
    //   await RefreshToken();
    //   token = localStorage.getItem('ACCESS_TOKEN'); // token변수에 새롭게 저장된 토큰을 넣음.
  }

  if (token) {
      return '인증성공';
  } else {
      return '인증실패';
  }
}

const onSubmit = async () => {
    try{
        const authorization = await Authorization();
        const {title, url, memo} = info.value;
        const token = localStorage.getItem('ACCESS_TOKEN');

        if(authorization !== '로그인이 필요합니다.'){
            console.log(title, url, memo)
            const res = await axios.post('http://localhost:7777/supabase/create', {
                title:title,
                url:url,
                memo:memo
            },{
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
            })
            if(res){
                alert('요청 성공!?');
                router.push('/');
            } else{
                alert('요청 실패');
            }
        }else{
            alert('로그인이 필요합니다.');
            router.push('/Login');
        }
    } catch{
        alert('네트워크 에러');
    }
  
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
                        name="title"
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
                    name="memo"
                    @input="handleForm"
                ></textarea>

                <button 
                    class="submit-button" 
                    @click="onSubmit"
                >
                추가</button>
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
    padding-top:20px;

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