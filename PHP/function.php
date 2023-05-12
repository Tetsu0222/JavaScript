<?php
    //関数

    //配列の要素数を数える。
    $name = array( "test1" , "test2" , "test3" );

    $size = count( $name );
    echo "配列の長さは${size}です";

    //ランダム値
    $randomNumber = rand( 1 , 4 ); //1から4の範囲内でランダムな数値を取得する。

    
    //関数を定義
    function calculation( $num1 , $num2 ){
        echo $num1 + $num2;
    }

    //関数の呼び出し。
    calculation( 1 , 5 );

?>