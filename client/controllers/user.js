/**
 * Created by User on 02.07.2015.
 */
'use strict';
yii2AngApp_book.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/user/login', {
            templateUrl: 'views/user/login.html',
            controller: 'loginUser'
        })
        .when('/user/registration', {
            templateUrl: 'views/user/registration.html',
            controller: 'registration',
            resolve: {
                book: function(servicesUser, $route){
                    return servicesUser.getUsers();
                }
            }
        })
        .when('/book/update/:bookId', {
            templateUrl: 'views/book/update.html',
            controller: 'updateBook',
            resolve: {
                user: function(servicesBook, $route){
                    var userId = $route.current.params.userId;
                    return servicesUser.getUser(userId);
                }
            }
        })
        .when('/book/deleteBook/:bookId', {
            templateUrl: 'views/book/index.html',
            controller: 'deleteBook'
        })
        .otherwise({
            redirectTo: '/user/login'
        });
}]);

yii2AngApp_book.controller('loginUser', ['$scope', '$http', 'servicesUser',
    function($scope,$http,servicesUser) {
        $scope.messagebook = 'Everyone come and see how good I read!';
        servicesUser.getUsers().then(function(data){
            $scope.users = data.data;
        });
        $scope.deleteBook = function(bookID) {
            if(confirm("Are you sure to delete book number: " + bookID)==true && bookID>0){
                servicesUser.deletUser(bookID);
                $route.reload();
            }
        };
    }])
    .controller('registration', ['$scope', '$http', 'servicesUser','$location','book',
        function($scope,$http,servicesUser,$location,user) {
            $scope.message = 'Look! I am an about page book.';
            $scope.createUser = function(user) {
                var results = servicesUser.createUser(user);
            }
        }])
    .controller('updateBook', ['$scope', '$http', '$routeParams', 'servicesBook','$location','book',
        function($scope,$http,$routeParams,servicesBook,$location,book) {
            $scope.message = 'Contact us! JK. This is just a demo. Book';
            var originalBook = book.data;
            $scope.book = angular.copy(originalBook);
            $scope.isClean = function() {
                return angular.equals(originalBook, $scope.book);
            }
            $scope.updateBook = function(book) {
                var results = servicesBook.updateBook(book);
            }
        }]);

