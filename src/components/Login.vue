<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

// Router 사용
const router = useRouter();

// 상태 관리
const loginData = ref({ email: '', password: '' }); // 이메일 및 비밀번호
const inputType = ref('password'); // 비밀번호 입력 타입
const beforeImg = 'https://cdn-icons-png.flaticon.com/128/7578/7578269.png'; // 안 보일 때
const afterImg = 'https://cdn-icons-png.flaticon.com/128/158/158746.png'; // 보일 때
const imgUrl = ref(beforeImg); // 아이콘 URL

// 비밀번호 보이기/숨기기
const toggleInputType = () => {
  inputType.value = inputType.value === 'password' ? 'text' : 'password';
  imgUrl.value = imgUrl.value === beforeImg ? afterImg : beforeImg;
};

// 로그인 로직
const onSubmit = async () => {
  try {
    if (loginData.value.email !== '' && loginData.value.password !== '') {
      const res = await axios.post('http://98.82.78.128/auth/login', {
        email: loginData.value.email,
        password: loginData.value.password,
      });

      if (res && res.data) {
        localStorage.setItem('ACCESS_TOKEN', res.data.accessToken);
        localStorage.setItem('REFRESH_TOKEN', res.data.refreshToken);
        alert('로그인 성공');
        router.push('/Main'); // 페이지 이동
      }
    } else {
      alert('비번 또는 계정을 꼭 작성하세요.');
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
        <h1 style="font-weight: 400">로그인</h1>

        <!-- 이메일 입력 -->
        <div class="input-box-wrap">
          <p>아이디</p>
          <input
            placeholder="아이디를 입력하세요"
            name="email"
            v-model="loginData.email"
          />
          <img
            src="/public/images/email.png"
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
            v-model="loginData.password"
          />
          <img
            src="/public/images/mdi_password.png"
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
          <button @click="onSubmit" class="submit-button">로그인</button>
          <p>
            계정이 없다면?
            <router-link to="/Signup" style="color: rgba(88, 192, 154, 1)">
              회원가입
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
