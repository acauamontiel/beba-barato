import asyncComponents from '@modules/async-components';

import Navbar from '@components/navbar';
import FormSet from '@components/form-set';
import Field from '@components/field';
import Radio from '@components/radio';
import Item from '@components/item';

import Home from '@views/home';
import Add from '@views/add';
import Settings from '@views/settings';
import About from '@views/about';

export default function () {
	asyncComponents([
		Navbar,
		FormSet,
		Field,
		Radio,
		Item,
		Home,
		Add,
		Settings,
		About
	]);
};
