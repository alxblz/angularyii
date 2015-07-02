/**
 * Created by User on 30.06.2015.
 */
'use strict';
// Ссылка на серверную часть приложения
var serviceBase = 'http://server.angularyii.local/';
// Основной модуль приложения и его компоненты
var yii2AngApp;
yii2AngApp = angular.module('yii2AngApp', [
    'ngRoute',
    'yii2AngApp.site',
    'yii2AngApp.book',
    'yii2AngApp.film'

]);
// рабочий модуль
var yii2AngApp_site = angular.module('yii2AngApp.site', ['ngRoute']);
var yii2AngApp_film = angular.module('yii2AngApp.film', ['ngRoute']);
var yii2AngApp_book = angular.module('yii2AngApp.book', ['ngRoute']);

yii2AngApp.config(['$routeProvider', function($routeProvider) {
    // Маршрут по-умолчанию
    $routeProvider.otherwise({redirectTo: '/site/index'});
}]);

