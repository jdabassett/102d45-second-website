alert('Are you ready, KIDS!!!???');

const obj1 = {
    "QUESTION":"Do you like gum? YES or NO?",
    "YES":"Well, you have come to the right place!",
    "NO":"Not everyone's perfect. Come on in anyway.",
    "NA":"I don't know what that means. Come on in anyway",
    "RETRY":"I don't understand that response. Give it one more shot!",
    "ANYWAY":"Heck, I don't need to understand. Come on in anyway!",
    "LOVER":"GUM-LOVER AHOY",
    "HATER":"GUM-HATER BEWARE",
    "UNDECIDED":"POTENTIAL GUM-LOVER!"};

function doTheyLikeGum() {
    let userAttempts = 0;
    while (userAttempts<2){
        let userGum = prompt(obj1.QUESTION);
        if (userGum=="YES"){
            alert(obj1.YES);
            return obj1.LOVER;
        } else if (userGum=="NO"){
            alert(obj1.NO);
            return obj1.HATER;
        } else if (userAttempts==1){
            alert(obj1.ANYWAY);
            return obj1.UNDECIDED;
        } else {
            alert(obj1.RETRY);
        }
        userAttempts++;
    }
}

let userStatus = doTheyLikeGum();

alert(userStatus)