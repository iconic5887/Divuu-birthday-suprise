function unlock() {
  let pass = document.getElementById("pass").value;
  if (pass === "BEST FRIEND") {
    document.getElementById("lock").style.display = "none";
    document.getElementById("main").style.display = "block";
  } else {
    document.getElementById("error").innerText = "❌ Wrong password!";
  }
}
