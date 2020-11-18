let themeDots = document.getElementsByClassName("theme-dot");

for (var i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode == "style") {
    document.getElementById("theme-style").href = "style.css";
    document.getElementById("dark-mode").style.borderColor = "#f3f3f3";
    document.getElementById("red-mode").style.borderColor = "#333";
    document.getElementById("green-mode").style.borderColor = "#333";
    document.getElementById("blue-mode").style.borderColor = "#333";
  }
  if (mode == "red") {
    document.getElementById("theme-style").href = "red.css";
    document.getElementById("dark-mode").style.borderColor = "#333";
    document.getElementById("red-mode").style.borderColor = "#f3f3f3";
    document.getElementById("green-mode").style.borderColor = "#333";
    document.getElementById("blue-mode").style.borderColor = "#333";
  }
  if (mode == "green") {
    document.getElementById("theme-style").href = "green.css";
    document.getElementById("dark-mode").style.borderColor = "#333";
    document.getElementById("red-mode").style.borderColor = "#333";
    document.getElementById("green-mode").style.borderColor = "#f3f3f3";
    document.getElementById("blue-mode").style.borderColor = "#333";
  }
  if (mode == "blue") {
    document.getElementById("theme-style").href = "blue.css";
    document.getElementById("dark-mode").style.borderColor = "#333";
    document.getElementById("red-mode").style.borderColor = "#333";
    document.getElementById("green-mode").style.borderColor = "#333";
    document.getElementById("blue-mode").style.borderColor = "#f3f3f3";
  }
}

let slideIndex = 0;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("yes");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}
carousel();

function carousel() {
  let i;
  let x = document.getElementsByClassName("yes");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 7000);
}

$(".btn").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();
    const hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800
    );
  }
});

$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $("#main-nav .container").addClass("black");
  } else {
    $("#main-nav .container").removeClass("black");
  }
});

// Let see

let slideIndex2 = 0;
showDivs2(slideIndex2);

function showDivs2(n) {
  let i;
  let x = document.getElementsByClassName("mim-pics");
  if (n > x.length) {
    slideIndex2 = 1;
  }
  if (n < 1) {
    slideIndex2 = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex2 - 1].style.display = "block";
}
carousel2();

function carousel2() {
  let i;
  let x = document.getElementsByClassName("mim-pics");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex2++;
  if (slideIndex2 > x.length) {
    slideIndex2 = 1;
  }
  x[slideIndex2 - 1].style.display = "block";
  setTimeout(carousel2, 5000);
}

// 2st Slide

let slideIndex3 = 0;
showDivs2(slideIndex3);

function showDivs3(n) {
  let i;
  let x = document.getElementsByClassName("sunflower");
  if (n > x.length) {
    slideIndex3 = 1;
  }
  if (n < 1) {
    slideIndex3 = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex3 - 1].style.display = "block";
}
carousel3();

function carousel3() {
  let i;
  let x = document.getElementsByClassName("sunflower");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex3++;
  if (slideIndex3 > x.length) {
    slideIndex3 = 1;
  }
  x[slideIndex3 - 1].style.display = "block";
  setTimeout(carousel3, 5000);
}

// 3rd Slide

let slideIndex4 = 0;
showDivs4(slideIndex4);

function showDivs4(n) {
  let i;
  let x = document.getElementsByClassName("study");
  if (n > x.length) {
    slideIndex4 = 1;
  }
  if (n < 1) {
    slideIndex4 = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex4 - 1].style.display = "block";
}
carousel4();

function carousel4() {
  let i;
  let x = document.getElementsByClassName("study");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex4++;
  if (slideIndex4 > x.length) {
    slideIndex4 = 1;
  }
  x[slideIndex4 - 1].style.display = "block";
  setTimeout(carousel4, 5000);
}

// 4th slide

let slideIndex5 = 0;
showDivs5(slideIndex5);

function showDivs5(n) {
  let i;
  let x = document.getElementsByClassName("advice");
  if (n > x.length) {
    slideIndex5 = 1;
  }
  if (n < 1) {
    slideIndex5 = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex5 - 1].style.display = "block";
}
carousel5();

function carousel5() {
  let i;
  let x = document.getElementsByClassName("advice");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex5++;
  if (slideIndex5 > x.length) {
    slideIndex5 = 1;
  }
  x[slideIndex5 - 1].style.display = "block";
  setTimeout(carousel5, 5000);
}
