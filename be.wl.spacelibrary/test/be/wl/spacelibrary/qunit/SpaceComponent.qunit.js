/*global QUnit */
/*eslint no-undef:1, no-unused-vars:1, strict: 1 */
sap.ui.define([
	"sap/ui/qunit/utils/createAndAppendDiv",
	"sap/ui/core/Core",
	"be/wl/spacelibrary/SpaceComponent"
], function(createAndAppendDiv, Core, SpaceComponent) {
	"use strict";

	createAndAppendDiv("uiArea");

	QUnit.module("Rendering", {
		beforeEach: function() {
			this.oSpaceComponent = new SpaceComponent({

			});
			this.oSpaceComponent.placeAt("uiArea");
			Core.applyChanges();
		},
		afterEach: function() {
			this.oSpaceComponent.destroy();
			this.oSpaceComponent = null;
		}
	});

	QUnit.test("Should render", function(assert) {
		assert.ok(this.oSpaceComponent.$(), "Rendered");
	});
});