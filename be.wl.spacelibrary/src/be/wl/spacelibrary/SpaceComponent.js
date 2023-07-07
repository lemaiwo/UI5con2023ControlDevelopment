/*!
 * ${copyright}
 */

// Provides control be.wl.spacelibrary.SpaceComponent.
sap.ui.define([
	"sap/ui/webc/common/WebComponent",
	"./library",
	"./thirdparty/SpaceComponent"
], function(WebComponent, library) {
	"use strict";

	/**
	 * Constructor for a new <code>SpaceComponent</code>.
	 *
	 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
	 * @param {object} [mSettings] Initial settings for the new control
	 *
	 * @extends sap.ui.webc.common.WebComponent
	 * @class
	 *
	 * <h3>Overview</h3>
	 *
	 * The <code>space-component</code> component is a demo component that displays some text.
	 *
	 * @author SAP SE
	 * @version ${version}
	 *
	 * @constructor
	 * @public
	 * @since 1.92.0
	 * @experimental Since 1.92.0 This control is experimental and its API might change significantly.
	 * @alias be.wl.spacelibrary.SpaceComponent
	 */
	var SpaceComponent = WebComponent.extend("be.wl.spacelibrary.SpaceComponent", {
		metadata: {
			library: "be.wl.spacelibrary",
			tag: "space-component",
			properties: {

				/**
				 * Defines the intro of the space component.
				 */
				intro: {
					type: "string",
					defaultValue: ""
				},

				/**
				 * Defines the logo of the space component.
				 */
				logo: {
					type: "string",
					defaultValue: ""
				}
			},
			defaultAggregation: "items",
			aggregations: {

				/**
				 * Defines the articles of the component.
				 */
				items: {
					type: "be.wl.spacelibrary.SpaceItemComponent",
					multiple: true
				}
			}
		}
	});

	/* CUSTOM CODE START */
	/* CUSTOM CODE END */

	return SpaceComponent;
});