#  COOBOOK

<h3 align="center">

<img width="500" height="380" src=https://user-images.githubusercontent.com/42745614/198283218-02d74bf2-5e98-4ee0-8120-4619d13346b9.gif></br>

</h3>
프로젝트 소개: 다양한 레시피 검색 및 즐겨찾기가 가능한 웹앱입니다.</br>
진행 기간: 2022년 10월 14일 → 2022년 10월 26일</br>
프로젝트 인원: 개인 프로젝트</br>
Service Link: https://dia-min.github.io/COOBOOK/

## 🎈Motivation
</br>
최근 내 주변에 자취하는 친구들이 많이 생겼고, 실제로 1인 가구가 많이 늘어가고 있다.

‘배달 음식으로 끼니를 해결하는 것에 한계가 있다.’라는 의견의 대부분이었고, 간단히 만들 수 있는 요리를 배워 끼니를 해결하고자 하는 친구들이 많았다.

물론, YouTube의 수많은 요리 채널과 웹상의 다양한 블로그가 존재하지만, 일일이 관련 영상을 찾아 돌려보거나 봤던 블로그를 다시 찾아야 하는 불편함이 존재했다.

그래서 다양한 요리 레시피를 둘러 보거나 검색을 통해 원하는 레시피는 즐겨 찾기 할 수 있는 웹사이트를 만들어 자취하는 지인들에게 제공하면 좋겠다고 생각하여 만들게 되었다.
</br>
</br>
## ⚙️ Stack
- **Front-End** : Vue, Vuex, Sass
- **Deployment** : GitHub

## 📄 프로젝트 소개

현재 프로젝트에서 제공하는 서비스는 다음과 같다.

- 조리 방법 또는 요리 종류 따라 레시피를 둘러볼 수 있다.
- 원하는 요리의 레시피를 검색할 수 있다.
- 관심있는 레시피는 즐겨찾기를 통해 쉽게 확인할 수 있다.

## 💻 개발 내용

### 전체적인 UI 디자인 및 컴포넌트 개발

### Vuex를 활용한 데이터 filtering

### localStorage API 활용한 데이터 관리

### Vue 사용자 정의 지시자를 활용한 Image lazy loading 구현

## 💎 나의 성장

### Vue에 대해서

React와 Vue의 차이점이 알고 싶어 짧게 Vue 사용법을 익히고 해당 프로젝트를 진행했습니다.

대표적인 프론트 프레임 워크인 React와 Vue는 닮은 점도 분명 존재 했지만, React는 라이브러리이고 Vue는 프레임워크라는 점에서 큰 차이가 있었습니다.

React로 개발 했을 때는 Vue에 비해 JavaScript로 기능 개발 또는 라이브러의 활용이 자유롭다는 점이었습니다. 
Vue같은 경우 Vue에서 제공하는 방법을 사용해야 개발이 가능했기 때문에 React 개발에 익숙한 저는 Vue는 React에 비해 자유도가 낮다고 느꼈습니다.

하지만, Vue로 컴포넌트 개발 시 templage, script, style 세 영으로 각 역활이 명확하게 구분되어 있어 코드의 가시성 및 생산성은 React 보다 좋았습니다.

해당 프로젝트를 진행하면서 필요한 기술들은 바로 익혀 적용해 나갈 수 있는 역량을 기를 수 있었습니다.

### Lazy Loading을 이용한 웹 퍼포먼스 개선

‘v-lazyload’라는  사용자 정의 지시자를 만들고 **IntersectionObserver API**를 활용하여 이미지 렌더링 시 lazy loading이 되도록 구현했습니다. 

페이지 내 필요하지 않은 이미지들의 로딩 시점을 뒤로 미뤄 페이지 로드 시점에 사용자에게 보여지지 않는 이미지는 스크롤을 통해 실제로 이미지가 보여지는 시점에 로딩되도록 하였습니다. 

이를 통해 이미지들을 로딩하는 시간을 단축 시킬 수 있었으며, 이로 인한 성능 향상과 비용 감소를 확인할 수 있었습니다.

## ✨ 서비스 화면

### 1. 메인 페이지 

<img width="941" alt="COBOOK_1-1" src="https://user-images.githubusercontent.com/42745614/198284398-5e978c8e-13b0-48b7-9cd8-408b98f12726.png">
<img width="944" alt="COOBOOK_1-2" src="https://user-images.githubusercontent.com/42745614/198284405-46ac46b6-b173-45eb-8af4-8e25c55f3a7f.png">

### 2. 레시피 상세 뷰

<img width="947" alt="COOBOOK_2-1" src="https://user-images.githubusercontent.com/42745614/198284420-3e88a578-42f0-42d7-b4ff-7a3946d15071.png">
<img width="945" alt="COOBOOK_2_2" src="https://user-images.githubusercontent.com/42745614/198284416-3d9d6e2c-d3d2-4677-943e-2be4041a0353.png">

### 3. 레시피 검색

<img width="941" alt="COOBOOK_3-1" src="https://user-images.githubusercontent.com/42745614/198284423-1fbbd2f4-5cee-464f-b21b-04c8df4aeffa.png">


### 4. 레시피 스크랩

<img width="947" alt="COOBOOK_4" src="https://user-images.githubusercontent.com/42745614/198284426-ead5d585-0c97-4f1c-968b-a2e22b4ee8c6.png">

