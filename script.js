//Insult Generator Javascript

function getInsult () {

    //Get the words:
    var wordBankA = [
        ["Skanky", "Dappy", "Raging", "Dirty", "Filthy", "Greasy", "Grimy", "Sloppy", "Shabby", "Lazy"],
        ["Scatty", "Blathering", "Gobby", "Feeble", "Moronic", "Dreggy", "Cruddy", "Dingy", "Grubby", "Smutty"],
        ["Lobotomised", "Imbecilic", "Incontinent", "Infantile", "Slovenly", "Squalid", "Unsightly", "Delipidated", "Apathetic"]
    ];
    var wordBankB = [
        ["scum", "twit", "crud", "scud", "smudge", "scuz", "sludge", "dust", "lard"],
        ["jizz", "tit", "dick", ],
        ["fuck", "shit", "twat", "wank", "piss"]
    ];
    var wordBankC = ["tard", "lark", "wit", "mite", "lick", "biscuit", "fig", "marshal", "wig", "squidge", "monkey", "gibbon", "whippet", "rabbit", "bucket"];

    //Get the smartness and dirtiness values:
    var smartVal = document.getElementById('smart-input').value;
    var dirtyVal = document.getElementById('dirty-input').value;

    //Generate word arrays based on these:
    var insultArrays = [wordBankA[smartVal], wordBankB[dirtyVal], wordBankC];

    //Generate random words from arrays:
    var finalPhrase = [];
    for (i = 0; i < insultArrays.length; i++) {
        var currentArray = insultArrays[i];
        var word = currentArray[Math.floor(Math.random() * currentArray.length)];
        finalPhrase.push(word);
    };
    
    //Post them to the text box:
    document.getElementById('text').textContent = finalPhrase[0] + " " + finalPhrase[1] + finalPhrase[2];

};


function toggleIcons() {
    var iconContainer = document.getElementById('social-media-icon-container');

    if (iconContainer.className == "container-closed") {
        iconContainer.className = "container-open";
    } else {
        iconContainer.className = "container-closed"
    };
};