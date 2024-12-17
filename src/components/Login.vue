<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

// Router 사용
const router = useRouter();

// 상태 관리
const info = ref({
  email: '',
  password: '',
});

// 비밀번호 보이기/숨기기 상태
const inputType = ref('password');
const imgUrl = ref('https://cdn-icons-png.flaticon.com/128/7578/7578269.png'); // 기본: 안 보임
const beforeImg = 'https://cdn-icons-png.flaticon.com/128/7578/7578269.png';
const afterImg = 'https://cdn-icons-png.flaticon.com/128/158/158746.png';

//상태 관리 함수
const handleForm =(e) => { // 받아온 값마다 지정돼있는 name을 loginData에서 찾아 그에 맞는 값을(value) 추가함
        const {name, value} = e.target;
        info.value = {...info.value, [name]: value};
    }

// 비밀번호 토글 함수
const toggleInputType = () => {
  inputType.value = inputType.value === 'password' ? 'text' : 'password';
  imgUrl.value = imgUrl.value === beforeImg ? afterImg : beforeImg;
};

// 로그인 처리 함수
const onSubmit = async () => {
  const {email, password} = info.value;
  try {
    if (email && password) {
      const res = await axios.post('http://localhost:7777/supabase/signIn', {
        email: email,
        password: password,
      });
      

      if (res && res.data) {
        alert('로그인 성공');
        localStorage.setItem('ACCESS_TOKEN', res.data);
        router.push('/'); // 메인 페이지로 이동
      }
    } else {
      alert('모두 작성해주세요.');
    }
  } catch (error) {
    console.error(error);
    alert('로그인 실패');
  }
};
</script>

<template>
  <div class="wrap">
    <div class="logo-box"></div>
    <div class="login-box-wrap">
      <div class="login-box">
        <h1 style="font-weight: 400">로그인</h1>

        <!-- 이메일 입력 -->
        <div class="input-box-wrap">
          <p>아이디</p>
          <input
            placeholder="아이디를 입력하세요"
            name="email"
            class="input"
            @input="handleForm"
          />
          <img
            src="/Users/yongjin/Desktop/동아리_프로젝트(리엑트)/front/public/email.png"
            style="
              position: absolute;
              width: 1.6vw;
              height: 3vh;
              margin-top: 64px;
              margin-left: 10px;

            "
          />
        </div>

        <!-- 비밀번호 입력 -->
        <div class="input-box-wrap">
          <p>비밀번호</p>
          <input
            :type="inputType"
            placeholder="비밀번호를 입력하세요"
            name="password"
            class="input"
            @input="handleForm"
          />
          <img
            src="/Users/yongjin/Desktop/동아리_프로젝트(리엑트)/front/public/mdi_password.png"
            style="
              position: absolute;
              width: 1.7vw;
              height: 3vh;
              margin-top: 64px;
              margin-left: 10px;
              
            "
         
          />
          <img
            :src="imgUrl"
            style="
              position: absolute;
              width: 1.6vw;
              height: 3vh;
              margin-top: 66px;
              margin-left: 28vw;
            "
            @click="toggleInputType"
          />
        </div>

        <!-- 로그인 버튼 및 회원가입 링크 -->
        <div class="input-box-wrap">
          <button class="submit-button" @click="onSubmit">로그인</button>
          <p>
            계정이 없다면?
            <router-link to="/Signup" style="color:rgba(134, 182, 239, 1)">
              회원가입
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrap {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;

}

.logo-box {
  width: 50vw;
  height: 100vh;
  background-image: url('/Users/yongjin/Desktop/동아리_프로젝트(리엑트)/front/public/loginimg.png');
  background-size:50vw 55vw ;
}

.login-box-wrap {
  display: flex;
  align-items: center;
  width: 50vw;
  height: 100vh;
  justify-content: center;
}

.login-box {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30vw;
  height: 60vh;
}

.input-box-wrap {
  display: flex;
  flex-direction: column;
  width: 28vw;
  height: 17vh;
}

.input {
  width: 27.5vw;
  height: 6.5vh;
  border-radius: 16px;
  border: none;
  box-shadow: 0px 0px 3px 2.5px rgba(237, 237, 237, 1);
  padding-left: 45px;
}

.input-icon {
  position: absolute;
  width: 1.6vw;
  height: 3vh;
  margin-top: 64px;
  margin-left: 10px;
}

.toggle-password-icon {
  position: absolute;
  width: 1.6vw;
  height: 3vh;
  margin-top: 66px;
  margin-left: 28vw;
}

.submit-button {
  display: flex;
  width: 31vw;
  height: 10vh;
  border-radius: 16px;
  border: 1px rgba(134, 182, 239, 1);
  background-color: rgba(134, 182, 239, 1);
  margin-top: 30px;
  color: white;
  justify-content: center;
  align-items: center;
}

.label {
  color: rgba(136, 136, 136, 1);
}

.register-text {
  margin-top: 20px;
}

.signup-link {
  color:rgba(134, 182, 239, 1);
}
</style>
