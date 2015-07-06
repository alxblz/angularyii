<html ng-app="yii2AngApp">
<head>
    <!-- CSS -->
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap-theme.min.css" />
    <link rel="stylesheet" href="web/styles/style.css" />

    <!-- Подключаем AngularJS -->
    <script src="assets/angular/angular.min.js"></script>
    <script src="assets/angular/angular-route.min.js"></script>

    <!-- Подключаем модули приложения -->
    <script src="app.js"></script>
    <script src="controllers/site.js"></script>
    <script src="models/book.js"></script>
    <script src="controllers/book.js"></script>
    <script src="models/film.js"></script>
    <script src="controllers/film.js"></script>
    <script src="controllers/user.js"></script>

</head>
<body ng-controller="index">
    <nav class="navbar navbar-default">
        <div class="container">
            <div class="navbar-header">
                <a class="navbar-brand" href="#/">Одностраничное приложение</a>
            </div>
            <ul class="nav navbar-nav navbar-right">
                <li><a href="#/"><i class="glyphicon glyphicon-home"></i> Главная</a></li>

                <li><a href="#/book/index"><i class="glyphicon glyphicon-book"></i> Каталог книг</a></li>
                <li><a href="#/film/index"><i class="glyphicon glyphicon-film"></i> Каталог фильмов</a></li>
                <li><a href="#/site/about"><i class="glyphicon glyphicon-tag"></i> О приложении</a></li>
                <li><a href="#/site/contact"><i class="glyphicon glyphicon-envelope"></i> Обратная связь</a></li>
                <li><a href="#/user/login"><i class="glyphicon glyphicon-envelope"></i> Login</a></li>
            </ul>
        </div>
    </nav>
    <div id="main" class="container">
        <!-- Здесь будет динамическое содержимое -->
        <div ng-view></div>
    </div>

    <footer class="text-center">
        <p>Работает на Yii 2.0.4 и AngularJs 1.3.15</p>
    </footer>



</body>

</html>