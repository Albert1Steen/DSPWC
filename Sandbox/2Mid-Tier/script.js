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
    var TiA = document.getElementById("TiA").value;
    var TiG = document.getElementById("TiG").value;
    var PlE = document.getElementById("PlE").value;
    var Pro = document.getElementById("Pro").value;
    var Cas = document.getElementById("Cas").value;
    var Mo = document.getElementById("Mo").value;
    var Tu = document.getElementById("Tu").value;
    var Pl = document.getElementById("Pl").value;
    var PlF = document.getElementById("PlF").value;
    var So = document.getElementById("So").value;
    var Th = document.getElementById("Th").value;
    var LoDr = document.getElementById("LoDr").value;
    var Pr1 = document.getElementById("Pr1").value;
    var Pr2 = document.getElementById("Pr2").value;
    var Pr3 = document.getElementById("Pr3").value;



    // Set recipes, amount of machines are time of recipe (recipe takes 3 seconds, it takes 3 machines for 1 output/s)
    // Set recipes, resource is per 1 item output (1 iron ore for 1 iron ingot, 3 iron ingot for 1 steel)
    // set the recipe for Titanium alloy
    var TiA_M = TiA * 3;
     var TiA_Ti = TiA;
     var TiA_Ti_M = TiA_Ti * 2;
      var TiA_Ti_Ore = TiA_Ti * 2;
     var TiA_St = TiA;
     var TiA_St_M = TiA_St * 3;
      var TiA_St_Ir = TiA_St * 3;
      var TiA_St_Ir_M = TiA_St_Ir;
       var TiA_St_Ir_Ore = TiA_St_Ir;
     var TiA_Su = TiA * 2;
    // set the recipe for Titanium glass
    var TiG_M = TiG * 2.5;
     var TiG_Gl = TiG;
     var TiG_Gl_M = TiG_Gl * 2;
      var TiG_Gl_Ore = TiG_Gl * 2;
     var TiG_Ti = TiG;
     var TiG_Ti_M = TiG_Ti * 2
      var TiG_Ti_Ore = TiG_Ti * 2;
     var TiG_Wa = TiG;
    // set the recipe for Plasma exciter
    var PlE_M = PlE * 2;
     var PlE_MaC = PlE * 4;
     var PlE_MaC_M = PlE_MaC * 0.5;
      var PlE_MaC_Ma = PlE_MaC * 1;
      var PlE_MaC_Ma_M = PlE_MaC_Ma * 1.5;
       var PlE_MaC_Ma_Ore = PlE_MaC_Ma * 1;
      var PlE_MaC_Co = PlE_MaC * 0.5;
      var PlE_MaC_Co_M = PlE_MaC_Co * 1;
       var PlE_MaC_Co_Ore = PlE_MaC_Co * 1;
     var PlE_Pr = PlE * 2;
     var PlE_Pr_M = PlE_Pr * 1;
      var PlE_Pr_Gl = PlE_Pr * 1.5;
      var PlE_Pr_Gl_M = PlE_Pr_Gl * 2; 
       var PlE_Pr_Gl_Ore = PlE_Pr_Gl * 2;
    // set the recipe for Processor
    var Pro_M = Pro * 3;
     var Pro_Ci = Pro * 2;
     var Pro_Ci_M = Pro_Ci * 0.5;
      var Pro_Ci_Ir = Pro_Ci * 1;
      var Pro_Ci_Ir_M = Pro_Ci_Ir * 1;
       var Pro_Ci_Ir_Ore = Pro_Ci_Ir * 1;        
      var Pro_Ci_Co = Pro_Ci * 0.5;
      var Pro_Ci_Co_M = Pro_Ci_Co * 1;
       var Pro_Ci_Co_Ore = Pro_Ci_Co * 1;
     var Pro_My = Pro * 2;
     var Pro_My_M = Pro_My * 2;
      var Pro_My_Si = Pro_My * 2;
      var Pro_My_Si_M = Pro_My_Si * 2;
       var Pro_My_Si_Ore = Pro_My_Si * 2;        
      var Pro_My_Co = Pro_My * 1;
      var Pro_My_Co_M = Pro_My_Co * 1;
       var Pro_My_Co_Ore = Pro_My_Co * 1;
    // set the recipe for Casimir crystal
    var Cas_M = Cas * 4;
     var Cas_Opt = Cas * 8;
     var Cas_Gr = Cas * 2;
     var Cas_Gr_Hy = Cas_Gr * 0.5;
     var Cas_Gr_M = Cas_Gr * 1;
      var Cas_Gr_Fi = Cas_Gr * 1;
     var Cas_Hy = Cas * 10;
    // set the recipe for Motor
    var Mo_M = Mo * 2;
     var Mo_Ir = Mo * 2;
     var Mo_Ir_M = Mo_Ir * 1;
      var Mo_Ir_Ore = Mo_Ir * 1;
     var Mo_Ge = Mo;
     var Mo_Ge_M = Mo_Ge * 1;
      var Mo_Ge_Ir = Mo_Ge *1;
      var Mo_Ge_Ir_M = Mo_Ge_Ir * 1;
       var Mo_Ge_Ir_Ore = Mo_Ge_Ir * 1;
     var Mo_MaC = Mo;
     var Mo_MaC_M = Mo_MaC * 0.5;
      var Mo_MaC_Ma = Mo_MaC * 1;
      var Mo_MaC_Ma_M = Mo_MaC_Ma * 1.5;
       var Mo_MaC_Ma_Ore = Mo_MaC_Ma * 1;
      var Mo_MaC_Co = Mo_MaC * 0.5;
      var Mo_MaC_Co_M = Mo_MaC_Co * 1;
       var Mo_MaC_Co_Ore = Mo_MaC_Co * 1;
    // set the recipe for Turbine
    var Tu_M = Tu * 2;
     var Tu_Mo = Tu * 2;
     var Tu_Mo_M = Tu_Mo * 2;
      var Tu_Mo_Ir = Tu_Mo * 2;
      var Tu_Mo_Ir_M = Tu_Mo_Ir * 1;
       var Tu_Mo_Ir_Ore = Tu_Mo_Ir * 1;
      var Tu_Mo_Ge = Tu_Mo;
      var Tu_Mo_Ge_M = Tu_Mo_Ge * 1;
       var Tu_Mo_Ge_Ir = Tu_Mo_Ge *1;
       var Tu_Mo_Ge_Ir_M = Tu_Mo_Ge_Ir * 1;
        var Tu_Mo_Ge_Ir_Ore = Tu_Mo_Ge_Ir * 1;
      var Tu_Mo_MaC = Tu_Mo;
      var Tu_Mo_MaC_M = Tu_Mo_MaC * 0.5;
       var Tu_Mo_MaC_Ma = Tu_Mo_MaC * 1;
       var Tu_Mo_MaC_Ma_M = Tu_Mo_MaC_Ma * 1.5;
        var Tu_Mo_MaC_Ma_Ore = Tu_Mo_MaC_Ma * 1;
       var Tu_Mo_MaC_Co = Tu_Mo_MaC * 0.5;
       var Tu_Mo_MaC_Co_M = Tu_Mo_MaC_Co * 1;
        var Tu_Mo_MaC_Co_Ore = Tu_Mo_MaC_Co * 1;
     var Tu_MaC = Tu * 2;
     var Tu_MaC_M = Tu_MaC * 0.5;
      var Tu_MaC_Ma = Tu_MaC * 1;
      var Tu_MaC_Ma_M = Tu_MaC_Ma * 1.5;
       var Tu_MaC_Ma_Ore = Tu_MaC_Ma * 1;
      var Tu_MaC_Co = Tu_MaC * 0.5;
      var Tu_MaC_Co_M = Tu_MaC_Co * 1;
       var Tu_MaC_Co_Ore = Tu_MaC_Co * 1;
    // set the recipe for Plastic
    var Pl_M = Pl * 3;
     var Pl_GrR = Pl;
     var Pl_GrR_M = Pl_GrR * 2;
      var Pl_GrR_Ore = Pl_GrR * 2;
     var Pl_LiO = Pl * 2;
     var Pl_LiO_M = Pl_LiO * 4/3;
      var Pl_LiO_Ore = Pl_LiO * 1/3;
       var Pl_LiO_Hy = Pl_LiO * 1/3;
       var Pl_LiO_LiO = Pl_LiO * 2/3;
       var Pl_LiO_LiO_M = Pl_LiO_LiO * 2;
        var Pl_LiO_LiO_CrO = Pl_LiO_LiO;
    // set the recipe for Plane filter
    var PlF_M = PlF * 12;
     var PlF_TiG = PlF * 2;
     var PlF_TiG_M = PlF_TiG * 2.5;
      var PlF_TiG_Gl = PlF_TiG * 1;
      var PlF_TiG_Gl_M = PlF_TiG_Gl * 2;
       var PlF_TiG_Gl_Ore = PlF_TiG_Gl * 2;
      var PlF_TiG_Ti = PlF_TiG;
      var PlF_TiG_Ti_M = PlF_TiG_Ti * 2
       var PlF_TiG_Ti_Ore = PlF_TiG_Ti * 2;
      var PlF_TiG_Wa = PlF_TiG * 1;
     var PlF_Cas = PlF * 1;
     var PlF_Cas_M = PlF_Cas * 4;
      var PlF_Cas_Opt = PlF_Cas * 8;
      var PlF_Cas_Gr = PlF_Cas * 2;
      var PlF_Cas_Gr_Hy = PlF_Cas_Gr * 0.5;
      var PlF_Cas_Gr_M = PlF_Cas_Gr * 1;
       var PlF_Cas_Gr_Fi = PlF_Cas_Gr * 1;
      var PlF_Cas_Hy = PlF_Cas * 10;
    // set the recipe for Solar sail
    var So_M = So * 2;
     var So_Gr = So * 0.5;
     var So_Gr_Hy = So_Gr * 0.5;
     var So_Gr_M = So_Gr * 1;
      var So_Gr_Fi = So_Gr * 1;
     var So_Ph = So * 0.5;
     var So_Ph_M = So_Ph * 3;
      var So_Ph_Opt = So_Ph * 1;
     var So_Ph_Ci = So_Ph * 1;
     var So_Ph_Ci_M = So_Ph_Ci * 0.5;
      var So_Ph_Ci_Ir = So_Ph_Ci * 1;
      var So_Ph_Ci_Ir_M = So_Ph_Ci_Ir * 1;
       var So_Ph_Ci_Ir_Ore = So_Ph_Ci_Ir * 1;
      var So_Ph_Ci_Co = So_Ph_Ci * 0.5;
      var So_Ph_Ci_Co_M = So_Ph_Ci_Co * 1;
       var So_Ph_Ci_Co_Ore = So_Ph_Ci_Co * 1;
    // set the recipe for Thruster
    var Th_M = Th * 4;
     var Th_St = Th * 2;
     var Th_St_M = Th_St * 3;
      var Th_St_Ir = Th_St * 3;
      var Th_St_Ir_M = Th_St_Ir;
       var Th_St_Ir_Ore = Th_St_Ir;
     var Th_Co = Th * 3;
     var Th_Co_M = Th_Co * 1;      
      var Th_Co_Ore = Th_Co * 1;
    // set the recipe for Logistic drone
    var LoDr_M = LoDr * 4;
     var LoDr_Th = LoDr * 2;
     var LoDr_Th_M = LoDr_Th * 4;
      var LoDr_Th_St = LoDr_Th * 2;
      var LoDr_Th_St_M = LoDr_Th_St * 3;
       var LoDr_Th_St_Ir = LoDr_Th_St * 3;
       var LoDr_Th_St_Ir_M = LoDr_Th_St_Ir;
        var LoDr_Th_St_Ir_Ore = LoDr_Th_St_Ir;
      var LoDr_Th_Co = LoDr_Th * 3;
      var LoDr_Th_Co_M = LoDr_Th_Co * 1;
       var LoDr_Th_Co_Ore = LoDr_Th_Co * 1;
     var LoDr_Pro = LoDr * 2;
     var LoDr_Pro_M = LoDr_Pro * 3;
      var LoDr_Pro_Ci = LoDr_Pro * 2;
      var LoDr_Pro_Ci_M = LoDr_Pro_Ci * 0.5;
       var LoDr_Pro_Ci_Ir = LoDr_Pro_Ci * 1;
       var LoDr_Pro_Ci_Ir_M = LoDr_Pro_Ci_Ir * 1;
        var LoDr_Pro_Ci_Ir_Ore = LoDr_Pro_Ci_Ir * 1;
       var LoDr_Pro_Ci_Co = LoDr_Pro_Ci * 0.5;
       var LoDr_Pro_Ci_Co_M = LoDr_Pro_Ci_Co * 1;
        var LoDr_Pro_Ci_Co_Ore = LoDr_Pro_Ci_Co * 1;
      var LoDr_Pro_My = LoDr_Pro * 2;
      var LoDr_Pro_My_M = LoDr_Pro_My * 2;
       var LoDr_Pro_My_Si = LoDr_Pro_My * 2;
       var LoDr_Pro_My_Si_M = LoDr_Pro_My_Si * 2;
        var LoDr_Pro_My_Si_Ore = LoDr_Pro_My_Si * 2;
       var LoDr_Pro_My_Co = LoDr_Pro_My * 1;
       var LoDr_Pro_My_Co_M = LoDr_Pro_My_Co * 1;
        var LoDr_Pro_My_Co_Ore = LoDr_Pro_My_Co * 1;
     var LoDr_Ir = LoDr * 5;
     var LoDr_Ir_M = LoDr_Ir * 1;
      var LoDr_Ir_Ore = LoDr_Ir * 1;
    // set the recipe for Proliferator mk1
    var Pr1_M = Pr1 * 0.5;
     var Pr1_Ore = Pr1 * 1;
    // set the recipe for Proliferator mk2
    var Pr2_M = Pr2 * 1;
     var Pr2_Pr1 = Pr2 * 2;
     var Pr2_Pr1_M = Pr2_Pr1 * 0.5;
      var Pr2_Pr1_Ore = Pr2_Pr1 * 1;
     var Pr2_Di = Pr2 * 1;
     var Pr2_Di_M = Pr2_Di * 0.75;
      var Pr2_Di_Ore = Pr2_Di * 0.5;
    // set the recipe for Proliferator mk3
    var Pr3_M = Pr3 * 2;
     var Pr3_Pr2 = Pr3 * 2;
     var Pr3_Pr2_M = Pr3_Pr2 * 1;
      var Pr3_Pr2_Pr1 = Pr3_Pr2 * 2;
      var Pr3_Pr2_Pr1_M = Pr3_Pr2_Pr1 * 0.5;
       var Pr3_Pr2_Pr1_Ore = Pr3_Pr2_Pr1 * 1;
      var Pr3_Pr2_Di = Pr3_Pr2 * 1;
      var Pr3_Pr2_Di_M = Pr3_Pr2_Di * 0.75;
       var Pr3_Pr2_Di_Ore = Pr3_Pr2_Di * 0.5;
     var Pr3_Ca = Pr3 * 1;
     var Pr3_Ca_M = Pr3_Ca * 2;
      var Pr3_Ca_Spi = Pr3_Ca * 3;
   

    // Initialize the output string
    var output = "";

    // check Titanium alloy
    if (TiA > 0) {
    output += TiA + " Titanium alloy " + TiA_M + " Smelter<br>- " + TiA_Su + " Sulfuric acid<br>- " + TiA_St + " Steel " + TiA_St_M + " Smelters<br>-- " + TiA_St_Ir + " Iron ingot " + TiA_St_Ir_M + " Smelters<br>--- " + TiA_St_Ir_Ore + " Iron ore<br>- " + TiA_Ti + " Titanium ingot " + TiA_Ti_M + " Smelters<br>-- " + TiA_Ti_Ore + " Titanium ore<br>"
    }
    // check Titanium glass
    if (TiG > 0) {
    output += TiG + " Titanium glass " + TiG_M + " Assemblers<br>- " + TiG_Wa + " Water<br>- " + TiG_Gl + " Glass " + TiG_Gl_M + " Smelters<br>-- " + TiG_Gl_Ore + " Stone<br>- " + TiG_Ti + " Titanium ingot " + TiG_Ti_M + " Smelters<br>-- " + TiG_Ti_Ore + " Titanium ore<br>"
    }
    // check Plasma exciter
    if (PlE > 0) {
    output += PlE + " Plasma exciter " + PlE_M + " Assemblers<br>- " +PlE_Pr + " Prism " + PlE_Pr_M + " Machines<br>-- " + PlE_Pr_Gl + " Glass " + PlE_Pr_Gl_M + " Smelters<br>--- " + PlE_Pr_Gl_Ore + " Stone<br>- " + PlE_MaC + " Magnetic coil " + PlE_MaC_M + " Assemblers<br>-- " + PlE_MaC_Ma + " Magnets " + PlE_MaC_Ma_M + " Smelters<br>--- " + PlE_MaC_Ma_Ore + " Iron ore<br>-- " + PlE_MaC_Co + " Copper ingot " + PlE_MaC_Co_M + " Smelters<br>--- " + PlE_MaC_Co_Ore + " Copper ore<br>"
    }
    // check Processor
    if (Pro > 0) {
    output += Pro + " Processor " + Pro_M + " Assemblers<br>- " + Pro_Ci + " Circuit board " + Pro_Ci_M + " Assemblers<br>-- " + Pro_Ci_Co + " Copper ingot " + Pro_Ci_Co_M + " Smelters<br>--- " + Pro_Ci_Co_Ore + " Copper ore<br>-- " + Pro_Ci_Ir + " Iron ingot " + Pro_Ci_Ir_M + " Smelters<br>--- " + Pro_Ci_Ir_Ore + " Iron ore<br>- " + Pro_My + " Mycrocrystalline component " + Pro_My_M + " Assemblers<br>-- " + Pro_My_Co + " Copper ingot " + Pro_My_Co_M + " Smelters<br>--- " + Pro_My_Co_Ore + " Copper ore<br>-- " + Pro_My_Si + " Sillicon ingot " + Pro_My_Si_M + " Smelters<br>--- " + Pro_My_Si_Ore + " Sillicon ore<br>" 
    }
    // check Casimir crystal
    if (Cas > 0) {
    output += Cas + " Casimir crystal " + Cas_M + " Assemblers<br>- " + Cas_Opt +" Optical grading crystal<br>*- " + Cas_Gr_Hy + " Hydrogen<br>- " + Cas_Gr + " Graphene " + Cas_Gr_M + " Chemical plants<br>-- " + Cas_Gr_Fi + " Fire ice<br>- " + Cas_Hy + " Hydrogen<br>"
    }
    // check Motor
    if (Mo > 0) {
      output += Mo + " Motor " + Mo_M + " Assemblers<br>- " + Mo_Ir + " Iron ingot " + Mo_Ir_M + " Smelters<br>-- " + Mo_Ir_Ore + " Iron ore<br>- " + Mo_Ge + " Gears " + Mo_Ge_M + " Assemblers<br>-- " + Mo_Ge_Ir + " Iron ingot " + Mo_Ge_Ir_M + " Smelters<br>--- " + Mo_Ge_Ir_Ore + " Iron ore<br>- " + Mo_MaC + " Magnetic coil " + Mo_MaC_M + " Assemblers<br>-- " + Mo_MaC_Co + " Copper ingot " + Mo_MaC_Co_M + " Smelters<br>--- " + Mo_MaC_Co_Ore + " Copper ore<br>-- " + Mo_MaC_Ma + " Magnet " + Mo_MaC_Ma_M + " Smelters<br>--- " + Mo_MaC_Ma_Ore + " Iron ore<br>"  
    }
    // check Turbine
    if (Tu > 0) {
      output += Tu + " Turbine " + Tu_M + " Assemblers<br>- " + Tu_MaC + " Magnetic coil " + Tu_MaC_M + " Assemblers<br>-- " + Tu_MaC_Co + " Copper ingot " + Tu_MaC_Co_M + " Smelters<br>--- " + Tu_MaC_Co_Ore + " Copper ore<br>-- " + Tu_MaC_Ma + " Magnet " + Tu_MaC_Ma_M + " Smelters<br>--- " + Tu_MaC_Ma_Ore + " Iron ore<br>- " + Tu_Mo + " Motor " + Tu_Mo_M + " Assemblers<br>-- " + Tu_Mo_Ir + " Iron ingot " + Tu_Mo_Ir_M + " Smelters<br>--- " + Tu_Mo_Ir_Ore + " Iron ore<br>-- " + Tu_Mo_Ge + " Gears " + Tu_Mo_Ge_M + " Assemblers<br>--- " + Tu_Mo_Ge_Ir + " Iron ingot " + Tu_Mo_Ge_Ir_M + " Smelters<br>---- " + Tu_Mo_Ge_Ir_Ore + " Iron ore<br>-- " + Tu_Mo_MaC + " Magnetic coil " + Tu_Mo_MaC_M + " Assemblers<br>--- " + Tu_Mo_MaC_Co + " Copper ingot " + Tu_Mo_MaC_Co_M + " Smelters<br>---- " + Tu_Mo_MaC_Co_Ore + " Copper ore<br>--- " + Tu_Mo_MaC_Ma + " Magnet " + Tu_Mo_MaC_Ma_M + " Smelters<br>---- " + Tu_Mo_MaC_Ma_Ore + " Iron ore<br>"  
    }
    // check Plastic
    if (Pl > 0) {
      output += Pl + " Plastic " + Pl_M + " Refiners<br>- " + Pl_GrR + " Graphene rod " + Pl_GrR_M + " Smelters<br>-- " + Pl_GrR_Ore + " Coal<br>- " + Pl_LiO + " Light Oil " + Pl_LiO_M + " Refiners<br>-- " + Pl_LiO_Ore + " Coal<br>-- " + Pl_LiO_Hy + " hydrogen<br>-- " + Pl_LiO_LiO + " Light Oil " + Pl_LiO_LiO_M + " Refiners<br>--- " + Pl_LiO_LiO_CrO + " Crude oil<br>" 
    }
    // check Plane filter
    if (PlF > 0) {
      output += PlF + " Plane filter " + PlF_M + " Assemblers<br>- " + PlF_TiG + " Titanium glass " + PlF_TiG_M + " Assemblers<br>-- " + PlF_TiG_Wa + " Water<br>-- " + PlF_TiG_Gl + " Glass " + PlF_TiG_Gl_M + " Smelters<br>--- " + PlF_TiG_Gl_Ore + " Stone<br>-- " + PlF_TiG_Ti + " Titanium ingot " + PlF_TiG_Ti_M + " Smelters<br>--- " + PlF_TiG_Ti_Ore + " Titanium ore<br>- " + PlF_Cas + " Casimir crystal " + PlF_Cas_M + " Assemblers<br>-- " + PlF_Cas_Opt +" Optical grading crystal<br>*-- " + PlF_Cas_Gr_Hy + " Hydrogen<br>-- " + PlF_Cas_Gr + " Graphene " + PlF_Cas_Gr_M + " Chemical plants<br>--- " + PlF_Cas_Gr_Fi + " Fire ice<br>-- " + PlF_Cas_Hy + " Hydrogen<br>"
    }
    // check Solar sail
    if (So > 0) {
      output += So + " Solar sail " + So_M + " Assemblers<br>*- " + So_Gr_Hy + " hydrogen<br>- " + So_Gr + " Graphene " + So_Gr_M + " Chemical plants<br>-- " + So_Gr_Fi + " Fire ice<br>- " + So_Ph + " Photon combiner " + So_Ph_M + " Assemblers<br>-- " + So_Ph_Opt + " Optical grading crystal<br>-- " + So_Ph_Ci + " Circuit board " + So_Ph_Ci_M + " Assemblers<br>--- " + So_Ph_Ci_Co + " Copper ingot " + So_Ph_Ci_Co_M + " Smelters<br>---- " + So_Ph_Ci_Co_Ore + " Copper ore<br>--- " + So_Ph_Ci_Ir + " Iron ingot " + So_Ph_Ci_Ir_M + " Smelting<br>---- "+ So_Ph_Ci_Ir_Ore + " Iron ore<br>" 
    }
    // check Thruster
    if (Th > 0) {
      output += Th + " Thruster " + Th_M + " Assemblers<br>- " + Th_Co + " Copper ingot " + Th_Co_M + " Smelters<br>-- " + Th_Co_Ore + " Copper ore<br>- " + Th_St + " Steel " + Th_St_M + " Smelters<br>-- " + Th_St_Ir + " Iron ingot " + Th_St_Ir_M + " Smelters<br>--- " + Th_St_Ir_Ore + " Iron ore<br>"
    }
    // check Logistic drone
    if (LoDr > 0) {
      output += LoDr + " Logistoc drone " + LoDr_M + " Assemblers<br>- " + LoDr_Ir + " Iron ingot " + LoDr_Ir_M + " Smelters<br>-- " + LoDr_Ir_Ore + " Iron ore<br>--- " + LoDr_Th + " Thruster " + LoDr_Th_M + " Assembler<br>-- " + LoDr_Th_Co + " Copper ingot " + LoDr_Th_Co_M + " Smelters<br>--- " + LoDr_Th_Co_Ore + " Copper ore<br>-- " + LoDr_Th_St + " Steel " + LoDr_Th_St_M + " Smelters<br>--- " + LoDr_Th_St_Ir + " Iron ingot " + LoDr_Th_St_Ir_M + " Smelters<br>---- " + LoDr_Th_St_Ir_Ore + " Iron ore<br>- " + LoDr_Pro + " Processor " + LoDr_Pro_M + " Assmeblers<br>-- " + LoDr_Pro_Ci + " Circuit board " + LoDr_Pro_Ci_M + " Assemblers<br>--- " + LoDr_Pro_Ci_Co + " Copper ingot " + LoDr_Pro_Ci_Co_M + " Smelters<br>---- " + LoDr_Pro_Ci_Co_Ore + " Copper ore<br>--- " + LoDr_Pro_Ci_Ir + " Iron ingot " + LoDr_Pro_Ci_Ir_M + " Smelters<br>---- " + LoDr_Pro_Ci_Ir_Ore + " Iron ore<br>-- " + LoDr_Pro_My + " Mycrocrystalline component " + LoDr_Pro_My_M + " Assemblers<br>--- " + LoDr_Pro_My_Co + " Copper ingot " + LoDr_Pro_My_Co_M + " Smelters<br>---- " + LoDr_Pro_My_Co_Ore + " Copper ore<br>--- " + LoDr_Pro_My_Si + " Sillicon ingot " + LoDr_Pro_My_Si_M + " Smelters<br>---- " + LoDr_Pro_My_Si_Ore + " Sillicon ore<br>"   
    }
    // check Proliferator mk1
    if (Pr1 > 0) {
      output += Pr1 + " Proliferator mk1 " + Pr1_M + " Assemblers<br>- " + Pr1_Ore + " Coal<br>"
    }
    // check Proliferator mk2
    if (Pr2 > 0) {
      output += Pr2 + " Proliferator mk2 " + Pr2_M + " Assemblers<br>- " + Pr2_Pr1 + " Proliferator mk1 " + Pr2_Pr1_M + " Assemblers<br>-- " + Pr2_Pr1_Ore + " Coal<br>- " + Pr2_Di + " Diamond " + Pr2_Di_M + " Smelters<br>-- " + Pr2_Di_Ore + " Kimberlite ore<br>" 
    }
    // check Proliferator mk3
    if (Pr3 > 0) {
      output += Pr3 + " Proliferator mk3 " + Pr3_M + " Assemblers<br>- " + Pr3_Pr2 + " Proliferator mk2 " + Pr3_Pr2_M + " Assemblers<br>-- " + Pr3_Pr2_Pr1 + " Proliferator mk1 " + Pr3_Pr2_Pr1_M + " Assemblers<br>--- " + Pr3_Pr2_Pr1_Ore + " Coal<br>-- " + Pr3_Pr2_Di + " Diamond " + Pr3_Pr2_Di_M + " Smelters<br>--- " + Pr3_Pr2_Di_Ore + " Kimberlite ore<br>- " + Pr3_Ca + " Carbon nanotube " + Pr3_Ca_M + " Chemical plants<br>-- " + Pr3_Ca_Spi + " Spiniform Stalagmite crystal<br>" 
    }
    // Display the grand total on the page
    document.getElementById("total").innerHTML = output;
  }  
