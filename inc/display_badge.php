<?php
/**
 * Created by PhpStorm.
 * User: CTEConsultants
 * Date: 10/27/2017
 * Time: 12:40 PM
 */

$data = json_encode($_POST, true);

header("Content-Type: text/javascript; charset=utf-8");
echo $data;
