import { createApp } from 'vue';
import App from './App.vue';
import router from './components/router'; // 라우터 들고옴

// 이 코드가 Vue 3 방식임
createApp(App)
  .use(router).mount('#app')
//   .mount('#app');
