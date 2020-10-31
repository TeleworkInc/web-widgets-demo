/**
 * @license MIT
 */
/**
 * @fileoverview
 * Built-in Widgets.
 */

/**
 * GLOBALS
 */
import {
  /** Constants. */
  DEV,
  VIEWPORT_CSS,
  EXPORTED_STYLES,
} from './globals.js';

/**
 * CORE UTILS
 */
import {
  // Mix,
  StatefulWidget,
  Widget,
} from './core.js';

/**
 * Expose classes from core.
 */
export * from './core.js';

/**
 * A Widget with elevation `1`.
 *
 * @category Widgets
 * @extends Widget
 */
export class Elevation1 extends Widget {
  static styles = [ `box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),` +
      `0 2px 1px -1px rgba(0, 0, 0, 0.12),` +
      `0 1px 3px 0 rgba(0, 0, 0, 0.20);` ];
}

/**
 * A Widget with elevation `2`.
 *
 * @category Widgets
 * @extends Widget
 */
export class Elevation2 extends Widget {
  static styles = [ `box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),` +
      `0 3px 1px -2px rgba(0, 0, 0, 0.12),` +
      `0 1px 5px 0 rgba(0, 0, 0, 0.20);` ];
}

/**
 * A Widget that sets `display: block`.
 *
 * @category Widgets
 * @extends Widget
 */
export class Block extends Widget {
  static styles = [ `display: block;` ];
}

/**
 * Adds 16px of padding. Override `style` to customize.
 *
 * @category Widgets
 * @extends Widget
 */
export class Padding extends Widget {
  static styles = [ `padding: 16px;` ];
}

/**
 * A relative positioned element.
 *
 * @category Widgets
 * @extends Widget
 */
export class Relative extends Widget {
  static styles = [ `position: relative;` ];
}


/**
 * An absolutely positioned element.
 *
 * @category Widgets
 * @extends Widget
 */
export class Absolute extends Widget {
  static styles = [ `position: absolute;` ];
}


/**
 * A fixed position element.
 *
 * @category Widgets
 * @extends Widget
 */
export class Fixed extends Widget {
  static styles = [ `position: fixed;` ];
}


/**
 * A full-width element.
 *
 * @category Widgets
 * @extends Widget
 */
export class FullWidth extends Widget {
  static styles = [ `width: 100%;` ];
}

/**
 * A full-height element.
 *
 * @category Widgets
 * @extends Widget
 */
export class FullHeight extends Widget {
  static styles = [ `height: 100%;` ];
}

// END POSITIONAL WIDGETS

/**
 * By descending text-like Widgets from `TextWidget`, we can set default text
 * properties like `color` and `font-family`.
 *
 * @category Widgets
 * @extends Widget
 */
export class TextWidget extends Widget {}

/**
 * A boring `h1` element.
 *
 * @category Widgets
 * @extends TextWidget
 */
export class Heading1 extends TextWidget {
  static tag = `h1`;
  static styles = [ `font-size: 2.5rem` ];
}

/**
 * A boring `h2` element.
 *
 * @category Widgets
 * @extends TextWidget
 */
export class Heading2 extends TextWidget {
  static tag = `h2`;
  static styles = [ `font-size: 1.25rem` ];
}

/**
 * Flex Widgets display with `display: flex` and expose the `setFlex` method.
 *
 * @category Widgets
 * @extends Widget
 */
export class Flex extends Widget {
  static styles = [ `
      display: flex;
      flex-direction: column;
      align-items: center;
  ` ];


  /**
   * Set this Widget's flex value.
   *
   * @param {number!} flex Flex value for this widget.
   *
   * @return {Widget|StatefulWidget!} this
   */
  setFlex(flex = 1) {
    return this.setStyles(`flex-grow: ${flex};`);
  }
}

/**
 * @category Widgets
 * @extends Flex
 */
export class Center extends Flex {
  static styles = [
    'margin: auto',
    'align-items: center',
    'justify-content: center',
    'text-align: center',
  ];
}


