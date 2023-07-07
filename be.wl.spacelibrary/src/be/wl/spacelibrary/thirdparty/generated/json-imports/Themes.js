sap.ui.define(['require', "sap/ui/webc/common/thirdparty/base/asset-registries/Themes"], function (require, _Themes) {
  "use strict";

  const loadThemeProperties = async themeName => {
    switch (themeName) {
      case "sap_fiori_3":
        return (await Promise.resolve().then(() => new Promise(resolve => require(["../assets/themes/sap_fiori_3/parameters-bundle.css.json"], resolve)))).default;
      case "sap_horizon":
        return (await Promise.resolve().then(() => new Promise(resolve => require(["../assets/themes/sap_horizon/parameters-bundle.css.json"], resolve)))).default;
      case "sap_horizon_dark":
        return (await Promise.resolve().then(() => new Promise(resolve => require(["../assets/themes/sap_horizon_dark/parameters-bundle.css.json"], resolve)))).default;
      case "sap_horizon_hcb":
        return (await Promise.resolve().then(() => new Promise(resolve => require(["../assets/themes/sap_horizon_hcb/parameters-bundle.css.json"], resolve)))).default;
      case "sap_horizon_hcw":
        return (await Promise.resolve().then(() => new Promise(resolve => require(["../assets/themes/sap_horizon_hcw/parameters-bundle.css.json"], resolve)))).default;
      default:
        throw "unknown theme";
    }
  };
  const loadAndCheck = async themeName => {
    const data = await loadThemeProperties(themeName);
    if (typeof data === "string" && data.endsWith(".json")) {
      throw new Error(`[themes] Invalid bundling detected - dynamic JSON imports bundled as URLs. Switch to inlining JSON files from the build or use 'import ".../Assets-static.js"'. Check the "Assets" documentation for more information.`);
    }
    return data;
  };
  ["sap_fiori_3", "sap_horizon", "sap_horizon_dark", "sap_horizon_hcb", "sap_horizon_hcw"].forEach(themeName => (0, _Themes.registerThemePropertiesLoader)("spacepackage", themeName, loadAndCheck));
});