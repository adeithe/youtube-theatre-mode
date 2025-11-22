declare interface BrowserWindow extends Window {
	TheatreExtension?: TheatreExtension;
}

interface TheatreExtension {
	app: YTApp;
}

interface YTApp extends Element {
	isWatchPage: boolean;
	isShortsPage: boolean;
	
	isTheaterMode(): boolean;
}
