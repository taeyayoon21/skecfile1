/*!
    *
    * Wijmo Library 5.20202.724
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    *
    * Licensed under the GrapeCity Commercial License.
    * sales@wijmo.com
    * wijmo.com/products/wijmo-5/license/
    *
    */
/**
 * {@module wijmo.vue2.core}
 * Wijmo interop module for
 * <a href="https://vuejs.org/2016/04/27/announcing-2.0/" target="_blank">Vue 2</a>.
 *
 * This module provides Vue 2 components that encapsulate Wijmo controls.
 *
 * To use it, your application must include references to the Vue 2
 * framework (RC6 or later), as well as the regular Wijmo CSS and js files.
 *
 * To add Wijmo controls to Vue pages, include the appropriate
 * tags in your HTML files. For example, the code below adds
 * an {@link InputNumber} control to a Vue page:
 *
 * ```html
 * <wj-input-number
 *   format="c2"
 *   placeholder="Sales"
 *   :value="sales"
 *   :value-changed="salesChanged"
 *   :min="0"
 *   :max="10000"
 *   :step="100"
 *   :is-required="false">
 * </wj-input-number>
 * ```
 *
 * ```typescript
 * // Wijmo event handler
 * // update "sales" value to match the InputNumber value
 * function salesChanged(sender, eventArgs) {
 *   this.sales = sender.value;
 * }
 * ```
 *
 * The example illustrates the following important points:
 *
 * <ol>
 *   <li>
 *      Wijmo controls have tag names that start with the "wj" prefix, followed by
 *      the control name using lower-case and hyphen separators.</li>
 *   <li>
 *      The tag attribute names match the control's properties and events.</li>
 *   <li>
 *      Colons before attribute names indicate the attribute value should be
 *      interpreted as JavaScript expressions (e.g. <code>:min="0"</code>).</li>
 *   <li>
 *      Event handlers are specified the same way as regular properties
 *      (e.g. <code>:value-changed="salesChanged"</code>).</li>
 *   <li>
 *      In Vue2, all bindings are one-way. In the example above, the "salesChanged"
 *      event handler is responsible for updating the value of the "sales"
 *      property in the model. This is a change from Vue 1, where two-way bindings
 *      could be created by adding the ".sync" suffix to any attribute.</li>
 * </ol>
 *
 * All Wijmo Vue components include an "initialized" event that is
 * raised after the control has been added to the page and initialized.
 * You can use this event to perform additional initialization in addition
 * to setting properties in markup. For example:
 *
 * <pre>&lt;wj-flex-grid :initialized="initGrid"&gt;
 * &lt;/wj-flex-grid&gt;</pre>

 * <pre>// Vue application
 * var app = new Vue({
 *   el: '#app',
 *   methods: {
 *     initGrid: function(s, e) {
 *       // assign a custom MergeManager to the grid
 *       s.mergeManager = new CustomMergeManager(s);
 *     }
 *   }
 * });</pre>
 */
/**
 *
 */
export declare var ___keepComment: any;
/**
 * Vue component that includes a given HTML fragment into the document.
 *
 * The <b>wj-include</b> component takes a <b>src</b> attribute that
 * specifies a file to load and include into the document. For example:
 *
 * <pre>&lt;wj-popup control="modalDialog" :modal="true" :hide-trigger="None"&gt;
 *   &lt;wj-include src="includes/dialog.htm"&gt;&lt;/wj-include&gt;
 * &lt;/wj-popup&gt;</pre>
 */
export declare var WjInclude: any;
export declare var wjFormat: (value: any, format: any) => string;
/**
 * Vue filter that applies globalized formatting to dates and numbers.
 *
 * For example, the code below uses the <b>wj-format</b> filter to format
 * a number as a currency value and a date as a short date using the
 * current Wijmo culture:
 *
 * <pre>&lt;p&gt;value: {&#8203;{ theAmount | wj-format('c') }}&lt;/p&gt;
 * &lt;p&gt;date: {&#8203;{ theDate | wj-format('d') }}&lt;/p&gt;</pre>
 */
export declare var WjFormat: any;
/**
 * Vue directive to define tootips for elements.
 * TBD: description goes here...
 **/
export declare var WjTooltip: any;
export declare function registerCore(app: any): void;