import '@babel/polyfill';
import Theme from '@services/theme';
import Vuelidate from 'vuelidate';
import Money from 'v-money';
import VueGtm from 'vue-gtm';
import App from '@app/index.js';
import main from '@components/main';
import router from '@router';

Vue.use(Vuelidate);
Vue.use(Money, {precision: 2});
Vue.use(VueGtm, {
	id: 'GTM-WK8WT72',
	loadScript: true,
	vueRouter: router
});

const app = new App(),
	vm = new Vue(main());

if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./sw.js')
		.catch(error => {
			console.log('Error registering the Service Worker: ' + error);
		});
}

app.init(() => {
	Theme.init();
	vm.$mount('#app');
});
