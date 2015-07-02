/**
 * Created by User on 02.07.2015.
 */
'use strict';
yii2AngApp_book.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/book/index', {
            templateUrl: 'views/book/index.html',
            controller: 'indexBook'
        })
        .when('/book/create', {
            templateUrl: 'views/book/create.html',
            controller: 'createBook',
            resolve: {
                book: function(servicesBook, $route){
                    return servicesBook.getBooks();
                }
            }
        })
        .when('/book/update/:bookId', {
            templateUrl: 'views/book/update.html',
            controller: 'updateBook',
            resolve: {
                book: function(servicesBook, $route){
                    var bookId = $route.current.params.bookId;
                    return servicesBook.getBook(bookId);
                }
            }
        })
        .when('/book/deleteBook/:bookId', {
            templateUrl: 'views/book/index.html',
            controller: 'deleteBook',
        })
        .otherwise({
            redirectTo: '/book/index'
        });
}]);

yii2AngApp_book.controller('indexBook', ['$scope', '$http', 'servicesBook',
    function($scope,$http,servicesBook) {
        $scope.messagebook = 'Everyone come and see how good I read!';
        servicesBook.getBooks().then(function(data){
            $scope.books = data.data;
        });
        $scope.deleteBook = function(bookID) {
            if(confirm("Are you sure to delete book number: " + bookID)==true && bookID>0){
                servicesBook.deleteBook(bookID);
                $route.reload();
            }
        };
    }])
    .controller('createBook', ['$scope', '$http', 'servicesBook','$location','book',
        function($scope,$http,servicesBook,$location,book) {
            $scope.message = 'Look! I am an about page book.';
            $scope.createBook = function(book) {
                var results = servicesBook.createBook(book);
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