/**
 * A boring `h1` element, but centered inside its container.
 *
 * @category Widgets
 * @extends Widget
 */
// export class CenteredHeading1 extends Mix(Heading1, Center) {}

/**
 * A boring `h2` element, but centered inside its container.
 *
 * @category Widgets
 * @extends Widget
 */
// export class CenteredHeading2 extends Mix(Heading2, Center) {}

/**
 * @category Widgets
 * @extends Flex
 */
export class Expanded extends Flex {
  static styles = [
    'flex-basis: 0',
    'flex-grow: 1',
    'flex-shrink: 0',

    'width: 100%',
    'height: 100%',

    'max-height: 100%',
    'max-height: -moz-available',
    'max-height: -webkit-fill-available',
    'max-height: fill-available',

    'margin: 0px',
    'padding: 0px',
  ];
}

/**
 * @category Widgets
 * @extends Flex
 */
export class Column extends Expanded {
  static styles = [ `flex-direction: column !important;` ];
}

/**
 * @category Widgets
 * @extends Flex
 */
export class Row extends Expanded {
  static styles = [ `flex-direction: row !important;` ];
}

/**
 * @category Widgets
 * @extends Expanded
 */
export class Slide extends Expanded {}

/**
 * @category Widgets
 * @extends Flex
 */
export class Card extends Flex {
  static styles = [ `
            background: rgba(255, 255, 255, 0.1);
            border: 4px solid white;
            margin: 10px;
        ` ];
}

/**
 * @category Widgets
 * @extends Flex
 */
// export class CenteredCard extends Mix(Center, Card, FullWidth) {}

/**
 * Renders dark text, i.e. `color: black`.
 *
 * @category Widgets
 */
export class DarkText extends TextWidget {
  static styles = [ `color: black;` ];
}

/**
 * Renders bold text.
 *
 * @category Widgets
 */
export class BoldText extends TextWidget {
  static styles = [ `font-weight: bold;` ];
}

/**
 * A boring old `<img>` tag.
 *
 * @category Widgets
 */
export class Img extends Widget {
  static tag = 'img';

  /**
   * The URL for this img's src attribute.
   *
   * @param {string} src
   */
  constructor(src) {
    super();
    this.setAttributes({
      src: src,
    });
  }
}

/**
 * A Widget for displaying flexible images.
 *
 * @category Widgets
 */
export class FlexImg extends Expanded {
  /**
   * The URL for this image.
   *
   * @param {string} src
   */
  constructor(src) {
    super();
    this.setStyles(`background-image: url(${src});`);
  }
}

/**
 * A horizontal layout is a full-width flex row.
 *
 * @category Widgets
 * @extends Widget
 */
// export class Horizontal extends Mix(FullWidth, Row) {
//   static styles = [   `justify-content: space-around;`;
//   }
// }

/**
 * A vertical layout is a full-height flex column.
 *
 * @category Widgets
 * @extends Widget
 */
// export class Vertical extends Mix(FullHeight, Column) {
//   static styles = [   `justify-content: space-around;`;
//   }
// }

/**
 * A bottom bar with height of 80px.
 */
export class BottomBar extends Widget {
  static styles = [ `height: 80px;` ];
}

/**
 * Renders a DarkText at 50% opacity.
 *
 * @category Widgets
 */
export class GreyText extends DarkText {
  static styles = [ 'opacity: 0.5;' ];
}

/**
 * An element that fades in.
 */
export class FadeIn extends StatefulWidget {
  static styles = [
    'opacity: 0',
    'transition: opacity 0.1s ease-in',
  ];

  render(target) {
    super.render(target);
    /**
     * @todo
     * Merge rAF into main render process.
     */
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.element.style.opacity = 1;
      });
    });
    return this;
  }
}

/**
 * Generate a Material icon.
 *
 * @category Widgets
 */
export class MaterialIcon extends Widget {
  static tag = 'i';
  static styles = [ `
            font-size: 36px;
            user-select: none;
        ` ];

