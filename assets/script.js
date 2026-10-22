
/* PORTFOLIO DOWNLOAD */

/* Passwords for different people:
TEST: Vuk&Vukica
Jobbsøknadd: Jobb2026
*/
function requestDownload() {
  const input = prompt("Enter password to download portfolio:");
  if (input === "Jobb2026") {
    window.location.href = "assets/Portfolio_JulijaCvijanovic-NOR.pdf";
  } else {
    alert("Incorrect password. Please contact me to request access.");
  }
}