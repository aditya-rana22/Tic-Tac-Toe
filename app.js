const btnGrp = document.querySelectorAll(".square");
const start = document.querySelector("#start");
const title = document.querySelector("#title");
const circle = document.createElement("div");
const cross = document.createElement("div");
const restart = document.createElement("button");
const head = document.querySelector("#head");
let flagStart = false;
restart.classList.add("button");
restart.classList.add("is-success");
restart.innerText = "Restart Game";
cross.innerHTML = "&#10060;";
restart.classList.add("has-text-centered");

cross.classList.add("has-text-centered");
circle.classList.add("has-text-centered");
cross.classList.add("cross");
circle.classList.add("circle");
var para = document.createElement("h3");
para.classList.add("is-size-2");
para.classList.add("has-text-centered");
para.innerHTML = "Player <span id='pno' > 1</span > 's Turn";
restart.addEventListener("click", () => {
    restart.remove();
    head.append(start);
    para.innerHTML = "Player <span id='pno' > 1</span > 's Turn";
    for (let btn of btnGrp) {
        btn.innerHTML = "";
    }

    flagStart = false;
})
function checkWinner() {
    var flag = false;
    for (let btn of btnGrp) {
        if (btn.innerText === "") {
            flag = true;
        }
    }

    let btnGrp1 = document.querySelectorAll(".square")
    var arr = [[0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], [0, 3, 6],
    [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]];
    for (let i of arr) {
        if ((btnGrp1[i[0]].innerText === btnGrp1[i[1]].innerText) && (btnGrp1[i[1]].innerText === btnGrp1[i[2]].innerText) && (btnGrp1[i[0]].innerText != "")) {
            // alert("saaad");
            if (btnGrp[i[0]].innerText == ".") {
                para.innerHTML = "Player 1 Won!!";
            }
            else {
                para.innerHTML = "Player 2 Won!!";
            }
            return;
        }
    }
    if (!flag) {
        para.innerText = "Draw!!";
        return;
    }

}

start.addEventListener("click", () => {

    start.remove();
    document.body.appendChild(para);
    var pno = document.querySelector("#pno");
    const br = document.createElement("br");
    // title.append(br);
    head.append(restart);
    flagStart = true;
})

for (let btn of btnGrp) {
    btn.addEventListener("click", () => {
        if (flagStart) {
            if (btn.innerHTML != "") {
                return;
            }
            if (pno.innerText == 1) {

                btn.innerHTML = "<div class='circle has-text-centered'>.</div>";
                checkWinner();
                pno.innerText = 2;

                return;
            }
            btn.innerHTML = "<div class='cross'> &#10060;</div>";
            pno.innerText = 1;
            checkWinner();
            return;
        }

    })

}