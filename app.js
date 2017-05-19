(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', ['$scope', LunchCheckController]);

    function LunchCheckController ($scope) {
        $scope.items = "";
        $scope.message = "";

        $scope.checkItems = function() {
            var lunchItems = $scope.items.split(',');
            if ( lunchItems.length == 0 || lunchItems.length == 1 ) {
                var empty = true;
                if (lunchItems.length == 1) {
                    var item = lunchItems[0];
                    if (item !== '')
                        empty = false;
                }
                if ( empty )
                    $scope.message = 'Please enter data first';
            }
            else if ( lunchItems.length == 0 ) {
                $scope.message = 'Please enter data first';
            }
            else if ( lunchItems.length < 4 ) {
                $scope.message = 'Enjoy!';
            }
            else if ( lunchItems.length > 3 ) {
                $scope.message = 'Too much!';
            }
        };

        $scope.replyMessage = function() {
            return $scope.message;
        }
    }

})();
