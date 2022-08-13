function shout(string){
    return string.toUpperCase();
}

function whisper(string){
    return string.toLowerCase();
}

function logShout(string){
    console.log(string.toUpperCase());
}

function logWhisper(string){
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string){
    let hearingProblem = "I can't hear you!";
    let sheAccepted = "YES INDEED!";
    let showLove = "I would love to!";
    if (string.toLowerCase(string) === string) {
        return hearingProblem;
    }
    else if (string.toUpperCase(string) === string) {
        return sheAccepted;
    }
    else if ("Let's have dinner together!" === string) {
        return showLove;
    }
}

