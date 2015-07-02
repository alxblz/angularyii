<?php

use yii\db\Schema;
use yii\db\Migration;

class m150702_103425_add_table_film extends Migration
{
    public function up()
    {
        $this->createTable('film', [
            'id'     => 'pk',
            'title'  => 'varchar(255) NOT NULL',
            'storyline'   => 'text NOT NULL',
            'director' => 'varchar(100) NOT NULL',
            'year'  => 'int(4) NOT NULL'
        ]);


/*        CREATE TABLE `film` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `storyline` text NOT NULL,
  `director` varchar(100) NOT NULL,
  `year` int(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8*/
    }

    public function down()
    {
        echo "m150702_103425_add_table_film cannot be reverted.\n";

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
