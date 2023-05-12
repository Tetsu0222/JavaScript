<?php

    //リクエストから値を受け取る。
    $name = $_POST["name"];

    $items = array( "test1" , "test2" , "test3" );
    $number = 1;

    //組み込み
    foreach( $items as $item ){
        echo "<option value=${item}>テスト${number}<option>";
        $number++;
    }

?>