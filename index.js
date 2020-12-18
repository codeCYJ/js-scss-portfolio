window.onload = function () {
  const btnnext = document.querySelector(".btn-next");
  const btnprev = document.querySelector(".btn-prev");
  const btnnum1 = document.querySelector(".btn-num1");
  const btnnum2 = document.querySelector(".btn-num2");
  const Testimonialscontent = document.querySelector(".Testimonials-content");

  btnnext.addEventListener("click", () => {
    Testimonialscontent.classList.add("no2");
    btnnum1.classList.add("no2");
    btnnum2.classList.add("no2");
  });

  btnprev.addEventListener("click", () => {
    Testimonialscontent.classList.remove("no2");
    btnnum1.classList.remove("no2");
    btnnum2.classList.remove("no2");
  });

  function copy2() {
    var obj = document.getElementById("text2");
    obj.select(); //인풋 컨트롤의 내용 전체 선택
    document.execCommand("copy"); //복사
    obj.setSelectionRange(0, 0); //선택영역 초기화
  }

  /* const video = document.querySelectorAll("#video");
  video.addEventListener("mouseover", function () {
    video.removeAttribute("class");
    video.setAttribute("class", "hover");
  });
  video.addEventListener("mouseout", function () {
    video.removeAttribute("class");
    video.setAttribute("class", "hide");
  });

  function hover() {
    $("#video", this).get(0).play();
  }

  function hide() {
    $("#video", this).get(0).pause();
  } */
};
