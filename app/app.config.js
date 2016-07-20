"use strict";
var AppProperty = (function () {
    function AppProperty() {
    }
    Object.defineProperty(AppProperty, "API_ENDPOINT", {
        get: function () { return 'http://127.0.0.1:6666/api/'; },
        enumerable: true,
        configurable: true
    });
    return AppProperty;
}());
exports.AppProperty = AppProperty;
//# sourceMappingURL=app.config.js.map