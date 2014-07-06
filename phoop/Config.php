<?php

class Config {

  protected static $_instance;
  private $ed;

  /**
   *
   *
   */
  private function __construct() {

    $this->ed = "Nerd";

  }

  /**
   * @return Config
   */
  protected function _init() {

    if (!isset(self::$_instance) || is_null(self::$_instance)) {
      self::$_instance = new self();
    }
    return self::$_instance;

  }

  /**
   * @return Config
   */
  public static function run() {

    return self::_init();

  }

  /**
   * Overloading the magic __get method
   *
   * @param $key
   * @return mixed
   */
  public function __get($key) {

    return $this->$key;

  }

}

