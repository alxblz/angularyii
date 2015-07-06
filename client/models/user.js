/**
 * Created by User on 02.07.2015.
 */
'use strict';
yii2AngApp_user.factory("servicesUser", ['$http','$location','$route',
    function($http,$location,$route) {
        var objUser = {};
        objUser.getUsers = function(){
            return $http.get(serviceBase + 'users');
        }
        objUser.createUser= function (user) {
            return $http.post( serviceBase + 'users', user )
                .then( successHandler )
                .catch( errorHandler );
            function successHandler( result ) {
                $location.path('/user/login');
            }
            function errorHandler( result ){
                alert("Error data")
                $location.path('/user/registration')
            }
        };
        objUser.getBook = function(bookID){
            return $http.get(serviceBase + 'books/' + bookID);
        }

        objUser.updateBook = function (book) {
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
        objUser.deleteBook = function (bookID) {
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
        return objUser;
    }]);