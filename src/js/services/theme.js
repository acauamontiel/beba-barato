const $html = document.querySelector('html'),
	matchMediaElement = window.matchMedia('(prefers-color-scheme: dark)');

export function get() {
	let theme = localStorage.getItem('theme');

	if (!theme) {
		localStorage.setItem('theme', 'auto');
	}

	return theme || 'auto';
}

export function set(newtTheme) {
	localStorage.setItem('theme', newtTheme);
	check();
}

function check() {
	if (get() === 'dark' || (get() === 'auto' && matchMediaElement.matches)) {
		$html.classList.add('dark');
		return;
	}

	$html.classList.remove('dark');
}

export default {
	get,

	set,

	init() {
		check();
		matchMediaElement.addListener(check);
	}
};
