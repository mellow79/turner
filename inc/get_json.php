<?php
/**
 * Created by PhpStorm.
 * User: CTEConsultants
 * Date: 10/27/2017
 * Time: 10:50 AM
 */

/* get json file date using php function file_get_contents */
$json1 = file_get_contents("http://www.cartoonnetwork.com/test/backend-quiz/shows.json");
$json2 = file_get_contents("http://www.cartoonnetwork.com/test/backend-quiz/games.json");

/* decode json data to php array */
$array1 = json_decode($json1, TRUE);
$array2 = json_decode($json2, TRUE);

$output = "";

//iterate over arrays to find matching ids
if (isset($array1['shows'])) {
  foreach ($array1['shows'] as $data) {
    $output .= '<li>' . $data['id'] . '<br>
    
    ' . $data['show'] . '<br>';

    if (isset($array2['games'])) {

      foreach ($array2['games'] as $data2) {

        if ($data['id'] === $data2['id']) {

          $output .= $data2['game'] . '</li>';
        }
      }

    }
    else {

      $ouput .= '</ul>';
    }
  }
}