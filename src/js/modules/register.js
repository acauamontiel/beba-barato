import asyncComponents from '@modules/async-components';

import Navbar from '@components/navbar';
import FormSet from '@components/form-set';
import Field from '@components/field';
import Combobox from '@components/combobox';
import Item from '@components/item';

import Home from '@views/home';
import Add from '@views/add';
import About from '@views/about';

export default function () {
	asyncComponents([
		Navbar,
		FormSet,
		Field,
		Combobox,
		Item,
		Home,
		Add,
		About
	]);
}
