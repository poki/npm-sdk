interface InitOptions {
	debug?: boolean;
	logging?: boolean;
	submitScore?: (fn: (leaderboard: string, score: number) => void) => void;
}

interface User {
	username: string;
	avatarUrl: string;
}

interface PokiSDKGlobal {
	init: (options: InitOptions) => Promise<void>;
	rewardedBreak: () => Promise<boolean>;
	commercialBreak: (onStart?: () => void) => Promise<void>;
	displayAd: (
		container: HTMLElement,
		size?: string,
		onCanDestroy?: () => void,
		onDisplayRendered?: (isEmpty: boolean) => void
	) => void;
	destroyAd: (container: HTMLElement) => void;
	shareableURL: (params: object) => Promise<string>;
	getURLParam: (key: string) => string;
	getLanguage: () => string;
	getUser: () => Promise<User>;
	getToken: () => Promise<string>;
	login: () => Promise<void>;
	captureError: (err: string | Error) => void;
	gameLoadingFinished: () => void;
	gameplayStart: () => void;
	gameplayStop: () => void;
	setDebug: (toggle: boolean) => void;
	setLogging: (toggle: boolean) => void;
	enableEventTracking: (cmpIndex: number | undefined) => void;
	openExternalLink: (url: string) => void;
	playtestSetCanvas: (canvas: HTMLCanvasElement | HTMLCanvasElement[] | null) => void;
	playtestCaptureHtmlOnce: () => void;
	playtestCaptureHtmlForce: () => void;
	playtestCaptureHtmlOn: () => void;
	playtestCaptureHtmlOff: () => void;
	movePill: (topPercent: number, topPx: number) => void;
	measure(category: string, what: string, action: string): void;
}

type WindowWithPokiSDK = Window & { PokiSDK?: PokiSDKGlobal };

function getPokiSDK(): PokiSDKGlobal {
	const sdk = (window as WindowWithPokiSDK).PokiSDK;

	if (!sdk) {
		throw new Error('PokiSDK not loaded');
	}

	return sdk;
}

const PokiSDK = {
	init(options: InitOptions = {}): Promise<void> {
		return getPokiSDK().init(options);
	},
	rewardedBreak(): Promise<boolean> {
		return getPokiSDK().rewardedBreak();
	},
	commercialBreak(onStart?: () => void): Promise<void> {
		return getPokiSDK().commercialBreak(onStart);
	},
	displayAd(
		container: HTMLElement,
		size?: string,
		onCanDestroy?: () => void,
		onDisplayRendered?: (isEmpty: boolean) => void
	): void {
		return getPokiSDK().displayAd(container, size, onCanDestroy, onDisplayRendered);
	},
	destroyAd(container: HTMLElement): void {
		getPokiSDK().destroyAd(container);
	},
	shareableURL(params: object = {}): Promise<string> {
		return getPokiSDK().shareableURL(params);
	},
	getURLParam(key: string): string {
		return getPokiSDK().getURLParam(key);
	},
	getLanguage(): string {
		return getPokiSDK().getLanguage();
	},
	getUser(): Promise<User> {
		return getPokiSDK().getUser();
	},
	getToken(): Promise<string> {
		return getPokiSDK().getToken();
	},
	login(): Promise<void> {
		return getPokiSDK().login();
	},
	captureError(err: string | Error): void {
		getPokiSDK().captureError(err);
	},
	gameLoadingFinished(): void {
		getPokiSDK().gameLoadingFinished();
	},
	gameplayStart(): void {
		getPokiSDK().gameplayStart();
	},
	gameplayStop(): void {
		getPokiSDK().gameplayStop();
	},
	setDebug(toggle: boolean): void {
		getPokiSDK().setDebug(toggle);
	},
	setLogging(toggle: boolean): void {
		getPokiSDK().setLogging(toggle);
	},
	enableEventTracking(cmpIndex: number | undefined): void {
		getPokiSDK().enableEventTracking(cmpIndex);
	},
	openExternalLink(url: string): void {
		getPokiSDK().openExternalLink(url);
	},
	playtestSetCanvas(canvas: HTMLCanvasElement | HTMLCanvasElement[] | null): void {
		getPokiSDK().playtestSetCanvas(canvas);
	},
	playtestCaptureHtmlOnce(): void {
		getPokiSDK().playtestCaptureHtmlOnce();
	},
	playtestCaptureHtmlForce(): void {
		getPokiSDK().playtestCaptureHtmlForce();
	},
	playtestCaptureHtmlOn(): void {
		getPokiSDK().playtestCaptureHtmlOn();
	},
	playtestCaptureHtmlOff(): void {
		getPokiSDK().playtestCaptureHtmlOff();
	},
	movePill(topPercent: number, topPx: number): void {
		getPokiSDK().movePill(topPercent, topPx);
	},
	measure(category: string, what: string, action: string): void {
		getPokiSDK().measure(category, what, action);
	},
};

export { PokiSDK };
export default PokiSDK;
