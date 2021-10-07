"user strict";

// Login
let loginForm = (eve) => {
  eve.preventDefault();

  let loginEmail = document.getElementById("loginEmail").value;
  let loginPassword = document.getElementById("loginPassword").value;

  let loginUser = JSON.parse(localStorage.getItem("All Users"));

  if (loginUser) {
    for (let i = 0; i < loginUser.length; i++) {
      if (
        loginEmail == loginUser[i].email &&
        loginPassword == loginUser[i].password
      ) {
        localStorage.setItem("Current User", JSON.stringify(loginUser[i]));
        swal(` `, `Your Logged in.....!`, `success`).then(() => {
          redirect("dashboard");
        });
        return;
      }
    }
  }
  swal(" ", "Incorrect Email or password", "error");
};
let logForm = document.getElementById("logForm");
logForm.onsubmit = loginForm;
