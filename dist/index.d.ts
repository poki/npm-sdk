interface InitOptions {
    debug?: boolean;
    logging?: boolean;
    submitScore?: (fn: (leaderboard: string, score: number) => void) => void;
}
interface User {
    username: string;
    avatarUrl: string;
}
export const PokiSDK: {
    init(options?: InitOptions): Promise<void>;
    rewardedBreak(): Promise<boolean>;
    commercialBreak(onStart?: () => void): Promise<void>;
    displayAd(container: HTMLElement, size?: string, onCanDestroy?: () => void, onDisplayRendered?: (isEmpty: boolean) => void): void;
    destroyAd(container: HTMLElement): void;
    shareableURL(params?: object): Promise<string>;
    getURLParam(key: string): string;
    getLanguage(): string;
    getUser(): Promise<User>;
    getToken(): Promise<string>;
    login(): Promise<void>;
    captureError(err: string | Error): void;
    gameLoadingFinished(): void;
    gameplayStart(): void;
    gameplayStop(): void;
    setDebug(toggle: boolean): void;
    setLogging(toggle: boolean): void;
    enableEventTracking(cmpIndex: number | undefined): void;
    openExternalLink(url: string): void;
    playtestSetCanvas(canvas: HTMLCanvasElement | HTMLCanvasElement[] | null): void;
    playtestCaptureHtmlOnce(): void;
    playtestCaptureHtmlForce(): void;
    playtestCaptureHtmlOn(): void;
    playtestCaptureHtmlOff(): void;
    movePill(topPercent: number, topPx: number): void;
    measure(category: string, what: string, action: string): void;
};
export default PokiSDK;

//# sourceMappingURL=index.d.ts.map
