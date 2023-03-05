const element = document.querySelectorAll(".clash-card__unit-stats");
element[0].style.backgroundColor = "#ec9b3b";
element[1].style.backgroundColor = "#ee5487";
element[2].style.backgroundColor = "#f6901a";
element[3].style.backgroundColor = "#82bb30";
element[4].style.backgroundColor = "#4facff";

element.forEach((e) => {e.style.color = "#fff"});

const element2 = document.querySelectorAll(".clash-card__unit-stats div:nth-child(3)");
element2.forEach((e) => {e.style.color = "#fff"});