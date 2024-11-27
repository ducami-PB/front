<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// Router 사용
const router = useRouter();
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
            placeholder="아이디를 입력하세요"
            name="email"
            class="input"
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
          />
        </div>
        <div class="input-box-wrap">
          <p>학번</p>
          <input
            placeholder="학번을 입력해주세요"
            name="number"
            class="input"
          />
          <img
            src="/Users/yongjin/Desktop/동아리_프로젝트(리엑트)/front/public/name_grade.png"
            style="
              position: absolute;
              width: 1.6vw;
              height: 3vh;
              margin-top: 64px;
              margin-left: 10px;

            "
          />
        </div>
        <div class="input-box-wrap">
          <p>이름</p>
          <input
            placeholder="이름를 입력하세요"
            name="name"
            class="input"
          />
          <img
            src="/Users/yongjin/Desktop/동아리_프로젝트(리엑트)/front/public/name_grade.png"
            style="
              position: absolute;
              width: 1.6vw;
              height: 3vh;
              margin-top: 64px;
              margin-left: 10px;

            "
          />
        </div>

        <!-- 로그인 버튼 및 회원가입 링크 -->
        <div class="input-box-wrap">
          <button class="submit-button">로그인</button>
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
