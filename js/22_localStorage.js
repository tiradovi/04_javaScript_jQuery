$(function () {
  $("#saveData").click(saveDataFn);
  $("#getBtn").click(getDataFn);
});

// 크롬이나 엣지 등 브라우저에서 F12클릭
// -> 애플리케이션 -> 로컬 스토리지 내부 확인
// 해당하는 URL 주소를 클릭하여 내부에 저장된 키 값 확인
// 키 값은 무조건 문자열로 저장되어있음 ""생략되어있음
// 인터넷 창에서 크롬일 경우 chrome://version 입력
// 프로필 경로: C:\Users\user\AppData\Local\Google\Chrome\User Data\Default
// 프로필 경로를 따라서 폴더 내부를 들어가면 local Storage 폴더가 존재할 것
// 폴더 내부에 db나 dbl로 저장된 내부에 컴퓨터만 이해할 수 있는 파일로 존재
// 문자열만 localStorage안에 저장하는 이유는 악성코드를 방지하기위해서임
// 따라서 배열 또한 문자열로 저장
function saveDataFn(e) {
  // button type=submit, a태그를 클릭할경우에 사용
  // a 태그 속성 기본값 href로 들어가는 것을 방지(ex) 마이페이지, 임직원페이지에 접근 가능한지 확인)
  e.preventDefault(); // type = button의 경우 필요 없음

  //소비자가 작성한 키와 값으로 저장할 예정
  const inputKey = $("#key").val();
  const inputValue = $("#value").val();

  //실제 localStorage에 저장 코드
  // .setItem() 기능 내부에는 키와 값을 저장한다. -> 크롬에서 기본적으로 저장할 위치에
  // 소비자가 작성한 데이터의 키와 값을 저장해놓는 경로까지 작성
  localStorage.setItem(inputKey, inputValue); //기본적으로 문자열
}

function getDataFn(e) {
  e.preventDefault();
  const inputKey = $("#getKey").val();

  // .getItem() : 기능 내부에 키를 활용해서 값을 가져온다. 값을 가져오는 위치는 크롬에서 기본적으로 저장한 위치
  const getValue = localStorage.getItem(inputKey);

  $("#getResult").html(`
    <strong>가져오기 성공!</strong> <br>
    저장된 키의 명칭 :${inputKey}<br> 
    저장된 값 :${getValue}`);
}
