/** @license MIT */

/**
 * Import page from namespace and render.
 */
import { debugLog } from '../lib/globals.js';
import pageAsExeNamespace from './exe.namespace.js';

if (globalThis.NO_RENDER)
  debugLog('NO_RENDER flag detected - skipping render.');

else pageAsExeNamespace.render(document.documentElement);
