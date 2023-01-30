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
    var BX = document.getElementById("BX").value;
    var RX = document.getElementById("RX").value;
    var YX = document.getElementById("YX").value;
    var PX = document.getElementById("PX").value;
    var GX = document.getElementById("GX").value;
    var WX = document.getElementById("WX").value;

    
    
    // Set recipes, amount of machines are time of recipe (recipe takes 3 seconds, it takes 3 machines for 1 output/s)
    // Set recipes, resource is per 1 item output (1 iron ore for 1 iron ingot, 3 iron ingot for 1 steel)
    // set the recipe for Blue Matrix
    var BX_M = BX * 3;
     var BX_MaC = BX * 1;
     var BX_MaC_M = BX_MaC * 0.5;
      var BX_MaC_Ma = BX_MaC * 1;
      var BX_MaC_Ma_M = BX_MaC_Ma * 1.5;
       var BX_MaC_Ma_Ore = BX_MaC_Ma * 1;
      var BX_MaC_Co = BX_MaC * 0.5;
      var BX_MaC_Co_M = BX_MaC_Co * 1;
       var BX_MaC_Co_Ore = BX_MaC_Co * 1;
     var BX_Ci = BX * 1;
     var BX_Ci_M = BX_Ci * 0.5;
      var BX_Ci_Ir = BX_Ci * 1;
      var BX_Ci_Ir_M = BX_Ci_Ir * 1;
       var BX_Ci_Ir_Ore = BX_Ci_Ir * 1;        
        var BX_Ci_Co = BX_Ci * 0.5;
        var BX_Ci_Co_M = BX_Ci_Co * 1;
         var BX_Ci_Co_Ore = BX_Ci_Co * 1;
    // set the recipe for Red Matrix
    var RX_M = RX * 6;
     var RX_GrR = RX * 2;
     var RX_GrR_M = RX_GrR * 2;
      var RX_GrR_Ore = RX_GrR * 2;
     var RX_Hy = RX * 2;
    // set the recipe for Yellow Matrix
    var YX_M = YX * 8;
     var YX_Di = YX * 1;
     var YX_Di_M = YX_Di * 0.75;
      var YX_Di_Ore = YX_Di * 0.5;
     var YX_TiC = YX * 1;
     var  YX_TiC_M =  YX_TiC * 4;
      var  YX_TiC_Org =  YX_TiC * 1;
      var  YX_TiC_Ti =  YX_TiC * 4;
      var  YX_TiC_Ti_M =  YX_TiC_Ti * 2;
       var  YX_TiC_Ti_Ore =  YX_TiC_Ti * 2;
    // set the recipe for Purple Matrix
    var PX_M = PX * 10;
     var PX_Pro = PX * 2;
     var  PX_Pro_M =  PX_Pro * 3;
      var  PX_Pro_Ci =  PX_Pro * 2;
      var  PX_Pro_Ci_M =  PX_Pro_Ci * 0.5;
       var  PX_Pro_Ci_Ir =  PX_Pro_Ci * 1;
       var  PX_Pro_Ci_Ir_M =  PX_Pro_Ci_Ir * 1;
        var  PX_Pro_Ci_Ir_Ore =  PX_Pro_Ci_Ir * 1;        
       var  PX_Pro_Ci_Co =  PX_Pro_Ci * 0.5;
       var  PX_Pro_Ci_Co_M =  PX_Pro_Ci_Co * 1;
        var  PX_Pro_Ci_Co_Ore =  PX_Pro_Ci_Co * 1;
      var  PX_Pro_My =  PX_Pro * 2;
      var  PX_Pro_My_M =  PX_Pro_My * 2;
       var  PX_Pro_My_Si =  PX_Pro_My * 2;
       var  PX_Pro_My_Si_M =  PX_Pro_My_Si * 2;
        var  PX_Pro_My_Si_Ore =  PX_Pro_My_Si * 2;        
       var  PX_Pro_My_Co =  PX_Pro_My * 1;
       var  PX_Pro_My_Co_M =  PX_Pro_My_Co * 1;
        var  PX_Pro_My_Co_Ore =  PX_Pro_My_Co * 1;
     var PX_Pa = PX * 1;
     var  PX_Pa_M =  PX_Pa *8;
      var  PX_Pa_Gr =  PX_Pa * 2;
      var  PX_Pa_Gr_M =  PX_Pa_Gr * 1;
       var  PX_Pa_Gr_Hy =  PX_Pa_Gr * 0.5; 
       var  PX_Pa_Gr_Fi =  PX_Pa_Gr * 1;
      var  PX_Pa_SiC =  PX_Pa * 2;
      var  PX_Pa_SiC_M =  PX_Pa_SiC * 0.75;
       var  PX_Pa_SiC_Ore =  PX_Pa_SiC * 0.5;
      var  PX_Pa_Pl =  PX_Pa * 1;
      var  PX_Pa_Pl_M =  PX_Pa_Pl * 3;
       var  PX_Pa_Pl_GrR =  PX_Pa_Pl;
       var  PX_Pa_Pl_GrR_M =  PX_Pa_Pl_GrR * 2;
        var  PX_Pa_Pl_GrR_Ore =  PX_Pa_Pl_GrR * 2;
       var  PX_Pa_Pl_LiO =  PX_Pa_Pl * 2;
       var  PX_Pa_Pl_LiO_M =  PX_Pa_Pl_LiO * 4/3;
        var  PX_Pa_Pl_LiO_Ore =  PX_Pa_Pl_LiO * 1/3;
         var  PX_Pa_Pl_LiO_Hy =  PX_Pa_Pl_LiO * 1/3;
         var  PX_Pa_Pl_LiO_LiO =  PX_Pa_Pl_LiO * 2/3;
         var  PX_Pa_Pl_LiO_LiO_M =  PX_Pa_Pl_LiO_LiO * 2;
          var  PX_Pa_Pl_LiO_LiO_CrO =  PX_Pa_Pl_LiO_LiO;
    // set the recipe for Green Matrix
    var GX_M = GX * 12;
     var GX_GrL = GX * 0.5;
     var GX_GrL_M = GX_GrL * 6;
      var GX_GrL_Di = GX_GrL * 4
      var GX_GrL_Di_M = GX_GrL_Di * 0.75;
       var GX_GrL_Di_Ore = GX_GrL_Di * 0.5;
      var GX_GrL_StM = GX_GrL * 1;
      var GX_GrL_StM_M = GX_GrL_StM * 8;
      var GX_GrL_StM_Par = GX_GrL_StM * 2;
      var GX_GrL_StM_Par_M = GX_GrL_StM_Par * 4;
      var GX_GrL_StM_Par_Tu = GX_GrL_StM_Par * 2;
      var GX_GrL_StM_Par_Tu_M = GX_GrL_StM_Par_Tu * 2;
       var GX_GrL_StM_Par_Tu_Mo = GX_GrL_StM_Par_Tu * 2;
       var GX_GrL_StM_Par_Tu_Mo_M = GX_GrL_StM_Par_Tu_Mo * 2;
        var GX_GrL_StM_Par_Tu_Mo_Ir = GX_GrL_StM_Par_Tu_Mo * 2;
        var GX_GrL_StM_Par_Tu_Mo_Ir_M = GX_GrL_StM_Par_Tu_Mo_Ir * 1;
         var GX_GrL_StM_Par_Tu_Mo_Ir_Ore = GX_GrL_StM_Par_Tu_Mo_Ir * 1;
        var GX_GrL_StM_Par_Tu_Mo_Ge = GX_GrL_StM_Par_Tu_Mo;
        var GX_GrL_StM_Par_Tu_Mo_Ge_M = GX_GrL_StM_Par_Tu_Mo_Ge * 1;
         var GX_GrL_StM_Par_Tu_Mo_Ge_Ir = GX_GrL_StM_Par_Tu_Mo_Ge *1;
         var GX_GrL_StM_Par_Tu_Mo_Ge_Ir_M = GX_GrL_StM_Par_Tu_Mo_Ge_Ir * 1;
          var GX_GrL_StM_Par_Tu_Mo_Ge_Ir_Ore = GX_GrL_StM_Par_Tu_Mo_Ge_Ir * 1;
        var GX_GrL_StM_Par_Tu_Mo_MaC = GX_GrL_StM_Par_Tu_Mo;
        var GX_GrL_StM_Par_Tu_Mo_MaC_M = GX_GrL_StM_Par_Tu_Mo_MaC * 0.5;
         var GX_GrL_StM_Par_Tu_Mo_MaC_Ma = GX_GrL_StM_Par_Tu_Mo_MaC * 1;
         var GX_GrL_StM_Par_Tu_Mo_MaC_Ma_M = GX_GrL_StM_Par_Tu_Mo_MaC_Ma * 1.5;
          var GX_GrL_StM_Par_Tu_Mo_MaC_Ma_Ore = GX_GrL_StM_Par_Tu_Mo_MaC_Ma * 1;
         var GX_GrL_StM_Par_Tu_Mo_MaC_Co = GX_GrL_StM_Par_Tu_Mo_MaC * 0.5;
         var GX_GrL_StM_Par_Tu_Mo_MaC_Co_M = GX_GrL_StM_Par_Tu_Mo_MaC_Co * 1;
          var GX_GrL_StM_Par_Tu_Mo_MaC_Co_Ore = GX_GrL_StM_Par_Tu_Mo_MaC_Co * 1;
       var GX_GrL_StM_Par_Tu_MaC = GX_GrL_StM_Par_Tu * 2;
       var GX_GrL_StM_Par_Tu_MaC_M = GX_GrL_StM_Par_Tu_MaC * 0.5;
        var GX_GrL_StM_Par_Tu_MaC_Ma = GX_GrL_StM_Par_Tu_MaC * 1;
        var GX_GrL_StM_Par_Tu_MaC_Ma_M = GX_GrL_StM_Par_Tu_MaC_Ma * 1.5;
         var GX_GrL_StM_Par_Tu_MaC_Ma_Ore = GX_GrL_StM_Par_Tu_MaC_Ma * 1;
        var GX_GrL_StM_Par_Tu_MaC_Co = GX_GrL_StM_Par_Tu_MaC * 0.5;
        var GX_GrL_StM_Par_Tu_MaC_Co_M = GX_GrL_StM_Par_Tu_MaC_Co * 1;
         var GX_GrL_StM_Par_Tu_MaC_Co_Ore = GX_GrL_StM_Par_Tu_MaC_Co * 1;
      var GX_GrL_StM_Par_Co = GX_GrL_StM_Par * 2;
      var GX_GrL_StM_Par_Co_M = GX_GrL_StM_Par_Co * 1;      
       var GX_GrL_StM_Par_Co_Ore = GX_GrL_StM_Par_Co * 1;
      var GX_GrL_StM_Par_Gr = GX_GrL_StM_Par * 2;
      var GX_GrL_StM_Par_Gr_M = GX_GrL_StM_Par_Gr * 1;
      var GX_GrL_StM_Par_Gr_Hy = GX_GrL_StM_Par_Gr * 0.5;
       var GX_GrL_StM_Par_Gr_Fi = GX_GrL_StM_Par_Gr * 1;
      var GX_GrL_StM_Ir = GX_GrL_StM * 2;
      var GX_GrL_StM_Ir_M = GX_GrL_StM_Ir * 1;
       var GX_GrL_StM_Ir_Ore = GX_GrL_StM_Ir * 1;
      var GX_GrL_StM_De = GX_GrL_StM * 10;
      var GX_Qu = GX * 0.5;
     var GX_Qu_M = GX_Qu * 6;
      var GX_Qu_Pro = GX_Qu * 2;
      var GX_Qu_Pro_M = GX_Qu_Pro * 3;
       var GX_Qu_Pro_Ci = GX_Qu_Pro * 2;
       var GX_Qu_Pro_Ci_M = GX_Qu_Pro_Ci * 0.5;
        var GX_Qu_Pro_Ci_Ir = GX_Qu_Pro_Ci * 1;
        var GX_Qu_Pro_Ci_Ir_M = GX_Qu_Pro_Ci_Ir * 1;
         var GX_Qu_Pro_Ci_Ir_Ore = GX_Qu_Pro_Ci_Ir * 1;        
        var GX_Qu_Pro_Ci_Co = GX_Qu_Pro_Ci * 0.5;
        var GX_Qu_Pro_Ci_Co_M = GX_Qu_Pro_Ci_Co * 1;
         var GX_Qu_Pro_Ci_Co_Ore = GX_Qu_Pro_Ci_Co * 1;
       var GX_Qu_Pro_My = GX_Qu_Pro * 2;
       var GX_Qu_Pro_My_M = GX_Qu_Pro_My * 2;
        var GX_Qu_Pro_My_Si = GX_Qu_Pro_My * 2;
        var GX_Qu_Pro_My_Si_M = GX_Qu_Pro_My_Si * 2;
         var GX_Qu_Pro_My_Si_Ore = GX_Qu_Pro_My_Si * 2;        
        var GX_Qu_Pro_My_Co = GX_Qu_Pro_My * 1;
        var GX_Qu_Pro_My_Co_M = GX_Qu_Pro_My_Co * 1;
         var GX_Qu_Pro_My_Co_Ore = GX_Qu_Pro_My_Co * 1;
      var GX_Qu_PlF = GX_Qu * 2;
      var GX_Qu_PlF_M = GX_Qu_PlF * 12;
       var GX_Qu_PlF_TiG = GX_Qu_PlF * 2;
       var GX_Qu_PlF_TiG_M = GX_Qu_PlF_TiG * 2.5;
        var GX_Qu_PlF_TiG_Gl = GX_Qu_PlF_TiG * 1;
        var GX_Qu_PlF_TiG_Gl_M = GX_Qu_PlF_TiG_Gl * 2;
         var GX_Qu_PlF_TiG_Gl_Ore = GX_Qu_PlF_TiG_Gl * 2;
        var GX_Qu_PlF_TiG_Ti = GX_Qu_PlF_TiG;
        var GX_Qu_PlF_TiG_Ti_M = GX_Qu_PlF_TiG_Ti * 2
         var GX_Qu_PlF_TiG_Ti_Ore = GX_Qu_PlF_TiG_Ti * 2;
        var GX_Qu_PlF_TiG_Wa = GX_Qu_PlF_TiG * 1;
       var GX_Qu_PlF_Cas = GX_Qu_PlF * 1;
       var GX_Qu_PlF_Cas_M = GX_Qu_PlF_Cas * 4;
        var GX_Qu_PlF_Cas_Opt = GX_Qu_PlF_Cas * 8;
        var GX_Qu_PlF_Cas_Gr = GX_Qu_PlF_Cas * 2;
        var GX_Qu_PlF_Cas_Gr_Hy = GX_Qu_PlF_Cas_Gr * 0.5;
        var GX_Qu_PlF_Cas_Gr_M = GX_Qu_PlF_Cas_Gr * 1;
         var GX_Qu_PlF_Cas_Gr_Fi = GX_Qu_PlF_Cas_Gr * 1;
        var GX_Qu_PlF_Cas_Hy = GX_Qu_PlF_Cas * 10;
    // set the recipe for White Matrix
    var WX_M = WX * 15;
    var WX_BX = WX * 1;
    var WX_BX_M = WX_BX * 3;
     var WX_BX_MaC = WX_BX * 1;
     var WX_BX_MaC_M = WX_BX_MaC * 0.5;
      var WX_BX_MaC_Ma = WX_BX_MaC * 1;
      var WX_BX_MaC_Ma_M = WX_BX_MaC_Ma * 1.5;
       var WX_BX_MaC_Ma_Ore = WX_BX_MaC_Ma * 1;
      var WX_BX_MaC_Co = WX_BX_MaC * 0.5;
      var WX_BX_MaC_Co_M = WX_BX_MaC_Co * 1;
       var WX_BX_MaC_Co_Ore = WX_BX_MaC_Co * 1;
     var WX_BX_Ci = WX_BX * 1;
     var WX_BX_Ci_M = WX_BX_Ci * 0.5;
      var WX_BX_Ci_Ir = WX_BX_Ci * 1;
      var WX_BX_Ci_Ir_M = WX_BX_Ci_Ir * 1;
       var WX_BX_Ci_Ir_Ore = WX_BX_Ci_Ir * 1;        
        var WX_BX_Ci_Co = WX_BX_Ci * 0.5;
        var WX_BX_Ci_Co_M = WX_BX_Ci_Co * 1;
         var WX_BX_Ci_Co_Ore = WX_BX_Ci_Co * 1;
    var WX_RX = WX * 1;
    var WX_RX_M = WX_RX * 6;
     var WX_RX_GrR = WX_RX * 2;
     var WX_RX_GrR_M = WX_RX_GrR * 2;
      var WX_RX_GrR_Ore = WX_RX_GrR * 2;
     var WX_RX_Hy = WX_RX * 2;
    var WX_YX = WX * 1;
    var WX_YX_M = WX_YX * 8;
     var WX_YX_Di = WX_YX * 1;
     var WX_YX_Di_M = WX_YX_Di * 0.75;
      var WX_YX_Di_Ore = WX_YX_Di * 0.5;
     var WX_YX_TiC = WX_YX * 1;
     var  WX_YX_TiC_M =  WX_YX_TiC * 4;
      var  WX_YX_TiC_Org =  WX_YX_TiC * 1;
      var  WX_YX_TiC_Ti =  WX_YX_TiC * 4;
      var  WX_YX_TiC_Ti_M =  WX_YX_TiC_Ti * 2;
       var  WX_YX_TiC_Ti_Ore =  WX_YX_TiC_Ti * 2;
    var WX_PX = WX * 1;
    var WX_PX_M = WX_PX * 10;
     var WX_PX_Pro = WX_PX * 2;
     var  WX_PX_Pro_M =  WX_PX_Pro * 3;
      var  WX_PX_Pro_Ci =  WX_PX_Pro * 2;
      var  WX_PX_Pro_Ci_M =  WX_PX_Pro_Ci * 0.5;
       var  WX_PX_Pro_Ci_Ir =  WX_PX_Pro_Ci * 1;
       var  WX_PX_Pro_Ci_Ir_M =  WX_PX_Pro_Ci_Ir * 1;
        var  WX_PX_Pro_Ci_Ir_Ore =  WX_PX_Pro_Ci_Ir * 1;        
       var  WX_PX_Pro_Ci_Co =  WX_PX_Pro_Ci * 0.5;
       var  WX_PX_Pro_Ci_Co_M =  WX_PX_Pro_Ci_Co * 1;
        var  WX_PX_Pro_Ci_Co_Ore =  WX_PX_Pro_Ci_Co * 1;
      var  WX_PX_Pro_My =  WX_PX_Pro * 2;
      var  WX_PX_Pro_My_M =  WX_PX_Pro_My * 2;
       var  WX_PX_Pro_My_Si =  WX_PX_Pro_My * 2;
       var  WX_PX_Pro_My_Si_M =  WX_PX_Pro_My_Si * 2;
        var  WX_PX_Pro_My_Si_Ore =  WX_PX_Pro_My_Si * 2;        
       var  WX_PX_Pro_My_Co =  WX_PX_Pro_My * 1;
       var  WX_PX_Pro_My_Co_M =  WX_PX_Pro_My_Co * 1;
        var  WX_PX_Pro_My_Co_Ore =  WX_PX_Pro_My_Co * 1;
     var WX_PX_Pa = WX_PX * 1;
     var  WX_PX_Pa_M =  WX_PX_Pa *8;
      var  WX_PX_Pa_Gr =  WX_PX_Pa * 2;
      var  WX_PX_Pa_Gr_M =  WX_PX_Pa_Gr * 1;
       var  WX_PX_Pa_Gr_Hy =  WX_PX_Pa_Gr * 0.5; 
       var  WX_PX_Pa_Gr_Fi =  WX_PX_Pa_Gr * 1;
      var  WX_PX_Pa_SiC =  WX_PX_Pa * 2;
      var  WX_PX_Pa_SiC_M =  WX_PX_Pa_SiC * 0.75;
       var  WX_PX_Pa_SiC_Ore =  WX_PX_Pa_SiC * 0.5;
      var  WX_PX_Pa_Pl =  WX_PX_Pa * 1;
      var  WX_PX_Pa_Pl_M =  WX_PX_Pa_Pl * 3;
       var  WX_PX_Pa_Pl_GrR =  WX_PX_Pa_Pl;
       var  WX_PX_Pa_Pl_GrR_M =  WX_PX_Pa_Pl_GrR * 2;
        var  WX_PX_Pa_Pl_GrR_Ore =  WX_PX_Pa_Pl_GrR * 2;
       var  WX_PX_Pa_Pl_LiO =  WX_PX_Pa_Pl * 2;
       var  WX_PX_Pa_Pl_LiO_M =  WX_PX_Pa_Pl_LiO * 4/3;
        var  WX_PX_Pa_Pl_LiO_Ore =  WX_PX_Pa_Pl_LiO * 1/3;
         var  WX_PX_Pa_Pl_LiO_Hy =  WX_PX_Pa_Pl_LiO * 1/3;
         var  WX_PX_Pa_Pl_LiO_LiO =  WX_PX_Pa_Pl_LiO * 2/3;
         var  WX_PX_Pa_Pl_LiO_LiO_M =  WX_PX_Pa_Pl_LiO_LiO * 2;
          var  WX_PX_Pa_Pl_LiO_LiO_CrO =  WX_PX_Pa_Pl_LiO_LiO;
    var WX_GX = WX * 1;
    var WX_GX_M = WX_GX * 12;
     var WX_GX_GrL = WX_GX * 0.5;
     var WX_GX_GrL_M = WX_GX_GrL * 6;
      var WX_GX_GrL_Di = WX_GX_GrL * 4
      var WX_GX_GrL_Di_M = WX_GX_GrL_Di * 0.75;
       var WX_GX_GrL_Di_Ore = WX_GX_GrL_Di * 0.5;
      var WX_GX_GrL_StM = WX_GX_GrL * 1;
      var WX_GX_GrL_StM_M = WX_GX_GrL_StM * 8;
      var WX_GX_GrL_StM_Par = WX_GX_GrL_StM * 2;
      var WX_GX_GrL_StM_Par_M = WX_GX_GrL_StM_Par * 4;
      var WX_GX_GrL_StM_Par_Tu = WX_GX_GrL_StM_Par * 2;
      var WX_GX_GrL_StM_Par_Tu_M = WX_GX_GrL_StM_Par_Tu * 2;
       var WX_GX_GrL_StM_Par_Tu_Mo = WX_GX_GrL_StM_Par_Tu * 2;
       var WX_GX_GrL_StM_Par_Tu_Mo_M = WX_GX_GrL_StM_Par_Tu_Mo * 2;
        var WX_GX_GrL_StM_Par_Tu_Mo_Ir = WX_GX_GrL_StM_Par_Tu_Mo * 2;
        var WX_GX_GrL_StM_Par_Tu_Mo_Ir_M = WX_GX_GrL_StM_Par_Tu_Mo_Ir * 1;
         var WX_GX_GrL_StM_Par_Tu_Mo_Ir_Ore = WX_GX_GrL_StM_Par_Tu_Mo_Ir * 1;
        var WX_GX_GrL_StM_Par_Tu_Mo_Ge = WX_GX_GrL_StM_Par_Tu_Mo;
        var WX_GX_GrL_StM_Par_Tu_Mo_Ge_M = WX_GX_GrL_StM_Par_Tu_Mo_Ge * 1;
         var WX_GX_GrL_StM_Par_Tu_Mo_Ge_Ir = WX_GX_GrL_StM_Par_Tu_Mo_Ge *1;
         var WX_GX_GrL_StM_Par_Tu_Mo_Ge_Ir_M = WX_GX_GrL_StM_Par_Tu_Mo_Ge_Ir * 1;
          var WX_GX_GrL_StM_Par_Tu_Mo_Ge_Ir_Ore = WX_GX_GrL_StM_Par_Tu_Mo_Ge_Ir * 1;
        var WX_GX_GrL_StM_Par_Tu_Mo_MaC = WX_GX_GrL_StM_Par_Tu_Mo;
        var WX_GX_GrL_StM_Par_Tu_Mo_MaC_M = WX_GX_GrL_StM_Par_Tu_Mo_MaC * 0.5;
         var WX_GX_GrL_StM_Par_Tu_Mo_MaC_Ma = WX_GX_GrL_StM_Par_Tu_Mo_MaC * 1;
         var WX_GX_GrL_StM_Par_Tu_Mo_MaC_Ma_M = WX_GX_GrL_StM_Par_Tu_Mo_MaC_Ma * 1.5;
          var WX_GX_GrL_StM_Par_Tu_Mo_MaC_Ma_Ore = WX_GX_GrL_StM_Par_Tu_Mo_MaC_Ma * 1;
         var WX_GX_GrL_StM_Par_Tu_Mo_MaC_Co = WX_GX_GrL_StM_Par_Tu_Mo_MaC * 0.5;
         var WX_GX_GrL_StM_Par_Tu_Mo_MaC_Co_M = WX_GX_GrL_StM_Par_Tu_Mo_MaC_Co * 1;
          var WX_GX_GrL_StM_Par_Tu_Mo_MaC_Co_Ore = WX_GX_GrL_StM_Par_Tu_Mo_MaC_Co * 1;
       var WX_GX_GrL_StM_Par_Tu_MaC = WX_GX_GrL_StM_Par_Tu * 2;
       var WX_GX_GrL_StM_Par_Tu_MaC_M = WX_GX_GrL_StM_Par_Tu_MaC * 0.5;
        var WX_GX_GrL_StM_Par_Tu_MaC_Ma = WX_GX_GrL_StM_Par_Tu_MaC * 1;
        var WX_GX_GrL_StM_Par_Tu_MaC_Ma_M = WX_GX_GrL_StM_Par_Tu_MaC_Ma * 1.5;
         var WX_GX_GrL_StM_Par_Tu_MaC_Ma_Ore = WX_GX_GrL_StM_Par_Tu_MaC_Ma * 1;
        var WX_GX_GrL_StM_Par_Tu_MaC_Co = WX_GX_GrL_StM_Par_Tu_MaC * 0.5;
        var WX_GX_GrL_StM_Par_Tu_MaC_Co_M = WX_GX_GrL_StM_Par_Tu_MaC_Co * 1;
         var WX_GX_GrL_StM_Par_Tu_MaC_Co_Ore = WX_GX_GrL_StM_Par_Tu_MaC_Co * 1;
      var WX_GX_GrL_StM_Par_Co = WX_GX_GrL_StM_Par * 2;
      var WX_GX_GrL_StM_Par_Co_M = WX_GX_GrL_StM_Par_Co * 1;      
       var WX_GX_GrL_StM_Par_Co_Ore = WX_GX_GrL_StM_Par_Co * 1;
      var WX_GX_GrL_StM_Par_Gr = WX_GX_GrL_StM_Par * 2;
      var WX_GX_GrL_StM_Par_Gr_M = WX_GX_GrL_StM_Par_Gr * 1;
      var WX_GX_GrL_StM_Par_Gr_Hy = WX_GX_GrL_StM_Par_Gr * 0.5;
       var WX_GX_GrL_StM_Par_Gr_Fi = WX_GX_GrL_StM_Par_Gr * 1;
      var WX_GX_GrL_StM_Ir = WX_GX_GrL_StM * 2;
      var WX_GX_GrL_StM_Ir_M = WX_GX_GrL_StM_Ir * 1;
       var WX_GX_GrL_StM_Ir_Ore = WX_GX_GrL_StM_Ir * 1;
      var WX_GX_GrL_StM_De = WX_GX_GrL_StM * 10;
      var WX_GX_Qu = WX_GX * 0.5;
     var WX_GX_Qu_M = WX_GX_Qu * 6;
      var WX_GX_Qu_Pro = WX_GX_Qu * 2;
      var WX_GX_Qu_Pro_M = WX_GX_Qu_Pro * 3;
       var WX_GX_Qu_Pro_Ci = WX_GX_Qu_Pro * 2;
       var WX_GX_Qu_Pro_Ci_M = WX_GX_Qu_Pro_Ci * 0.5;
        var WX_GX_Qu_Pro_Ci_Ir = WX_GX_Qu_Pro_Ci * 1;
        var WX_GX_Qu_Pro_Ci_Ir_M = WX_GX_Qu_Pro_Ci_Ir * 1;
         var WX_GX_Qu_Pro_Ci_Ir_Ore = WX_GX_Qu_Pro_Ci_Ir * 1;        
        var WX_GX_Qu_Pro_Ci_Co = WX_GX_Qu_Pro_Ci * 0.5;
        var WX_GX_Qu_Pro_Ci_Co_M = WX_GX_Qu_Pro_Ci_Co * 1;
         var WX_GX_Qu_Pro_Ci_Co_Ore = WX_GX_Qu_Pro_Ci_Co * 1;
       var WX_GX_Qu_Pro_My = WX_GX_Qu_Pro * 2;
       var WX_GX_Qu_Pro_My_M = WX_GX_Qu_Pro_My * 2;
        var WX_GX_Qu_Pro_My_Si = WX_GX_Qu_Pro_My * 2;
        var WX_GX_Qu_Pro_My_Si_M = WX_GX_Qu_Pro_My_Si * 2;
         var WX_GX_Qu_Pro_My_Si_Ore = WX_GX_Qu_Pro_My_Si * 2;        
        var WX_GX_Qu_Pro_My_Co = WX_GX_Qu_Pro_My * 1;
        var WX_GX_Qu_Pro_My_Co_M = WX_GX_Qu_Pro_My_Co * 1;
         var WX_GX_Qu_Pro_My_Co_Ore = WX_GX_Qu_Pro_My_Co * 1;
      var WX_GX_Qu_PlF = WX_GX_Qu * 2;
      var WX_GX_Qu_PlF_M = WX_GX_Qu_PlF * 12;
       var WX_GX_Qu_PlF_TiG = WX_GX_Qu_PlF * 2;
       var WX_GX_Qu_PlF_TiG_M = WX_GX_Qu_PlF_TiG * 2.5;
        var WX_GX_Qu_PlF_TiG_Gl = WX_GX_Qu_PlF_TiG * 1;
        var WX_GX_Qu_PlF_TiG_Gl_M = WX_GX_Qu_PlF_TiG_Gl * 2;
         var WX_GX_Qu_PlF_TiG_Gl_Ore = WX_GX_Qu_PlF_TiG_Gl * 2;
        var WX_GX_Qu_PlF_TiG_Ti = WX_GX_Qu_PlF_TiG;
        var WX_GX_Qu_PlF_TiG_Ti_M = WX_GX_Qu_PlF_TiG_Ti * 2
         var WX_GX_Qu_PlF_TiG_Ti_Ore = WX_GX_Qu_PlF_TiG_Ti * 2;
        var WX_GX_Qu_PlF_TiG_Wa = WX_GX_Qu_PlF_TiG * 1;
       var WX_GX_Qu_PlF_Cas = WX_GX_Qu_PlF * 1;
       var WX_GX_Qu_PlF_Cas_M = WX_GX_Qu_PlF_Cas * 4;
        var WX_GX_Qu_PlF_Cas_Opt = WX_GX_Qu_PlF_Cas * 8;
        var WX_GX_Qu_PlF_Cas_Gr = WX_GX_Qu_PlF_Cas * 2;
        var WX_GX_Qu_PlF_Cas_Gr_Hy = WX_GX_Qu_PlF_Cas_Gr * 0.5;
        var WX_GX_Qu_PlF_Cas_Gr_M = WX_GX_Qu_PlF_Cas_Gr * 1;
         var WX_GX_Qu_PlF_Cas_Gr_Fi = WX_GX_Qu_PlF_Cas_Gr * 1;
        var WX_GX_Qu_PlF_Cas_Hy = WX_GX_Qu_PlF_Cas * 10;
    var WX_Ant = WX * 1;
    // Initialize the output string
    var output = "";


    //Check Blue Matrix
    if (BX > 0) {
     output += BX + " Blue matrix " + BX_M + " Matrix lab<br>- " 
     + BX_MaC + " Magnetic coil " + BX_MaC_M + " Assemblers<br>-- " + BX_MaC_Ma + " Magnet " + BX_MaC_Ma_M + " Smelters<br>--- " + BX_MaC_Ma_Ore + " Iron ore<br>-- " + BX_MaC_Co + " Copper ingot " + BX_MaC_Co_M + " Smelters<br>--- " + BX_MaC_Co_Ore + " Copper ore<br>-" 
     + BX_Ci + " Circuit board " + BX_Ci_M + " Assemblers<br>-- " + BX_Ci_Ir + " Iron ingot " + BX_Ci_Ir_M + " Smelters<br>--- " + BX_Ci_Ir_Ore + " Iron ore <br>-- " + BX_Ci_Co + " Copper ingot " + BX_Ci_Co_M + " Smelters <br>--- " + BX_Ci_Co_Ore + " Copper ore <br>" 
    }
    //Check Red Matrix
    if (RX > 0) {
      output += RX + " Red matrix " + RX_M + " Matrix lab<br>- " + RX_Hy + " Hydrogen<br>-" + RX_GrR + " Graphene rod " + RX_GrR_M + " Smelters <br>-- " + RX_GrR_Ore + " Coal<br>"
    }
    //Check Yellow Matrix
    if (YX > 0) {
     output += YX + " Yellow matrix " + YX_M + " Matrix lab<br>- " +  YX_Di + " Diamond " +  YX_Di_M + " Smelters <br>-- " +  YX_Di_Ore + " Kimberlite ore<br>-" +  YX_TiC + " Titanium crystal " +  YX_TiC_M + " Assemblers<br>-- " +  YX_TiC_Org + " Organic crystal<br>-- " +  YX_TiC_Ti + " Titanium ingot " +  YX_TiC_Ti_M + " Smelters<br>--- " +  YX_TiC_Ti_Ore + " Titanium ore<br>" 

    }
    //Check Purple Matrix
    if (PX > 0) {
     output += PX + " Purple matrix " + PX_M + " Matrix lab<br>- " + PX_Pa + " Particle broadband " + PX_Pa_M + " Assemblers<br>-- " + PX_Pa_Gr + " Graphene " + PX_Pa_Gr_M + " Chemical plants<br>-*- " + PX_Pa_Gr_Hy + " Hydrogen<br>--- " + PX_Pa_Gr_Fi + " Fire ice<br>-- " + PX_Pa_SiC + " Sillicon ingot " + PX_Pa_SiC_M + " Smelters<br>--- " + PX_Pa_SiC_Ore + " Sillicon ore<br>-- " + PX_Pa_Pl + " Plastic " + PX_Pa_Pl_M + " Refiners<br>--- " + PX_Pa_Pl_GrR + " Graphene rod " + PX_Pa_Pl_GrR_M + " Smelters<br>---- " + PX_Pa_Pl_GrR_Ore + " Coal<br>--- " + PX_Pa_Pl_LiO + " Light Oil " + PX_Pa_Pl_LiO_M + " Refiners<br>---- " + PX_Pa_Pl_LiO_Ore + " Coal<br>---- " + PX_Pa_Pl_LiO_Hy + " hydrogen<br>---- " + PX_Pa_Pl_LiO_LiO + " Light Oil " + PX_Pa_Pl_LiO_LiO_M + " Refiners<br>----- " + PX_Pa_Pl_LiO_LiO_CrO + " Crude oil<br>- " + PX_Pro + " Processor " + PX_Pro_M + " Assemblers<br>-- " + PX_Pro_Ci + " Circuit board " + PX_Pro_Ci_M + " Assemblers<br>--- " + PX_Pro_Ci_Co + " Copper ingot " + PX_Pro_Ci_Co_M + " Smelters<br>---- " + PX_Pro_Ci_Co_Ore + " Copper ore<br>--- " + PX_Pro_Ci_Ir + " Iron ingot " + PX_Pro_Ci_Ir_M + " Smelters<br>---- " + PX_Pro_Ci_Ir_Ore + " Iron ore<br>-- " + PX_Pro_My + " Mycrocrystalline component " + PX_Pro_My_M + " Assemblers<br>--- " + PX_Pro_My_Co + " Copper ingot " + PX_Pro_My_Co_M + " Smelters<br>---- " + PX_Pro_My_Co_Ore + " Copper ore<br>--- " + PX_Pro_My_Si + " Sillicon ingot " + PX_Pro_My_Si_M + " Smelters<br>---- " + PX_Pro_My_Si_Ore + " Sillicon ore<br>" 
    }
    //Check Green Matrix
    if (GX > 0) {
     output += GX + " Green matrix " + GX_M + " Matrix lab<br>- " +  GX_GrL + " Gravity lens " +  GX_GrL_M + " Assemblers<br>-- " +  GX_GrL_StM + " Strange matter " +  GX_GrL_StM_M + " Particle collider<br>--- " +  GX_GrL_StM_Ir + " Iron ingot " +  GX_GrL_StM_Ir_M + " Smelters<br>---- " +  GX_GrL_StM_Ir_Ore + " Iron ore<br>--- " +  GX_GrL_StM_De + " Deuterium<br>--- " +  GX_GrL_StM_Par + " Particle container " +  GX_GrL_StM_Par_M + " Assemblers<br>---- " +  GX_GrL_StM_Par_Co + " Copper ingot " +  GX_GrL_StM_Par_Co_M + " Smelters<br>----- " +  GX_GrL_StM_Par_Co_Ore + " Copper ore<br>---- " +  GX_GrL_StM_Par_Gr + " Graphene " +  GX_GrL_StM_Par_Gr_M + " Chemical plants<br>-*---- " +  GX_GrL_StM_Par_Gr_Hy + " Hydrogen<br>------ " +  GX_GrL_StM_Par_Gr_Fi + " Fire ice<br>---- " +  GX_GrL_StM_Par_Tu + " Turbine " +  GX_GrL_StM_Par_Tu_M + " Assemblers<br>----- " +  GX_GrL_StM_Par_Tu_MaC + " Magnetic coil " +  GX_GrL_StM_Par_Tu_MaC_M + " Assemblers<br>------ " +  GX_GrL_StM_Par_Tu_MaC_Co + " Copper ingot " +  GX_GrL_StM_Par_Tu_MaC_Co_M + " Smelters<br>------- " +  GX_GrL_StM_Par_Tu_MaC_Co_Ore + " Copper ore<br>------ " +  GX_GrL_StM_Par_Tu_MaC_Ma + " Magnet " +  GX_GrL_StM_Par_Tu_MaC_Ma_M + " Smelters<br>------- " +  GX_GrL_StM_Par_Tu_MaC_Ma_Ore + " Iron ore<br>----- " +  GX_GrL_StM_Par_Tu_Mo + " Motor " +  GX_GrL_StM_Par_Tu_Mo_M + " Assemblers<br>----- " +  GX_GrL_StM_Par_Tu_Mo_Ir + " Iron ingot " +  GX_GrL_StM_Par_Tu_Mo_Ir_M + " Smelters<br>------ " +  GX_GrL_StM_Par_Tu_Mo_Ir_Ore + " Iron ore<br>----- " +  GX_GrL_StM_Par_Tu_Mo_Ge + " Gears " +  GX_GrL_StM_Par_Tu_Mo_Ge_M + " Assemblers<br>------- " +  GX_GrL_StM_Par_Tu_Mo_Ge_Ir + " Iron ingot " +  GX_GrL_StM_Par_Tu_Mo_Ge_Ir_M + " Smelters<br>-------- " +  GX_GrL_StM_Par_Tu_Mo_Ge_Ir_Ore + " Iron ore<br>------ " +  GX_GrL_StM_Par_Tu_Mo_MaC + " Magnetic coil " +  GX_GrL_StM_Par_Tu_Mo_MaC_M + " Assemblers<br>------- " +  GX_GrL_StM_Par_Tu_Mo_MaC_Co + " Copper ingot " +  GX_GrL_StM_Par_Tu_Mo_MaC_Co_M + " Smelters<br>-------- " +  GX_GrL_StM_Par_Tu_Mo_MaC_Co_Ore + " Copper ore<br>------- " +  GX_GrL_StM_Par_Tu_Mo_MaC_Ma + " Magnet " +  GX_GrL_StM_Par_Tu_Mo_MaC_Ma_M + " Smelters<br>-------- " +  GX_GrL_StM_Par_Tu_Mo_MaC_Ma_Ore + " Iron ore<br>-- " +  GX_GrL_Di + " Diamond " +  GX_GrL_Di_M + " Smelters<br>--- " +  GX_GrL_Di_Ore + " Kimberlite ore<br>-" +  GX_Qu + " Quantum chip " +  GX_Qu_M + " Assemblers<br>-- " +   GX_Qu_PlF + " Plane filter " +   GX_Qu_PlF_M + " Assemblers<br>--- " +   GX_Qu_PlF_TiG + " Titanium glass " +   GX_Qu_PlF_TiG_M + " Assemblers<br>---- " +   GX_Qu_PlF_TiG_Wa + " Water<br>---- " +   GX_Qu_PlF_TiG_Gl + " Glass " +   GX_Qu_PlF_TiG_Gl_M + " Smelters<br>----- " +   GX_Qu_PlF_TiG_Gl_Ore + " Stone<br>---- " +   GX_Qu_PlF_TiG_Ti + " Titanium ingot " +   GX_Qu_PlF_TiG_Ti_M + " Smelters<br>---- " +   GX_Qu_PlF_TiG_Ti_Ore + " Titanium ore<br>-- " +   GX_Qu_PlF_Cas + " Casimir crystal " +   GX_Qu_PlF_Cas_M + " Assemblers<br>--- " +   GX_Qu_PlF_Cas_Opt +" Optical grading crystal<br>-*--- " +   GX_Qu_PlF_Cas_Gr_Hy + " Hydrogen<br>---- " +   GX_Qu_PlF_Cas_Gr + " Graphene " +   GX_Qu_PlF_Cas_Gr_M + " Chemical plants<br>----- " +   GX_Qu_PlF_Cas_Gr_Fi + " Fire ice<br>---- " +   GX_Qu_PlF_Cas_Hy + " Hydrogen<br>-- " +   GX_Qu_Pro + " Processor " +   GX_Qu_Pro_M + " Assemblers<br>--- " +   GX_Qu_Pro_Ci + " Circuit board " +   GX_Qu_Pro_Ci_M + " Assemblers<br>---- " +   GX_Qu_Pro_Ci_Co + " Copper ingot " +   GX_Qu_Pro_Ci_Co_M + " Smelters<br>----- " +   GX_Qu_Pro_Ci_Co_Ore + " Copper ore<br>---- " +   GX_Qu_Pro_Ci_Ir + " Iron ingot " +   GX_Qu_Pro_Ci_Ir_M + " Smelters<br>----- " +   GX_Qu_Pro_Ci_Ir_Ore + " Iron ore<br>--- " +   GX_Qu_Pro_My + " Mycrocrystalline component " +   GX_Qu_Pro_My_M + " Assemblers<br>---- " +   GX_Qu_Pro_My_Co + " Copper ingot " +   GX_Qu_Pro_My_Co_M + " Smelters<br>----- " +   GX_Qu_Pro_My_Co_Ore + " Copper ore<br>---- " +   GX_Qu_Pro_My_Si + " Sillicon ingot " +   GX_Qu_Pro_My_Si_M + " Smelters<br>----- " +   GX_Qu_Pro_My_Si_Ore + " Sillicon ore<br>" 
    }
    //Check White Matrix
    if (WX > 0) {
     output += WX + " White matrix " + WX_M + " Matrix lab<br>-" 
     + WX_BX + " Blue matrix " + WX_BX_M + " Matrix lab<br>-- " + WX_BX_MaC + " Magnetic coil " + WX_BX_MaC_M + " Assemblers<br>--- " + WX_BX_MaC_Ma + " Magnet " + WX_BX_MaC_Ma_M + " Smelters<br>---- " + WX_BX_MaC_Ma_Ore + " Iron ore<br>--- " + WX_BX_MaC_Co + " Copper ingot " + WX_BX_MaC_Co_M + " Smelters<br>---- " + WX_BX_MaC_Co_Ore + " Copper ore<br>--" + WX_BX_Ci + " Circuit board " + WX_BX_Ci_M + " Assemblers<br>--- " + WX_BX_Ci_Ir + " Iron ingot " + WX_BX_Ci_Ir_M + " Smelters<br>---- " + WX_BX_Ci_Ir_Ore + " Iron ore <br>--- " + WX_BX_Ci_Co + " Copper ingot " + WX_BX_Ci_Co_M + " Smelters <br>---- " + WX_BX_Ci_Co_Ore + " Copper ore <br>-" + WX_RX + " Red matrix " + WX_RX_M + " Matrix lab<br>-- " + WX_RX_Hy + " Hydrogen<br>--" + WX_RX_GrR + " Graphene rod " + WX_RX_GrR_M + " Smelters <br>--- " + WX_RX_GrR_Ore + " Coal<br>-" + WX_YX + " Yellow matrix " + WX_YX_M + " Matrix lab<br>-- " +  WX_YX_Di + " Diamond " +  WX_YX_Di_M + " Smelters <br>--- " +  WX_YX_Di_Ore + " Kimberlite ore<br>--" +  WX_YX_TiC + " Titanium crystal " +  WX_YX_TiC_M + " Assemblers<br>--- " +  WX_YX_TiC_Org + " Organic crystal<br>--- " +  WX_YX_TiC_Ti + " Titanium ingot " +  WX_YX_TiC_Ti_M + " Smelters<br>---- " +  WX_YX_TiC_Ti_Ore + " Titanium ore<br>-" + WX_PX + " Purple matrix " + WX_PX_M + " Matrix lab<br>-- " + WX_PX_Pa + " Particle broadband " + WX_PX_Pa_M + " Assemblers<br>--- " + WX_PX_Pa_Gr + " Graphene " + WX_PX_Pa_Gr_M + " Chemical plants<br>--*- " + WX_PX_Pa_Gr_Hy + " Hydrogen<br>---- " + WX_PX_Pa_Gr_Fi + " Fire ice<br>--- " + WX_PX_Pa_SiC + " Sillicon ingot " + WX_PX_Pa_SiC_M + " Smelters<br>---- " + WX_PX_Pa_SiC_Ore + " Sillicon ore<br>--- " + WX_PX_Pa_Pl + " Plastic " + WX_PX_Pa_Pl_M + " Refiners<br>---- " + WX_PX_Pa_Pl_GrR + " Graphene rod " + WX_PX_Pa_Pl_GrR_M + " Smelters<br>----- " + WX_PX_Pa_Pl_GrR_Ore + " Coal<br>---- " + WX_PX_Pa_Pl_LiO + " Light Oil " + WX_PX_Pa_Pl_LiO_M + " Refiners<br>----- " + WX_PX_Pa_Pl_LiO_Ore + " Coal<br>----- " + WX_PX_Pa_Pl_LiO_Hy + " hydrogen<br>----- " + WX_PX_Pa_Pl_LiO_LiO + " Light Oil " + WX_PX_Pa_Pl_LiO_LiO_M + " Refiners<br>------ " + WX_PX_Pa_Pl_LiO_LiO_CrO + " Crude oil<br>-- " + WX_PX_Pro + " Processor " + WX_PX_Pro_M + " Assemblers<br>--- " + WX_PX_Pro_Ci + " Circuit board " + WX_PX_Pro_Ci_M + " Assemblers<br>---- " + WX_PX_Pro_Ci_Co + " Copper ingot " + WX_PX_Pro_Ci_Co_M + " Smelters<br>----- " + WX_PX_Pro_Ci_Co_Ore + " Copper ore<br>---- " + WX_PX_Pro_Ci_Ir + " Iron ingot " + WX_PX_Pro_Ci_Ir_M + " Smelters<br>----- " + WX_PX_Pro_Ci_Ir_Ore + " Iron ore<br>--- " + WX_PX_Pro_My + " Mycrocrystalline component " + WX_PX_Pro_My_M + " Assemblers<br>---- " + WX_PX_Pro_My_Co + " Copper ingot " + WX_PX_Pro_My_Co_M + " Smelters<br>----- " + WX_PX_Pro_My_Co_Ore + " Copper ore<br>---- " + WX_PX_Pro_My_Si + " Sillicon ingot " + WX_PX_Pro_My_Si_M + " Smelters<br>----- " + WX_PX_Pro_My_Si_Ore + " Sillicon ore<br>-" + WX_GX + " Green matrix " + WX_GX_M + " Matrix lab<br>-- " +  WX_GX_GrL + " Gravity lens " +  WX_GX_GrL_M + " Assemblers<br>--- " +  WX_GX_GrL_StM + " Strange matter " +  WX_GX_GrL_StM_M + " Particle collider<br>---- " +  WX_GX_GrL_StM_Ir + " Iron ingot " +  WX_GX_GrL_StM_Ir_M + " Smelters<br>----- " +  WX_GX_GrL_StM_Ir_Ore + " Iron ore<br>---- " +  WX_GX_GrL_StM_De + " Deuterium<br>---- " +  WX_GX_GrL_StM_Par + " Particle container " +  WX_GX_GrL_StM_Par_M + " Assemblers<br>----- " +  WX_GX_GrL_StM_Par_Co + " Copper ingot " +  WX_GX_GrL_StM_Par_Co_M + " Smelters<br>------ " +  WX_GX_GrL_StM_Par_Co_Ore + " Copper ore<br>----- " +  WX_GX_GrL_StM_Par_Gr + " Graphene " +  WX_GX_GrL_StM_Par_Gr_M + " Chemical plants<br>--*---- " +  WX_GX_GrL_StM_Par_Gr_Hy + " Hydrogen<br>------- " +  WX_GX_GrL_StM_Par_Gr_Fi + " Fire ice<br>----- " +  WX_GX_GrL_StM_Par_Tu + " Turbine " +  WX_GX_GrL_StM_Par_Tu_M + " Assemblers<br>------ " +  WX_GX_GrL_StM_Par_Tu_MaC + " Magnetic coil " +  WX_GX_GrL_StM_Par_Tu_MaC_M + " Assemblers<br>------- " +  WX_GX_GrL_StM_Par_Tu_MaC_Co + " Copper ingot " +  WX_GX_GrL_StM_Par_Tu_MaC_Co_M + " Smelters<br>-------- " +  WX_GX_GrL_StM_Par_Tu_MaC_Co_Ore + " Copper ore<br>------- " +  WX_GX_GrL_StM_Par_Tu_MaC_Ma + " Magnet " +  WX_GX_GrL_StM_Par_Tu_MaC_Ma_M + " Smelters<br>-------- " +  WX_GX_GrL_StM_Par_Tu_MaC_Ma_Ore + " Iron ore<br>------ " +  WX_GX_GrL_StM_Par_Tu_Mo + " Motor " +  WX_GX_GrL_StM_Par_Tu_Mo_M + " Assemblers<br>------ " +  WX_GX_GrL_StM_Par_Tu_Mo_Ir + " Iron ingot " +  WX_GX_GrL_StM_Par_Tu_Mo_Ir_M + " Smelters<br>------- " +  WX_GX_GrL_StM_Par_Tu_Mo_Ir_Ore + " Iron ore<br>------ " +  WX_GX_GrL_StM_Par_Tu_Mo_Ge + " Gears " +  WX_GX_GrL_StM_Par_Tu_Mo_Ge_M + " Assemblers<br>-------- " +  WX_GX_GrL_StM_Par_Tu_Mo_Ge_Ir + " Iron ingot " +  WX_GX_GrL_StM_Par_Tu_Mo_Ge_Ir_M + " Smelters<br>--------- " +  WX_GX_GrL_StM_Par_Tu_Mo_Ge_Ir_Ore + " Iron ore<br>------- " +  WX_GX_GrL_StM_Par_Tu_Mo_MaC + " Magnetic coil " +  WX_GX_GrL_StM_Par_Tu_Mo_MaC_M + " Assemblers<br>-------- " +  WX_GX_GrL_StM_Par_Tu_Mo_MaC_Co + " Copper ingot " +  WX_GX_GrL_StM_Par_Tu_Mo_MaC_Co_M + " Smelters<br>--------- " +  WX_GX_GrL_StM_Par_Tu_Mo_MaC_Co_Ore + " Copper ore<br>-------- " +  WX_GX_GrL_StM_Par_Tu_Mo_MaC_Ma + " Magnet " +  WX_GX_GrL_StM_Par_Tu_Mo_MaC_Ma_M + " Smelters<br>--------- " +  WX_GX_GrL_StM_Par_Tu_Mo_MaC_Ma_Ore + " Iron ore<br>--- " +  WX_GX_GrL_Di + " Diamond " +  WX_GX_GrL_Di_M + " Smelters<br>---- " +  WX_GX_GrL_Di_Ore + " Kimberlite ore<br>--" +  WX_GX_Qu + " Quantum chip " +  WX_GX_Qu_M + " Assemblers<br>--- " +   WX_GX_Qu_PlF + " Plane filter " +   WX_GX_Qu_PlF_M + " Assemblers<br>---- " +   WX_GX_Qu_PlF_TiG + " Titanium glass " +   WX_GX_Qu_PlF_TiG_M + " Assemblers<br>----- " +   WX_GX_Qu_PlF_TiG_Wa + " Water<br>----- " +   WX_GX_Qu_PlF_TiG_Gl + " Glass " +   WX_GX_Qu_PlF_TiG_Gl_M + " Smelters<br>------ " +   WX_GX_Qu_PlF_TiG_Gl_Ore + " Stone<br>----- " +   WX_GX_Qu_PlF_TiG_Ti + " Titanium ingot " +   WX_GX_Qu_PlF_TiG_Ti_M + " Smelters<br>----- " +   WX_GX_Qu_PlF_TiG_Ti_Ore + " Titanium ore<br>--- " +   WX_GX_Qu_PlF_Cas + " Casimir crystal " +   WX_GX_Qu_PlF_Cas_M + " Assemblers<br>---- " +   WX_GX_Qu_PlF_Cas_Opt +" Optical grading crystal<br>--*--- " +   WX_GX_Qu_PlF_Cas_Gr_Hy + " Hydrogen<br>----- " +   WX_GX_Qu_PlF_Cas_Gr + " Graphene " +   WX_GX_Qu_PlF_Cas_Gr_M + " Chemical plants<br>------ " +   WX_GX_Qu_PlF_Cas_Gr_Fi + " Fire ice<br>----- " +   WX_GX_Qu_PlF_Cas_Hy + " Hydrogen<br>--- " +   WX_GX_Qu_Pro + " Processor " +   WX_GX_Qu_Pro_M + " Assemblers<br>---- " +   WX_GX_Qu_Pro_Ci + " Circuit board " +   WX_GX_Qu_Pro_Ci_M + " Assemblers<br>----- " +   WX_GX_Qu_Pro_Ci_Co + " Copper ingot " +   WX_GX_Qu_Pro_Ci_Co_M + " Smelters<br>------ " +   WX_GX_Qu_Pro_Ci_Co_Ore + " Copper ore<br>----- " +   WX_GX_Qu_Pro_Ci_Ir + " Iron ingot " +   WX_GX_Qu_Pro_Ci_Ir_M + " Smelters<br>------ " +   WX_GX_Qu_Pro_Ci_Ir_Ore + " Iron ore<br>---- " +   WX_GX_Qu_Pro_My + " Mycrocrystalline component " +   WX_GX_Qu_Pro_My_M + " Assemblers<br>----- " +   WX_GX_Qu_Pro_My_Co + " Copper ingot " +   WX_GX_Qu_Pro_My_Co_M + " Smelters<br>------ " +   WX_GX_Qu_Pro_My_Co_Ore + " Copper ore<br>----- " +   WX_GX_Qu_Pro_My_Si + " Sillicon ingot " +   WX_GX_Qu_Pro_My_Si_M + " Smelters<br>------ " +   WX_GX_Qu_Pro_My_Si_Ore + " Sillicon ore<br>-" + WX_Ant + " Antimatter<br>"

    }

    // Display the grand total on the page
    document.getElementById("total").innerHTML = output;
  }
