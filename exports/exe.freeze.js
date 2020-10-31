/** @license MIT */

/**
 * Uncomment to run in Node.
 *
 * @todo
 * Modify enable-browser-mode CLI to do this.
 */

/** Import rendered exe widget. */
import { default as page } from './exe.namespace.js';

/** Set freeze flag. */
globalThis.FREEZE_MODE = true;
globalThis['NO_RENDER'] = true;

requestAnimationFrame(() => console.log(page.freeze()));
