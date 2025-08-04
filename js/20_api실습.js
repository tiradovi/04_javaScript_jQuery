$(function () {
  $("#animal").click(function () {
    $.get("https://extinct-api.herokuapp.com/api/v1/animal/").done(function (
      data
    ) {
      const animal = data.data[0];
      $("#result").html(`
      <div class="animal-card">
        <img src="${animal.imageSrc}" alt="사진이 없습니다.">
        <div class="animal-info">
          <h2>멸종 동물 이름: ${animal.commonName}</h2>
          <p><strong>학명:</strong> ${animal.binomialName}</p>
          <p><strong>멸종시기:</strong> ${animal.lastRecord}</p>
          <p>${animal.shortDesc}</p>
          <a href="${animal.wikiLink}">관련링크 보기</a>
        </div>
      </div>
    `);
    });
  });
});
