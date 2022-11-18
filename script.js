alert('Are you ready, KIDS!!!???');

const obj1 = {
    "QUESTION1":"Do you like gum? YES or NO?",
    "QUESTION2":"Let's try this again. Do you like gum? YES or NO?",
    "QUESTION3":".  Oh and how many stick of gum do you have in your pockets right now?",
    "YES":"Well, you have come to the right place!",
    "NO":"Not everyone's perfect. Come on in anyway.",
    "NA":"I don't know what that means. Come on in anyway",
    "RETRY":"I don't understand that response. Give it one more shot!",
    "ANYWAY":"Heck, I don't need to understand. Come on in anyway!",
    "LOVER":"GUM-LOVER AHOY",
    "HATER":"GUM-HATER BEWARE",
    "UNDECIDED":"POTENTIAL GUM-LOVER!"};

function doTheyLikeGum() {
    let userGum = prompt(obj1.QUESTION1);
    let userSticks;

    while ((userGum != "YES") && (userGum != "NO") && (userGum != null)){
        userGum = prompt(obj1.QUESTION2);
    }

    if (userGum=="YES"){
        userSticks = prompt(obj1.LOVER + obj1.QUESTION3);
    } else if (userGum=="NO"){
        userSticks = prompt(obj1.HATER + obj1.QUESTION3);
    }

    for (let i = 0; i < userSticks; i++){
        document.write("<img src='doublemint.png' alt='doublement' />");
    }
}

let userStatus = doTheyLikeGum();


