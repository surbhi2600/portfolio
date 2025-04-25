function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
  
    if (user === "surbhi" && pass === "1234") {
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid credentials");
    }
  }