// 固定时间后结束
const countDown = (timestamp, cb) => {
	// 初始化 时间间隔、执行次数

	const interval = 1000;
	let count = 0;

	// 开始时间
	const startTime = new Date().getTime();

	const func = () => {
		count++;

		// 计算时间偏差
		const offset = new Date().getTime() - startTime - count * interval;
		let nextTime = interval - offset;

		nextTime < 0 ? (nextTime = 0) : nextTime;

		timestamp -= interval;

		if (timestamp <= 0) {
			cb(0);
			clearTimeout(timer);
		} else {
			cb(timestamp);
			timer = setTimeout(func, nextTime);
		}
	};

	let timer = setTimeout(func, interval);
};

const countDownDate = (timestamp, cb) => {
	const interval = 1000;

	// 开始时间
	const startTime = new Date().getTime();

	if (startTime >= timestamp) {
		cb(formatDate(0));
		return;
	}

	const func = () => {
		// 重新计算剩余时间
		const timeLeft = timestamp - new Date().getTime();
		// console.log("timeLeft", timeLeft / 1000);
		if (timeLeft > 0) {
			cb(formatDate(timeLeft));
			timer = setTimeout(func, interval);
		} else {
			cb(formatDate(0));
			clearTimeout(timer);
		}
	};

	let timer = setTimeout(func, interval);
};

// 时间戳转日期 xx天xx时xx分xx秒
const formatDate = (timestamp) => {
	const times = timestamp / 1000;
	let d = parseInt(times / 60 / 60 / 24); // 天
	d = d < 10 ? "0" + d : d;
	let h = parseInt((times / 60 / 60) % 24); //时
	h = h < 10 ? "0" + h : h;
	let m = parseInt((times / 60) % 60); // 分
	m = m < 10 ? "0" + m : m;
	let s = parseInt(times % 60); // 当前的秒
	s = s < 10 ? "0" + s : s;
	return `${d}天${h}时${m}分${s}秒`;
};

export {countDown, countDownDate, formatDate};
