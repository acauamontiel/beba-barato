import register from '@modules/register';

register();

Vue.use(VueRouter);

export const routes = [
	{
		path: '/',
		name: 'home',
		component: Vue.component('home'),
		meta: {
			title: 'Home'
		}
	},
	{
		path: '/add',
		name: 'add',
		component: Vue.component('add'),
		meta: {
			title: 'Adicionar'
		}
	},
	{
		path: '/edit/:id',
		name: 'edit',
		component: Vue.component('add'),
		meta: {
			title: 'Editar'
		}
	},
	{
		path: '/settings',
		name: 'settings',
		component: Vue.component('settings'),
		meta: {
			title: 'Configurações'
		}
	},
	{
		path: '/about',
		name: 'about',
		component: Vue.component('about'),
		meta: {
			title: 'Sobre'
		}
	}
];

const router = new VueRouter({
	mode: 'hash',

	scrollBehavior() {
		return {
			x: 0,
			y: 0
		};
	},

	routes
});

export default router;
