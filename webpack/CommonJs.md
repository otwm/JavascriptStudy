커먼 Js는 각각의 네임스페이스를 이용하여 자바스크립트 스코프 문제를 해결한다.  
  
    // moduleA.js
    module.exports = function( value ){
        return value*2;
    }
    
    // moduleB.js
    var multiplyBy2 = require('moduleA');
    var result = multiplyBy2( 4 );