function shout(string){
    const word =  string.toUpperCase()
    return word;
}
function whisper(string){
    const word = string.toLowerCase();
    return word;
}
function logShout(string){
    const word =string.toUpperCase();
    console.log(word);
}
function logWhisper(string){
    const word = string.toLowerCase();
    console.log(word);
}
function sayHiToHeadphonedRoommate(string){
  
    if (string === string.toLowerCase()){
        return "I can't hear you!"
    }
    else if(string === string.toUpperCase()){
        return "YES INDEED!";
    }
    else if (string === "Let's have dinner together!" )
    {
        return "I would love to!";
    }
}
