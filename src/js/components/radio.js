import FormSet from '@components/form-set';

export default {
	name: 'radio',

	type: 'component',

	extends: FormSet,

	props: ['options'],

	computed: {
		_value: {
			get() {
				return this.value
			},

			set(newValue) {
				this.$emit('change', newValue);
			}
		}
	}
};
