<?php

use yii\db\Schema;
use yii\db\Migration;

class m150702_141004_add_book_table extends Migration
{
    public function up()
    {
        $this->createTable('film', [
            'id'     => 'pk',
            'name'  => 'varchar(255) NOT NULL',
            'description'   => 'text NOT NULL',
            'author' => 'varchar(100) NOT NULL',
            'year'  => 'int(4) NOT NULL'
        ]);

      /*  CREATE TABLE `book` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `description` text NOT NULL,
  `author` varchar(100) NOT NULL,
  `year` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 */


    }

    public function down()
    {
        echo "m150702_141004_add_book_table cannot be reverted.\n";

        return false;
    }
    
    /*
    // Use safeUp/safeDown to run migration code within a transaction
    public function safeUp()
    {
    }
    
    public function safeDown()
    {
    }
    */
}
