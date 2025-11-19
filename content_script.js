'use strict';

(() => {
	const style = document.createElement('link');
	style.type = 'text/css';
	style.rel = 'stylesheet';
	style.href = chrome.runtime.getURL('style.css');
	document.head.appendChild(style);

	const script = document.createElement('script');
	script.type = 'application/javascript';
	script.src = chrome.runtime.getURL('index.js');
	document.head.appendChild(script);
})();
