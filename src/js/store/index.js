import {pricePerMl} from '@modules/utils';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		items: []
	},

	getters: {
		cheaper(state) {
			let lowest = Number.POSITIVE_INFINITY,
				ppMl,
				cheaper,
				item;

			for (let i = 0; i < state.items.length; i++) {
				item = state.items[i];
				ppMl = pricePerMl(item);

				if (ppMl < lowest) {
					lowest = ppMl;
					cheaper = item;
				};
			}

			return cheaper;
		}
	},

	mutations: {
		addItem(state, item) {
			item.id = Date.now();
			state.items.push(item);
		},

		updateItem(state, payload) {
			let index = state.items.indexOf(payload.old),
				item = state.items[index];

			({
				volume: item.volume,
				price: item.price,
				quantity: item.quantity
			} = payload.new);
		},

		deleteItem(state, id) {
			state.items = state.items.filter(item => item.id !== id);
		},

		clearItems(state) {
			state.items = [];
		}
	}
});
