console.time('Initialize'); // eslint-disable-line no-console
import '@babel/polyfill';
import Theme from '@services/theme';
import Vuelidate from 'vuelidate'
import Money from 'v-money';
import App from '@app/index.js';
import main from '@components/main';

Vue.use(Vuelidate);
Vue.use(Money, {precision: 2});

const app = new App(),
	vm = new Vue(main());

app.init(() => {
	Theme.init();
	vm.$mount('#app');
	console.timeEnd('Initialize'); // eslint-disable-line no-console
});
