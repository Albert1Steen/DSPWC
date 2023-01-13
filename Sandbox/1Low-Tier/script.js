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
    var Ir = document.getElementById("Ir").value;
    var St = document.getElementById("St").value;
    var Ma = document.getElementById("Ma").value;
    var Co = document.getElementById("Co").value;
    var Si = document.getElementById("Si").value;
    var GrR = document.getElementById("GrR").value;
    var Di = document.getElementById("Di").value;
    var Ti = document.getElementById("Ti").value;
    var Br = document.getElementById("Br").value;
    var Gl = document.getElementById("Gl").value;
    var Pr = document.getElementById("Pr").value;
    var SiC = document.getElementById("SiC").value;
    var Ge = document.getElementById("Ge").value;
    var MaC = document.getElementById("MaC").value;
    var Ci = document.getElementById("Ci").value;
    var My = document.getElementById("My").value;
    var TiC = document.getElementById("TiC").value;
    var Ph = document.getElementById("Ph").value;
    var Gr = document.getElementById("Gr").value;
    var Ca = document.getElementById("Ca").value;
    var HyF = document.getElementById("HyF").value;


    // Set recipes, amount of machines are time of recipe (recipe takes 3 seconds, it takes 3 machines for 1 output/s)
    // Set recipes, resource is per 1 item output (1 iron ore for 1 iron ingot, 3 iron ingot for 1 steel)
    // set the recipe for iron ingots
    var Ir_Ore = Ir * 1;
    var Ir_M = Ir * 1;
    // set the recipe for steel
    var St_Ir = St * 3;
    var St_Ir_Ore = St_Ir;
    var St_M = St * 3;
    var St_Ir_M = St_Ir;
    // set the recipe for magnets
    var Ma_Ore = Ma *1;
    var Ma_M = Ma * 1.5;
    // set the recipe for copper ingots
    var Co_M = Co * 1;      
    var Co_Ore = Co * 1;
    // set the recipe for sillicon ingots
    var Si_M = Si * 2;
    var Si_Ore = Si * 2;
    // set the recipe for graphene rods
    var GrR_Ore = GrR * 2;
    var GrR_M = GrR * 2;
    // set the recipe for diamonds
    var Di_Ore = Di * 0.5;
    var Di_M = Di * 0.75;
    // set the recipe for titanium ingot
    var Ti_Ore = Ti * 2;
    var Ti_M = Ti * 2
    // set the recipe for brick
    var Br_Ore = Br * 1;
    var Br_M = Br * 1;
    // set the recipe for glass
    var Gl_Ore = Gl * 2;
    var Gl_M = Gl * 2;
    // set the recipe for prism
    var Pr_M = Pr * 1;
    var Pr_Gl = Pr * 1.5;
    var Pr_Gl_M = Pr_Gl * 2; 
    var Pr_Gl_Ore = Pr_Gl * 2;
    // set the recipe for sillicon crystal
    var SiC_M = SiC * 0.75;
    var SiC_Ore = SiC * 0.5;
    // set the recipe for gear
    var Ge_M = Ge * 1;
    var Ge_Ir = Ge *1;
    var Ge_Ir_M = Ge_Ir * 1;
    var Ge_Ir_Ore = Ge_Ir * 1;
    // set the recipe for magnetic coil
    var MaC_M = MaC * 0.5;
    var MaC_Ma = MaC * 1;
    var MaC_Co = MaC * 0.5;
    var MaC_Ma_M = MaC_Ma * 1.5;
    var MaC_Ma_Ore = MaC_Ma * 1;
    var MaC_Co_M = MaC_Co * 1;
    var MaC_Co_Ore = MaC_Co * 1;
    // set the recipe for circuit board
    var Ci_M = Ci * 0.5;
    var Ci_Ir = Ci * 1;
        var Ci_Ir_M = Ci_Ir * 1;
        var Ci_Ir_Ore = Ci_Ir * 1;        
      var Ci_Co = Ci * 0.5;
        var Ci_Co_M = Ci_Co * 1;
        var Ci_Co_Ore = Ci_Co * 1;
    // set the recipe for mycrocrystalline component
    var My_M = My * 2;
      var My_Si = My * 2;
       var My_Si_M = My_Si * 2;
       var My_Si_Ore = My_Si * 2;        
     var My_Co = My * 1;
       var My_Co_M = My_Co * 1;
       var My_Co_Ore = My_Co * 1;
    // set the recipe for titanium crystal
    var TiC_M = TiC * 4;
      var TiC_Org = TiC * 1;
      var TiC_Ti = TiC * 4;
       var TiC_Ti_M = TiC_Ti * 2;
       var TiC_Ti_Ore = TiC_Ti * 2;
    // set the recipe for photon combiner
    var Ph_M = Ph * 3;
      var Ph_Opt = Ph * 1;
      var Ph_Ci = Ph * 1;
       var Ph_Ci_M = Ph_Ci * 0.5;
       var Ph_Ci_Ir = Ph_Ci * 1;
         var Ph_Ci_Ir_M = Ph_Ci_Ir * 1;
         var Ph_Ci_Ir_Ore = Ph_Ci_Ir * 1;        
       var Ph_Ci_Co = Ph_Ci * 0.5;
         var Ph_Ci_Co_M = Ph_Ci_Co * 1;
         var Ph_Ci_Co_Ore = Ph_Ci_Co * 1;
    // set the recipe for graphene (+hydrogen)
    var Gr_M = Gr * 1;
    var Gr_Hy = Gr * 0.5;
      var Gr_Fi = Gr * 1;
    // set the recipe for carbon nanotube
    var Ca_M = Ca * 2;
    var Ca_Spi = Ca * 3;
    // set the recipe for hydrogen fuel rod
    var HyF_M = HyF * 3;
      var HyF_Hy = HyF * 5;
      var HyF_Ti = HyF * 0.5;
        var Hyf_Ti_Ore = HyF_Ti * 2;
        var HyF_Ti_M = HyF_Ti * 2;

    // Initialize the output string
    var output = "";

    // Check Iron Ingots
    if (Ir > 0) {
      output += Ir + " Iron ingot " + Ir_M + " Smelters <br>- " + Ir_Ore + " Iron ore<br>" ;
    }
    // Check Steel
    if (St > 0) {
      output += St + " Steel " + St_M + " Smelters <br>- "+ St_Ir + " Iron ingot " + St_Ir_M + " Smelters <br>-- "+ St_Ir_Ore + " Iron ore<br>";
    }   
    // Check Magnets
    if (Ma > 0) {
      output += Ma + " Magnet " + Ma_M + " Smelters <br>- " + Ma_Ore + " Iron ore<br>" 
    }
    // Check Copper Ingots
    if (Co > 0) {
      output += Co + " Copper ingot " + Co_M + " Smelters <br>- "+ Co_Ore + " Copper ore<br>" ;
    }
    // Check sillicon ingots
    if (Si > 0) {
      output += Si + " Sillicon ingot " + Si_M + " Smelters <br>- " + Si_Ore + " Sillicon ore<br>"
    }

    // Check graphene rods
    if (GrR > 0) {
      output += GrR + " Graphene rod " + GrR_M + " Smelters <br>- " + GrR_Ore + " Coal<br>"
    }    
    // Check diamonds
    if (Di > 0) {
      output += Di + " Diamond " + Di_M + " Smelters <br>- " + Di_Ore + " Kimberlite ore<br>"
    }
    // Check titanium ingot
    if (Ti > 0) {
      output += Ti + " Titanium " + Ti_M + " Smelters <br>- " + Ti_Ore + " Titanium ore<br>" 
    }
    // Check brick
    if (Br > 0) {
      output += Br + " Brick " + Br_M + " Smelters <br>- " + Br_Ore + " Stone<br>"
    }
    // Check glass
    if (Gl > 0) {
      output += Gl + " Glass " + Gl_M + " Smelters <br>- " + Gl_Ore + " Stone<br>"
    }
    // Check prism
    if (Pr > 0) {
      output += Pr + " Prism " + Pr_M + " Assemblers <br>- "+ Pr_Gl + " Glass " + Pr_Gl_M + " Smelters<br>-- " + Pr_Gl_Ore + " Stone <br>" ;
    }
    // Check sillicon crystal
    if (SiC > 0) {
      output += SiC + " Sillicon crystal " + SiC_M + " Smelters <br>- " + SiC_Ore + " Fractionated sillicon<br>"
    }
    // Check gear
    if (Ge > 0) {
      output += Ge + " Gear " + Ge_M + " Assemblers<br>- " + Ge_Ir + " Iron ingot" + Ge_Ir_M + " Smelters <br>-- " + Ge_Ir_Ore + " Iron ore<br>"
    }
    // Check magnetic coil
    if (MaC > 0) {
      output += MaC + " Magnetic coil " + MaC_M + " Assemblers<br>- " + MaC_Ma + " Magnet " + MaC_Ma_M + " Smelters<br>-- " + MaC_Ma_Ore + " Iron ore<br>- " + MaC_Co + " Copper ingot " + MaC_Co_M + " Smelters<br>-- " + MaC_Co_Ore + " Copper ore<br>" 
    }
    // Check circuit board
    if (Ci > 0) {
      output += Ci + " Circuit board " + Ci_M + " Assemblers<br>- " + Ci_Ir + " Iron ingot " + Ci_Ir_M + " Smelters<br>-- " + Ci_Ir_Ore + " Iron ore <br>- " + Ci_Co + " Copper ingot " + Ci_Co_M + " Smelters <br>-- " + Ci_Co_Ore + " Copper ore <br>" 
    }
    // Check mycrocrystalline component
    if (My > 0) {
      output += My + " Mycrocrystalline component " + My_M + " Assemblers<br>- " + My_Co + " Copper ingot " + My_Co_M + " Smelter<br>-- " + My_Co_Ore + " Copper ore<br>- " + My_Si + " Sillicon ingot " + My_Si_M + " Smelters<br>-- " + My_Si_Ore + " Sillicon ore<br>"
    }
    // Check titanium crystal
    if (TiC > 0) {
      output += TiC + " Titanium crystal " + TiC_M + " Assemblers<br>- " + TiC_Org + " Organic crystal<br>- " + TiC_Ti + " Titanium ingot " + TiC_Ti_M + " Smelters<br>-- " + TiC_Ti_Ore + " Titanium ore<br>" 
    }
    // Check photon combiner
    if (Ph > 0) {
      output += Ph + " Photon combiner " + Ph_M + " Assemblers<br>- " + Ph_Opt + " Optical grading crystal<br>- " + Ph_Ci + " Circuit board " + Ph_Ci_M + " Assemblers<br>-- " + Ph_Ci_Co + " Copper ingot " + Ph_Ci_Co_M + " Smelters<br>--- " + Ph_Ci_Co_Ore + " Copper ore<br>-- " + Ph_Ci_Ir + " Iron ingot " + Ph_Ci_Ir_M + " Smelting<br>--- "+ Ph_Ci_Ir_Ore + " Iron ore<br>" 
    }
    // Check graphene (+hydrogen)
    if (Gr > 0) {
      output += Gr + " Graphene and " + Gr_Hy + " Hydrogen " + Gr_M + " Chemical plants<br>- " + Gr_Fi + " Fire ice<br>"
    }
    // Check carbon nanotube
    if (Ca > 0) {
      output += Ca + " Carbon nanotube " + Ca_M + " Chemical plants<br>- " + Ca_Spi + " Spiniform crystal<br>"
    }
    // Check hydrogen fuel rod
    if (HyF > 0) {
      output += HyF + " Hydrogen fuel rod " + HyF_M + " Chemical plants<br>- " + HyF_Hy + " Hydrogen<br>- " + HyF_Ti + " Titanium ingot " + HyF_Ti_M + " Smelters<br>-- " + Hyf_Ti_Ore + " Titanium ore<br>"
    }
  
    // Display the grand total on the page
    document.getElementById("total").innerHTML = output;
  }     