  /**
   * The name of the material icon, i.e. `add`.
   *
   * @param {string} icon
   */
  constructor(icon) {
    super(icon);
    this.setClasses('material-icons');
  }
}

/**
 * A list.
 *
 * @category Widgets
 * @extends Widget
 */
export class List extends FullWidth {
  static styles = [ `
            display: table;
            overflow: scroll;
        ` ];
}

/**
 * The content of a ListItem.
 */
// export class ListItemContent extends Vertical {
//   static styles = [   `
//             align-items: start !important;
//             justify-content: center;
//         `;
//   }
// }

/**
 * An item in a List.
 *
 * @category Widgets
 * @extends Row
 */
// export class ListItem extends Mix(Row, Elevation1) {
//   /**
//    * @param {{
//    *  left: WidgetLike,
//    *  title: WidgetLike,
//    *  subtitle: WidgetLike,
//    *  right: WidgetLike
//    * }} options
//    * Options for the ListItem.
//    */
//   constructor({ left, title, subtitle, right }) {
//     super(
//         left,
//         new ListItemContent(
//             new BoldText(title),
//             new GreyText(subtitle),
//         ),
//         right,
//     );
//   }

//   static styles = [   `
//             margin: 4px 0;
//             width: 100%;
//             height: 80px;
//             padding: 24px;
//         `;
//   }
// }

/**
 * WebPage widgets for <head>, <body> etc.
 */

/**
 * An element with no styling.
 */
export class UnstyledWidget extends Widget {
  render(target) {
    this.classNames = [];
    return super.render(target);
  }
}

/**
 * A <head> element.
 */
export class Head extends UnstyledWidget {
  static tag = 'head';
}

/**
 * A <title> element.
 */
export class Title extends UnstyledWidget {
  static tag = 'title';
}

/**
 * A <link> element.
 */
export class Stylesheet extends UnstyledWidget {
  static tag = 'link';
  static attributes = {
    rel: 'stylesheet',
  };

  constructor(attributes = {}) {
    super();
    this.setAttributes(attributes);
  }
}

/**
 * A <meta> element.
 */
export class Meta extends UnstyledWidget {
  static tag = `meta`;

  constructor(attrs) {
    super().setAttributes(attrs);
  }
}

/**
 * Generates a new `document` and fills the screen. Overrides the default
 * `render()` method in order to export stylesheet.
 *
 * @category Widgets
 */
export class HTMLWidget extends Widget {
  static tag = 'html';
  static styles = [ VIEWPORT_CSS ];

  constructor(...children) {
    super(...children);
    /**
     * @type {Node}
     */
    this.element;
  }

  /**
   * Export used styles to `document.head`.
   *
   * @return {HTMLWidget} this
   */
  exportStylesheet() {
    /** Create a new non-render-blocking stylesheet. */
    const frozenStyles = document.createElement('style');
    frozenStyles.setAttribute('defer', true);

    /**
     * Export all cached styles to the stylesheet.
     */
    frozenStyles.appendChild(
        document.createTextNode(EXPORTED_STYLES.join('\n')),
    );

    /**
     * Replace the dynamically generated stylesheet in the new document (stored
     * at `this.element`) with the frozen styles. This prevents two stylesheets
     * with ID `ww-stylesheet` from existing in the new `document.head`.
     */
    this.element.querySelector('head').appendChild(frozenStyles);
    return this;
  }

  /**
   * Use standards mode. Embed DOCTYPE for the `<html>` tag.
   *
   * @return {string!}
   */
  freeze() {
    return `<!DOCTYPE html>${super.freeze()}`;
  }

  render() {
    super.render(document.documentElement);
    return this.exportStylesheet();
  }
}

/**
 * A <body> element that fades in onload.
 */
export class BodyWidget extends Widget {
  static tag = 'body';
  static styles = [ VIEWPORT_CSS ];
}

/**
 * Create a document fragment.
 */
export class DocumentFragmentWidget extends Widget {
  createElement() {
    this.element = document.createDocumentFragment();
    return this;
  }

