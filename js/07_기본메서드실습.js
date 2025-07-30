$(document).ready(function () {
  // ========================================
  // 여기에 jQuery 코드를 작성하세요
  // ========================================

  // 과제 1: 로그인 모달 기능 구현

  $("#myPageBtn").click(function () {
    // 여기에 모달 열기 코드 작성
    $("#loginModal").fadeIn(300);
  });

  $("#closeModal").click(function () {
    // 여기에 모달 닫기 코드 작성
    $("#loginModal").fadeOut(300);
  });

  $("#loginModal").click(function (e) {
    // 여기에 배경 클릭 시 모달 닫기 코드 작성
    if (this === e.target) {
      $(this).fadeOut(300);
    }
  });

  // 모달 내용 클릭 시 이벤트 버블링 방지
  $(".modal-content").click(function (e) {
    // 여기에 이벤트 버블링 방지 코드 작성
    /* 
    둘 다 모달 내부 클릭시 꺼짐 방지

    방법 1번
    조건부로 ~식으로 처리하겠다의 형식
        if (this === e.target) {
      $(this).fadeOut(300);
    }

    방법 2번
    조건부 형식 설정 없이 모달 내부를 클릭했을 때 꺼짐 방지 설정
    e.stopPropagation(); 
    특정 행동이 전달되지 않도록 설정
    */

    e.stopPropagation();
  });

  // 과제 2: 애니메이션 탭 메뉴 구현

  $(".tab-btn").click(function () {
    // 여기에 탭 메뉴 코드 작성
    const selectTab = $(this).data("tab");

    $(".tab-btn").removeClass("active");
    $(this).addClass("active");

    $(".tab-content").slideUp(300);
    $("#" + selectTab).slideDown(300);
  });

  // 과제 3: 3D 카드 플립 효과 구현

  $(".card").click(function () {
    // 여기에 카드 플립 코드 작성
    $(this).toggleClass("flipped");
  });

  // 추가 기능: 폼 제출 처리 (선택사항)
  $("#loginForm").submit(function (e) {
    e.preventDefault();
    alert("로그인 기능은 데모용입니다!");
  });

  // 기타 네비게이션 버튼들
  $("#homeBtn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });

  $("#contactBtn").click(function () {
    alert("📞 연락처: contact@thejoheunnara.com");
  });
});
