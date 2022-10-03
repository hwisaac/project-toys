console.log("hello");
const logoEl = document.querySelector(".logo");
const navBlue = document.querySelector(".nav__blue");
const navYellow = document.querySelector(".nav__yellow");
const navPink = document.querySelector(".nav__pink");
const navT = document.querySelector(".nav__t");
const navP = document.querySelector(".nav__p");
const navS = document.querySelector(".nav__s");
const list = document.querySelector(".list");
const str = "안녕하세요javas blue";

function isColor(li, x) {
  let temp;
  if (li.children[0].src.search("/blue") > -1) {
    temp = "blue";
  } else if (li.children[0].src.search("/pink") > -1) {
    temp = "pink";
  } else if (li.children[0].src.search("/yellow") > -1) {
    temp = "yellow";
  }
  if (temp === x) {
    return true;
  } else {
    return false;
  }
}
function isPTS(li, x) {
  let temp;
  if (li.children[0].src.search("_p.png") > -1) {
    temp = "p";
  } else if (li.children[0].src.search("_t.png") > -1) {
    temp = "t";
  } else if (li.children[0].src.search("_s.png") > -1) {
    temp = "s";
  }
  if (temp === x) {
    return true;
  } else {
    return false;
  }
}

function handleFilter(event) {
  const id = this.id;
  const lis = list.children;
  console.log(lis.length);

  if (id === "blue" || id === "yellow" || id === "pink") {
    for (let i = 0; i < lis.length; i++) {
      if (isColor(lis[i], id)) {
        lis[i].style.display = "flex";
      } else {
        lis[i].style.display = "none";
      }
    }
  } else {
    for (let i = 0; i < lis.length; i++) {
      if (isPTS(lis[i], id)) {
        lis[i].style.display = "flex";
      } else {
        lis[i].style.display = "none";
      }
    }
  }
}
navBlue.addEventListener("click", handleFilter);
navPink.addEventListener("click", handleFilter);
navYellow.addEventListener("click", handleFilter);
navT.addEventListener("click", handleFilter);
navS.addEventListener("click", handleFilter);
navP.addEventListener("click", handleFilter);
logoEl.addEventListener("click", () => {
  const lis = list.children;
  for (let i = 0; i < lis.length; i++) {
    lis[i].style.display = "flex";
  }
});
