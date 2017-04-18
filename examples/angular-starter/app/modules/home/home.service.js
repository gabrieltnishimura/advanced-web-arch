(function () {
    "use strict";

    var _homeService = function ($http, appSettings, $window) {
        var _getHome = function () {
            return $http.get(appSettings.apiBensEndpoint + "/common/lojas");
        };

        return {
            getHome: _getHome
        };

    };

    angular.module('app.home').service('HomeService', _homeService);
})();
