import {required, minValue} from 'vuelidate/lib/validators'
import formValidator from '@mixins/form-validator';

export default {
	name: 'add',

	type: 'view',

	mixins: [formValidator],

	computed: {
		currentItem() {
			let $route = this.$route;

			if ($route.name === 'edit') {
				return this.$store.state.items.find(item => item.id === parseInt($route.params.id));
			}
		}
	},

	data() {
		return {
			volume: null,
			price: null,
			quantity: 1,
			money: {
				decimal: ',',
				thousands: '.',
				prefix: 'R$ '
			}
		};
	},

	validations: {
		volume: {
			required,
			minValue: minValue(10)
		},
		price: {
			different: (value) => {
				return value !== 'R$ 0,00';
			}
		},
		quantity: {
			required,
			minValue: minValue(1)
		}
	},

	methods: {
		add() {
			this.$store.commit('addItem', {
				volume: parseInt(this.volume),
				price: this.price,
				quantity: this.quantity
			});
		},

		edit() {
			this.$store.commit('updateItem', {
				old: this.currentItem,
				new: {
					volume: this.volume,
					price: this.price,
					quantity: this.quantity
				}
			});
		},

		submit() {
			if (!this.validateForm()) {
				return;
			}

			this[this.$route.name]();

			this.$router.push('/');
		}
	},

	created() {
		if (this.currentItem) {
			({
				volume: this.volume,
				price: this.price,
				quantity: this.quantity
			} = this.currentItem);
		}
	}
};
