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

if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('../sw.js')
		.then(serviceWorker => {
			console.table(serviceWorker);
		})
		.catch(error => {
			console.log('Error registering the Service Worker: ' + error);
		});
}

app.init(() => {
	Theme.init();
	vm.$mount('#app');
});
