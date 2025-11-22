(() => {
	console.log('%cYouTube Theatre Mode:%c', 'color:#FF0000; font-weight:bold', '', 'Loading extension...');
	const app = document.getElementsByTagName('ytd-app')[0] as YTApp;
	if(!app) {
		console.error('%cYouTube Theatre Mode:%c', 'color:#FF0000; font-weight:bold', '', 'Failed to inject extension into YouTube page.');
		return;
	}

	console.log('%cYouTube Theatre Mode:%c', 'color:#FF0000; font-weight:bold', '', 'Attached to YouTube web application.', app);
	const observer = new MutationObserver(() => {
		if(app.isTheaterMode()) {
			app.setAttribute('ytp-theater-mode', 'true');
			return;
		}
		app.removeAttribute('ytp-theater-mode');
	});
	observer.observe(app, { childList: true, subtree: true });
	(window as BrowserWindow).TheatreExtension = {
		app,
	}
})();
