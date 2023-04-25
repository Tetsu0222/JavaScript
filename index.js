let counter = 0;
const intervalID = setInterval( () => {

    counter++;
    console.log( counter );

    if( counter == 60 ){
        clearInterval( intervalID );
        console.log( "インターバル終了" );
    }
    
} , 1000 );