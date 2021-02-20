import Theme from '@services/theme';

export default {
	name: 'settings',

	type: 'view',

	data() {
		return {
			theme: null,
			themeOptions: [
				{
					name: 'Automático',
					id: 'auto'
				},
				{
					name: 'Light',
					id: 'light'
				},
				{
					name: 'Dark',
					id: 'dark'
				}
			]
		};
	},

	created() {
		this.theme = Theme.get();
	},

	methods: {
		setTheme(newtTheme) {
			this.theme = newtTheme;
			Theme.set(newtTheme);
		}
	}
};
