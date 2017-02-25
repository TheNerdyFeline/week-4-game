// wait for doc to load before starting
$ (document).ready();
startGame();

// create start function so game can restart
function startGame() {
    // declare variables
    $("#yourDragon").empty();
    $("#defender").empty();
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

    var drg1 = new dragon(11, 9, 200);
    var drg2 = new dragon(9, 11, 220);
    var drg3 = new dragon(7, 13, 240);
    var drg4 = new dragon(13, 15, 260);
    var drg5 = new dragon(15, 17, 270);

    dragonList.push(drg1, drg2, drg3, drg4, drg5);

    //$("#d1", "#d2", "#d3", "#d4", "#d5").appendTo($("chooseDragon"));

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

    var originalDragons = $(".chooseDragon").clone(true, true);
    $(".chooseDragon").replaceWith(originalDragons);
    
    // when user picks dragon move to yourDragon
    // when user picks enemy move to defender
    $("#d1").click(function() {
	if (!pickDragon && !pickEnemy) {
	    $("#d1").appendTo($("#yourDragon"));
	    myHealth = $("#health1");
	    myAttack = $("#atkPw1");
	    pickDragon = true;
	} else if (!pickEnemy && pickDragon){
	    $("#d1").appendTo($("#defender"));
	    $("#update").html(" ");
	    defHealth = $("#health1");
	    ctAttack = $("#ctAtPw1");
	    pickEnemy = true;
	}
    });
    
    $("#d2").click(function() {
	if (!pickDragon && !pickEnemy) {
	    $("#d2").appendTo($("#yourDragon"));
	    myHealth = $("#health2");
	    myAttack = $("#atkPw2");
	    pickDragon = true;
	} else if (!pickEnemy && pickDragon){
	    $("#d2").appendTo($("#defender"));
	    $("#update").html(" ");
	    defHealth = $("#health2");
	    ctAttack = $("#ctrAtPw2");
	    pickEnemy = true;
	}
    });

    $("#d3").click(function() {
	if (!pickDragon && !pickEnemy) {
	    $("#d3").appendTo($("#yourDragon"));
	    myHealth = "#health3";
	    myAttack = "#atkPw3";
	    pickDragon = true;
	} else if (!pickEnemy && pickDragon){
	    $("#d3").appendTo($("#defender"));
	    $("#update").html(" ");
	    defHealth = "#health3";
	    ctAttack = "#ctrAtPw3";
	    pickEnemy = true;
	}
    });

    $("#d4").click(function() {
	if (!pickDragon && !pickEnemy) {
	    $("#d4").appendTo($("#yourDragon"));
	    myHealth = "#health4";
	    myAttack = "#atkPw4";
	    pickDragon = true;
	} else if (!pickEnemy && pickDragon){
	    $("#d4").appendTo($("#defender"));
	    $("#update").html(" ");
	    defHealth = "#health4";
	    ctAttack = "#ctrAtPw4";
	    pickEnemy = true;
	}
    });

    $("#d5").click(function() {
	if (!pickDragon && !pickEnemy) {
	    $("#d5").appendTo($("#yourDragon"));
	    myHealth = "#health5";
	    myAttack = "#atkPw5";
	    pickDragon = true;
	} else if (!pickEnemy && pickDragon){
	    $("#d5").appendTo($("#defender"));
	    $("#update").html(" ");
	    defHealth = "#health5";
	    ctAttack = "#ctrAtPw5";
	    pickEnemy = true;
	}
    });


    var incAtPw = 0; 

    // when user clicks attack change counters and show info
    $("#attack").click(function() {
	fight();
    });
    function fight() {
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
	} else if (pickEnemy && defDragonHealth <= 0 && wins < 5){
	    $("#update").html("You have defeated this dragon, pick your next dragon to fight");
	    $("#defender").empty();
	    wins++;
	    console.log(wins);
	    pickEnemy = false;
	    
	} else if (myDragonHealth <= 0) {
	    $("#update").html("You lose! Click on reset to try again");
	    $("#reset").show();
	    
	} else if (wins === 4) {
	    $("#update").html("You win!!! click restart to fight again.");
	    $("#reset").show();
	}
    }; //close fight function
}; 


$("#reset").click(function() {
   location.reload();
});

// reset appears when user wins or loses and restarts game
