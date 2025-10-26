// Pages
const homePage = document.getElementById("home-page");
const loginPage = document.getElementById("login-page");
const signupPage = document.getElementById("signup-page");
const dashboardPage = document.getElementById("dashboard-page");
const userEmailSpan = document.getElementById("user-email");
const loginError = document.getElementById("login-error");

// Mock user data storage
let currentUser = null;

function showHome() {
  homePage.classList.remove("hidden");
  loginPage.classList.add("hidden");
  signupPage.classList.add("hidden");
  dashboardPage.classList.add("hidden");
}

function showLogin() {
  homePage.classList.add("hidden");
  loginPage.classList.remove("hidden");
  signupPage.classList.add("hidden");
  dashboardPage.classList.add("hidden");
}

function showSignup() {
  homePage.classList.add("hidden");
  loginPage.classList.add("hidden");
  signupPage.classList.remove("hidden");
  dashboardPage.classList.add("hidden");
}

function showDashboard() {
  homePage.classList.add("hidden");
  loginPage.classList.add("hidden");
  signupPage.classList.add("hidden");
  dashboardPage.classList.remove("hidden");
  userEmailSpan.textContent = currentUser.email;
}

// Handle Signup
document.getElementById("signup-form").addEventListener("submit", function(e){
  e.preventDefault();
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  currentUser = { email, password };
  showDashboard();
});

// Handle Login
document.getElementById("login-form").addEventListener("submit", function(e){
  e.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  if(currentUser && email === currentUser.email && password === currentUser.password){
    loginError.textContent = "";
    showDashboard();
  } else {
    loginError.textContent = "Invalid credentials";
  }
});

// Logout
function logout() {
  currentUser = null;
  showHome();
}

// Initialize
showHome();