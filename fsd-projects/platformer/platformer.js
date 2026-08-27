$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(60,500,350,10, "lightgreen");
createPlatform(400,500,10,300, "lightgreen");
createPlatform(700,500,10,300, "lightgreen");
createPlatform(700,500,350,10, "lightgreen");
createPlatform(490,630,10,10, "lightgreen");
createCollectable("steve", 490, 600)
createCollectable("diamond", 300, 170, 0.5, 0.7);
createCannon("right", 500, 1500);
createPlatform(1200,400,10,10, "lightgreen");
createPlatform(1100,600,10,10, "lightgreen");
createPlatform(1000,650,10,10, "lightgreen");
createPlatform(900,650,150,10, "lightgreen");
createCollectable("diamond", 950, 600, 0.5, 0.5);
createPlatform(1000,300,10,10, "lightgreen");
createPlatform(800,300,10,10, "lightgreen");
createPlatform(600,200,10,10, "lightgreen");
createCannon("left", 300, 2000);
createCollectable("steve", 590, 160)
createCannon("left", 200, 3000);
createCannon("left", 650, 0.1, 10000, 100, 600, 600, 10)
    // TODO 3 - Create Collectables


    
    // TODO 4 - Create Cannons


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
