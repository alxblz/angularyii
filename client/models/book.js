/**
 * Created by User on 02.07.2015.
 */
'use strict';
yii2AngApp_book.factory("servicesBook", ['$http','$location','$route',
    function($http,$location,$route) {
        var objBook = {};
        objBook.getBooks = function(){
            return $http.get(serviceBase + 'books');
        }
        objBook.createBook = function (book) {
            return $http.post( serviceBase + 'books', book )
                .then( successHandler )
                .catch( errorHandler );
            function successHandler( result ) {
                $location.path('/book/index');
            }
            function errorHandler( result ){
                alert("Error data")
                $location.path('/book/create')
            }
        };
        objBook.getBook = function(bookID){
            return $http.get(serviceBase + 'books/' + bookID);
        }

        objBook.updateBook = function (book) {
            return $http.put(serviceBase + 'books/' + book.id, book )
                .then( successHandler )
                .catch( errorHandler );
            function successHandler( result ) {
                $location.path('/book/index');
            }
            function errorHandler( result ){
                alert("Error data")
                $location.path('/book/update/' + book.id)
            }
        };
        objBook.deleteBook = function (bookID) {
            return $http.delete(serviceBase + 'books/' + bookID)
                .then( successHandler )
                .catch( errorHandler );
            function successHandler( result ) {
                $route.reload();
            }
            function errorHandler( result ){
                alert("Error data")
                $route.reload();
            }
        };
        return objBook;
    }]);