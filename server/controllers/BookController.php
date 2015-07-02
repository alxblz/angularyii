<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 02.07.2015
 * Time: 14:15
 */

namespace app\controllers;

use yii\rest\ActiveController;


class BookController extends ActiveController{

    public $modelClass = 'app\models\Book';

    public function behaviors()
    {
        return
            \yii\helpers\ArrayHelper::merge(parent::behaviors(), [
                'corsFilter' => [
                    'class' => \yii\filters\Cors::className(),
                ],
            ]);
    }

}