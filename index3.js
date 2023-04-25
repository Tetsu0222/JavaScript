let data = localStorage.getItem( "data" );
data = JSON.parse( data );

if( data === null ){
    data = { val:0 };
}

console.log( data.val );

data.val++;

const json = JSON.stringify( data );
localStorage.setItem( "data" , json );
