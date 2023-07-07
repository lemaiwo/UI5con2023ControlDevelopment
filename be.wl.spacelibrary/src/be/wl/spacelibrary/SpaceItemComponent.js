/*!
 * ${copyright}
 */

// Provides control be.wl.spacelibrary.SpaceItemComponent.
sap.ui.define([
	"sap/ui/webc/common/WebComponent",
	"./library",
	"./thirdparty/SpaceItemComponent"
], function(WebComponent, library) {
	"use strict";

	/**
	 * Constructor for a new <code>SpaceItemComponent</code>.
	 *
	 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
	 * @param {object} [mSettings] Initial settings for the new control
	 *
	 * @extends sap.ui.webc.common.WebComponent
	 * @class
	 *
	 * <h3>Overview</h3>
	 *
	 * <h3>Usage</h3>
	 *
	 * @author SAP SE
	 * @version ${version}
	 *
	 * @constructor
	 * @public
	 * @since 1.92.0
	 * @experimental Since 1.92.0 This control is experimental and its API might change significantly.
	 * @alias be.wl.spacelibrary.SpaceItemComponent
	 */
	var SpaceItemComponent = WebComponent.extend("be.wl.spacelibrary.SpaceItemComponent", {
		metadata: {
			library: "be.wl.spacelibrary",
			tag: "space-item-component",
			properties: {

				/**
				 * Defines the description of the space item component.
				 */
				description: {
					type: "string",
					defaultValue: ""
				},

				/**
				 * Defines the title of the space item component.
				 */
				title: {
					type: "string",
					defaultValue: ""
				}
			}
		}
	});

	/* CUSTOM CODE START */
	/* CUSTOM CODE END */

	return SpaceItemComponent;
});