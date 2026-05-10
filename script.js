/* ========================= */
/* UTC CLOCK */
/* ========================= */

const utcClock =
  document.getElementById("utcClock");

function updateClock(){

  if(!utcClock) return;

  const now = new Date();

  const hours =
    String(now.getUTCHours())
    .padStart(2,"0");

  const minutes =
    String(now.getUTCMinutes())
    .padStart(2,"0");

  const seconds =
    String(now.getUTCSeconds())
    .padStart(2,"0");

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

  if(!binaryLayer) return;

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

if(loginBtn){

  loginBtn.addEventListener("click",(e)=>{

    e.preventDefault();

    const username =
      document.getElementById("username");

    const password =
      document.getElementById("password");

    if(!username || !password) return;

    const user = users.find(u =>
      u.username === username.value &&
      u.password === password.value
    );

    if(user){

      localStorage.setItem(
        "sentra_user",
        JSON.stringify(user)
      );

      window.location.href =
        "pages/main.html";

    }else{

      alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
    }
  });
}

/* ========================= */
/* MOBILE SIDEBAR */
/* ========================= */

const mobileMenuBtn =
  document.getElementById("mobileMenuBtn");

const mobileSidebar =
  document.getElementById("mobileSidebar");

const mobileOverlay =
  document.getElementById("mobileOverlay");

if(
  mobileMenuBtn &&
  mobileSidebar &&
  mobileOverlay
){

  mobileMenuBtn.addEventListener("click",()=>{

    mobileSidebar.classList.toggle("active");

    mobileOverlay.classList.toggle("active");
  });

  mobileOverlay.addEventListener("click",()=>{

    mobileSidebar.classList.remove("active");

    mobileOverlay.classList.remove("active");
  });
}