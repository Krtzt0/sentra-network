/* ========================= */
/* UTC CLOCK */
/* ========================= */

const utcClock = document.getElementById("utcClock");

function updateClock(){

  const now = new Date();

  const hours = String(now.getUTCHours()).padStart(2,"0");
  const minutes = String(now.getUTCMinutes()).padStart(2,"0");
  const seconds = String(now.getUTCSeconds()).padStart(2,"0");

  utcClock.textContent =
    `UTC ${hours}:${minutes}:${seconds}`;
}

updateClock();

setInterval(updateClock,1000);

/* ========================= */
/* BINARY EFFECT */
/* ========================= */

const binaryLayer =
  document.getElementById("binaryLayer");

function createBinary(){

  const binary =
    document.createElement("span");

  binary.classList.add("binary");

  binary.innerText =
    Math.random() > .5
      ? "1010101010"
      : "0101010101";

  binary.style.left =
    Math.random() * 100 + "%";

  binary.style.animationDuration =
    (8 + Math.random() * 12) + "s";

  binary.style.fontSize =
    (10 + Math.random() * 10) + "px";

  binaryLayer.appendChild(binary);

  setTimeout(() => {
    binary.remove();
  }, 20000);
}

setInterval(createBinary,120);

/* ========================= */
/* FAKE LOGIN SYSTEM */
/* ========================= */

const users = [

  {
    username:"admin",
    password:"tanaka123",
    role:"Commander"
  },

  {
    username:"drifter",
    password:"aether",
    role:"Researcher"
  }

];

const loginBtn =
  document.getElementById("loginBtn");

loginBtn.addEventListener("click",(e)=>{

  e.preventDefault();

  const username =
    document.getElementById("username").value;

  const password =
    document.getElementById("password").value;

  const user = users.find(u =>
    u.username === username &&
    u.password === password
  );

  if(user){

    // save fake session
    localStorage.setItem(
      "sentra_user",
      JSON.stringify(user)
    );

    // redirect
    window.location.href =
      "pages/main.html";

  }else{

    alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
  }
});