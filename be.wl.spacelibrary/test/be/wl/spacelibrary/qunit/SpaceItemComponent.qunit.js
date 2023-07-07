/*global QUnit */
/*eslint no-undef:1, no-unused-vars:1, strict: 1 */
sap.ui.define([
	"sap/ui/qunit/utils/createAndAppendDiv",
	"sap/ui/core/Core",
	"be/wl/spacelibrary/SpaceItemComponent"
], function(createAndAppendDiv, Core, SpaceItemComponent) {
	"use strict";

	createAndAppendDiv("uiArea");

	QUnit.module("Rendering", {
		beforeEach: function() {
			this.oSpaceItemComponent = new SpaceItemComponent({

			});
			this.oSpaceItemComponent.placeAt("uiArea");
			Core.applyChanges();
		},
		afterEach: function() {
			this.oSpaceItemComponent.destroy();
			this.oSpaceItemComponent = null;
		}
	});

	QUnit.test("Should render", function(assert) {
		assert.ok(this.oSpaceItemComponent.$(), "Rendered");
	});
});