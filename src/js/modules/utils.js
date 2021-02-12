function normalizePrice(price) {
	return parseInt(price.replace('R$ ', '').replaceAll('.', '').replaceAll(',', ''));
}

export function pricePerMl(item) {
	return ((normalizePrice(item.price) / item.quantity) / item.volume);
}
