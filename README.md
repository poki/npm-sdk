# @poki/sdk

Typed, minimal wrapper around the Poki SDK. This package does **not** bundle the Poki SDK itself; it simply forwards calls and provides TypeScript types.

You still need:
```html
<script src="https://game-cdn.poki.com/scripts/v2/poki-sdk.js"></script>
```
or something similar depending on your game engine.

Documentation: [Poki SDK Documentation](https://sdk.poki.com/sdk-documentation.html)

## Install

```bash
npm install @poki/sdk
```

```bash
yarn add @poki/sdk
```

## Usage

Make sure the Poki SDK script is loaded in your page (see above). Then use this package to access the API:

```ts
import PokiSDK from '@poki/sdk';

async function boot() {
  await PokiSDK.init();

  PokiSDK.gameLoadingFinished();
}

boot();
```

If the Poki SDK script is not loaded, this package will throw `PokiSDK not loaded` on use.

## API

### Initialization

- `init(options?: InitOptions): Promise<void>`
- `setDebug(toggle: boolean): void`
- `setLogging(toggle: boolean): void`

### Gameplay Lifecycle

- `gameLoadingFinished(): void`
- `gameplayStart(): void`
- `gameplayStop(): void`

### Commercial Breaks (see [documentation](https://sdk.poki.com/html5.html#4-implement-commercialbreak) for details)

- `commercialBreak(onStart?: () => void): Promise<void>`

### Rewarded Breaks (see [documentation](https://sdk.poki.com/html5.html#5-implement-rewardedbreak) for details)

- `rewardedBreak(): Promise<boolean>`

### Sharing (see [documentation](https://sdk.poki.com/html5.html#shareable-urls-url-manipulation) for details)

- `shareableURL(params?: object): Promise<string>`
- `getURLParam(key: string): string`

### UI (see [documentation](https://sdk.poki.com/html5.html#moving-the-poki-pill-on-mobile) for details)

- `movePill(topPercent: number, topPx: number): void`

### Analytics and Errors

- `measure(category: string, what: string, action: string): void`
- `captureError(err: string | Error): void`

### External Links

- `openExternalLink(url: string): void`

### Playtest Helpers

- `playtestSetCanvas(canvas: HTMLCanvasElement | HTMLCanvasElement[] | null): void`
- `playtestCaptureHtmlOnce(): void`
- `playtestCaptureHtmlForce(): void`
- `playtestCaptureHtmlOn(): void`
- `playtestCaptureHtmlOff(): void`

## License

ISC
