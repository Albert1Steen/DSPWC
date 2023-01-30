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

function calculateTotal(){
    var El = document.getElementById("El").value;
    var Pa = document.getElementById("Pa").value;
    var Qu = document.getElementById("Qu").value;
    var Par = document.getElementById("Par").value;
    var StM = document.getElementById("StM").value;
    var GrL = document.getElementById("GrL").value;
    var SpW = document.getElementById("SpW").value;
    var ReT = document.getElementById("ReT").value;
    var LoV = document.getElementById("LoV").value;
    var FrM = document.getElementById("FrM").value;
    var Dy = document.getElementById("Dy").value;
    var Sm = document.getElementById("Sm").value;
    var An = document.getElementById("An").value;
    var DeF = document.getElementById("DeF").value;
    var AnF = document.getElementById("AnF").value;

    // Set recipes, amount of machines are time of recipe (recipe takes 3 seconds, it takes 3 machines for 1 output/s)
    // Set recipes, resource is per 1 item output (1 iron ore for 1 iron ingot, 3 iron ingot for 1 steel)
    // set the recipe for Electromagnetic coil
    var El_M = El *3;
     var El_Tu = El * 2;
     var El_Tu_M = El_Tu * 2;
     var El_Tu_Mo = El_Tu * 2;
     var El_Tu_Mo_M = El_Tu_Mo * 2;
      var El_Tu_Mo_Ir = El_Tu_Mo * 2;
      var El_Tu_Mo_Ir_M = El_Tu_Mo_Ir * 1;
       var El_Tu_Mo_Ir_Ore = El_Tu_Mo_Ir * 1;
      var El_Tu_Mo_Ge = El_Tu_Mo;
      var El_Tu_Mo_Ge_M = El_Tu_Mo_Ge * 1;
       var El_Tu_Mo_Ge_Ir = El_Tu_Mo_Ge *1;
       var El_Tu_Mo_Ge_Ir_M = El_Tu_Mo_Ge_Ir * 1;
        var El_Tu_Mo_Ge_Ir_Ore = El_Tu_Mo_Ge_Ir * 1;
      var El_Tu_Mo_MaC = El_Tu_Mo;
      var El_Tu_Mo_MaC_M = El_Tu_Mo_MaC * 0.5;
       var El_Tu_Mo_MaC_Ma = El_Tu_Mo_MaC * 1;
       var El_Tu_Mo_MaC_Ma_M = El_Tu_Mo_MaC_Ma * 1.5;
        var El_Tu_Mo_MaC_Ma_Ore = El_Tu_Mo_MaC_Ma * 1;
       var El_Tu_Mo_MaC_Co = El_Tu_Mo_MaC * 0.5;
       var El_Tu_Mo_MaC_Co_M = El_Tu_Mo_MaC_Co * 1;
        var El_Tu_Mo_MaC_Co_Ore = El_Tu_Mo_MaC_Co * 1;
     var El_Tu_MaC = El_Tu * 2;
     var El_Tu_MaC_M = El_Tu_MaC * 0.5;
      var El_Tu_MaC_Ma = El_Tu_MaC * 1;
      var El_Tu_MaC_Ma_M = El_Tu_MaC_Ma * 1.5;
       var El_Tu_MaC_Ma_Ore = El_Tu_MaC_Ma * 1;
      var El_Tu_MaC_Co = El_Tu_MaC * 0.5;
      var El_Tu_MaC_Co_M = El_Tu_MaC_Co * 1;
       var El_Tu_MaC_Co_Ore = El_Tu_MaC_Co * 1;
     var El_Ma = El * 3;
     var El_Ma_M = El_Ma * 1.5;
      var El_Ma_Ore = El_Ma *1;
     var El_GrR = El * 1;
     var El_GrR_M = El_GrR * 2;
      var El_GrR_Ore = El_GrR * 2;
    // set the recipe for Particle broadband
    var Pa_M = Pa *8;
     var Pa_Gr = Pa * 2;
     var Pa_Gr_M = Pa_Gr * 1;
      var Pa_Gr_Hy = Pa_Gr * 0.5; 
      var Pa_Gr_Fi = Pa_Gr * 1;
     var Pa_SiC = Pa * 2;
     var Pa_SiC_M = Pa_SiC * 0.75;
      var Pa_SiC_Ore = Pa_SiC * 0.5;
     var Pa_Pl = Pa * 1;
     var Pa_Pl_M = Pa_Pl * 3;
      var Pa_Pl_GrR = Pa_Pl;
      var Pa_Pl_GrR_M = Pa_Pl_GrR * 2;
       var Pa_Pl_GrR_Ore = Pa_Pl_GrR * 2;
      var Pa_Pl_LiO = Pa_Pl * 2;
      var Pa_Pl_LiO_M = Pa_Pl_LiO * 4/3;
       var Pa_Pl_LiO_Ore = Pa_Pl_LiO * 1/3;
        var Pa_Pl_LiO_Hy = Pa_Pl_LiO * 1/3;
        var Pa_Pl_LiO_LiO = Pa_Pl_LiO * 2/3;
        var Pa_Pl_LiO_LiO_M = Pa_Pl_LiO_LiO * 2;
         var Pa_Pl_LiO_LiO_CrO = Pa_Pl_LiO_LiO;
    // set the recipe for Quantum chip
    var Qu_M = Qu * 6;
     var Qu_Pro = Qu * 2;
     var Qu_Pro_M = Qu_Pro * 3;
      var Qu_Pro_Ci = Qu_Pro * 2;
      var Qu_Pro_Ci_M = Qu_Pro_Ci * 0.5;
       var Qu_Pro_Ci_Ir = Qu_Pro_Ci * 1;
       var Qu_Pro_Ci_Ir_M = Qu_Pro_Ci_Ir * 1;
        var Qu_Pro_Ci_Ir_Ore = Qu_Pro_Ci_Ir * 1;        
       var Qu_Pro_Ci_Co = Qu_Pro_Ci * 0.5;
       var Qu_Pro_Ci_Co_M = Qu_Pro_Ci_Co * 1;
        var Qu_Pro_Ci_Co_Ore = Qu_Pro_Ci_Co * 1;
      var Qu_Pro_My = Qu_Pro * 2;
      var Qu_Pro_My_M = Qu_Pro_My * 2;
       var Qu_Pro_My_Si = Qu_Pro_My * 2;
       var Qu_Pro_My_Si_M = Qu_Pro_My_Si * 2;
        var Qu_Pro_My_Si_Ore = Qu_Pro_My_Si * 2;        
       var Qu_Pro_My_Co = Qu_Pro_My * 1;
       var Qu_Pro_My_Co_M = Qu_Pro_My_Co * 1;
        var Qu_Pro_My_Co_Ore = Qu_Pro_My_Co * 1;
     var Qu_PlF = Qu * 2;
     var Qu_PlF_M = Qu_PlF * 12;
      var Qu_PlF_TiG = Qu_PlF * 2;
      var Qu_PlF_TiG_M = Qu_PlF_TiG * 2.5;
       var Qu_PlF_TiG_Gl = Qu_PlF_TiG * 1;
       var Qu_PlF_TiG_Gl_M = Qu_PlF_TiG_Gl * 2;
        var Qu_PlF_TiG_Gl_Ore = Qu_PlF_TiG_Gl * 2;
       var Qu_PlF_TiG_Ti = Qu_PlF_TiG;
       var Qu_PlF_TiG_Ti_M = Qu_PlF_TiG_Ti * 2
        var Qu_PlF_TiG_Ti_Ore = Qu_PlF_TiG_Ti * 2;
       var Qu_PlF_TiG_Wa = Qu_PlF_TiG * 1;
      var Qu_PlF_Cas = Qu_PlF * 1;
      var Qu_PlF_Cas_M = Qu_PlF_Cas * 4;
       var Qu_PlF_Cas_Opt = Qu_PlF_Cas * 8;
       var Qu_PlF_Cas_Gr = Qu_PlF_Cas * 2;
       var Qu_PlF_Cas_Gr_Hy = Qu_PlF_Cas_Gr * 0.5;
       var Qu_PlF_Cas_Gr_M = Qu_PlF_Cas_Gr * 1;
        var Qu_PlF_Cas_Gr_Fi = Qu_PlF_Cas_Gr * 1;
       var Qu_PlF_Cas_Hy = Qu_PlF_Cas * 10;
    // set the recipe for Particle container
    var Par_M = Par * 4;
     var Par_Tu = Par * 2;
     var Par_Tu_M = Par_Tu * 2;
      var Par_Tu_Mo = Par_Tu * 2;
      var Par_Tu_Mo_M = Par_Tu_Mo * 2;
       var Par_Tu_Mo_Ir = Par_Tu_Mo * 2;
       var Par_Tu_Mo_Ir_M = Par_Tu_Mo_Ir * 1;
        var Par_Tu_Mo_Ir_Ore = Par_Tu_Mo_Ir * 1;
       var Par_Tu_Mo_Ge = Par_Tu_Mo;
       var Par_Tu_Mo_Ge_M = Par_Tu_Mo_Ge * 1;
        var Par_Tu_Mo_Ge_Ir = Par_Tu_Mo_Ge *1;
        var Par_Tu_Mo_Ge_Ir_M = Par_Tu_Mo_Ge_Ir * 1;
         var Par_Tu_Mo_Ge_Ir_Ore = Par_Tu_Mo_Ge_Ir * 1;
       var Par_Tu_Mo_MaC = Par_Tu_Mo;
       var Par_Tu_Mo_MaC_M = Par_Tu_Mo_MaC * 0.5;
        var Par_Tu_Mo_MaC_Ma = Par_Tu_Mo_MaC * 1;
        var Par_Tu_Mo_MaC_Ma_M = Par_Tu_Mo_MaC_Ma * 1.5;
         var Par_Tu_Mo_MaC_Ma_Ore = Par_Tu_Mo_MaC_Ma * 1;
        var Par_Tu_Mo_MaC_Co = Par_Tu_Mo_MaC * 0.5;
        var Par_Tu_Mo_MaC_Co_M = Par_Tu_Mo_MaC_Co * 1;
         var Par_Tu_Mo_MaC_Co_Ore = Par_Tu_Mo_MaC_Co * 1;
      var Par_Tu_MaC = Par_Tu * 2;
      var Par_Tu_MaC_M = Par_Tu_MaC * 0.5;
       var Par_Tu_MaC_Ma = Par_Tu_MaC * 1;
       var Par_Tu_MaC_Ma_M = Par_Tu_MaC_Ma * 1.5;
        var Par_Tu_MaC_Ma_Ore = Par_Tu_MaC_Ma * 1;
       var Par_Tu_MaC_Co = Par_Tu_MaC * 0.5;
       var Par_Tu_MaC_Co_M = Par_Tu_MaC_Co * 1;
        var Par_Tu_MaC_Co_Ore = Par_Tu_MaC_Co * 1;
     var Par_Co = Par * 2;
     var Par_Co_M = Par_Co * 1;      
      var Par_Co_Ore = Par_Co * 1;
     var Par_Gr = Par * 2;
     var Par_Gr_M = Par_Gr * 1;
     var Par_Gr_Hy = Par_Gr * 0.5;
      var Par_Gr_Fi = Par_Gr * 1;
    // set the recipe for Strange matter
    var StM_M = StM * 8;
     var StM_Par = StM * 2;
     var StM_Par_M = StM_Par * 4;
     var StM_Par_Tu = StM_Par * 2;
     var StM_Par_Tu_M = StM_Par_Tu * 2;
      var StM_Par_Tu_Mo = StM_Par_Tu * 2;
      var StM_Par_Tu_Mo_M = StM_Par_Tu_Mo * 2;
       var StM_Par_Tu_Mo_Ir = StM_Par_Tu_Mo * 2;
       var StM_Par_Tu_Mo_Ir_M = StM_Par_Tu_Mo_Ir * 1;
        var StM_Par_Tu_Mo_Ir_Ore = StM_Par_Tu_Mo_Ir * 1;
       var StM_Par_Tu_Mo_Ge = StM_Par_Tu_Mo;
       var StM_Par_Tu_Mo_Ge_M = StM_Par_Tu_Mo_Ge * 1;
        var StM_Par_Tu_Mo_Ge_Ir = StM_Par_Tu_Mo_Ge *1;
        var StM_Par_Tu_Mo_Ge_Ir_M = StM_Par_Tu_Mo_Ge_Ir * 1;
         var StM_Par_Tu_Mo_Ge_Ir_Ore = StM_Par_Tu_Mo_Ge_Ir * 1;
       var StM_Par_Tu_Mo_MaC = StM_Par_Tu_Mo;
       var StM_Par_Tu_Mo_MaC_M = StM_Par_Tu_Mo_MaC * 0.5;
        var StM_Par_Tu_Mo_MaC_Ma = StM_Par_Tu_Mo_MaC * 1;
        var StM_Par_Tu_Mo_MaC_Ma_M = StM_Par_Tu_Mo_MaC_Ma * 1.5;
         var StM_Par_Tu_Mo_MaC_Ma_Ore = StM_Par_Tu_Mo_MaC_Ma * 1;
        var StM_Par_Tu_Mo_MaC_Co = StM_Par_Tu_Mo_MaC * 0.5;
        var StM_Par_Tu_Mo_MaC_Co_M = StM_Par_Tu_Mo_MaC_Co * 1;
         var StM_Par_Tu_Mo_MaC_Co_Ore = StM_Par_Tu_Mo_MaC_Co * 1;
      var StM_Par_Tu_MaC = StM_Par_Tu * 2;
      var StM_Par_Tu_MaC_M = StM_Par_Tu_MaC * 0.5;
       var StM_Par_Tu_MaC_Ma = StM_Par_Tu_MaC * 1;
       var StM_Par_Tu_MaC_Ma_M = StM_Par_Tu_MaC_Ma * 1.5;
        var StM_Par_Tu_MaC_Ma_Ore = StM_Par_Tu_MaC_Ma * 1;
       var StM_Par_Tu_MaC_Co = StM_Par_Tu_MaC * 0.5;
       var StM_Par_Tu_MaC_Co_M = StM_Par_Tu_MaC_Co * 1;
        var StM_Par_Tu_MaC_Co_Ore = StM_Par_Tu_MaC_Co * 1;
     var StM_Par_Co = StM_Par * 2;
     var StM_Par_Co_M = StM_Par_Co * 1;      
      var StM_Par_Co_Ore = StM_Par_Co * 1;
     var StM_Par_Gr = StM_Par * 2;
     var StM_Par_Gr_M = StM_Par_Gr * 1;
     var StM_Par_Gr_Hy = StM_Par_Gr * 0.5;
      var StM_Par_Gr_Fi = StM_Par_Gr * 1;
     var StM_Ir = StM * 2;
     var StM_Ir_M = StM_Ir * 1;
      var StM_Ir_Ore = StM_Ir * 1;
     var StM_De = StM * 10;
    // set the recipe for Gravity lens
    var GrL_M = GrL * 6;
     var GrL_Di = GrL * 4
     var GrL_Di_M = GrL_Di * 0.75;
      var GrL_Di_Ore = GrL_Di * 0.5;
     var GrL_StM = GrL * 1;
     var GrL_StM_M = GrL_StM * 8;
     var GrL_StM_Par = GrL_StM * 2;
     var GrL_StM_Par_M = GrL_StM_Par * 4;
     var GrL_StM_Par_Tu = GrL_StM_Par * 2;
     var GrL_StM_Par_Tu_M = GrL_StM_Par_Tu * 2;
      var GrL_StM_Par_Tu_Mo = GrL_StM_Par_Tu * 2;
      var GrL_StM_Par_Tu_Mo_M = GrL_StM_Par_Tu_Mo * 2;
       var GrL_StM_Par_Tu_Mo_Ir = GrL_StM_Par_Tu_Mo * 2;
       var GrL_StM_Par_Tu_Mo_Ir_M = GrL_StM_Par_Tu_Mo_Ir * 1;
        var GrL_StM_Par_Tu_Mo_Ir_Ore = GrL_StM_Par_Tu_Mo_Ir * 1;
       var GrL_StM_Par_Tu_Mo_Ge = GrL_StM_Par_Tu_Mo;
       var GrL_StM_Par_Tu_Mo_Ge_M = GrL_StM_Par_Tu_Mo_Ge * 1;
        var GrL_StM_Par_Tu_Mo_Ge_Ir = GrL_StM_Par_Tu_Mo_Ge *1;
        var GrL_StM_Par_Tu_Mo_Ge_Ir_M = GrL_StM_Par_Tu_Mo_Ge_Ir * 1;
         var GrL_StM_Par_Tu_Mo_Ge_Ir_Ore = GrL_StM_Par_Tu_Mo_Ge_Ir * 1;
       var GrL_StM_Par_Tu_Mo_MaC = GrL_StM_Par_Tu_Mo;
       var GrL_StM_Par_Tu_Mo_MaC_M = GrL_StM_Par_Tu_Mo_MaC * 0.5;
        var GrL_StM_Par_Tu_Mo_MaC_Ma = GrL_StM_Par_Tu_Mo_MaC * 1;
        var GrL_StM_Par_Tu_Mo_MaC_Ma_M = GrL_StM_Par_Tu_Mo_MaC_Ma * 1.5;
         var GrL_StM_Par_Tu_Mo_MaC_Ma_Ore = GrL_StM_Par_Tu_Mo_MaC_Ma * 1;
        var GrL_StM_Par_Tu_Mo_MaC_Co = GrL_StM_Par_Tu_Mo_MaC * 0.5;
        var GrL_StM_Par_Tu_Mo_MaC_Co_M = GrL_StM_Par_Tu_Mo_MaC_Co * 1;
         var GrL_StM_Par_Tu_Mo_MaC_Co_Ore = GrL_StM_Par_Tu_Mo_MaC_Co * 1;
      var GrL_StM_Par_Tu_MaC = GrL_StM_Par_Tu * 2;
      var GrL_StM_Par_Tu_MaC_M = GrL_StM_Par_Tu_MaC * 0.5;
       var GrL_StM_Par_Tu_MaC_Ma = GrL_StM_Par_Tu_MaC * 1;
       var GrL_StM_Par_Tu_MaC_Ma_M = GrL_StM_Par_Tu_MaC_Ma * 1.5;
        var GrL_StM_Par_Tu_MaC_Ma_Ore = GrL_StM_Par_Tu_MaC_Ma * 1;
       var GrL_StM_Par_Tu_MaC_Co = GrL_StM_Par_Tu_MaC * 0.5;
       var GrL_StM_Par_Tu_MaC_Co_M = GrL_StM_Par_Tu_MaC_Co * 1;
        var GrL_StM_Par_Tu_MaC_Co_Ore = GrL_StM_Par_Tu_MaC_Co * 1;
     var GrL_StM_Par_Co = GrL_StM_Par * 2;
     var GrL_StM_Par_Co_M = GrL_StM_Par_Co * 1;      
      var GrL_StM_Par_Co_Ore = GrL_StM_Par_Co * 1;
     var GrL_StM_Par_Gr = GrL_StM_Par * 2;
     var GrL_StM_Par_Gr_M = GrL_StM_Par_Gr * 1;
     var GrL_StM_Par_Gr_Hy = GrL_StM_Par_Gr * 0.5;
      var GrL_StM_Par_Gr_Fi = GrL_StM_Par_Gr * 1;
     var GrL_StM_Ir = GrL_StM * 2;
     var GrL_StM_Ir_M = GrL_StM_Ir * 1;
      var GrL_StM_Ir_Ore = GrL_StM_Ir * 1;
     var GrL_StM_De = GrL_StM * 10;
    // set the recipe for Space warper (Gravity lens)       
    var SpW_M = SpW * 10;
     var SpW_GrL = SpW * 1;
     var SpW_GrL_M = SpW_GrL * 6;
      var SpW_GrL_Di = SpW_GrL * 4
      var SpW_GrL_Di_M = SpW_GrL_Di * 0.75;
       var SpW_GrL_Di_Ore = SpW_GrL_Di * 0.5;
      var SpW_GrL_StM = SpW_GrL * 1;
      var SpW_GrL_StM_M = SpW_GrL_StM * 8;
      var SpW_GrL_StM_Par = SpW_GrL_StM * 2;
      var SpW_GrL_StM_Par_M = SpW_GrL_StM_Par * 4;
      var SpW_GrL_StM_Par_Tu = SpW_GrL_StM_Par * 2;
      var SpW_GrL_StM_Par_Tu_M = SpW_GrL_StM_Par_Tu * 2;
       var SpW_GrL_StM_Par_Tu_Mo = SpW_GrL_StM_Par_Tu * 2;
       var SpW_GrL_StM_Par_Tu_Mo_M = SpW_GrL_StM_Par_Tu_Mo * 2;
        var SpW_GrL_StM_Par_Tu_Mo_Ir = SpW_GrL_StM_Par_Tu_Mo * 2;
        var SpW_GrL_StM_Par_Tu_Mo_Ir_M = SpW_GrL_StM_Par_Tu_Mo_Ir * 1;
         var SpW_GrL_StM_Par_Tu_Mo_Ir_Ore = SpW_GrL_StM_Par_Tu_Mo_Ir * 1;
        var SpW_GrL_StM_Par_Tu_Mo_Ge = SpW_GrL_StM_Par_Tu_Mo;
        var SpW_GrL_StM_Par_Tu_Mo_Ge_M = SpW_GrL_StM_Par_Tu_Mo_Ge * 1;
         var SpW_GrL_StM_Par_Tu_Mo_Ge_Ir = SpW_GrL_StM_Par_Tu_Mo_Ge *1;
         var SpW_GrL_StM_Par_Tu_Mo_Ge_Ir_M = SpW_GrL_StM_Par_Tu_Mo_Ge_Ir * 1;
          var SpW_GrL_StM_Par_Tu_Mo_Ge_Ir_Ore = SpW_GrL_StM_Par_Tu_Mo_Ge_Ir * 1;
        var SpW_GrL_StM_Par_Tu_Mo_MaC = SpW_GrL_StM_Par_Tu_Mo;
        var SpW_GrL_StM_Par_Tu_Mo_MaC_M = SpW_GrL_StM_Par_Tu_Mo_MaC * 0.5;
         var SpW_GrL_StM_Par_Tu_Mo_MaC_Ma = SpW_GrL_StM_Par_Tu_Mo_MaC * 1;
         var SpW_GrL_StM_Par_Tu_Mo_MaC_Ma_M = SpW_GrL_StM_Par_Tu_Mo_MaC_Ma * 1.5;
          var SpW_GrL_StM_Par_Tu_Mo_MaC_Ma_Ore = SpW_GrL_StM_Par_Tu_Mo_MaC_Ma * 1;
         var SpW_GrL_StM_Par_Tu_Mo_MaC_Co = SpW_GrL_StM_Par_Tu_Mo_MaC * 0.5;
         var SpW_GrL_StM_Par_Tu_Mo_MaC_Co_M = SpW_GrL_StM_Par_Tu_Mo_MaC_Co * 1;
          var SpW_GrL_StM_Par_Tu_Mo_MaC_Co_Ore = SpW_GrL_StM_Par_Tu_Mo_MaC_Co * 1;
       var SpW_GrL_StM_Par_Tu_MaC = SpW_GrL_StM_Par_Tu * 2;
       var SpW_GrL_StM_Par_Tu_MaC_M = SpW_GrL_StM_Par_Tu_MaC * 0.5;
        var SpW_GrL_StM_Par_Tu_MaC_Ma = SpW_GrL_StM_Par_Tu_MaC * 1;
        var SpW_GrL_StM_Par_Tu_MaC_Ma_M = SpW_GrL_StM_Par_Tu_MaC_Ma * 1.5;
         var SpW_GrL_StM_Par_Tu_MaC_Ma_Ore = SpW_GrL_StM_Par_Tu_MaC_Ma * 1;
        var SpW_GrL_StM_Par_Tu_MaC_Co = SpW_GrL_StM_Par_Tu_MaC * 0.5;
        var SpW_GrL_StM_Par_Tu_MaC_Co_M = SpW_GrL_StM_Par_Tu_MaC_Co * 1;
         var SpW_GrL_StM_Par_Tu_MaC_Co_Ore = SpW_GrL_StM_Par_Tu_MaC_Co * 1;
      var SpW_GrL_StM_Par_Co = SpW_GrL_StM_Par * 2;
      var SpW_GrL_StM_Par_Co_M = SpW_GrL_StM_Par_Co * 1;      
       var SpW_GrL_StM_Par_Co_Ore = SpW_GrL_StM_Par_Co * 1;
      var SpW_GrL_StM_Par_Gr = SpW_GrL_StM_Par * 2;
      var SpW_GrL_StM_Par_Gr_M = SpW_GrL_StM_Par_Gr * 1;
      var SpW_GrL_StM_Par_Gr_Hy = SpW_GrL_StM_Par_Gr * 0.5;
       var SpW_GrL_StM_Par_Gr_Fi = SpW_GrL_StM_Par_Gr * 1;
      var SpW_GrL_StM_Ir = SpW_GrL_StM * 2;
      var SpW_GrL_StM_Ir_M = SpW_GrL_StM_Ir * 1;
       var SpW_GrL_StM_Ir_Ore = SpW_GrL_StM_Ir * 1;
      var SpW_GrL_StM_De = SpW_GrL_StM * 10;
    // set the recipe for Space warper (Green Matrix)    
    // set the recipe for Reïnforced thruster
    var ReT_M = ReT * 6;
     var ReT_TiA = ReT * 5;
     var ReT_TiA_M = ReT_TiA * 3;
      var ReT_TiA_Ti = ReT_TiA;
      var ReT_TiA_Ti_M = ReT_TiA_Ti * 2;
       var ReT_TiA_Ti_Ore = ReT_TiA_Ti * 2;
      var ReT_TiA_St = ReT_TiA;
      var ReT_TiA_St_M = ReT_TiA_St * 3;
       var ReT_TiA_St_Ir = ReT_TiA_St * 3;
       var ReT_TiA_St_Ir_M = ReT_TiA_St_Ir;
        var ReT_TiA_St_Ir_Ore = ReT_TiA_St_Ir;
      var ReT_TiA_Su = ReT_TiA * 2;
     var ReT_Tu = ReT * 5;
     var ReT_Tu_M = ReT_Tu * 2;
      var ReT_Tu_Mo = ReT_Tu * 2;
      var ReT_Tu_Mo_M = ReT_Tu_Mo * 2;
       var ReT_Tu_Mo_Ir = ReT_Tu_Mo * 2;
       var ReT_Tu_Mo_Ir_M = ReT_Tu_Mo_Ir * 1;
        var ReT_Tu_Mo_Ir_Ore = ReT_Tu_Mo_Ir * 1;
       var ReT_Tu_Mo_Ge = ReT_Tu_Mo;
       var ReT_Tu_Mo_Ge_M = ReT_Tu_Mo_Ge * 1;
        var ReT_Tu_Mo_Ge_Ir = ReT_Tu_Mo_Ge *1;
        var ReT_Tu_Mo_Ge_Ir_M = ReT_Tu_Mo_Ge_Ir * 1;
         var ReT_Tu_Mo_Ge_Ir_Ore = ReT_Tu_Mo_Ge_Ir * 1;
       var ReT_Tu_Mo_MaC = ReT_Tu_Mo;
       var ReT_Tu_Mo_MaC_M = ReT_Tu_Mo_MaC * 0.5;
        var ReT_Tu_Mo_MaC_Ma = ReT_Tu_Mo_MaC * 1;
        var ReT_Tu_Mo_MaC_Ma_M = ReT_Tu_Mo_MaC_Ma * 1.5;
         var ReT_Tu_Mo_MaC_Ma_Ore = ReT_Tu_Mo_MaC_Ma * 1;
        var ReT_Tu_Mo_MaC_Co = ReT_Tu_Mo_MaC * 0.5;
        var ReT_Tu_Mo_MaC_Co_M = ReT_Tu_Mo_MaC_Co * 1;
         var ReT_Tu_Mo_MaC_Co_Ore = ReT_Tu_Mo_MaC_Co * 1;
      var ReT_Tu_MaC = ReT_Tu * 2;
      var ReT_Tu_MaC_M = ReT_Tu_MaC * 0.5;
       var ReT_Tu_MaC_Ma = ReT_Tu_MaC * 1;
       var ReT_Tu_MaC_Ma_M = ReT_Tu_MaC_Ma * 1.5;
        var ReT_Tu_MaC_Ma_Ore = ReT_Tu_MaC_Ma * 1;
       var ReT_Tu_MaC_Co = ReT_Tu_MaC * 0.5;
       var ReT_Tu_MaC_Co_M = ReT_Tu_MaC_Co * 1;
        var ReT_Tu_MaC_Co_Ore = ReT_Tu_MaC_Co * 1;
     // set the recipe for Logistic vessle
     var LoV_M = LoV * 6;
      var LoV_ReT = LoV * 2;
      var LoV_ReT_M = LoV_ReT * 6;
       var LoV_ReT_TiA = LoV_ReT * 5;
       var LoV_ReT_TiA_M = LoV_ReT_TiA * 3;
        var LoV_ReT_TiA_Ti = LoV_ReT_TiA;
        var LoV_ReT_TiA_Ti_M = LoV_ReT_TiA_Ti * 2;
         var LoV_ReT_TiA_Ti_Ore = LoV_ReT_TiA_Ti * 2;
        var LoV_ReT_TiA_St = LoV_ReT_TiA;
        var LoV_ReT_TiA_St_M = LoV_ReT_TiA_St * 3;
         var LoV_ReT_TiA_St_Ir = LoV_ReT_TiA_St * 3;
         var LoV_ReT_TiA_St_Ir_M = LoV_ReT_TiA_St_Ir;
          var LoV_ReT_TiA_St_Ir_Ore = LoV_ReT_TiA_St_Ir;
        var LoV_ReT_TiA_Su = LoV_ReT_TiA * 2;
       var LoV_ReT_Tu = LoV_ReT * 5;
       var LoV_ReT_Tu_M = LoV_ReT_Tu * 2;
        var LoV_ReT_Tu_Mo = LoV_ReT_Tu * 2;
        var LoV_ReT_Tu_Mo_M = LoV_ReT_Tu_Mo * 2;
         var LoV_ReT_Tu_Mo_Ir = LoV_ReT_Tu_Mo * 2;
         var LoV_ReT_Tu_Mo_Ir_M = LoV_ReT_Tu_Mo_Ir * 1;
          var LoV_ReT_Tu_Mo_Ir_Ore = LoV_ReT_Tu_Mo_Ir * 1;
         var LoV_ReT_Tu_Mo_Ge = LoV_ReT_Tu_Mo;
         var LoV_ReT_Tu_Mo_Ge_M = LoV_ReT_Tu_Mo_Ge * 1;
          var LoV_ReT_Tu_Mo_Ge_Ir = LoV_ReT_Tu_Mo_Ge *1;
          var LoV_ReT_Tu_Mo_Ge_Ir_M = LoV_ReT_Tu_Mo_Ge_Ir * 1;
           var LoV_ReT_Tu_Mo_Ge_Ir_Ore = LoV_ReT_Tu_Mo_Ge_Ir * 1;
         var LoV_ReT_Tu_Mo_MaC = LoV_ReT_Tu_Mo;
         var LoV_ReT_Tu_Mo_MaC_M = LoV_ReT_Tu_Mo_MaC * 0.5;
          var LoV_ReT_Tu_Mo_MaC_Ma = LoV_ReT_Tu_Mo_MaC * 1;
          var LoV_ReT_Tu_Mo_MaC_Ma_M = LoV_ReT_Tu_Mo_MaC_Ma * 1.5;
           var LoV_ReT_Tu_Mo_MaC_Ma_Ore = LoV_ReT_Tu_Mo_MaC_Ma * 1;
          var LoV_ReT_Tu_Mo_MaC_Co = LoV_ReT_Tu_Mo_MaC * 0.5;
          var LoV_ReT_Tu_Mo_MaC_Co_M = LoV_ReT_Tu_Mo_MaC_Co * 1;
           var LoV_ReT_Tu_Mo_MaC_Co_Ore = LoV_ReT_Tu_Mo_MaC_Co * 1;
        var LoV_ReT_Tu_MaC = LoV_ReT_Tu * 2;
        var LoV_ReT_Tu_MaC_M = LoV_ReT_Tu_MaC * 0.5;
         var LoV_ReT_Tu_MaC_Ma = LoV_ReT_Tu_MaC * 1;
         var LoV_ReT_Tu_MaC_Ma_M = LoV_ReT_Tu_MaC_Ma * 1.5;
          var LoV_ReT_Tu_MaC_Ma_Ore = LoV_ReT_Tu_MaC_Ma * 1;
         var LoV_ReT_Tu_MaC_Co = LoV_ReT_Tu_MaC * 0.5;
         var LoV_ReT_Tu_MaC_Co_M = LoV_ReT_Tu_MaC_Co * 1;
          var LoV_ReT_Tu_MaC_Co_Ore = LoV_ReT_Tu_MaC_Co * 1;
      var LoV_TiA = LoV * 10;
      var LoV_TiA_M = LoV_TiA * 3;
       var LoV_TiA_Ti = LoV_TiA;
       var LoV_TiA_Ti_M = LoV_TiA_Ti * 2;
        var LoV_TiA_Ti_Ore = LoV_TiA_Ti * 2;
       var LoV_TiA_St = LoV_TiA;
       var LoV_TiA_St_M = LoV_TiA_St * 3;
        var LoV_TiA_St_Ir = LoV_TiA_St * 3;
        var LoV_TiA_St_Ir_M = LoV_TiA_St_Ir;
         var LoV_TiA_St_Ir_Ore = LoV_TiA_St_Ir;
       var LoV_TiA_Su = LoV_TiA * 2;
      var LoV_Pro = LoV * 10;
      var LoV_Pro_M = LoV_Pro * 3;
       var LoV_Pro_Ci = LoV_Pro * 2;
       var LoV_Pro_Ci_M = LoV_Pro_Ci * 0.5;
        var LoV_Pro_Ci_Ir = LoV_Pro_Ci * 1;
        var LoV_Pro_Ci_Ir_M = LoV_Pro_Ci_Ir * 1;
         var LoV_Pro_Ci_Ir_Ore = LoV_Pro_Ci_Ir * 1;        
       var LoV_Pro_Ci_Co = LoV_Pro_Ci * 0.5;
       var LoV_Pro_Ci_Co_M = LoV_Pro_Ci_Co * 1;
        var LoV_Pro_Ci_Co_Ore = LoV_Pro_Ci_Co * 1;
       var LoV_Pro_My = LoV_Pro * 2;
       var LoV_Pro_My_M = LoV_Pro_My * 2;
        var LoV_Pro_My_Si = LoV_Pro_My * 2;
        var LoV_Pro_My_Si_M = LoV_Pro_My_Si * 2;
         var LoV_Pro_My_Si_Ore = LoV_Pro_My_Si * 2;        
        var LoV_Pro_My_Co = LoV_Pro_My * 1;
        var LoV_Pro_My_Co_M = LoV_Pro_My_Co * 1;
         var LoV_Pro_My_Co_Ore = LoV_Pro_My_Co * 1;
    // set the recipe for Frame material
    var FrM_M = FrM * 6;
     var FrM_Ca = FrM * 4;
     var FrM_Ca_M = FrM_Ca * 2;
      var FrM_Ca_Spi = FrM_Ca * 3;
     var FrM_TiA = FrM * 1;
     var FrM_TiA_M = FrM_TiA * 3;
      var FrM_TiA_Ti = FrM_TiA;
      var FrM_TiA_Ti_M = FrM_TiA_Ti * 2;
       var FrM_TiA_Ti_Ore = FrM_TiA_Ti * 2;
      var FrM_TiA_St = FrM_TiA;
      var FrM_TiA_St_M = FrM_TiA_St * 3;
       var FrM_TiA_St_Ir = FrM_TiA_St * 3;
       var FrM_TiA_St_Ir_M = FrM_TiA_St_Ir;
        var FrM_TiA_St_Ir_Ore = FrM_TiA_St_Ir;
      var FrM_TiA_Su = FrM_TiA * 2;
     var FrM_Si = FrM * 1;
     var FrM_Si_M = FrM_Si * 2;
      var FrM_Si_Ore = FrM_Si * 2;
    // set the recipe for Dyson sphere component
    var Dy_M = Dy * 8;
     var Dy_FrM = Dy * 3;
     var Dy_FrM_M = Dy_FrM * 6;
      var Dy_FrM_Ca = Dy_FrM * 4;
      var Dy_FrM_Ca_M = Dy_FrM_Ca * 2;
       var Dy_FrM_Ca_Spi = Dy_FrM_Ca * 3;
      var Dy_FrM_TiA = Dy_FrM * 1;
      var Dy_FrM_TiA_M = Dy_FrM_TiA * 3;
       var Dy_FrM_TiA_Ti = Dy_FrM_TiA;
       var Dy_FrM_TiA_Ti_M = Dy_FrM_TiA_Ti * 2;
        var Dy_FrM_TiA_Ti_Ore = Dy_FrM_TiA_Ti * 2;
       var Dy_FrM_TiA_St = Dy_FrM_TiA;
       var Dy_FrM_TiA_St_M = Dy_FrM_TiA_St * 3;
        var Dy_FrM_TiA_St_Ir = Dy_FrM_TiA_St * 3;
        var Dy_FrM_TiA_St_Ir_M = Dy_FrM_TiA_St_Ir;
         var Dy_FrM_TiA_St_Ir_Ore = Dy_FrM_TiA_St_Ir;
       var Dy_FrM_TiA_Su = Dy_FrM_TiA * 2;
      var Dy_FrM_Si = Dy_FrM * 1;
      var Dy_FrM_Si_M = Dy_FrM_Si * 2;
       var Dy_FrM_Si_Ore = Dy_FrM_Si * 2;
     var Dy_So = Dy * 3;
     var Dy_So_M = Dy_So * 2;
      var Dy_So_Gr = Dy_So * 0.5;
      var Dy_So_Gr_Hy = Dy_So_Gr * 0.5;
      var Dy_So_Gr_M = Dy_So_Gr * 1;
       var Dy_So_Gr_Fi = Dy_So_Gr * 1;
      var Dy_So_Ph = Dy_So * 0.5;
      var Dy_So_Ph_M = Dy_So_Ph * 3;
       var Dy_So_Ph_Opt = Dy_So_Ph * 1;
      var Dy_So_Ph_Ci = Dy_So_Ph * 1;
      var Dy_So_Ph_Ci_M = Dy_So_Ph_Ci * 0.5;
       var Dy_So_Ph_Ci_Ir = Dy_So_Ph_Ci * 1;
       var Dy_So_Ph_Ci_Ir_M = Dy_So_Ph_Ci_Ir * 1;
        var Dy_So_Ph_Ci_Ir_Ore = Dy_So_Ph_Ci_Ir * 1;
       var Dy_So_Ph_Ci_Co = Dy_So_Ph_Ci * 0.5;
       var Dy_So_Ph_Ci_Co_M = Dy_So_Ph_Ci_Co * 1;
        var Dy_So_Ph_Ci_Co_Ore = Dy_So_Ph_Ci_Co * 1;
     var Dy_Pro = Dy * 3;
     var Dy_Pro_M = Dy_Pro * 3;
      var Dy_Pro_Ci = Dy_Pro * 2;
      var Dy_Pro_Ci_M = Dy_Pro_Ci * 0.5;
       var Dy_Pro_Ci_Ir = Dy_Pro_Ci * 1;
       var Dy_Pro_Ci_Ir_M = Dy_Pro_Ci_Ir * 1;
        var Dy_Pro_Ci_Ir_Ore = Dy_Pro_Ci_Ir * 1;        
       var Dy_Pro_Ci_Co = Dy_Pro_Ci * 0.5;
       var Dy_Pro_Ci_Co_M = Dy_Pro_Ci_Co * 1;
        var Dy_Pro_Ci_Co_Ore = Dy_Pro_Ci_Co * 1;
      var Dy_Pro_My = Dy_Pro * 2;
      var Dy_Pro_My_M = Dy_Pro_My * 2;
       var Dy_Pro_My_Si = Dy_Pro_My * 2;
       var Dy_Pro_My_Si_M = Dy_Pro_My_Si * 2;
        var Dy_Pro_My_Si_Ore = Dy_Pro_My_Si * 2;        
       var Dy_Pro_My_Co = Dy_Pro_My * 1;
       var Dy_Pro_My_Co_M = Dy_Pro_My_Co * 1;
        var Dy_Pro_My_Co_Ore = Dy_Pro_My_Co * 1;
    // set the recipe for Small carrier rocket
    var Sm_M = Sm * 6;
     var Sm_Dy = Sm * 2;
     var Sm_Dy_M = Sm_Dy * 8;
      var Sm_Dy_FrM = Sm_Dy * 3;
      var Sm_Dy_FrM_M = Sm_Dy_FrM * 6;
       var Sm_Dy_FrM_Ca = Sm_Dy_FrM * 4;
       var Sm_Dy_FrM_Ca_M = Sm_Dy_FrM_Ca * 2;
        var Sm_Dy_FrM_Ca_Spi = Sm_Dy_FrM_Ca * 3;
       var Sm_Dy_FrM_TiA = Sm_Dy_FrM * 1;
       var Sm_Dy_FrM_TiA_M = Sm_Dy_FrM_TiA * 3;
        var Sm_Dy_FrM_TiA_Ti = Sm_Dy_FrM_TiA;
        var Sm_Dy_FrM_TiA_Ti_M = Sm_Dy_FrM_TiA_Ti * 2;
         var Sm_Dy_FrM_TiA_Ti_Ore = Sm_Dy_FrM_TiA_Ti * 2;
        var Sm_Dy_FrM_TiA_St = Sm_Dy_FrM_TiA;
        var Sm_Dy_FrM_TiA_St_M = Sm_Dy_FrM_TiA_St * 3;
         var Sm_Dy_FrM_TiA_St_Ir = Sm_Dy_FrM_TiA_St * 3;
         var Sm_Dy_FrM_TiA_St_Ir_M = Sm_Dy_FrM_TiA_St_Ir;
          var Sm_Dy_FrM_TiA_St_Ir_Ore = Sm_Dy_FrM_TiA_St_Ir;
        var Sm_Dy_FrM_TiA_Su = Sm_Dy_FrM_TiA * 2;
       var Sm_Dy_FrM_Si = Sm_Dy_FrM * 1;
       var Sm_Dy_FrM_Si_M = Sm_Dy_FrM_Si * 2;
        var Sm_Dy_FrM_Si_Ore = Sm_Dy_FrM_Si * 2;
      var Sm_Dy_So = Sm_Dy * 3;
      var Sm_Dy_So_M = Sm_Dy_So * 2;
       var Sm_Dy_So_Gr = Sm_Dy_So * 0.5;
       var Sm_Dy_So_Gr_Hy = Sm_Dy_So_Gr * 0.5;
       var Sm_Dy_So_Gr_M = Sm_Dy_So_Gr * 1;
        var Sm_Dy_So_Gr_Fi = Sm_Dy_So_Gr * 1;
       var Sm_Dy_So_Ph = Sm_Dy_So * 0.5;
       var Sm_Dy_So_Ph_M = Sm_Dy_So_Ph * 3;
        var Sm_Dy_So_Ph_Opt = Sm_Dy_So_Ph * 1;
       var Sm_Dy_So_Ph_Ci = Sm_Dy_So_Ph * 1;
       var Sm_Dy_So_Ph_Ci_M = Sm_Dy_So_Ph_Ci * 0.5;
        var Sm_Dy_So_Ph_Ci_Ir = Sm_Dy_So_Ph_Ci * 1;
        var Sm_Dy_So_Ph_Ci_Ir_M = Sm_Dy_So_Ph_Ci_Ir * 1;
         var Sm_Dy_So_Ph_Ci_Ir_Ore = Sm_Dy_So_Ph_Ci_Ir * 1;
        var Sm_Dy_So_Ph_Ci_Co = Sm_Dy_So_Ph_Ci * 0.5;
        var Sm_Dy_So_Ph_Ci_Co_M = Sm_Dy_So_Ph_Ci_Co * 1;
         var Sm_Dy_So_Ph_Ci_Co_Ore = Sm_Dy_So_Ph_Ci_Co * 1;
      var Sm_Dy_Pro = Sm_Dy * 3;
      var Sm_Dy_Pro_M = Sm_Dy_Pro * 3;
       var Sm_Dy_Pro_Ci = Sm_Dy_Pro * 2;
       var Sm_Dy_Pro_Ci_M = Sm_Dy_Pro_Ci * 0.5;
        var Sm_Dy_Pro_Ci_Ir = Sm_Dy_Pro_Ci * 1;
        var Sm_Dy_Pro_Ci_Ir_M = Sm_Dy_Pro_Ci_Ir * 1;
         var Sm_Dy_Pro_Ci_Ir_Ore = Sm_Dy_Pro_Ci_Ir * 1;        
        var Sm_Dy_Pro_Ci_Co = Sm_Dy_Pro_Ci * 0.5;
        var Sm_Dy_Pro_Ci_Co_M = Sm_Dy_Pro_Ci_Co * 1;
         var Sm_Dy_Pro_Ci_Co_Ore = Sm_Dy_Pro_Ci_Co * 1;
       var Sm_Dy_Pro_My = Sm_Dy_Pro * 2;
       var Sm_Dy_Pro_My_M = Sm_Dy_Pro_My * 2;
        var Sm_Dy_Pro_My_Si = Sm_Dy_Pro_My * 2;
        var Sm_Dy_Pro_My_Si_M = Sm_Dy_Pro_My_Si * 2;
         var Sm_Dy_Pro_My_Si_Ore = Sm_Dy_Pro_My_Si * 2;        
        var Sm_Dy_Pro_My_Co = Sm_Dy_Pro_My * 1;
        var Sm_Dy_Pro_My_Co_M = Sm_Dy_Pro_My_Co * 1;
         var Sm_Dy_Pro_My_Co_Ore = Sm_Dy_Pro_My_Co * 1;
     var Sm_DeF = Sm * 4;
     var Sm_DeF_M = Sm_DeF * 6;
      var Sm_DeF_TiA = Sm_DeF * 0.5;
      var Sm_DeF_TiA_M = Sm_DeF_TiA * 3;
       var Sm_DeF_TiA_Ti = Sm_DeF_TiA;
       var Sm_DeF_TiA_Ti_M = Sm_DeF_TiA_Ti * 2;
        var Sm_DeF_TiA_Ti_Ore = Sm_DeF_TiA_Ti * 2;
       var Sm_DeF_TiA_St = Sm_DeF_TiA;
       var Sm_DeF_TiA_St_M = Sm_DeF_TiA_St * 3;
        var Sm_DeF_TiA_St_Ir = Sm_DeF_TiA_St * 3;
        var Sm_DeF_TiA_St_Ir_M = Sm_DeF_TiA_St_Ir;
         var Sm_DeF_TiA_St_Ir_Ore = Sm_DeF_TiA_St_Ir;
       var Sm_DeF_TiA_Su = Sm_DeF_TiA * 2;
      var Sm_DeF_El = Sm_DeF * 0.5;
      var Sm_DeF_El_M = Sm_DeF_El *3;
       var Sm_DeF_El_Tu = Sm_DeF_El * 2;
       var Sm_DeF_El_Tu_M = Sm_DeF_El_Tu * 2;
       var Sm_DeF_El_Tu_Mo = Sm_DeF_El_Tu * 2;
       var Sm_DeF_El_Tu_Mo_M = Sm_DeF_El_Tu_Mo * 2;
        var Sm_DeF_El_Tu_Mo_Ir = Sm_DeF_El_Tu_Mo * 2;
        var Sm_DeF_El_Tu_Mo_Ir_M = Sm_DeF_El_Tu_Mo_Ir * 1;
         var Sm_DeF_El_Tu_Mo_Ir_Ore = Sm_DeF_El_Tu_Mo_Ir * 1;
        var Sm_DeF_El_Tu_Mo_Ge = Sm_DeF_El_Tu_Mo;
        var Sm_DeF_El_Tu_Mo_Ge_M = Sm_DeF_El_Tu_Mo_Ge * 1;
         var Sm_DeF_El_Tu_Mo_Ge_Ir = Sm_DeF_El_Tu_Mo_Ge *1;
         var Sm_DeF_El_Tu_Mo_Ge_Ir_M = Sm_DeF_El_Tu_Mo_Ge_Ir * 1;
          var Sm_DeF_El_Tu_Mo_Ge_Ir_Ore = Sm_DeF_El_Tu_Mo_Ge_Ir * 1;
        var Sm_DeF_El_Tu_Mo_MaC = Sm_DeF_El_Tu_Mo;
        var Sm_DeF_El_Tu_Mo_MaC_M = Sm_DeF_El_Tu_Mo_MaC * 0.5;
         var Sm_DeF_El_Tu_Mo_MaC_Ma = Sm_DeF_El_Tu_Mo_MaC * 1;
         var Sm_DeF_El_Tu_Mo_MaC_Ma_M = Sm_DeF_El_Tu_Mo_MaC_Ma * 1.5;
          var Sm_DeF_El_Tu_Mo_MaC_Ma_Ore = Sm_DeF_El_Tu_Mo_MaC_Ma * 1;
         var Sm_DeF_El_Tu_Mo_MaC_Co = Sm_DeF_El_Tu_Mo_MaC * 0.5;
         var Sm_DeF_El_Tu_Mo_MaC_Co_M = Sm_DeF_El_Tu_Mo_MaC_Co * 1;
          var Sm_DeF_El_Tu_Mo_MaC_Co_Ore = Sm_DeF_El_Tu_Mo_MaC_Co * 1;
       var Sm_DeF_El_Tu_MaC = Sm_DeF_El_Tu * 2;
       var Sm_DeF_El_Tu_MaC_M = Sm_DeF_El_Tu_MaC * 0.5;
        var Sm_DeF_El_Tu_MaC_Ma = Sm_DeF_El_Tu_MaC * 1;
        var Sm_DeF_El_Tu_MaC_Ma_M = Sm_DeF_El_Tu_MaC_Ma * 1.5;
         var Sm_DeF_El_Tu_MaC_Ma_Ore = Sm_DeF_El_Tu_MaC_Ma * 1;
        var Sm_DeF_El_Tu_MaC_Co = Sm_DeF_El_Tu_MaC * 0.5;
        var Sm_DeF_El_Tu_MaC_Co_M = Sm_DeF_El_Tu_MaC_Co * 1;
         var Sm_DeF_El_Tu_MaC_Co_Ore = Sm_DeF_El_Tu_MaC_Co * 1;
       var Sm_DeF_El_Ma = Sm_DeF_El * 3;
       var Sm_DeF_El_Ma_M = Sm_DeF_El_Ma * 1.5;
        var Sm_DeF_El_Ma_Ore = Sm_DeF_El_Ma *1;
       var Sm_DeF_El_GrR = Sm_DeF_El * 1;
       var Sm_DeF_El_GrR_M = Sm_DeF_El_GrR * 2;
        var Sm_DeF_El_GrR_Ore = Sm_DeF_El_GrR * 2;
      var Sm_DeF_De = Sm_DeF * 10;
     var Sm_Qu = Sm * 2;
     var Sm_Qu_M = Sm_Qu * 6;
      var Sm_Qu_Pro = Sm_Qu * 2;
      var Sm_Qu_Pro_M = Sm_Qu_Pro * 3;
       var Sm_Qu_Pro_Ci = Sm_Qu_Pro * 2;
       var Sm_Qu_Pro_Ci_M = Sm_Qu_Pro_Ci * 0.5;
        var Sm_Qu_Pro_Ci_Ir = Sm_Qu_Pro_Ci * 1;
        var Sm_Qu_Pro_Ci_Ir_M = Sm_Qu_Pro_Ci_Ir * 1;
         var Sm_Qu_Pro_Ci_Ir_Ore = Sm_Qu_Pro_Ci_Ir * 1;        
        var Sm_Qu_Pro_Ci_Co = Sm_Qu_Pro_Ci * 0.5;
        var Sm_Qu_Pro_Ci_Co_M = Sm_Qu_Pro_Ci_Co * 1;
         var Sm_Qu_Pro_Ci_Co_Ore = Sm_Qu_Pro_Ci_Co * 1;
       var Sm_Qu_Pro_My = Sm_Qu_Pro * 2;
       var Sm_Qu_Pro_My_M = Sm_Qu_Pro_My * 2;
        var Sm_Qu_Pro_My_Si = Sm_Qu_Pro_My * 2;
        var Sm_Qu_Pro_My_Si_M = Sm_Qu_Pro_My_Si * 2;
         var Sm_Qu_Pro_My_Si_Ore = Sm_Qu_Pro_My_Si * 2;        
        var Sm_Qu_Pro_My_Co = Sm_Qu_Pro_My * 1;
        var Sm_Qu_Pro_My_Co_M = Sm_Qu_Pro_My_Co * 1;
         var Sm_Qu_Pro_My_Co_Ore = Sm_Qu_Pro_My_Co * 1;
      var Sm_Qu_PlF = Sm_Qu * 2;
      var Sm_Qu_PlF_M = Sm_Qu_PlF * 12;
       var Sm_Qu_PlF_TiG = Sm_Qu_PlF * 2;
       var Sm_Qu_PlF_TiG_M = Sm_Qu_PlF_TiG * 2.5;
        var Sm_Qu_PlF_TiG_Gl = Sm_Qu_PlF_TiG * 1;
        var Sm_Qu_PlF_TiG_Gl_M = Sm_Qu_PlF_TiG_Gl * 2;
         var Sm_Qu_PlF_TiG_Gl_Ore = Sm_Qu_PlF_TiG_Gl * 2;
        var Sm_Qu_PlF_TiG_Ti = Sm_Qu_PlF_TiG;
        var Sm_Qu_PlF_TiG_Ti_M = Sm_Qu_PlF_TiG_Ti * 2
         var Sm_Qu_PlF_TiG_Ti_Ore = Sm_Qu_PlF_TiG_Ti * 2;
        var Sm_Qu_PlF_TiG_Wa = Sm_Qu_PlF_TiG * 1;
       var Sm_Qu_PlF_Cas = Sm_Qu_PlF * 1;
       var Sm_Qu_PlF_Cas_M = Sm_Qu_PlF_Cas * 4;
        var Sm_Qu_PlF_Cas_Opt = Sm_Qu_PlF_Cas * 8;
        var Sm_Qu_PlF_Cas_Gr = Sm_Qu_PlF_Cas * 2;
        var Sm_Qu_PlF_Cas_Gr_Hy = Sm_Qu_PlF_Cas_Gr * 0.5;
        var Sm_Qu_PlF_Cas_Gr_M = Sm_Qu_PlF_Cas_Gr * 1;
         var Sm_Qu_PlF_Cas_Gr_Fi = Sm_Qu_PlF_Cas_Gr * 1;
        var Sm_Qu_PlF_Cas_Hy = Sm_Qu_PlF_Cas * 10;
    // set the recipe for Annihilation contraint sphere
    var An_M = An * 20;
     var An_Pro = An * 1;
     var An_Pro_M = An_Pro * 3;
      var An_Pro_Ci = An_Pro * 2;
      var An_Pro_Ci_M = An_Pro_Ci * 0.5;
       var An_Pro_Ci_Ir = An_Pro_Ci * 1;
       var An_Pro_Ci_Ir_M = An_Pro_Ci_Ir * 1;
        var An_Pro_Ci_Ir_Ore = An_Pro_Ci_Ir * 1;        
       var An_Pro_Ci_Co = An_Pro_Ci * 0.5;
       var An_Pro_Ci_Co_M = An_Pro_Ci_Co * 1;
        var An_Pro_Ci_Co_Ore = An_Pro_Ci_Co * 1;
      var An_Pro_My = An_Pro * 2;
      var An_Pro_My_M = An_Pro_My * 2;
       var An_Pro_My_Si = An_Pro_My * 2;
       var An_Pro_My_Si_M = An_Pro_My_Si * 2;
        var An_Pro_My_Si_Ore = An_Pro_My_Si * 2;        
       var An_Pro_My_Co = An_Pro_My * 1;
       var An_Pro_My_Co_M = An_Pro_My_Co * 1;
        var An_Pro_My_Co_Ore = An_Pro_My_Co * 1;
     var An_Par = An * 1;
     var An_Par_M = An_Par * 4;
      var An_Par_Tu = An_Par * 2;
      var An_Par_Tu_M = An_Par_Tu * 2;
       var An_Par_Tu_Mo = An_Par_Tu * 2;
       var An_Par_Tu_Mo_M = An_Par_Tu_Mo * 2;
        var An_Par_Tu_Mo_Ir = An_Par_Tu_Mo * 2;
        var An_Par_Tu_Mo_Ir_M = An_Par_Tu_Mo_Ir * 1;
         var An_Par_Tu_Mo_Ir_Ore = An_Par_Tu_Mo_Ir * 1;
        var An_Par_Tu_Mo_Ge = An_Par_Tu_Mo;
        var An_Par_Tu_Mo_Ge_M = An_Par_Tu_Mo_Ge * 1;
         var An_Par_Tu_Mo_Ge_Ir = An_Par_Tu_Mo_Ge *1;
         var An_Par_Tu_Mo_Ge_Ir_M = An_Par_Tu_Mo_Ge_Ir * 1;
          var An_Par_Tu_Mo_Ge_Ir_Ore = An_Par_Tu_Mo_Ge_Ir * 1;
        var An_Par_Tu_Mo_MaC = An_Par_Tu_Mo;
        var An_Par_Tu_Mo_MaC_M = An_Par_Tu_Mo_MaC * 0.5;
         var An_Par_Tu_Mo_MaC_Ma = An_Par_Tu_Mo_MaC * 1;
         var An_Par_Tu_Mo_MaC_Ma_M = An_Par_Tu_Mo_MaC_Ma * 1.5;
          var An_Par_Tu_Mo_MaC_Ma_Ore = An_Par_Tu_Mo_MaC_Ma * 1;
         var An_Par_Tu_Mo_MaC_Co = An_Par_Tu_Mo_MaC * 0.5;
         var An_Par_Tu_Mo_MaC_Co_M = An_Par_Tu_Mo_MaC_Co * 1;
          var An_Par_Tu_Mo_MaC_Co_Ore = An_Par_Tu_Mo_MaC_Co * 1;
       var An_Par_Tu_MaC = An_Par_Tu * 2;
       var An_Par_Tu_MaC_M = An_Par_Tu_MaC * 0.5;
        var An_Par_Tu_MaC_Ma = An_Par_Tu_MaC * 1;
        var An_Par_Tu_MaC_Ma_M = An_Par_Tu_MaC_Ma * 1.5;
         var An_Par_Tu_MaC_Ma_Ore = An_Par_Tu_MaC_Ma * 1;
        var An_Par_Tu_MaC_Co = An_Par_Tu_MaC * 0.5;
        var An_Par_Tu_MaC_Co_M = An_Par_Tu_MaC_Co * 1;
         var An_Par_Tu_MaC_Co_Ore = An_Par_Tu_MaC_Co * 1;
      var An_Par_Co = An_Par * 2;
      var An_Par_Co_M = An_Par_Co * 1;      
       var An_Par_Co_Ore = An_Par_Co * 1;
      var An_Par_Gr = An_Par * 2;
      var An_Par_Gr_M = An_Par_Gr * 1;
      var An_Par_Gr_Hy = An_Par_Gr * 0.5;
       var An_Par_Gr_Fi = An_Par_Gr * 1;
    // set the recipe for Deuterium fuel rod
    var DeF_M = DeF * 6;
     var DeF_TiA = DeF * 0.5;
     var DeF_TiA_M = DeF_TiA * 3;
      var DeF_TiA_Ti = DeF_TiA;
      var DeF_TiA_Ti_M = DeF_TiA_Ti * 2;
       var DeF_TiA_Ti_Ore = DeF_TiA_Ti * 2;
      var DeF_TiA_St = DeF_TiA;
      var DeF_TiA_St_M = DeF_TiA_St * 3;
       var DeF_TiA_St_Ir = DeF_TiA_St * 3;
       var DeF_TiA_St_Ir_M = DeF_TiA_St_Ir;
        var DeF_TiA_St_Ir_Ore = DeF_TiA_St_Ir;
      var DeF_TiA_Su = DeF_TiA * 2;
     var DeF_El = DeF * 0.5;
     var DeF_El_M = DeF_El *3;
      var DeF_El_Tu = DeF_El * 2;
      var DeF_El_Tu_M = DeF_El_Tu * 2;
      var DeF_El_Tu_Mo = DeF_El_Tu * 2;
      var DeF_El_Tu_Mo_M = DeF_El_Tu_Mo * 2;
       var DeF_El_Tu_Mo_Ir = DeF_El_Tu_Mo * 2;
       var DeF_El_Tu_Mo_Ir_M = DeF_El_Tu_Mo_Ir * 1;
        var DeF_El_Tu_Mo_Ir_Ore = DeF_El_Tu_Mo_Ir * 1;
       var DeF_El_Tu_Mo_Ge = DeF_El_Tu_Mo;
       var DeF_El_Tu_Mo_Ge_M = DeF_El_Tu_Mo_Ge * 1;
        var DeF_El_Tu_Mo_Ge_Ir = DeF_El_Tu_Mo_Ge *1;
        var DeF_El_Tu_Mo_Ge_Ir_M = DeF_El_Tu_Mo_Ge_Ir * 1;
         var DeF_El_Tu_Mo_Ge_Ir_Ore = DeF_El_Tu_Mo_Ge_Ir * 1;
       var DeF_El_Tu_Mo_MaC = DeF_El_Tu_Mo;
       var DeF_El_Tu_Mo_MaC_M = DeF_El_Tu_Mo_MaC * 0.5;
        var DeF_El_Tu_Mo_MaC_Ma = DeF_El_Tu_Mo_MaC * 1;
        var DeF_El_Tu_Mo_MaC_Ma_M = DeF_El_Tu_Mo_MaC_Ma * 1.5;
         var DeF_El_Tu_Mo_MaC_Ma_Ore = DeF_El_Tu_Mo_MaC_Ma * 1;
        var DeF_El_Tu_Mo_MaC_Co = DeF_El_Tu_Mo_MaC * 0.5;
        var DeF_El_Tu_Mo_MaC_Co_M = DeF_El_Tu_Mo_MaC_Co * 1;
         var DeF_El_Tu_Mo_MaC_Co_Ore = DeF_El_Tu_Mo_MaC_Co * 1;
      var DeF_El_Tu_MaC = DeF_El_Tu * 2;
      var DeF_El_Tu_MaC_M = DeF_El_Tu_MaC * 0.5;
       var DeF_El_Tu_MaC_Ma = DeF_El_Tu_MaC * 1;
       var DeF_El_Tu_MaC_Ma_M = DeF_El_Tu_MaC_Ma * 1.5;
        var DeF_El_Tu_MaC_Ma_Ore = DeF_El_Tu_MaC_Ma * 1;
       var DeF_El_Tu_MaC_Co = DeF_El_Tu_MaC * 0.5;
       var DeF_El_Tu_MaC_Co_M = DeF_El_Tu_MaC_Co * 1;
        var DeF_El_Tu_MaC_Co_Ore = DeF_El_Tu_MaC_Co * 1;
      var DeF_El_Ma = DeF_El * 3;
      var DeF_El_Ma_M = DeF_El_Ma * 1.5;
       var DeF_El_Ma_Ore = DeF_El_Ma *1;
      var DeF_El_GrR = DeF_El * 1;
      var DeF_El_GrR_M = DeF_El_GrR * 2;
       var DeF_El_GrR_Ore = DeF_El_GrR * 2;
     var DeF_De = DeF * 10;
    // set the recipe for Antimatter fuel rod
    var AnF_M = AnF * 12;
     var AnF_Ant = AnF * 6;
     var AnF_Hy = AnF * 6
     var AnF_An = AnF * 0.5;
     var AnF_An_M = AnF_An * 20;
      var AnF_An_Pro = AnF_An * 1;
      var AnF_An_Pro_M = AnF_An_Pro * 3;
       var AnF_An_Pro_Ci = AnF_An_Pro * 2;
       var AnF_An_Pro_Ci_M = AnF_An_Pro_Ci * 0.5;
        var AnF_An_Pro_Ci_Ir = AnF_An_Pro_Ci * 1;
        var AnF_An_Pro_Ci_Ir_M = AnF_An_Pro_Ci_Ir * 1;
         var AnF_An_Pro_Ci_Ir_Ore = AnF_An_Pro_Ci_Ir * 1;        
        var AnF_An_Pro_Ci_Co = AnF_An_Pro_Ci * 0.5;
        var AnF_An_Pro_Ci_Co_M = AnF_An_Pro_Ci_Co * 1;
         var AnF_An_Pro_Ci_Co_Ore = AnF_An_Pro_Ci_Co * 1;
       var AnF_An_Pro_My = AnF_An_Pro * 2;
       var AnF_An_Pro_My_M = AnF_An_Pro_My * 2;
        var AnF_An_Pro_My_Si = AnF_An_Pro_My * 2;
        var AnF_An_Pro_My_Si_M = AnF_An_Pro_My_Si * 2;
         var AnF_An_Pro_My_Si_Ore = AnF_An_Pro_My_Si * 2;        
        var AnF_An_Pro_My_Co = AnF_An_Pro_My * 1;
        var AnF_An_Pro_My_Co_M = AnF_An_Pro_My_Co * 1;
         var AnF_An_Pro_My_Co_Ore = AnF_An_Pro_My_Co * 1;
      var AnF_An_Par = AnF_An * 1;
      var AnF_An_Par_M = AnF_An_Par * 4;
       var AnF_An_Par_Tu = AnF_An_Par * 2;
       var AnF_An_Par_Tu_M = AnF_An_Par_Tu * 2;
        var AnF_An_Par_Tu_Mo = AnF_An_Par_Tu * 2;
        var AnF_An_Par_Tu_Mo_M = AnF_An_Par_Tu_Mo * 2;
         var AnF_An_Par_Tu_Mo_Ir = AnF_An_Par_Tu_Mo * 2;
         var AnF_An_Par_Tu_Mo_Ir_M = AnF_An_Par_Tu_Mo_Ir * 1;
          var AnF_An_Par_Tu_Mo_Ir_Ore = AnF_An_Par_Tu_Mo_Ir * 1;
         var AnF_An_Par_Tu_Mo_Ge = AnF_An_Par_Tu_Mo;
         var AnF_An_Par_Tu_Mo_Ge_M = AnF_An_Par_Tu_Mo_Ge * 1;
          var AnF_An_Par_Tu_Mo_Ge_Ir = AnF_An_Par_Tu_Mo_Ge *1;
          var AnF_An_Par_Tu_Mo_Ge_Ir_M = AnF_An_Par_Tu_Mo_Ge_Ir * 1;
           var AnF_An_Par_Tu_Mo_Ge_Ir_Ore = AnF_An_Par_Tu_Mo_Ge_Ir * 1;
         var AnF_An_Par_Tu_Mo_MaC = AnF_An_Par_Tu_Mo;
         var AnF_An_Par_Tu_Mo_MaC_M = AnF_An_Par_Tu_Mo_MaC * 0.5;
          var AnF_An_Par_Tu_Mo_MaC_Ma = AnF_An_Par_Tu_Mo_MaC * 1;
          var AnF_An_Par_Tu_Mo_MaC_Ma_M = AnF_An_Par_Tu_Mo_MaC_Ma * 1.5;
           var AnF_An_Par_Tu_Mo_MaC_Ma_Ore = AnF_An_Par_Tu_Mo_MaC_Ma * 1;
          var AnF_An_Par_Tu_Mo_MaC_Co = AnF_An_Par_Tu_Mo_MaC * 0.5;
          var AnF_An_Par_Tu_Mo_MaC_Co_M = AnF_An_Par_Tu_Mo_MaC_Co * 1;
           var AnF_An_Par_Tu_Mo_MaC_Co_Ore = AnF_An_Par_Tu_Mo_MaC_Co * 1;
        var AnF_An_Par_Tu_MaC = AnF_An_Par_Tu * 2;
        var AnF_An_Par_Tu_MaC_M = AnF_An_Par_Tu_MaC * 0.5;
         var AnF_An_Par_Tu_MaC_Ma = AnF_An_Par_Tu_MaC * 1;
         var AnF_An_Par_Tu_MaC_Ma_M = AnF_An_Par_Tu_MaC_Ma * 1.5;
          var AnF_An_Par_Tu_MaC_Ma_Ore = AnF_An_Par_Tu_MaC_Ma * 1;
         var AnF_An_Par_Tu_MaC_Co = AnF_An_Par_Tu_MaC * 0.5;
         var AnF_An_Par_Tu_MaC_Co_M = AnF_An_Par_Tu_MaC_Co * 1;
          var AnF_An_Par_Tu_MaC_Co_Ore = AnF_An_Par_Tu_MaC_Co * 1;
       var AnF_An_Par_Co = AnF_An_Par * 2;
       var AnF_An_Par_Co_M = AnF_An_Par_Co * 1;      
        var AnF_An_Par_Co_Ore = AnF_An_Par_Co * 1;
       var AnF_An_Par_Gr = AnF_An_Par * 2;
       var AnF_An_Par_Gr_M = AnF_An_Par_Gr * 1;
       var AnF_An_Par_Gr_Hy = AnF_An_Par_Gr * 0.5;
        var AnF_An_Par_Gr_Fi = AnF_An_Par_Gr * 1;
     var AnF_TiA = AnF * 0.5
     var AnF_TiA_M = AnF_TiA * 3;
      var AnF_TiA_Ti = AnF_TiA;
      var AnF_TiA_Ti_M = AnF_TiA_Ti * 2;
       var AnF_TiA_Ti_Ore = AnF_TiA_Ti * 2;
      var AnF_TiA_St = AnF_TiA;
      var AnF_TiA_St_M = AnF_TiA_St * 3;
       var AnF_TiA_St_Ir = AnF_TiA_St * 3;
       var AnF_TiA_St_Ir_M = AnF_TiA_St_Ir;
        var AnF_TiA_St_Ir_Ore = AnF_TiA_St_Ir;
      var AnF_TiA_Su = AnF_TiA * 2;

    // Initialize the output string
    var output = "";

    //Check Electromagnetic coil
    if (El > 0) {
     output += El + " Electromagnetic coil " + El_M + " Assemblers<br>- " + El_Ma + " Magnet " + El_Ma_M + " Smelters<br>-- " + El_Ma_Ore + " Iron ingot<br>- " + El_GrR + " Graphene rod " + El_GrR_M + " Smelters<br>-- " + El_GrR_Ore + " Coal<br>- " + El_Tu + " Turbine " + El_Tu_M + " Assemblers<br>-- " + El_Tu_MaC + " Magnetic coil " + El_Tu_MaC_M + " Assemblers<br>--- " + El_Tu_MaC_Co + " Copper ingot " + El_Tu_MaC_Co_M + " Smelters<br>---- " + El_Tu_MaC_Co_Ore + " Copper ore<br>--- " + El_Tu_MaC_Ma + " Magnet " + El_Tu_MaC_Ma_M + " Smelters<br>---- " + El_Tu_MaC_Ma_Ore + " Iron ore<br>-- " + El_Tu_Mo + " Motor " + El_Tu_Mo_M + " Assemblers<br>--- " + El_Tu_Mo_Ir + " Iron ingot " + El_Tu_Mo_Ir_M + " Smelters<br>---- " + El_Tu_Mo_Ir_Ore + " Iron ore<br>--- " + El_Tu_Mo_Ge + " Gears " + El_Tu_Mo_Ge_M + " Assemblers<br>---- " + El_Tu_Mo_Ge_Ir + " Iron ingot " + El_Tu_Mo_Ge_Ir_M + " Smelters<br>----- " + El_Tu_Mo_Ge_Ir_Ore + " Iron ore<br>--- " + El_Tu_Mo_MaC + " Magnetic coil " + El_Tu_Mo_MaC_M + " Assemblers<br>---- " + El_Tu_Mo_MaC_Co + " Copper ingot " + El_Tu_Mo_MaC_Co_M + " Smelters<br>----- " + El_Tu_Mo_MaC_Co_Ore + " Copper ore<br>---- " + El_Tu_Mo_MaC_Ma + " Magnet " + El_Tu_Mo_MaC_Ma_M + " Smelters<br>----- " + El_Tu_Mo_MaC_Ma_Ore + " Iron ore<br>"  
    }
    //Check Particle broadband
    if (Pa > 0) {
     output += Pa + " Particle broadband " + Pa_M + " Assemblers<br>- " + Pa_Gr + " Graphene " + Pa_Gr_M + " Chemical plants<br>*- " + Pa_Gr_Hy + " Hydrogen<br>-- " + Pa_Gr_Fi + " Fire ice<br>- " + Pa_SiC + " Sillicon ingot " + Pa_SiC_M + " Smelters<br>-- " + Pa_SiC_Ore + " Sillicon ore<br>- " + Pa_Pl + " Plastic " + Pa_Pl_M + " Refiners<br>-- " + Pa_Pl_GrR + " Graphene rod " + Pa_Pl_GrR_M + " Smelters<br>--- " + Pa_Pl_GrR_Ore + " Coal<br>-- " + Pa_Pl_LiO + " Light Oil " + Pa_Pl_LiO_M + " Refiners<br>--- " + Pa_Pl_LiO_Ore + " Coal<br>--- " + Pa_Pl_LiO_Hy + " hydrogen<br>--- " + Pa_Pl_LiO_LiO + " Light Oil " + Pa_Pl_LiO_LiO_M + " Refiners<br>---- " + Pa_Pl_LiO_LiO_CrO + " Crude oil<br>" 
    }
    //Check Quantum chip
    if (Qu > 0) {
     output += Qu + " Quantum chip " + Qu_M + " Assemblers<br>- " +  Qu_PlF + " Plane filter " +  Qu_PlF_M + " Assemblers<br>-- " +  Qu_PlF_TiG + " Titanium glass " +  Qu_PlF_TiG_M + " Assemblers<br>--- " +  Qu_PlF_TiG_Wa + " Water<br>--- " +  Qu_PlF_TiG_Gl + " Glass " +  Qu_PlF_TiG_Gl_M + " Smelters<br>---- " +  Qu_PlF_TiG_Gl_Ore + " Stone<br>--- " +  Qu_PlF_TiG_Ti + " Titanium ingot " +  Qu_PlF_TiG_Ti_M + " Smelters<br>--- " +  Qu_PlF_TiG_Ti_Ore + " Titanium ore<br>- " +  Qu_PlF_Cas + " Casimir crystal " +  Qu_PlF_Cas_M + " Assemblers<br>-- " +  Qu_PlF_Cas_Opt +" Optical grading crystal<br>*--- " +  Qu_PlF_Cas_Gr_Hy + " Hydrogen<br>--- " +  Qu_PlF_Cas_Gr + " Graphene " +  Qu_PlF_Cas_Gr_M + " Chemical plants<br>---- " +  Qu_PlF_Cas_Gr_Fi + " Fire ice<br>--- " +  Qu_PlF_Cas_Hy + " Hydrogen<br>- " +  Qu_Pro + " Processor " +  Qu_Pro_M + " Assemblers<br>-- " +  Qu_Pro_Ci + " Circuit board " +  Qu_Pro_Ci_M + " Assemblers<br>--- " +  Qu_Pro_Ci_Co + " Copper ingot " +  Qu_Pro_Ci_Co_M + " Smelters<br>---- " +  Qu_Pro_Ci_Co_Ore + " Copper ore<br>--- " +  Qu_Pro_Ci_Ir + " Iron ingot " +  Qu_Pro_Ci_Ir_M + " Smelters<br>---- " +  Qu_Pro_Ci_Ir_Ore + " Iron ore<br>-- " +  Qu_Pro_My + " Mycrocrystalline component " +  Qu_Pro_My_M + " Assemblers<br>--- " +  Qu_Pro_My_Co + " Copper ingot " +  Qu_Pro_My_Co_M + " Smelters<br>---- " +  Qu_Pro_My_Co_Ore + " Copper ore<br>--- " +  Qu_Pro_My_Si + " Sillicon ingot " +  Qu_Pro_My_Si_M + " Smelters<br>---- " +  Qu_Pro_My_Si_Ore + " Sillicon ore<br>" 
    }
    //Check Particle container
    if (Par > 0) {
     output += Par + " Particle container " + Par_M + " Assemblers<br>- " + Par_Co + " Copper ingot " + Par_Co_M + " Smelters<br>-- " + Par_Co_Ore + " Copper ore<br>- " + Par_Gr + " Graphene " + Par_Gr_M + " Chemical plants<br>*-- " + Par_Gr_Hy + " Hydrogen<br>--- " + Par_Gr_Fi + " Fire ice<br>- " + Par_Tu + " Turbine " + Par_Tu_M + " Assemblers<br>-- " + Par_Tu_MaC + " Magnetic coil " + Par_Tu_MaC_M + " Assemblers<br>--- " + Par_Tu_MaC_Co + " Copper ingot " + Par_Tu_MaC_Co_M + " Smelters<br>---- " + Par_Tu_MaC_Co_Ore + " Copper ore<br>--- " + Par_Tu_MaC_Ma + " Magnet " + Par_Tu_MaC_Ma_M + " Smelters<br>---- " + Par_Tu_MaC_Ma_Ore + " Iron ore<br>-- " + Par_Tu_Mo + " Motor " + Par_Tu_Mo_M + " Assemblers<br>-- " + Par_Tu_Mo_Ir + " Iron ingot " + Par_Tu_Mo_Ir_M + " Smelters<br>--- " + Par_Tu_Mo_Ir_Ore + " Iron ore<br>-- " + Par_Tu_Mo_Ge + " Gears " + Par_Tu_Mo_Ge_M + " Assemblers<br>---- " + Par_Tu_Mo_Ge_Ir + " Iron ingot " + Par_Tu_Mo_Ge_Ir_M + " Smelters<br>----- " + Par_Tu_Mo_Ge_Ir_Ore + " Iron ore<br>--- " + Par_Tu_Mo_MaC + " Magnetic coil " + Par_Tu_Mo_MaC_M + " Assemblers<br>---- " + Par_Tu_Mo_MaC_Co + " Copper ingot " + Par_Tu_Mo_MaC_Co_M + " Smelters<br>----- " + Par_Tu_Mo_MaC_Co_Ore + " Copper ore<br>---- " + Par_Tu_Mo_MaC_Ma + " Magnet " + Par_Tu_Mo_MaC_Ma_M + " Smelters<br>----- " + Par_Tu_Mo_MaC_Ma_Ore + " Iron ore<br>"  
    }
    //Check Strange matter
    if (StM > 0) {
     output += StM + " Strange matter " + StM_M + " Particle collider<br>- " + StM_Ir + " Iron ingot " + StM_Ir_M + " Smelters<br>-- " + StM_Ir_Ore + " Iron ore<br>- " + StM_De + " Deuterium<br>- " + StM_Par + " Particle container " + StM_Par_M + " Assemblers<br>-- " + StM_Par_Co + " Copper ingot " + StM_Par_Co_M + " Smelters<br>--- " + StM_Par_Co_Ore + " Copper ore<br>-- " + StM_Par_Gr + " Graphene " + StM_Par_Gr_M + " Chemical plants<br>*--- " + StM_Par_Gr_Hy + " Hydrogen<br>---- " + StM_Par_Gr_Fi + " Fire ice<br>-- " + StM_Par_Tu + " Turbine " + StM_Par_Tu_M + " Assemblers<br>--- " + StM_Par_Tu_MaC + " Magnetic coil " + StM_Par_Tu_MaC_M + " Assemblers<br>---- " + StM_Par_Tu_MaC_Co + " Copper ingot " + StM_Par_Tu_MaC_Co_M + " Smelters<br>----- " + StM_Par_Tu_MaC_Co_Ore + " Copper ore<br>---- " + StM_Par_Tu_MaC_Ma + " Magnet " + StM_Par_Tu_MaC_Ma_M + " Smelters<br>----- " + StM_Par_Tu_MaC_Ma_Ore + " Iron ore<br>--- " + StM_Par_Tu_Mo + " Motor " + StM_Par_Tu_Mo_M + " Assemblers<br>--- " + StM_Par_Tu_Mo_Ir + " Iron ingot " + StM_Par_Tu_Mo_Ir_M + " Smelters<br>---- " + StM_Par_Tu_Mo_Ir_Ore + " Iron ore<br>--- " + StM_Par_Tu_Mo_Ge + " Gears " + StM_Par_Tu_Mo_Ge_M + " Assemblers<br>----- " + StM_Par_Tu_Mo_Ge_Ir + " Iron ingot " + StM_Par_Tu_Mo_Ge_Ir_M + " Smelters<br>------ " + StM_Par_Tu_Mo_Ge_Ir_Ore + " Iron ore<br>---- " + StM_Par_Tu_Mo_MaC + " Magnetic coil " + StM_Par_Tu_Mo_MaC_M + " Assemblers<br>----- " + StM_Par_Tu_Mo_MaC_Co + " Copper ingot " + StM_Par_Tu_Mo_MaC_Co_M + " Smelters<br>------ " + StM_Par_Tu_Mo_MaC_Co_Ore + " Copper ore<br>----- " + StM_Par_Tu_Mo_MaC_Ma + " Magnet " + StM_Par_Tu_Mo_MaC_Ma_M + " Smelters<br>------ " + StM_Par_Tu_Mo_MaC_Ma_Ore + " Iron ore<br>"  
    }
    //Check Gravity lens
    if (GrL > 0) {
     output += GrL + " Gravity lens " + GrL_M + " Assemblers<br>- " + GrL_StM + " Strange matter " + GrL_StM_M + " Particle collider<br>-- " + GrL_StM_Ir + " Iron ingot " + GrL_StM_Ir_M + " Smelters<br>--- " + GrL_StM_Ir_Ore + " Iron ore<br>-- " + GrL_StM_De + " Deuterium<br>-- " + GrL_StM_Par + " Particle container " + GrL_StM_Par_M + " Assemblers<br>--- " + GrL_StM_Par_Co + " Copper ingot " + GrL_StM_Par_Co_M + " Smelters<br>---- " + GrL_StM_Par_Co_Ore + " Copper ore<br>--- " + GrL_StM_Par_Gr + " Graphene " + GrL_StM_Par_Gr_M + " Chemical plants<br>*---- " + GrL_StM_Par_Gr_Hy + " Hydrogen<br>----- " + GrL_StM_Par_Gr_Fi + " Fire ice<br>--- " + GrL_StM_Par_Tu + " Turbine " + GrL_StM_Par_Tu_M + " Assemblers<br>---- " + GrL_StM_Par_Tu_MaC + " Magnetic coil " + GrL_StM_Par_Tu_MaC_M + " Assemblers<br>----- " + GrL_StM_Par_Tu_MaC_Co + " Copper ingot " + GrL_StM_Par_Tu_MaC_Co_M + " Smelters<br>------ " + GrL_StM_Par_Tu_MaC_Co_Ore + " Copper ore<br>----- " + GrL_StM_Par_Tu_MaC_Ma + " Magnet " + GrL_StM_Par_Tu_MaC_Ma_M + " Smelters<br>------ " + GrL_StM_Par_Tu_MaC_Ma_Ore + " Iron ore<br>---- " + GrL_StM_Par_Tu_Mo + " Motor " + GrL_StM_Par_Tu_Mo_M + " Assemblers<br>---- " + GrL_StM_Par_Tu_Mo_Ir + " Iron ingot " + GrL_StM_Par_Tu_Mo_Ir_M + " Smelters<br>----- " + GrL_StM_Par_Tu_Mo_Ir_Ore + " Iron ore<br>---- " + GrL_StM_Par_Tu_Mo_Ge + " Gears " + GrL_StM_Par_Tu_Mo_Ge_M + " Assemblers<br>------ " + GrL_StM_Par_Tu_Mo_Ge_Ir + " Iron ingot " + GrL_StM_Par_Tu_Mo_Ge_Ir_M + " Smelters<br>------- " + GrL_StM_Par_Tu_Mo_Ge_Ir_Ore + " Iron ore<br>----- " + GrL_StM_Par_Tu_Mo_MaC + " Magnetic coil " + GrL_StM_Par_Tu_Mo_MaC_M + " Assemblers<br>------ " + GrL_StM_Par_Tu_Mo_MaC_Co + " Copper ingot " + GrL_StM_Par_Tu_Mo_MaC_Co_M + " Smelters<br>------- " + GrL_StM_Par_Tu_Mo_MaC_Co_Ore + " Copper ore<br>------ " + GrL_StM_Par_Tu_Mo_MaC_Ma + " Magnet " + GrL_StM_Par_Tu_Mo_MaC_Ma_M + " Smelters<br>------- " + GrL_StM_Par_Tu_Mo_MaC_Ma_Ore + " Iron ore<br>- " + GrL_Di + " Diamond " + GrL_Di_M + " Smelters<br>-- " + GrL_Di_Ore + " Kimberlite ore<br>"   
    }
    //Check Space warper
    if (SpW > 0) {
     output += SpW + " Space warper " + SpW_M + " Assemblers<br>- " + SpW_GrL + " Gravity lens " + SpW_GrL_M + " Assemblers<br>-- " + SpW_GrL_StM + " Strange matter " + SpW_GrL_StM_M + " Particle collider<br>--- " + SpW_GrL_StM_Ir + " Iron ingot " + SpW_GrL_StM_Ir_M + " Smelters<br>---- " + SpW_GrL_StM_Ir_Ore + " Iron ore<br>--- " + SpW_GrL_StM_De + " Deuterium<br>--- " + SpW_GrL_StM_Par + " Particle container " + SpW_GrL_StM_Par_M + " Assemblers<br>--- " + SpW_GrL_StM_Par_Co + " Copper ingot " + SpW_GrL_StM_Par_Co_M + " Smelters<br>---- " + SpW_GrL_StM_Par_Co_Ore + " Copper ore<br>---- " + SpW_GrL_StM_Par_Gr + " Graphene " + SpW_GrL_StM_Par_Gr_M + " Chemical plants<br>*----- " + SpW_GrL_StM_Par_Gr_Hy + " Hydrogen<br>------ " + SpW_GrL_StM_Par_Gr_Fi + " Fire ice<br>---- " + SpW_GrL_StM_Par_Tu + " Turbine " + SpW_GrL_StM_Par_Tu_M + " Assemblers<br>----- " + SpW_GrL_StM_Par_Tu_MaC + " Magnetic coil " + SpW_GrL_StM_Par_Tu_MaC_M + " Assemblers<br>------ " + SpW_GrL_StM_Par_Tu_MaC_Co + " Copper ingot " + SpW_GrL_StM_Par_Tu_MaC_Co_M + " Smelters<br>------- " + SpW_GrL_StM_Par_Tu_MaC_Co_Ore + " Copper ore<br>------ " + SpW_GrL_StM_Par_Tu_MaC_Ma + " Magnet " + SpW_GrL_StM_Par_Tu_MaC_Ma_M + " Smelters<br>------- " + SpW_GrL_StM_Par_Tu_MaC_Ma_Ore + " Iron ore<br>----- " + SpW_GrL_StM_Par_Tu_Mo + " Motor " + SpW_GrL_StM_Par_Tu_Mo_M + " Assemblers<br>----- " + SpW_GrL_StM_Par_Tu_Mo_Ir + " Iron ingot " + SpW_GrL_StM_Par_Tu_Mo_Ir_M + " Smelters<br>------ " + SpW_GrL_StM_Par_Tu_Mo_Ir_Ore + " Iron ore<br>----- " + SpW_GrL_StM_Par_Tu_Mo_Ge + " Gears " + SpW_GrL_StM_Par_Tu_Mo_Ge_M + " Assemblers<br>------- " + SpW_GrL_StM_Par_Tu_Mo_Ge_Ir + " Iron ingot " + SpW_GrL_StM_Par_Tu_Mo_Ge_Ir_M + " Smelters<br>------- " + SpW_GrL_StM_Par_Tu_Mo_Ge_Ir_Ore + " Iron ore<br>----- " + SpW_GrL_StM_Par_Tu_Mo_MaC + " Magnetic coil " + SpW_GrL_StM_Par_Tu_Mo_MaC_M + " Assemblers<br>------- " + SpW_GrL_StM_Par_Tu_Mo_MaC_Co + " Copper ingot " + SpW_GrL_StM_Par_Tu_Mo_MaC_Co_M + " Smelters<br>-------- " + SpW_GrL_StM_Par_Tu_Mo_MaC_Co_Ore + " Copper ore<br>------- " + SpW_GrL_StM_Par_Tu_Mo_MaC_Ma + " Magnet " + SpW_GrL_StM_Par_Tu_Mo_MaC_Ma_M + " Smelters<br>-------- " + SpW_GrL_StM_Par_Tu_Mo_MaC_Ma_Ore + " Iron ore<br>-- " + SpW_GrL_Di + " Diamond " + SpW_GrL_Di_M + " Smelters<br>--- " + SpW_GrL_Di_Ore + " Kimberlite ore<br>"   
    }
    //Check Reïnforced thruster
    if (ReT > 0) {
     output += ReT + " Reïnforced thruster " + ReT_M + " Assemblers<br>- " + ReT_TiA + " Titanium alloy " + ReT_TiA_M + " Smelter<br>-- " + ReT_TiA_Su + " Sulfuric acid<br>-- " + ReT_TiA_St + " Steel " + ReT_TiA_St_M + " Smelters<br>--- " + ReT_TiA_St_Ir + " Iron ingot " + ReT_TiA_St_Ir_M + " Smelters<br>---- " + ReT_TiA_St_Ir_Ore + " Iron ore<br>-- " + ReT_TiA_Ti + " Titanium ingot " + ReT_TiA_Ti_M + " Smelters<br>--- " + ReT_TiA_Ti_Ore + " Titanium ore<br>- " + ReT_Tu + " Turbine " + ReT_Tu_M + " Assemblers<br>-- " + ReT_Tu_MaC + " Magnetic coil " + ReT_Tu_MaC_M + " Assemblers<br>--- " + ReT_Tu_MaC_Co + " Copper ingot " + ReT_Tu_MaC_Co_M + " Smelters<br>---- " + ReT_Tu_MaC_Co_Ore + " Copper ore<br>--- " + ReT_Tu_MaC_Ma + " Magnet " + ReT_Tu_MaC_Ma_M + " Smelters<br>---- " + ReT_Tu_MaC_Ma_Ore + " Iron ore<br>-- " + ReT_Tu_Mo + " Motor " + ReT_Tu_Mo_M + " Assemblers<br>--- " + ReT_Tu_Mo_Ir + " Iron ingot " + ReT_Tu_Mo_Ir_M + " Smelters<br>---- " + ReT_Tu_Mo_Ir_Ore + " Iron ore<br>--- " + ReT_Tu_Mo_Ge + " Gears " + ReT_Tu_Mo_Ge_M + " Assemblers<br>---- " + ReT_Tu_Mo_Ge_Ir + " Iron ingot " + ReT_Tu_Mo_Ge_Ir_M + " Smelters<br>----- " + ReT_Tu_Mo_Ge_Ir_Ore + " Iron ore<br>--- " + ReT_Tu_Mo_MaC + " Magnetic coil " + ReT_Tu_Mo_MaC_M + " Assemblers<br>---- " + ReT_Tu_Mo_MaC_Co + " Copper ingot " + ReT_Tu_Mo_MaC_Co_M + " Smelters<br>----- " + ReT_Tu_Mo_MaC_Co_Ore + " Copper ore<br>---- " + ReT_Tu_Mo_MaC_Ma + " Magnet " + ReT_Tu_Mo_MaC_Ma_M + " Smelters<br>----- " + ReT_Tu_Mo_MaC_Ma_Ore + " Iron ore<br>"  
    }
    //Check Logistic vessle
    if (LoV > 0) {
     output += LoV + " Logistic vessle " + LoV_M + " Assemblers<br>- " + ReT + " Reïnforced thruster " + LoV_ReT_M + " Assemblers<br>-- " + LoV_ReT_TiA + " Titanium alloy " + LoV_ReT_TiA_M + " Smelter<br>--- " + LoV_ReT_TiA_Su + " Sulfuric acid<br>--- " + LoV_ReT_TiA_St + " Steel " + LoV_ReT_TiA_St_M + " Smelters<br>---- " + LoV_ReT_TiA_St_Ir + " Iron ingot " + LoV_ReT_TiA_St_Ir_M + " Smelters<br>----- " + LoV_ReT_TiA_St_Ir_Ore + " Iron ore<br>--- " + LoV_ReT_TiA_Ti + " Titanium ingot " + LoV_ReT_TiA_Ti_M + " Smelters<br>---- " + LoV_ReT_TiA_Ti_Ore + " Titanium ore<br>-- " + LoV_ReT_Tu + " Turbine " + LoV_ReT_Tu_M + " Assemblers<br>--- " + LoV_ReT_Tu_MaC + " Magnetic coil " + LoV_ReT_Tu_MaC_M + " Assemblers<br>---- " + LoV_ReT_Tu_MaC_Co + " Copper ingot " + LoV_ReT_Tu_MaC_Co_M + " Smelters<br>----- " + LoV_ReT_Tu_MaC_Co_Ore + " Copper ore<br>---- " + LoV_ReT_Tu_MaC_Ma + " Magnet " + LoV_ReT_Tu_MaC_Ma_M + " Smelters<br>----- " + LoV_ReT_Tu_MaC_Ma_Ore + " Iron ore<br>--- " + LoV_ReT_Tu_Mo + " Motor " + LoV_ReT_Tu_Mo_M + " Assemblers<br>---- " + LoV_ReT_Tu_Mo_Ir + " Iron ingot " + LoV_ReT_Tu_Mo_Ir_M + " Smelters<br>----- " + LoV_ReT_Tu_Mo_Ir_Ore + " Iron ore<br>---- " + LoV_ReT_Tu_Mo_Ge + " Gears " + LoV_ReT_Tu_Mo_Ge_M + " Assemblers<br>----- " + LoV_ReT_Tu_Mo_Ge_Ir + " Iron ingot " + LoV_ReT_Tu_Mo_Ge_Ir_M + " Smelters<br>------ " + LoV_ReT_Tu_Mo_Ge_Ir_Ore + " Iron ore<br>---- " + LoV_ReT_Tu_Mo_MaC + " Magnetic coil " + LoV_ReT_Tu_Mo_MaC_M + " Assemblers<br>----- " + LoV_ReT_Tu_Mo_MaC_Co + " Copper ingot " + LoV_ReT_Tu_Mo_MaC_Co_M + " Smelters<br>------ " + LoV_ReT_Tu_Mo_MaC_Co_Ore + " Copper ore<br>----- " + LoV_ReT_Tu_Mo_MaC_Ma + " Magnet " + LoV_ReT_Tu_Mo_MaC_Ma_M + " Smelters<br>------ " + LoV_ReT_Tu_Mo_MaC_Ma_Ore + " Iron ore<br>- " + LoV_TiA + " Titanium alloy " + LoV_TiA_M + " Smelter<br>-- " + LoV_TiA_Su + " Sulfuric acid<br>-- " + LoV_TiA_St + " Steel " + LoV_TiA_St_M + " Smelters<br>--- " + LoV_TiA_St_Ir + " Iron ingot " + LoV_TiA_St_Ir_M + " Smelters<br>---- " + LoV_TiA_St_Ir_Ore + " Iron ore<br>-- " + LoV_TiA_Ti + " Titanium ingot " + LoV_TiA_Ti_M + " Smelters<br>--- " + LoV_TiA_Ti_Ore + " Titanium ore<br>- " + LoV_Pro + " Processor " + LoV_Pro_M + " Assemblers<br>-- " + LoV_Pro_Ci + " Circuit board " + LoV_Pro_Ci_M + " Assemblers<br>--- " + LoV_Pro_Ci_Co + " Copper ingot " + LoV_Pro_Ci_Co_M + " Smelters<br>---- " + LoV_Pro_Ci_Co_Ore + " Copper ore<br>--- " + LoV_Pro_Ci_Ir + " Iron ingot " + LoV_Pro_Ci_Ir_M + " Smelters<br>---- " + LoV_Pro_Ci_Ir_Ore + " Iron ore<br>-- " + LoV_Pro_My + " Mycrocrystalline component " + LoV_Pro_My_M + " Assemblers<br>--- " + LoV_Pro_My_Co + " Copper ingot " + LoV_Pro_My_Co_M + " Smelters<br>---- " + LoV_Pro_My_Co_Ore + " Copper ore<br>--- " + LoV_Pro_My_Si + " Sillicon ingot " + LoV_Pro_My_Si_M + " Smelters<br>---- " + LoV_Pro_My_Si_Ore + " Sillicon ore<br>" 
    
     }
    //Check Frame material
    if (FrM > 0) {
     output += FrM + " Frame material " + FrM_M + " Assemblers<br>- " + FrM_TiA + " Titanium alloy " + FrM_TiA_M + " Smelter<br>-- " + FrM_TiA_Su + " Sulfuric acid<br>-- " + FrM_TiA_St + " Steel " + FrM_TiA_St_M + " Smelters<br>--- " + FrM_TiA_St_Ir + " Iron ingot " + FrM_TiA_St_Ir_M + " Smelters<br>---- " + FrM_TiA_St_Ir_Ore + " Iron ore<br>-- " + FrM_TiA_Ti + " Titanium ingot " + FrM_TiA_Ti_M + " Smelters<br>-- " + FrM_TiA_Ti_Ore + " Titanium ore<br>- " + FrM_Si + " Sillicon ingot " + FrM_Si_M + " Smelters <br>-- " + FrM_Si_Ore + " Sillicon ore<br>- " + FrM_Ca + " Carbon nanotube " + FrM_Ca_M + " Chemical plants<br>-- " + FrM_Ca_Spi + " Spiniform crystal<br>"
    }
    //Check Dyson sphere component
    if (Dy > 0) {
     output += Dy + " Dyson sphere component " + Dy_M + " Assemblers<br>- " +  Dy_FrM + " Frame material " +  Dy_FrM_M + " Assemblers<br>-- " +  Dy_FrM_TiA + " Titanium alloy " +  Dy_FrM_TiA_M + " Smelter<br>--- " +  Dy_FrM_TiA_Su + " Sulfuric acid<br>--- " +  Dy_FrM_TiA_St + " Steel " +  Dy_FrM_TiA_St_M + " Smelters<br>---- " +  Dy_FrM_TiA_St_Ir + " Iron ingot " +  Dy_FrM_TiA_St_Ir_M + " Smelters<br>----- " +  Dy_FrM_TiA_St_Ir_Ore + " Iron ore<br>--- " +  Dy_FrM_TiA_Ti + " Titanium ingot " +  Dy_FrM_TiA_Ti_M + " Smelters<br>--- " +  Dy_FrM_TiA_Ti_Ore + " Titanium ore<br>-- " +  Dy_FrM_Si + " Sillicon ingot " +  Dy_FrM_Si_M + " Smelters <br>--- " +  Dy_FrM_Si_Ore + " Sillicon ore<br>-- " +  Dy_FrM_Ca + " Carbon nanotube " +  Dy_FrM_Ca_M + " Chemical plants<br>--- " +  Dy_FrM_Ca_Spi + " Spiniform crystal<br>- " +  Dy_So + " Solar sail " +  Dy_So_M + " Assemblers<br>*-- " +  Dy_So_Gr_Hy + " hydrogen<br>-- " +  Dy_So_Gr + " Graphene " +  Dy_So_Gr_M + " Chemical plants<br>--- " +  Dy_So_Gr_Fi + " Fire ice<br>-- " +  Dy_So_Ph + " Photon combiner " +  Dy_So_Ph_M + " Assemblers<br>--- " +  Dy_So_Ph_Opt + " Optical grading crystal<br>--- " +  Dy_So_Ph_Ci + " Circuit board " +  Dy_So_Ph_Ci_M + " Assemblers<br>---- " +  Dy_So_Ph_Ci_Co + " Copper ingot " +  Dy_So_Ph_Ci_Co_M + " Smelters<br>----- " +  Dy_So_Ph_Ci_Co_Ore + " Copper ore<br>---- " +  Dy_So_Ph_Ci_Ir + " Iron ingot " +  Dy_So_Ph_Ci_Ir_M + " Smelting<br>----- "+  Dy_So_Ph_Ci_Ir_Ore + " Iron ore<br>- " +  Dy_Pro + " Processor " +  Dy_Pro_M + " Assemblers<br>-- " +  Dy_Pro_Ci + " Circuit board " +  Dy_Pro_Ci_M + " Assemblers<br>--- " +  Dy_Pro_Ci_Co + " Copper ingot " +  Dy_Pro_Ci_Co_M + " Smelters<br>---- " +  Dy_Pro_Ci_Co_Ore + " Copper ore<br>--- " +  Dy_Pro_Ci_Ir + " Iron ingot " +  Dy_Pro_Ci_Ir_M + " Smelters<br>---- " +  Dy_Pro_Ci_Ir_Ore + " Iron ore<br>-- " +  Dy_Pro_My + " Mycrocrystalline component " +  Dy_Pro_My_M + " Assemblers<br>--- " +  Dy_Pro_My_Co + " Copper ingot " +  Dy_Pro_My_Co_M + " Smelters<br>---- " +  Dy_Pro_My_Co_Ore + " Copper ore<br>--- " +  Dy_Pro_My_Si + " Sillicon ingot " +  Dy_Pro_My_Si_M + " Smelters<br>---- " +  Dy_Pro_My_Si_Ore + " Sillicon ore<br>" 
    }
    //Check Small carrier rocket
    if (Sm > 0) {
     output += Sm + " Small carrier rocket " + Sm_M + " Assemblers<br>- " + Sm_DeF + " Deuterium fuel rod " + Sm_DeF_M + " Assemblers<br>-- " + Sm_DeF_El + " Electromagnetic coil " + Sm_DeF_El_M + " Assemblers<br>--- " + Sm_DeF_El_Ma + " Magnet " + Sm_DeF_El_Ma_M + " Smelters<br>---- " + Sm_DeF_El_Ma_Ore + " Iron ingot<br>--- " + Sm_DeF_El_GrR + " Graphene rod " + Sm_DeF_El_GrR_M + " Smelters<br>---- " + Sm_DeF_El_GrR_Ore + " Coal<br>--- " + Sm_DeF_El_Tu + " Turbine " + Sm_DeF_El_Tu_M + " Assemblers<br>---- " + Sm_DeF_El_Tu_MaC + " Magnetic coil " + Sm_DeF_El_Tu_MaC_M + " Assemblers<br>----- " + Sm_DeF_El_Tu_MaC_Co + " Copper ingot " + Sm_DeF_El_Tu_MaC_Co_M + " Smelters<br>------ " + Sm_DeF_El_Tu_MaC_Co_Ore + " Copper ore<br>----- " + Sm_DeF_El_Tu_MaC_Ma + " Magnet " + Sm_DeF_El_Tu_MaC_Ma_M + " Smelters<br>------ " + Sm_DeF_El_Tu_MaC_Ma_Ore + " Iron ore<br>---- " + Sm_DeF_El_Tu_Mo + " Motor " + Sm_DeF_El_Tu_Mo_M + " Assemblers<br>----- " + Sm_DeF_El_Tu_Mo_Ir + " Iron ingot " + Sm_DeF_El_Tu_Mo_Ir_M + " Smelters<br>------ " + Sm_DeF_El_Tu_Mo_Ir_Ore + " Iron ore<br>----- " + Sm_DeF_El_Tu_Mo_Ge + " Gears " + Sm_DeF_El_Tu_Mo_Ge_M + " Assemblers<br>------ " + Sm_DeF_El_Tu_Mo_Ge_Ir + " Iron ingot " + Sm_DeF_El_Tu_Mo_Ge_Ir_M + " Smelters<br>------- " + Sm_DeF_El_Tu_Mo_Ge_Ir_Ore + " Iron ore<br>----- " + Sm_DeF_El_Tu_Mo_MaC + " Magnetic coil " + Sm_DeF_El_Tu_Mo_MaC_M + " Assemblers<br>------ " + Sm_DeF_El_Tu_Mo_MaC_Co + " Copper ingot " + Sm_DeF_El_Tu_Mo_MaC_Co_M + " Smelters<br>------- " + Sm_DeF_El_Tu_Mo_MaC_Co_Ore + " Copper ore<br>------ " + Sm_DeF_El_Tu_Mo_MaC_Ma + " Magnet " + Sm_DeF_El_Tu_Mo_MaC_Ma_M + " Smelters<br>------- " + Sm_DeF_El_Tu_Mo_MaC_Ma_Ore + " Iron ore<br>--" + Sm_DeF_TiA + " Titanium alloy " + Sm_DeF_TiA_M + " Smelter<br>--- " + Sm_DeF_TiA_Su + " Sulfuric acid<br>--- " + Sm_DeF_TiA_St + " Steel " + Sm_DeF_TiA_St_M + " Smelters<br>---- " + Sm_DeF_TiA_St_Ir + " Iron ingot " + Sm_DeF_TiA_St_Ir_M + " Smelters<br>----- " + Sm_DeF_TiA_St_Ir_Ore + " Iron ore<br>--- " + Sm_DeF_TiA_Ti + " Titanium ingot " + Sm_DeF_TiA_Ti_M + " Smelters<br>---- " + Sm_DeF_TiA_Ti_Ore + " Titanium ore<br>--" + Sm_DeF_De + " Deuterium<br>-" + Sm_Dy + " Dyson sphere component " + Sm_Dy_M + " Assemblers<br>-- " +  Sm_Dy_FrM + " Frame material " +  Sm_Dy_FrM_M + " Assemblers<br>--- " +  Sm_Dy_FrM_TiA + " Titanium alloy " +  Sm_Dy_FrM_TiA_M + " Smelter<br>---- " +  Sm_Dy_FrM_TiA_Su + " Sulfuric acid<br>---- " +  Sm_Dy_FrM_TiA_St + " Steel " +  Sm_Dy_FrM_TiA_St_M + " Smelters<br>----- " +  Sm_Dy_FrM_TiA_St_Ir + " Iron ingot " +  Sm_Dy_FrM_TiA_St_Ir_M + " Smelters<br>------ " +  Sm_Dy_FrM_TiA_St_Ir_Ore + " Iron ore<br>---- " +  Sm_Dy_FrM_TiA_Ti + " Titanium ingot " +  Sm_Dy_FrM_TiA_Ti_M + " Smelters<br>---- " +  Sm_Dy_FrM_TiA_Ti_Ore + " Titanium ore<br>--- " +  Sm_Dy_FrM_Si + " Sillicon ingot " +  Sm_Dy_FrM_Si_M + " Smelters <br>---- " +  Sm_Dy_FrM_Si_Ore + " Sillicon ore<br>--- " +  Sm_Dy_FrM_Ca + " Carbon nanotube " +  Sm_Dy_FrM_Ca_M + " Chemical plants<br>---- " +  Sm_Dy_FrM_Ca_Spi + " Spiniform crystal<br>-- " +  Sm_Dy_So + " Solar sail " +  Sm_Dy_So_M + " Assemblers<br>*--- " +  Sm_Dy_So_Gr_Hy + " hydrogen<br>--- " +  Sm_Dy_So_Gr + " Graphene " +  Sm_Dy_So_Gr_M + " Chemical plants<br>---- " +  Sm_Dy_So_Gr_Fi + " Fire ice<br>--- " +  Sm_Dy_So_Ph + " Photon combiner " +  Sm_Dy_So_Ph_M + " Assemblers<br>---- " +  Sm_Dy_So_Ph_Opt + " Optical grading crystal<br>---- " +  Sm_Dy_So_Ph_Ci + " Circuit board " +  Sm_Dy_So_Ph_Ci_M + " Assemblers<br>----- " +  Sm_Dy_So_Ph_Ci_Co + " Copper ingot " +  Sm_Dy_So_Ph_Ci_Co_M + " Smelters<br>------ " +  Sm_Dy_So_Ph_Ci_Co_Ore + " Copper ore<br>----- " +  Sm_Dy_So_Ph_Ci_Ir + " Iron ingot " +  Sm_Dy_So_Ph_Ci_Ir_M + " Smelting<br>------ "+  Sm_Dy_So_Ph_Ci_Ir_Ore + " Iron ore<br>-- " +  Sm_Dy_Pro + " Processor " +  Sm_Dy_Pro_M + " Assemblers<br>--- " +  Sm_Dy_Pro_Ci + " Circuit board " +  Sm_Dy_Pro_Ci_M + " Assemblers<br>---- " +  Sm_Dy_Pro_Ci_Co + " Copper ingot " +  Sm_Dy_Pro_Ci_Co_M + " Smelters<br>----- " +  Sm_Dy_Pro_Ci_Co_Ore + " Copper ore<br>---- " +  Sm_Dy_Pro_Ci_Ir + " Iron ingot " +  Sm_Dy_Pro_Ci_Ir_M + " Smelters<br>----- " +  Sm_Dy_Pro_Ci_Ir_Ore + " Iron ore<br>--- " +  Sm_Dy_Pro_My + " Mycrocrystalline component " +  Sm_Dy_Pro_My_M + " Assemblers<br>---- " +  Sm_Dy_Pro_My_Co + " Copper ingot " +  Sm_Dy_Pro_My_Co_M + " Smelters<br>----- " +  Sm_Dy_Pro_My_Co_Ore + " Copper ore<br>---- " +  Sm_Dy_Pro_My_Si + " Sillicon ingot " +  Sm_Dy_Pro_My_Si_M + " Smelters<br>----- " +  Sm_Dy_Pro_My_Si_Ore + " Sillicon ore<br>- " + Sm_Qu + " Quantum chip " + Sm_Qu_M + " Assemblers<br>-- " +  Sm_Qu_PlF + " Plane filter " +  Sm_Qu_PlF_M + " Assemblers<br>--- " +  Sm_Qu_PlF_TiG + " Titanium glass " +  Sm_Qu_PlF_TiG_M + " Assemblers<br>---- " +  Sm_Qu_PlF_TiG_Wa + " Water<br>---- " +  Sm_Qu_PlF_TiG_Gl + " Glass " +  Sm_Qu_PlF_TiG_Gl_M + " Smelters<br>----- " +  Sm_Qu_PlF_TiG_Gl_Ore + " Stone<br>---- " +  Sm_Qu_PlF_TiG_Ti + " Titanium ingot " +  Sm_Qu_PlF_TiG_Ti_M + " Smelters<br>---- " +  Sm_Qu_PlF_TiG_Ti_Ore + " Titanium ore<br>-- " +  Sm_Qu_PlF_Cas + " Casimir crystal " +  Sm_Qu_PlF_Cas_M + " Assemblers<br>--- " +  Sm_Qu_PlF_Cas_Opt +" Optical grading crystal<br>*---- " +  Sm_Qu_PlF_Cas_Gr_Hy + " Hydrogen<br>---- " +  Sm_Qu_PlF_Cas_Gr + " Graphene " +  Sm_Qu_PlF_Cas_Gr_M + " Chemical plants<br>----- " +  Sm_Qu_PlF_Cas_Gr_Fi + " Fire ice<br>---- " +  Sm_Qu_PlF_Cas_Hy + " Hydrogen<br>-- " +  Sm_Qu_Pro + " Processor " +  Sm_Qu_Pro_M + " Assemblers<br>--- " +  Sm_Qu_Pro_Ci + " Circuit board " +  Sm_Qu_Pro_Ci_M + " Assemblers<br>---- " +  Sm_Qu_Pro_Ci_Co + " Copper ingot " +  Sm_Qu_Pro_Ci_Co_M + " Smelters<br>----- " +  Sm_Qu_Pro_Ci_Co_Ore + " Copper ore<br>---- " +  Sm_Qu_Pro_Ci_Ir + " Iron ingot " +  Sm_Qu_Pro_Ci_Ir_M + " Smelters<br>----- " +  Sm_Qu_Pro_Ci_Ir_Ore + " Iron ore<br>--- " +  Sm_Qu_Pro_My + " Mycrocrystalline component " +  Sm_Qu_Pro_My_M + " Assemblers<br>---- " +  Sm_Qu_Pro_My_Co + " Copper ingot " +  Sm_Qu_Pro_My_Co_M + " Smelters<br>----- " +  Sm_Qu_Pro_My_Co_Ore + " Copper ore<br>---- " +  Sm_Qu_Pro_My_Si + " Sillicon ingot " +  Sm_Qu_Pro_My_Si_M + " Smelters<br>----- " +  Sm_Qu_Pro_My_Si_Ore + " Sillicon ore<br>" 
    }
    //Check Annihilation contraint sphere
    if (An > 0) {
     output += An + " Annihilation contraint sphere " + An_M + " Assemblers<br>- " +  An_Pro + " Processor " + An_Pro_M + " Assemblers<br>-- " + An_Pro_Ci + " Circuit board " + An_Pro_Ci_M + " Assemblers<br>--- " + An_Pro_Ci_Co + " Copper ingot " + An_Pro_Ci_Co_M + " Smelters<br>---- " + An_Pro_Ci_Co_Ore + " Copper ore<br>--- " + An_Pro_Ci_Ir + " Iron ingot " + An_Pro_Ci_Ir_M + " Smelters<br>---- " + An_Pro_Ci_Ir_Ore + " Iron ore<br>-- " + An_Pro_My + " Mycrocrystalline component " + An_Pro_My_M + " Assemblers<br>--- " + An_Pro_My_Co + " Copper ingot " + An_Pro_My_Co_M + " Smelters<br>---- " + An_Pro_My_Co_Ore + " Copper ore<br>--- " + An_Pro_My_Si + " Sillicon ingot " + An_Pro_My_Si_M + " Smelters<br>---- " + An_Pro_My_Si_Ore + " Sillicon ore<br>- " + An_Par + " Particle container " + An_Par_M + " Assemblers<br>-- " + An_Par_Co + " Copper ingot " + An_Par_Co_M + " Smelters<br>--- " + An_Par_Co_Ore + " Copper ore<br>-- " + An_Par_Gr + " Graphene " + An_Par_Gr_M + " Chemical plants<br>*--- " + An_Par_Gr_Hy + " Hydrogen<br>---- " + An_Par_Gr_Fi + " Fire ice<br>-- " + An_Par_Tu + " Turbine " + An_Par_Tu_M + " Assemblers<br>--- " + An_Par_Tu_MaC + " Magnetic coil " + An_Par_Tu_MaC_M + " Assemblers<br>---- " + An_Par_Tu_MaC_Co + " Copper ingot " + An_Par_Tu_MaC_Co_M + " Smelters<br>----- " + An_Par_Tu_MaC_Co_Ore + " Copper ore<br>---- " + An_Par_Tu_MaC_Ma + " Magnet " + An_Par_Tu_MaC_Ma_M + " Smelters<br>----- " + An_Par_Tu_MaC_Ma_Ore + " Iron ore<br>--- " + An_Par_Tu_Mo + " Motor " + An_Par_Tu_Mo_M + " Assemblers<br>--- " + An_Par_Tu_Mo_Ir + " Iron ingot " + An_Par_Tu_Mo_Ir_M + " Smelters<br>---- " + An_Par_Tu_Mo_Ir_Ore + " Iron ore<br>--- " + An_Par_Tu_Mo_Ge + " Gears " + An_Par_Tu_Mo_Ge_M + " Assemblers<br>----- " + An_Par_Tu_Mo_Ge_Ir + " Iron ingot " + An_Par_Tu_Mo_Ge_Ir_M + " Smelters<br>------ " + An_Par_Tu_Mo_Ge_Ir_Ore + " Iron ore<br>---- " + An_Par_Tu_Mo_MaC + " Magnetic coil " + An_Par_Tu_Mo_MaC_M + " Assemblers<br>----- " + An_Par_Tu_Mo_MaC_Co + " Copper ingot " + An_Par_Tu_Mo_MaC_Co_M + " Smelters<br>------ " + An_Par_Tu_Mo_MaC_Co_Ore + " Copper ore<br>----- " + An_Par_Tu_Mo_MaC_Ma + " Magnet " + An_Par_Tu_Mo_MaC_Ma_M + " Smelters<br>------ " + An_Par_Tu_Mo_MaC_Ma_Ore + " Iron ore<br>"  
    }
    //Check Deuterium fuel rod
    if (DeF > 0) {
     output += DeF + " Deuterium fuel rod " + DeF_M + " Assemblers<br>- " + DeF_El + " Electromagnetic coil " + DeF_El_M + " Assemblers<br>-- " + DeF_El_Ma + " Magnet " + DeF_El_Ma_M + " Smelters<br>--- " + DeF_El_Ma_Ore + " Iron ingot<br>-- " + DeF_El_GrR + " Graphene rod " + DeF_El_GrR_M + " Smelters<br>--- " + DeF_El_GrR_Ore + " Coal<br>-- " + DeF_El_Tu + " Turbine " + DeF_El_Tu_M + " Assemblers<br>--- " + DeF_El_Tu_MaC + " Magnetic coil " + DeF_El_Tu_MaC_M + " Assemblers<br>---- " + DeF_El_Tu_MaC_Co + " Copper ingot " + DeF_El_Tu_MaC_Co_M + " Smelters<br>----- " + DeF_El_Tu_MaC_Co_Ore + " Copper ore<br>---- " + DeF_El_Tu_MaC_Ma + " Magnet " + DeF_El_Tu_MaC_Ma_M + " Smelters<br>----- " + DeF_El_Tu_MaC_Ma_Ore + " Iron ore<br>--- " + DeF_El_Tu_Mo + " Motor " + DeF_El_Tu_Mo_M + " Assemblers<br>---- " + DeF_El_Tu_Mo_Ir + " Iron ingot " + DeF_El_Tu_Mo_Ir_M + " Smelters<br>----- " + DeF_El_Tu_Mo_Ir_Ore + " Iron ore<br>---- " + DeF_El_Tu_Mo_Ge + " Gears " + DeF_El_Tu_Mo_Ge_M + " Assemblers<br>----- " + DeF_El_Tu_Mo_Ge_Ir + " Iron ingot " + DeF_El_Tu_Mo_Ge_Ir_M + " Smelters<br>------ " + DeF_El_Tu_Mo_Ge_Ir_Ore + " Iron ore<br>---- " + DeF_El_Tu_Mo_MaC + " Magnetic coil " + DeF_El_Tu_Mo_MaC_M + " Assemblers<br>----- " + DeF_El_Tu_Mo_MaC_Co + " Copper ingot " + DeF_El_Tu_Mo_MaC_Co_M + " Smelters<br>------ " + DeF_El_Tu_Mo_MaC_Co_Ore + " Copper ore<br>----- " + DeF_El_Tu_Mo_MaC_Ma + " Magnet " + DeF_El_Tu_Mo_MaC_Ma_M + " Smelters<br>------ " + DeF_El_Tu_Mo_MaC_Ma_Ore + " Iron ore<br>- " + DeF_TiA + " Titanium alloy " + DeF_TiA_M + " Smelter<br>-- " + DeF_TiA_Su + " Sulfuric acid<br>-- " + DeF_TiA_St + " Steel " + DeF_TiA_St_M + " Smelters<br>--- " + DeF_TiA_St_Ir + " Iron ingot " + DeF_TiA_St_Ir_M + " Smelters<br>---- " + DeF_TiA_St_Ir_Ore + " Iron ore<br>-- " + DeF_TiA_Ti + " Titanium ingot " + DeF_TiA_Ti_M + " Smelters<br>--- " + DeF_TiA_Ti_Ore + " Titanium ore<br>-" + DeF_De + " Deuterium<br>"
    }
    //Check Antimatter fuel rod
    if (AnF > 0) {
     output += AnF + " Antimatter fuel rod " + AnF_M + " Assembler<br>- " + AnF_An + " Annihilation contraint sphere " + AnF_An_M + " Assemblers<br>-- " +  AnF_An_Pro + " Processor " + AnF_An_Pro_M + " Assemblers<br>--- " + AnF_An_Pro_Ci + " Circuit board " + AnF_An_Pro_Ci_M + " Assemblers<br>---- " + AnF_An_Pro_Ci_Co + " Copper ingot " + AnF_An_Pro_Ci_Co_M + " Smelters<br>----- " + AnF_An_Pro_Ci_Co_Ore + " Copper ore<br>---- " + AnF_An_Pro_Ci_Ir + " Iron ingot " + AnF_An_Pro_Ci_Ir_M + " Smelters<br>----- " + AnF_An_Pro_Ci_Ir_Ore + " Iron ore<br>--- " + AnF_An_Pro_My + " Mycrocrystalline component " + AnF_An_Pro_My_M + " Assemblers<br>---- " + AnF_An_Pro_My_Co + " Copper ingot " + AnF_An_Pro_My_Co_M + " Smelters<br>----- " + AnF_An_Pro_My_Co_Ore + " Copper ore<br>---- " + AnF_An_Pro_My_Si + " Sillicon ingot " + AnF_An_Pro_My_Si_M + " Smelters<br>----- " + AnF_An_Pro_My_Si_Ore + " Sillicon ore<br>-- " + AnF_An_Par + " Particle container " + AnF_An_Par_M + " Assemblers<br>--- " + AnF_An_Par_Co + " Copper ingot " + AnF_An_Par_Co_M + " Smelters<br>---- " + AnF_An_Par_Co_Ore + " Copper ore<br>--- " + AnF_An_Par_Gr + " Graphene " + AnF_An_Par_Gr_M + " Chemical plants<br>*---- " + AnF_An_Par_Gr_Hy + " Hydrogen<br>----- " + AnF_An_Par_Gr_Fi + " Fire ice<br>--- " + AnF_An_Par_Tu + " Turbine " + AnF_An_Par_Tu_M + " Assemblers<br>---- " + AnF_An_Par_Tu_MaC + " Magnetic coil " + AnF_An_Par_Tu_MaC_M + " Assemblers<br>----- " + AnF_An_Par_Tu_MaC_Co + " Copper ingot " + AnF_An_Par_Tu_MaC_Co_M + " Smelters<br>------ " + AnF_An_Par_Tu_MaC_Co_Ore + " Copper ore<br>----- " + AnF_An_Par_Tu_MaC_Ma + " Magnet " + AnF_An_Par_Tu_MaC_Ma_M + " Smelters<br>------ " + AnF_An_Par_Tu_MaC_Ma_Ore + " Iron ore<br>---- " + AnF_An_Par_Tu_Mo + " Motor " + AnF_An_Par_Tu_Mo_M + " Assemblers<br>---- " + AnF_An_Par_Tu_Mo_Ir + " Iron ingot " + AnF_An_Par_Tu_Mo_Ir_M + " Smelters<br>----- " + AnF_An_Par_Tu_Mo_Ir_Ore + " Iron ore<br>---- " + AnF_An_Par_Tu_Mo_Ge + " Gears " + AnF_An_Par_Tu_Mo_Ge_M + " Assemblers<br>------ " + AnF_An_Par_Tu_Mo_Ge_Ir + " Iron ingot " + AnF_An_Par_Tu_Mo_Ge_Ir_M + " Smelters<br>------- " + AnF_An_Par_Tu_Mo_Ge_Ir_Ore + " Iron ore<br>----- " + AnF_An_Par_Tu_Mo_MaC + " Magnetic coil " + AnF_An_Par_Tu_Mo_MaC_M + " Assemblers<br>------ " + AnF_An_Par_Tu_Mo_MaC_Co + " Copper ingot " + AnF_An_Par_Tu_Mo_MaC_Co_M + " Smelters<br>------- " + AnF_An_Par_Tu_Mo_MaC_Co_Ore + " Copper ore<br>------ " + AnF_An_Par_Tu_Mo_MaC_Ma + " Magnet " + AnF_An_Par_Tu_Mo_MaC_Ma_M + " Smelters<br>------- " + AnF_An_Par_Tu_Mo_MaC_Ma_Ore + " Iron ore<br>- " + AnF_TiA + " Titanium alloy " + AnF_TiA_M + " Smelter<br>-- " + AnF_TiA_Su + " Sulfuric acid<br>-- " + AnF_TiA_St + " Steel " + AnF_TiA_St_M + " Smelters<br>--- " + AnF_TiA_St_Ir + " Iron ingot " + AnF_TiA_St_Ir_M + " Smelters<br>---- " + AnF_TiA_St_Ir_Ore + " Iron ore<br>-- " + AnF_TiA_Ti + " Titanium ingot " + AnF_TiA_Ti_M + " Smelters<br>--- " + AnF_TiA_Ti_Ore + " Titanium ore<br>-" + AnF_Hy + " Hydrogen<br>- " + AnF_Ant + " Antimatter<br>"        
    }

    // Display the grand total on the page
    document.getElementById("total").innerHTML = output;
}
