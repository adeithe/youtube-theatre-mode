const style = document.createElement('link');
style.href = chrome.runtime.getURL('style.css');
style.type = 'text/css';
style.rel = 'stylesheet';
document.head.appendChild(style);

const script = document.createElement('script');
script.src = chrome.runtime.getURL('index.js');
script.type = 'application/javascript';
document.head.appendChild(script);
