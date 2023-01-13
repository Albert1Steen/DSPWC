const buttons = document.querySelectorAll(".menu-button");

function scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
}
  function scrollToTop() {
    window.scrollTo(0, 0);
}

buttons.forEach(button => {
  button.addEventListener("click", event => {
    switch (event.target.textContent) {
        case "Home":
            window.location.href = "file:///C:/VSCode/DysonSphereProgram/Sandbox/!HomePage/HomePage.html";
            break;
        case "Low Tier":
            window.location.href = "file:///C:/VSCode/DysonSphereProgram/Sandbox/1Low-Tier/Low-Tier.html";
            break;
        case "Mid Tier":
            window.location.href = "file:///C:/VSCode/DysonSphereProgram/Sandbox/2Mid-Tier/Mid-Tier.html";
            break;
        case "High Tier":
            window.location.href = "file:///C:/VSCode/DysonSphereProgram/Sandbox/3High-Tier/High-Tier.html";
            break;
        case "Science":
            window.location.href = "file:///C:/VSCode/DysonSphereProgram/Sandbox/4Science/Science.html";
            break;
        case "Buildings":
            window.location.href = "file:///C:/VSCode/DysonSphereProgram/Sandbox/5Buildings/Buildings.html";
            break;
      }
  });
});