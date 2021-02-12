import {pricePerMl} from '@modules/utils';

export default {
	name: 'item',

	type: 'component',

	props: ['item'],

	computed: {
		cheaper() {
			return this.$store.getters.cheaper;
		},

		difference() {
			let increase = pricePerMl(this.item) - pricePerMl(this.cheaper),
				percentage = (increase / pricePerMl(this.cheaper)) * 100;

			return parseFloat(percentage.toFixed(2));
		}
	},

	methods: {
		deleteItem(id) {
			this.$store.commit('deleteItem', id);
		}
	}
};
