<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 30.06.2015
 * Time: 12:27
 */

namespace app\controllers;


use yii\rest\ActiveController;


class FilmController extends ActiveController{

    public $modelClass = 'app\models\Film';

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