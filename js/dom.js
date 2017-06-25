//PERFOMANCE
//PERFOMANCE
let t = window.performance.timing
window.onload = () => {
	setTimeout(() => {
		let pageload = t.loadEventEnd - t.navigationStart
		console.log("HTTP1.1", pageload, "ms");
		parent.postMessage({
            pageload: pageload,
            origin: 'http1'
        },'*');
	}, 0);
}