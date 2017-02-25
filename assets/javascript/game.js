// wait for doc to load before starting
$ (document).ready();

// declare variables
var pickDragon = false;
var pickEnemy = false;
var dragonList = [];
var wins = 0;
var myHealth, myAttack;
var defHealth, ctAttack;
var myDragon, enemyDragon;
//create object for dragons
function dragon(attack, counter, healthPoints) {
    this.attackPower = attack;
    this.ctAttack = counter;
    this.healthPoints = healthPoints;
}

var drg1 = new dragon(7, 10, 150);
var drg2 = new dragon(9, 12, 200);
var drg3 = new dragon(11, 14, 250);
var drg4 = new dragon(13, 16, 300);
var drg5 = new dragon(15, 18, 350);

dragonList.push(drg1, drg2, drg3, drg4, drg5);

// show dragon info in html
$("#atkPw1").html(drg1.attackPower);
$("#atkPw2").html(drg2.attackPower);
$("#atkPw3").html(drg3.attackPower);
$("#atkPw4").html(drg4.attackPower);
$("#atkPw5").html(drg5.attackPower);
$("#ctrAtPw1").html(drg1.ctAttack);
$("#ctrAtPw2").html(drg2.ctAttack);
$("#ctrAtPw3").html(drg3.ctAttack);
$("#ctrAtPw4").html(drg4.ctAttack);
$("#ctrAtPw5").html(drg5.ctAttack);
$("#health1").html(drg1.healthPoints);
$("#health2").html(drg2.healthPoints);
$("#health3").html(drg3.healthPoints);
$("#health4").html(drg4.healthPoints);
$("#health5").html(drg5.healthPoints);

$("#reset").hide();

var originalDragons = $("#chooseDragon").clone(true, true);
var originalArena = $("#fightArena").clone(true, true);

// build on click function to see if any .dragon clicked
// when user picks dragon move to yourDragon
$("#d1").on("click",function() {
    if (!pickDragon && !pickEnemy) {
	$("#d1").appendTo($("#yourDragon"));
	myHealth = $("#health1");
	myAttack = $("#atkPw1");
	pickDragon = true;
    } else if (!pickEnemy && pickDragon){
	$("#d1").appendTo($("#defender"));
	defHealth = $("#health1");
	ctAttack = $("#ctAtPw1");
	pickEnemy = true;
    }
});
	   
$("#d2").on("click",function() {
    if (!pickDragon && !pickEnemy) {
	$("#d2").appendTo($("#yourDragon"));
	myHealth = $("#health2");
	myAttack = $("#atkPw2");
	pickDragon = true;
    } else if (!pickEnemy && pickDragon){
	$("#d2").appendTo($("#defender"));
	defHealth = $("#health2");
	ctAttack = $("#ctrAtPw2");
	pickEnemy = true;
    }
});

$("#d3").on("click",function() {
    if (!pickDragon && !pickEnemy) {
	$("#d3").appendTo($("#yourDragon"));
	myHealth = "#health3";
	myAttack = "#atkPw3";
	pickDragon = true;
    } else if (!pickEnemy && pickDragon){
	$("#d3").appendTo($("#defender"));
	defHealth = "#health3";
	ctAttack = "#ctrAtPw3";
	pickEnemy = true;
    }
});

$("#d4").on("click",function() {
    if (!pickDragon && !pickEnemy) {
	$("#d4").appendTo($("#yourDragon"));
	myHealth = "#health4";
	myAttack = "#atkPw4";
	pickDragon = true;
    } else if (!pickEnemy && pickDragon){
	$("#d4").appendTo($("#defender"));
	defHealth = "#health4";
	ctAttack = "#ctrAtPw4";
	pickEnemy = true;
    }
});

$("#d5").on("click",function() {
    if (!pickDragon && !pickEnemy) {
	$("#d5").appendTo($("#yourDragon"));
	myHealth = "#health5";
	myAttack = "#atkPw5";
	pickDragon = true;
    } else if (!pickEnemy && pickDragon){
	$("#d5").appendTo($("#defender"));
	defHealth = "#health5";
	ctAttack = "#ctrAtPw5";
	pickEnemy = true;
    }
});

var incAtPw = 0; 

// when user clicks attack change counters and show info
$("#attack").on("click", function(){
    var myDragonHealth= $(myHealth).html();
    var myAtPw = $(myAttack).html();
    var defDragonHealth = $(defHealth).html();
    var defDragonCt = $(ctAttack).html();
    if (myDragonHealth > 0 && defDragonHealth > 0) {
	incAtPw = parseInt(incAtPw) + parseInt(myAtPw);
	defDragonHealth = parseInt(defDragonHealth) - parseInt(incAtPw);
	myDragonHealth = parseInt(myDragonHealth) - parseInt(defDragonCt);
	$(myHealth).html(myDragonHealth);
	$(defHealth).html(defDragonHealth);
	console.log(wins);
    } else if (defDragonHealth <= 0){
	$("#update").html("You have defeated this dragon, pick your next dragon to fight");
	$("#defender").empty();
	wins++;
	console.log(wins);
	pickEnemy = false;
	
    } else if (myDragonHealth <= 0) {
	$("#update").html("You lose! Click on reset to try again");
	$("#reset").show();
	
    } else if (wins === 4); {
	$("#update").html("You win!!! click restart to fight again.");
	$("#reset").show();
    }
});

$("#reset").on("click", function() {
    $("#chooseDragon").replaceWith(originalDragons);
    $("#fightArena").replaceWith(originalArena);
    pickDragon = false;
    pickEnemy = false;
});

// reset appears when user wins or loses and resets all counters
