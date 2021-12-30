export const debounce = (dn, delay) => {
	var delay = delay || 500;
	this.timer;

	return () => {
		if (this.timer) {
			clearTimeout(this.timer);
		}
		this.timer = setTimeout(() => {
			this.timer = null;
			fn.apply(this, arguments);
		}, delay);
	};
};
