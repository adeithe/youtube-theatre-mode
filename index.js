(() => {
	console.log('%cYouTube Theatre:%c', 'color:#FF0000; font-weight:bold', '', 'Loading extension...');
	const ytApp = document.getElementsByTagName('ytd-app')[0];
	const observer = new MutationObserver(() => {
        if(ytApp.isTheaterMode()) {
			ytApp.setAttribute('ytp-theater-mode', 'true');
			return;
		}
		ytApp.removeAttribute('ytp-theater-mode');
    });
    observer.observe(ytApp, { childList: true, subtree: true });
	window.TheatreExtension = {
		ytApp,
		observer,
	};
})();
