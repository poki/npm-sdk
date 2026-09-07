interface InitOptions {
	debug?: boolean;
	logging?: boolean;
	submitScore?: (fn: (leaderboard: string, score: number) => void) => void;
}

interface User {
	username: string;
	avatarUrl: string;
	optedIn: boolean;
}

type RewardedBreakSize = 'small' | 'medium' | 'large';
type DeviceCategory = 'mobile' | 'tablet' | 'desktop';
interface DeviceInfo {
	category: DeviceCategory;
}

type MeasureCategory =
	| 'achievement'
	| 'booster'
	| 'boss'
	| 'button'
	| 'checkpoint'
	| 'cosmetic'
	| 'death'
	| 'drawing'
	| 'economy'
	| 'enemy'
	| 'hint'
	| 'item'
	| 'level'
	| 'mode'
	| 'pet'
	| 'player'
	| 'powerup'
	| 'puzzle'
	| 'quest'
	| 'round'
	| 'skip-level'
	| 'stage'
	| 'tutorial'
	| 'upgrade'
	| 'wave'
	| 'world'
	| string;

type MeasureAction =
	'start' | 'complete' | 'fail' | 'visible' | 'interact' | string;

interface RewardedBreakParams {
	onStart?: () => void;
	size?: RewardedBreakSize;
}

interface PokiSDKGlobal {
	init: (options?: InitOptions) => Promise<void>;
	rewardedBreak: (
		onStartOrArgs?: (() => void) | RewardedBreakParams
	) => Promise<boolean>;
	commercialBreak: (onStart?: () => void) => Promise<void>;
	displayAd: (
		container: HTMLElement,
		size: string,
		onCanDestroy?: () => void,
		onDisplayRendered?: (isEmpty: boolean) => void
	) => void;
	destroyAd: (container?: HTMLElement) => void;
	shareableURL: (params?: { [key: string]: any }) => Promise<string>;
	getURLParam: (key: string) => string;
	getLanguage: () => string;
	getDeviceInfo: () => DeviceInfo;
	getUser: () => Promise<User | null>;
	getToken: () => Promise<string | null>;
	login: () => Promise<void>;
	showLeaderboard: (id?: number | null | false) => void;
	captureError: (err: string | Error) => void;
	gameLoadingFinished: () => void;
	gameplayStart: () => void;
	gameplayStop: () => void;
	setDebug: (toggle?: boolean) => void;
	setLogging: (toggle: boolean) => void;
	enableEventTracking: (cmpIndex?: number) => void;
	openExternalLink: (url: string) => void;
	playtestSetCanvas: (
		canvas: HTMLCanvasElement | HTMLCanvasElement[] | null
	) => void;
	playtestCaptureHtmlOnce: () => void;
	playtestCaptureHtmlForce: () => void;
	playtestCaptureHtmlOn: () => void;
	playtestCaptureHtmlOff: () => void;
	movePill: (topPercent: number, topPx: number) => void;
	measure(category: MeasureCategory, what: string, action: MeasureAction): void;
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
	rewardedBreak(
		onStartOrArgs?: (() => void) | RewardedBreakParams
	): Promise<boolean> {
		return getPokiSDK().rewardedBreak(onStartOrArgs);
	},
	commercialBreak(onStart?: () => void): Promise<void> {
		return getPokiSDK().commercialBreak(onStart);
	},
	displayAd(
		container: HTMLElement,
		size: string,
		onCanDestroy?: () => void,
		onDisplayRendered?: (isEmpty: boolean) => void
	): void {
		getPokiSDK().displayAd(container, size, onCanDestroy, onDisplayRendered);
	},
	destroyAd(container?: HTMLElement): void {
		getPokiSDK().destroyAd(container);
	},
	shareableURL(params: { [key: string]: any } = {}): Promise<string> {
		return getPokiSDK().shareableURL(params);
	},
	getURLParam(key: string): string {
		return getPokiSDK().getURLParam(key);
	},
	getLanguage(): string {
		return getPokiSDK().getLanguage();
	},
	getDeviceInfo(): DeviceInfo {
		return getPokiSDK().getDeviceInfo();
	},
	getUser(): Promise<User | null> {
		return getPokiSDK().getUser();
	},
	getToken(): Promise<string | null> {
		return getPokiSDK().getToken();
	},
	login(): Promise<void> {
		return getPokiSDK().login();
	},
	showLeaderboard(id?: number | null | false): void {
		getPokiSDK().showLeaderboard(id);
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
	setDebug(toggle?: boolean): void {
		getPokiSDK().setDebug(toggle);
	},
	setLogging(toggle: boolean): void {
		getPokiSDK().setLogging(toggle);
	},
	enableEventTracking(cmpIndex?: number): void {
		getPokiSDK().enableEventTracking(cmpIndex);
	},
	openExternalLink(url: string): void {
		getPokiSDK().openExternalLink(url);
	},
	playtestSetCanvas(
		canvas: HTMLCanvasElement | HTMLCanvasElement[] | null
	): void {
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
	measure(
		category: MeasureCategory,
		what: string,
		action: MeasureAction
	): void {
		getPokiSDK().measure(category, what, action);
	}
} satisfies PokiSDKGlobal;

export { PokiSDK };
export default PokiSDK;