  /**
   * Override the entire `render()` process and manually instruct how to render
   * the `documentFragment`.
   *
   * @return {DocumentFragmentWidget} this
   */
  render() {
    this.constructElement();
    this.children.forEach(
        (child) => this.element.appendChild(child.render().element),
    );
    return this;
  }
}

/**
 * Load a stylesheet asynchronously, or synchronously if not supported.
 *
 * @see https://web.dev/defer-non-critical-css/
 */
export class AsyncStylesheet extends DocumentFragmentWidget {
  /**
   * Create a new async/noscript stylesheet pair.
   *
   * @param {{
   *  href: string!,
   * }} attributes
   */
  constructor(attributes = { href: '' }) {
    super(
        new Stylesheet({
          rel: 'preload',
          as: 'style',
          onload: `this.onload=null;this.rel='stylesheet'`,
          ...attributes,
        }),
        new NoScript(
            new Stylesheet({
              ...attributes,
            }),
        ),
    );
  }
}

/**
 * Create a Google Fonts stylesheet.
 */
export class GoogleFont extends AsyncStylesheet {
  /**
   * @param {string} font
   * @param {Array<string|number>} weights
   */
  constructor(
      font = 'Lato',
      weights = [ 300, 400, 700 ],
  ) {
    super({
      href: `https://fonts.googleapis.com/css2?family=${font.replace(' ', '+')}:wght@${weights.join(';')}&display=swap`,
    });
  }
}


/**
 * An <input> element.
 */
export class InputWidget extends Widget {
  static tag = 'input';
}

/**
 * A text input.
 */
export class EmailInput extends InputWidget {
  static attributes = {
    type: 'email',
  };
}

/**
 * A <button> element.
 */
export class Button extends Widget {
  static tag = 'button';
  static styles = [
    '-webkit-user-select: none',
    '-moz-user-select: none',
    '-ms-user-select: none',
    'user-select: none',
  ];
}

/**
 * An <input type="submit"> element.
 */
export class SubmitButton extends InputWidget {
  static attributes = {
    'type': 'submit',
  };
}

/**
 * An Inflate Widget with `justify-content: space-evenly`.
 */
export class SpaceEvenly extends Expanded {
  static styles = [ `justify-content: space-evenly;` ];
}

/**
 * A `NoScript` element.
 */
export class NoScript extends UnstyledWidget {
  static tag = 'NoScript';
}

/**
 * A `script` element.
 */
export class Script extends UnstyledWidget {
  static tag = 'script';
  static attributes = {
    'async': true,
  };
}

/**
 * A `<script>` with an `inline: true` attribute set, for inlining at
 * compile-time.
 */
export class InlineScript extends Script {
  static attributes = {
    'inline': true,
  };
}

/**
 * A `<script>` with a src that depends on the `DEV` flag. Also sets
 * `type="module"` when `DEV == true`.
 */
export class DebugScript extends InlineScript {
  /**
   * Create a new `DebugScript` widget.
   *
   * @param {string} debug
   * @param {string} release
   */
  constructor(debug, release) {
    super();
    const attrs = {
      src: (
        DEV
          ? debug
          : release
      ),
      async: true,
    };

    if (DEV) attrs.type = 'module';
    this.setAttributes(attrs);
  }
}


/** A standard <head> that contains some normal viewport-related <meta> tags. */
export class StandardHeadWidget extends Head {
  constructor(...children) {
    const STANDARD_META_TAGS = [
      new Meta({
        'http-equiv': 'Content-Type',
        'content': 'text/html; charset=UTF-8',
      }),
      new Meta({
        'http-equiv': 'X-UA-Compatible',
        'content': 'IE=edge,chrome=1',
      }),
      new Meta({
        'name': 'viewport',
        'content': 'width=device-width, initial-scale=1.0',
      }),
    ];

    super(
        ...STANDARD_META_TAGS,
        new DebugScript(
            'exports/exe.namespace.js',
            'dist/exe.namespace.js',
        ),
        ...children,
    );
  }
}

