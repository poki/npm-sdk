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
type MeasureCategory = 'achievement' | 'booster' | 'boss' | 'button' | 'checkpoint' | 'cosmetic' | 'death' | 'drawing' | 'economy' | 'enemy' | 'hint' | 'item' | 'level' | 'mode' | 'pet' | 'player' | 'powerup' | 'puzzle' | 'quest' | 'round' | 'skip-level' | 'stage' | 'tutorial' | 'upgrade' | 'wave' | 'world' | string;
type MeasureAction = 'start' | 'complete' | 'fail' | 'visible' | 'interact' | string;
interface RewardedBreakParams {
    onStart?: () => void;
    size?: RewardedBreakSize;
}
declare const PokiSDK: {
    init(options?: InitOptions): Promise<void>;
    rewardedBreak(onStartOrArgs?: (() => void) | RewardedBreakParams): Promise<boolean>;
    commercialBreak(onStart?: () => void): Promise<void>;
    displayAd(container: HTMLElement, size: string, onCanDestroy?: () => void, onDisplayRendered?: (isEmpty: boolean) => void): void;
    destroyAd(container?: HTMLElement): void;
    shareableURL(params?: {
        [key: string]: any;
    }): Promise<string>;
    getURLParam(key: string): string;
    getLanguage(): string;
    getDeviceInfo(): DeviceInfo;
    getUser(): Promise<User | null>;
    getToken(): Promise<string | null>;
    login(): Promise<void>;
    showLeaderboard(id?: number | null | false): void;
    captureError(err: string | Error): void;
    gameLoadingFinished(): void;
    gameplayStart(): void;
    gameplayStop(): void;
    setDebug(toggle?: boolean): void;
    setLogging(toggle: boolean): void;
    enableEventTracking(cmpIndex?: number): void;
    openExternalLink(url: string): void;
    playtestSetCanvas(canvas: HTMLCanvasElement | HTMLCanvasElement[] | null): void;
    playtestCaptureHtmlOnce(): void;
    playtestCaptureHtmlForce(): void;
    playtestCaptureHtmlOn(): void;
    playtestCaptureHtmlOff(): void;
    movePill(topPercent: number, topPx: number): void;
    measure(category: MeasureCategory, what: string, action: MeasureAction): void;
};
export { PokiSDK };
export default PokiSDK;
