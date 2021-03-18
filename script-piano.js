document.addEventListener("keydown", function (event) {
    if (event.code == "KeyA"){
        let audioA = new Audio("audio/A.mp3");
        console.log("The 'A' key is pressed.");
        audioA.play();
    } else if (event.code == "KeyS"){
        let audioS = new Audio("audio/S.mp3");
        console.log("The 'S' key is pressed.");
        audioS.play();
    } else if (event.code == "KeyD"){
        let audioD = new Audio("audio/D.mp3");
        console.log("The 'D' key is pressed.");
        audioD.play();
    } else if (event.code == "KeyF"){
        let audioF = new Audio("audio/F.mp3");
        console.log("The 'F' key is pressed.");
        audioF.play();
    } else if (event.code == "KeyG"){
        let audioG = new Audio("audio/G.mp3");
        console.log("The 'G' key is pressed.");
        audioG.play();
    } else if (event.code == "KeyH"){
        let audioH = new Audio("audio/H.mp3");
        console.log("The 'H' key is pressed.");
        audioH.play();
    } else if (event.code == "KeyJ"){
        let audioJ = new Audio("audio/J.mp3");
        console.log("The 'J' key is pressed.");
        audioJ.play();
    } else if (event.code == "KeyW"){
        let audioW = new Audio("audio/W.mp3");
        console.log("The 'W' key is pressed.");
        audioW.play();
    } else if (event.code == "KeyE"){
        let audioE = new Audio("audio/E.mp3");
        console.log("The 'E' key is pressed.");
        audioE.play();
    } else if (event.code == "KeyT"){
        let audioT = new Audio("audio/T.mp3");
        console.log("The 'T' key is pressed.");
        audioT.play();
    } else if (event.code == "KeyY"){
        let audioY = new Audio("audio/Y.mp3");
        console.log("The 'Y' key is pressed.");
        audioY.play();
    } else if (event.code == "KeyU"){
        let audioU = new Audio("audio/U.mp3");
        console.log("The 'U' key is pressed.");
        audioU.play();
    } else {
        console.log("Warning!");
    }
});