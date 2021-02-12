export default {
	name: 'home',

	type: 'view',

	computed: {
		items() {
			return this.$store.state.items;
		}
	},

	methods: {
		clearItems() {
			this.$store.commit('clearItems');
		}
	}
};
