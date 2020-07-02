# react-code-split


## 1. 일반 자바스크립트 함수를 import 이용하여 불러오기 
 A> 빌드시 해당 소스만 가진 chunk 파일로 빌드 된다.
 B> 실행 시점에 소스 코드(chunk) 를 동적으로 불러온다.  => split
 

 
 
## 2. React.lazy 함수 와 Suspense 컴포넌트를 이용한 코드 스플리팅
 A> 리액트 16.6 버전부터 도입
 
 
 ### 2-1 유틸함수 및 클래스 없이 state 이용하여 스플리팅
 
 
 
 ### 2-2 React.lazy + Suspense


 
## 3.  Loadable Components를 통한 코드 스플리팅
loadable Components는 코드 스플리팅을 편하게 하도록 도와주는 서드파티 라이브러리입니다. 
이 라이브러리의 이점은 서버 사이드 렌더링을 지원한다는 것입니다(React.lazy와 Suspense는 아직 서버 사이드 렌더링을 지원하지 않습니다). 
또한, 렌더링하기 전에 필요할 때 스플리팅된 파일을 미리 불러올 수 있는 기능도 있습니다.

### 1 설치 
yarn add @loadable/component
