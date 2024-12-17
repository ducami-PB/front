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
  name: '',
  number: '',
});

// 비밀번호 보이기/숨기기 상태
const inputType = ref('password');
const imgUrl = ref('https://cdn-icons-png.flaticon.com/128/7578/7578269.png'); // 기본: 안 보임
const beforeImg = 'https://cdn-icons-png.flaticon.com/128/7578/7578269.png';
const afterImg = 'https://cdn-icons-png.flaticon.com/128/158/158746.png';

// 비밀번호 토글 함수
const toggleInputType = () => {
  inputType.value = inputType.value === 'password' ? 'text' : 'password';
  imgUrl.value = imgUrl.value === beforeImg ? afterImg : beforeImg;
};

// 회원가입 처리 함수
const onSubmit = async () => {
  try {
    const { email, password, name, number } = info.value;

    if (email && password && name && number) {
      const res = await axios.post('http://localhost:7777/supabase/signUp', { // 서버 링크 바꿔야 함
        email: info.email,
        password: info.password ,
        name: info.name,
        number: info.number,
      });

      if (res && res.data) {
        alert('회원가입 성공');
        router.push('/Login'); // 로그인 페이지로 이동
      }
    } else {
      alert('모두 작성해주세요.');
    }
  } catch (error) {
    console.error(error);
    alert('네트워크 에러!!!!!!!?!?!');
  }
};
</script>

<template>
  <div class="wrap">
    <div class="logo-box"></div>
    <div class="login-box-wrap">
      <div class="login-box">
        <h1 style="font-weight: 400">회원가입</h1>

        <!-- 이메일 입력 -->
        <div class="input-box-wrap">
          <p>아이디</p>
          <input
            v-model="info.email"
            placeholder="아이디를 입력하세요"
            name="email"
            class="input"
          />
          <img
            src="/email.png"
            class="input-icon"
          />
        </div>

        <!-- 비밀번호 입력 -->
        <div class="input-box-wrap">
          <p>비밀번호</p>
          <input
            :type="inputType"
            v-model="info.password"
            placeholder="비밀번호를 입력하세요"
            name="password"
            class="input"
          />
          <img
            src="/mdi_password.png"
            class="input-icon"
          />
          <img
            :src="imgUrl"
            @click="toggleInputType"
            class="toggle-password-icon"
          />
        </div>

        <!-- 학번 입력 -->
        <div class="input-box-wrap">
          <p>학번</p>
          <input
            v-model="info.number"
            placeholder="학번을 입력해주세요"
            name="number"
            class="input"
          />
          <img
            src="/name_grade.png"
            class="input-icon"
          />
        </div>

        <!-- 이름 입력 -->
        <div class="input-box-wrap">
          <p>이름</p>
          <input
            v-model="info.name"
            placeholder="이름를 입력하세요"
            name="name"
            class="input"
          />
          <img
            src="/name_grade.png"
            class="input-icon"
          />
        </div>

        <!-- 버튼 및 링크 -->
        <div class="input-box-wrap">
          <button class="submit-button" @click="onSubmit">
            회원가입
          </button>
          <p>
            계정이 있다면?
            <router-link to="/Login" class="signup-link">
              로그인
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
*{
  padding:0px;
}
.wrap {
    display:flex;
    flex-direction:row;
    width:95vw;
    height:100vh;
    justify-content:center;

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
  width: 30vw;
  height: 60vh;
  margin-bottom: 180px;
  margin-left:20px;
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
