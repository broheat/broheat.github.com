var store = [{
        "title": "2021-08-01",
        "excerpt":"바닐라 JS 강의(#3.0~#3.2). Javascript로 정보를 가지고 올 수 있는 방법은 document 객체와 element를 가져오는 함수를 이용 하는 것. const title = document.getElementById(\"title\"); title.innerText = \"Got you\"; getElementById 함수를 통해 id로 element를 가져올수 있다. element를 가장 쿨하게 가져오는 방법은 document.querySelector(\".Hello h1\"); 의미는 class Hello내의 h1 element를 가져온다. 중복 되는 것이 있으면,...","categories": ["Today I do"],
        "tags": ["Invest","JavaScript"],
        "url": "/today%20i%20do/Today-I-do/",
        "teaser": null
      },{
        "title": "2021-08-02",
        "excerpt":"바닐라 JS 강의(#3.3~#3.8) Event가 발생하면 특정 함수가 작동 할 수 있게 하려면 element.addEventListener(\"click\", function) 위 코드는 사용자가 element를 클릭 하였을 때, function이 동작 하게 하는 코드이다. 주의점은 function 부분에 function 동작 함수가 아니라, function 이름을 넣는것. function() x function o console.dir(element)를 하면 다양한 property가 나온다. 여기서 앞에 on이 붙은 것이...","categories": ["Today I do"],
        "tags": ["Invest","JavaScript"],
        "url": "/today%20i%20do/Today-I-do/",
        "teaser": null
      },{
        "title": "2021-08-03",
        "excerpt":"바닐라 JS 강의(#4.0~4.5)   함수를 호출 할 때, function이 아니라 function()로 호출 하면 브라우저가 이 코드를 보자마자 자동으로 function을 실행시킨다.   모든 EventListener에서 function의 첫번째 argument는 항상 막 벌어진 일들에 대한 정보. 예를 들어, click.   function onLoginSubmit(event) {   event.preventDefault(); /// 어떤 event의 기본 행동 발생하지 않도록 하는것.   console.log(event); } loginForm.addEventListener(\"click\", onLoginSubmit);  ","categories": ["Today I do"],
        "tags": ["JavaScript"],
        "url": "/today%20i%20do/Today-I-do/",
        "teaser": null
      },{
        "title": "2021-08-04",
        "excerpt":"바닐라 JS 강의(#4.6)   localStorage는 우리가 브라우저에 뭔가를 저장할 수 있게 하고, 나중에 가져다 쓸 수 있다. 브라우저에 저장하는 방법은 다음과 같다.   localStorage.setItem(\"username\", \"nico\");   첫번째 인자는 key, 두번째 인자는 value.   브라우저에 저장 된 정보를 불러오는 방법은 다음과 같다.   localStorage.getItem(\"username\");   그리고 저장된 정보를 제거 하는 방법은   localStorage.removeItem(\"username\");  ","categories": ["Today I do"],
        "tags": ["JavaScript"],
        "url": "/today%20i%20do/Today-I-do/",
        "teaser": null
      },{
        "title": "부자아빠 가난한 아빠 Chapter 1",
        "excerpt":"부자아빠 가난한 아빠 Chapter 1을 읽은 후  ","categories": ["reading"],
        "tags": [],
        "url": "/reading/chapter-1/",
        "teaser": null
      },{
        "title": "2021-08-07",
        "excerpt":"삶의 계획   해야 할 것들      독서            한 챕터 읽고 정리.           운동   투자            삼프로 요약 정리.       스프레드시트로 한달에 한번 자산 정리.           코딩            Nomad coder 챌린지 도전.          ","categories": ["Today I do","Plan"],
        "tags": [],
        "url": "/today%20i%20do/plan/Plan/",
        "teaser": null
      }]
