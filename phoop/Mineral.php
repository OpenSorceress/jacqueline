<?php

require "Config.php";
class Mineral {

  public static $thingie = 'WAT';
  public $dean = array("thing"=>"stuff", array("inner"=>"thingie of array stuff"));

  public function __construct() {

    if (!$this->dean) {
      $this->thingie = self::$thingie;
    }

    foreach($this->dean['inner'] as $key=>$val) {

      if (is_array($val)) {

      }
    }

  }

}
