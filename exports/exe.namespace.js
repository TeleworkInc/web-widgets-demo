/** @license MIT */
/**
 * @fileoverview
 * By exporting data from a single namespace file, we can import the same data
 * in different files while retaining the same name-mangled values even with
 * Closure Compiler's ADVANCED mode.
 *
 * Consider Closure Compiling the following dependency structure:
 *
 *          page.js -> namespace.js -> A.js
 *                                  -> B.js
 *
 * and compiling A.js and B.js separately:
 *
 *           A.js -> A.out.js
 *           B.js -> B.out.js
 *
 * Since A.js and B.js both imported from namespace.js, the name-mangled
 * variables will be the same for shared imports in A.out.js and B.out.js (at
 * least in the to-level scope).
 *
 * A.js
 *      import { myValue } from './namespace.js'
 *
 * B.js
 *      import { myValue } from './namespace.js'
 *
 * A.out.js and B.out.js will both contain the same name-mangled version of
 * `myValue`, i.e. `aFe` or some other random series of characters.
 */

/**
 * @todo
 * Set a flag if the namespace is being compiled in freeze mode, to avoid
 * serializing styles and other side effects that are not needed when thawing a
 * frozen layout.
 */
// import { FROZEN } from '../lib/globals.js';
// if (FROZEN) globalThis.FROZEN_NAMESPACE = true;

/**
 * Export the page that we're rendering and all defined widgets.
 */
export { default } from '../lib/page.js';
