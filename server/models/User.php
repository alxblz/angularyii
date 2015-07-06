<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "users".
 *
 * @property integer $id
 * @property string $user
 * @property string $email
 * @property string $password
 */
class User extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'users';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['user', 'email', 'password'], 'required'],
            [['id'], 'integer'],
            [['user', 'password'], 'string', 'max' => 100],
            [['email'], 'string', 'max' => 255],
            [['user'], 'unique'],
            [['email'], 'unique']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'user' => 'User',
            'email' => 'Email',
            'password' => 'Password',
        ];
    }
}
