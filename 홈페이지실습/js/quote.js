$(function () {
  $("#getQuote").click(getQuote);
});

function getQuote() {
  $.get("https://api.quotable.io/random").done(function (data) {
    $("#quoteResult").html(
      `
        <div class="success">
            <div class="quote-box">
                <h3>content :  ${data.content}</h3><br>
                <p> author  :  ${data.author}</p>
            </div>
        </div>
        
        `
    );
  });
}
