/**
 * Created by User on 06.07.2015.
 */

'use strict';
yii2AngApp_user.config(['$routeProvider',function($routeProvider){
    $routeProvider
        .when('/user/login', {
            templateUrl:'views/user/login.html',
            controller:'LoginCtrl'
        })
        .otherwise({
            redirectTo:'/user/login'
        })
}]);

yii2AngApp_user.controller('LoginCtrl', function() {

});