let pp = document.querySelector(
 "p");
let sweep = () => {
 pp.classList.toggle("topp");
 setTimeout(sweep1, 1000);
}
let sweep1 = () => {
 pp.classList.toggle("botrom");
 setTimeout(sweep2, 1000);
}
let sweep2 = () => {
 pp.classList.toggle("top2");
 setTimeout(sweep3, 1000);
}
let sweep3 = () => {
 pp.classList.toggle("top3");
 setTimeout(sweep4, 1000);
}
let sweep4 = () => {
 pp.classList.toggle("top4");
 setTimeout(sweep5, 1000);
}
let sweep5 = () => {
 pp.classList.toggle("top5");
 setTimeout(sweep6, 1000);
}
let sweep6 = () => {
 pp.classList.toggle("top6");
 setTimeout(sweep7, 1000);
}
let sweep7 = () => {
 pp.classList.add("top7");
 setTimeout(sweep8, 1000);
}
let sweep8 = () => {
 pp.classList.add("top8");
 setTimeout(sweep9, 1000);
}
let sweep9 = () => {
 pp.classList.toggle("top9");
 setTimeout(sweep10, 1000);
}
let sweep10 = () => {
 pp.classList.toggle("top10");
 setTimeout(sweep11, 1000);
}
let sweep11 = () => {
 pp.classList.toggle("top11");
 setTimeout(sweep12, 1000);
}
let sweep12 = () => {
 pp.classList.toggle("top12");
 setTimeout(sweep13, 1000);
}
let sweep13 = () => {
 pp.classList.toggle("top13");
 setTimeout(sweep14, 1000);
}
let sweep14 = () => {
 pp.classList.toggle("top14");
 setTimeout(end, 1000);
}
let end = () => {
 pp.classList.toggle("end");
 pp.innerHTML = "THE END";
 setTimeout(cler, 4000);
}
let cler = () => {
 pp.classList.remove("p");
 pp.classList.remove("end");
 pp.innerHTML = "";
 location.reload();
}
