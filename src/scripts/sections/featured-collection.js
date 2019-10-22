/**
 * Section: Featured collection
 * ------------------------------------------------------------------------------
 * Featured collection configuration for complete theme support
 * - https://github.com/Shopify/theme-scripts/tree/master/packages/theme-sections
 *
 * @namespace featuredCollection
 */
import {
  register
} from '@shopify/theme-sections';
import Flickity from 'flickity';
import $ from 'jquery';

/**
 * Featured collection constructor
 * Executes on page load as well as Theme Editor `section:load` events.
 *
 * @param {string} container - selector for the section container DOM element
 */
register('featured-collection', {

  init() {
    window.console.log('Initialising featured collection section');

    let flkty = new Flickity('.featured-collection', {
      cellSelector: '.featured-collection__item',
      wrapAround: true,
      cellAlign: 'left',
    });

    $('.add-to-cart').click(function(e) {
      e.preventDefault();

      $.ajax({
        type: 'POST',
        url: '/cart/add.js',
        data: {
          quantity: $(this).data('quantity'),
          id: $(this).data("variant-id"),
        },
        dataType: 'json',
        success: function () {
          $.getJSON('/cart.js', function (cart) {
            $('.site-header__cart .count').text(`(${cart.item_count})`);
          });
        },
      });
    });
  },

  publicMethod() {
    // Custom public section method

  },

  _privateMethod() {
    // Custom private section method
  },

  // Shortcut function called when a section is loaded via 'sections.load()' or by the Theme Editor 'shopify:section:load' event.
  onLoad() {
    // Do something when a section instance is loaded
    this.init();
  },

  // Shortcut function called when a section unloaded by the Theme Editor 'shopify:section:unload' event.
  onUnload() {
    // Do something when a section instance is unloaded
  },

  // Shortcut function called when a section is selected by the Theme Editor 'shopify:section:select' event.
  onSelect() {
    // Do something when a section instance is selected
  },

  // Shortcut function called when a section is deselected by the Theme Editor 'shopify:section:deselect' event.
  onDeselect() {
    // Do something when a section instance is selected
  },

  // Shortcut function called when a section block is selected by the Theme Editor 'shopify:block:select' event.
  onBlockSelect() {
    // Do something when a section block is selected
  },

  // Shortcut function called when a section block is deselected by the Theme Editor 'shopify:block:deselect' event.
  onBlockDeselect() {
    // Do something when a section block is deselected
  },
});