/** A page view with max-width 768px. */
export class PageView extends Center {
  static styles = [
    'height: 100%',
    'max-width: 480px',
    'margin: 0 auto',
  ];
}

/**
 * Spaced out text.
 */
export class MarginText extends Widget {
  static styles = [
    'margin: 12px',
    'padding: 0 1em',
  ];
}

/**
 * A <p> element.
 */
export class ParagraphWidget extends MarginText {
  static tag = 'p';
  static styles = [
    `font-family: 'Roboto', sans-serif`,
    `font-size: 18px`,
  ];
}

/** A <label> element. */
export class LabelWidget extends Widget {
  static tag = 'label';
}

/**
 * A form for a user to enter their email.
 */
export class FormWidget extends Center {
  static tag = `form`;
}

/**
 * A page that resembles a piece of material paper.
 */
export class Material extends Elevation2 {
  static styles = [
    `border-radius: 24px`,
    `margin: 12px`,
  ];
}

/**
 * A Material sheet with a dark background and white color.
 */
export class DarkMaterial extends Material {
  static styles = [
    `background: #222`,
    `color: white`,
  ];
}

/**
 * The path for the wave.
 *
 * @see https://web.archive.org/web/20180810082435/https://smooth.ie/blogs/news/svg-wavey-transitions-between-sections
 */
export class WavesPath extends Widget {
  static tag = `path`;
  static attributes = {
    d: 'M-1.09,7.41 C111.15,151.47 350.85,-49.98 500.00,49.98 ' +
       'L500.00,150.00 L-1.09,143.58 Z',
  };
}

/**
 * An SVG for rendering the WavesPath.
 *
 * @see https://web.archive.org/web/20180810082435/https://smooth.ie/blogs/news/svg-wavey-transitions-between-sections
 */
export class WavesSVG extends Widget {
  constructor(...args) {
    super(new WavesPath(...args));
  }

  static tag = 'svg';
  static attributes = {
    viewBox: '0 0 500 150',
    preserveAspectRatio: 'none',
  };
  static styles = [
    'height: 100%',
    'width: 100%',
  ];
}


/**
 * A bar displaying scroll progress.
 *
 * @see https://www.afasterweb.com/2017/09/26/performance-basics-throttling/
 *
 * @see https://www.digitalocean.com/community/tutorials/js-progress-bar-javascript-css-variables
 *
 * @see https://www.youtube.com/watch?v=2an6-WVPuJU
 */
export class ScrollIndicator extends StatefulWidget {
  static styles = [
    'background: linear-gradient(to right,#bbdefb var(--scroll),transparent 0)',

    'position: fixed',
    'height: 12px',
    'width: 100%',

    'top: 0',
    'left: 0',

    'will-change: transform',
    'transform: translateZ(0)',

    '-webkit-transform-style: preserve-3d',
    '-webkit-backface-visibility: hidden',
    '-webkit-transform:translate3d(0,0,0)',
    '-webkit-transform-style: preserve-3d',
    '-webkit-perspective: 1000',
    '-webkit-transform: translateZ(0)',
  ];

  render(target = this.element) {
    super.render(target);
    requestAnimationFrame(
        () => {
          const scrollHeight = Math.max(
              document.body.scrollHeight, document.documentElement.scrollHeight,
              document.body.offsetHeight, document.documentElement.offsetHeight,
              document.body.clientHeight, document.documentElement.clientHeight,
          );
          const clientHeight = Math.max(
              document.body.clientHeight,
              document.documentElement.clientHeight,
          );

          let lock = false;
          let pct = 0;

          document.addEventListener('scroll', () => {
            if (!lock) {
              pct = 100 * window.pageYOffset / (scrollHeight - clientHeight);
              lock = true;
              requestAnimationFrame(() => {
                this.element.style.setProperty('--scroll', `${pct}%`);
                lock = false;
              });
            }
          }, { passive: true });
        },
    );

    return this;
  }
}
