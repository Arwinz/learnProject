angular.module('myApp', ['emailParser'])
    .controller('MyController', ['$scope', 'EmailParser', '$filter',
        function($scope, EmailParser, $filter) {
            $scope.to = 'ari@fullstack.io';
            $scope.emailBody = 'Hello {{ to }}, \r\nMy name is Ari too!';
            $scope.testObj = {
              'a' : 1,
              'b' : "sdf",
              'c' : true
            };
            // Set up a watch
            $scope.$watch('emailBody', function(body) {
                if (body) {
                    $scope.previewText = EmailParser.parse(body, {
                      to: $scope.to
                    });
                }
            });
            // $scope.$watch('toUpcase', function(text) {
            //     if (text) {
            //         $scope.toUpcase = $filter("uppercase")($scope.toUpcase)
            //     }
            // });
            $scope.toUpcase = $filter("uppercase")($scope.toUpcase);
            
        }
    ]);

angular.module("emailParser", [])
    .config(['$interpolateProvider',
        function($interpolateProvider) {
            $interpolateProvider.startSymbol('{{');
            $interpolateProvider.endSymbol('}}');
        }
    ])
    .factory("EmailParser", ['$interpolate',
        function($interpolate) {
            // a service to handle parsing
            return {
                parse: function(text, context) {
                    var template = $interpolate(text);
                    return template(context);
                }
            };
        }
    ]);