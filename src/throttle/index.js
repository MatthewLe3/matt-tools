export const throttle = (fn, interval) => {
    this.last_t;
  	this.timer_t;
    var interval = interval || 00;
    return  () => {
        const now = new Date().getTime();
        if (this.last_t && now - this.last_t < interval) {
            clearTimeout(this.timer_t);
            timer_t = setTimeout( () => {
                this.last_t = now;
                fn.apply(this, arguments);
            }, interval);
        } else {
            this.last_t = now;
            fn.apply(this, arguments);
        }
    }
}
