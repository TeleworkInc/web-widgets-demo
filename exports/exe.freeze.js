/** @license MIT */

/** Import rendered exe widget. */
import pageAsExeNamespace from './exe.namespace.js';

/** Set freeze and no-render flags. */
globalThis.FREEZE_MODE = true;
globalThis.NO_RENDER = true;

/** Render on next frame. */
requestAnimationFrame(
    /**
     * Freeze the imported page and log to stdout.
     *
     * @return {void}
     */
    () => console.log(pageAsExeNamespace.freeze()),
);
