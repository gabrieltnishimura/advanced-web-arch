(function () {
    "use strict";

    var _homeFactory = function () {
		
		var _fromHome = function(res) {
            if(	res === undefined ||
				res.homeList === undefined ||
				res.homeList.constructor !== Array) {
				return {};
			}
			
			var _wrapper = res.homeList;
			return {
				'homeList': _wrapper.map(function(item) {
					return {
						'id': _wrapper.id,
						'title': _wrapper.title,
						'comment': _wrapper.comment
					}
				})
			};
		}
		
        var _toHome = function (req) {
			return {
				'title': req.title,
				'comment': req.comment ? req.comment : ''
			}
        };

        return {
            toHome: _toHome
			fromHome: _fromHome
        };

    };

    angular.module('app.home').service('HomeFactory', _homeFactory);
})();
