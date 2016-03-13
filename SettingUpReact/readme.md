# Setting up React for ES6 with Webpack and Babel
[Setting up React for ES6 with Webpack and Babel](https://www.twilio.com/blog/2015/08/setting-up-react-for-es6-with-webpack-and-babel-2.html)

리액트 js는 넓은 영역에서 많은 소프트웨에 회사들을 프론트엔드 개발의 세계를 매료시켰다. 
MVC에 있어 V는 홈페이지 자신을 설명하고, 리액트는 재사용 가능한 UI컴포넌트를 생성하게 하며, 
돔을 추상화 함으로써 데이터를 관리하기 쉽게 많든다. 웹팩과 같은 빌더 유틸리티를 조합함으로써
리액트는 빌딩과 단일 페이지 웹 어플리케이션의 관리를 단순화 시킨다.  
  
Facebook은 첨단의 리액트를 유지하는 위대한 일을 하였고, 심지어 ES6의 새기능의 호환을 가능하게
하였다. 불행히도 Es6의 브라우져 지원은 한정적이다. 바벨은 ES6의 기능을 사용할 수 있게 하고, 
ES6코드를 오래된 자바스크립트 환경에서 사용가능한 ES5코드로 변환하여 준다.  
  
이 포스트에서는 ES6 기능을 사용하는 두 기본 리액트 컴포넌트의 셋팅을 할 것이며, 그것들을 
바벨을 사용하여 ES5 코드로 변환하고, 웹팩을 사용하여 그것들을 묶을 것이다. 그리고 이건 재미있을 
것이다.  
  
     webpack-dev-server --progress --colors
  

