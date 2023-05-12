

<?php

    //文字を出力する。
    echo "Hello";

    //変数に値を入力して出力
    $name = "テスト";
    echo $name;


    //文字を結合する。
    //ドット記法
    echo $name.'練習';

    //ダブルクォーテーションで括る。
    echo "{$name}で練習";


    //配列
    $nameArray = array( "test1" , "test2" );

    //値を末尾に追加
    $nameArray[] = "test3";

    //値を上書き
    $nameArray[1] = "test1-2";

    //配列から特定の要素を出力
    echo $nameArray[1];


    //連想配列
    $nameMap = array(
        "key1" => "value1",
        "key2" => "value2"
    )

    //連想配列から特定の値を取り出す。
    echo $nameMap["key1"]; //value1が出力



    //foreach文で配列から要素を取り出す。
    foreach( $nameArray as $name ){
        echo $name;
    }

    //foreach文で連想配列から値を取り出す。
    foreach( $nameMap as $key => $value ){
        echo "キーは${key}で、値は${value}です";
    }

?>



