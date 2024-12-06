const prompt = require("prompt-sync")(); // Importing the prompt-sync module for user input

// Function to start the game
function startGame() {
    console.log("Welcome to the world of Westeros!");
    const name = prompt("What is your name, traveler? "); // Asking the player's name
    console.log(`Greetings, ${name}. The Seven Kingdoms are in turmoil, and your choices will shape their fate.`);

    const shouldWePlay = prompt(
        "Do you wish to embark on a dangerous journey of power, honor, and survival? (yes/no) "
    ).toLowerCase();

    if (shouldWePlay === "yes") {
        playGame(name);
    } else if (shouldWePlay === "no") {
        console.log("Very well. The realm continues without you. The Iron Throne remains beyond your reach.");
    } else {
        console.log("Invalid input. Perhaps the chaos of Westeros is not for you.");
    }
}

// Function to play the game
function playGame(name) {
    console.log("The realm is in chaos. Kings rise and fall, alliances crumble, and winter is coming...");
    
    let allegiance = prompt(
        "Choose your allegiance:1. House Stark of Winterfell (Honor and Duty)2. House Lannister of Casterly Rock (Power and Wealth)3. House Targaryen, the Dragon Lords (Fire and Ambition)Enter 1, 2, or 3: "
    );

    while (!["1", "2", "3"].includes(allegiance)) {
        allegiance = prompt("Invalid choice. Please enter 1, 2, or 3: ");
    }

    if (allegiance === "1") {
        starkStoryline();
    } else if (allegiance === "2") {
        lannisterStoryline();
    } else if (allegiance === "3") {
        targaryenStoryline();
    }

    console.log("The winds of winter howl across the land. Your decisions have shaped the fate of the realm...");
    console.log(`Farewell, ${name}. May the gods watch over you.`);
    
    const replay = prompt("Would you like to play again? (yes/no): ").toLowerCase();
    if (replay === "yes") {
        startGame();
    } else {
        console.log("Thank you for playing. Goodbye!");
    }
}

// Stark storyline
function starkStoryline() {
    console.log("You have chosen House Stark, guardians of the North. Honor binds you, and winter sharpens your resolve.");
    let starkStart = prompt(
        "Your bannermen bring troubling news: wildlings are raiding villages along the Wall. Do you:1. Ride North to investigate yourself.2. Send your most trusted knight to handle the situation.Enter 1 or 2: "
    );

    while (!["1", "2"].includes(starkStart)) {
        starkStart = prompt("Invalid choice. Please enter 1 or 2: ");
    }

    if (starkStart === "1") {
        console.log("You ride North, braving the harsh winter. As you approach a village, you find it burned to the ground, but tracks lead into the woods.");
        let wildlingDecision = prompt(
            "Do you:1. Follow the tracks to find the raiders.2. Return to Winterfell and call for reinforcements.Enter 1 or 2: "
        );

        while (!["1", "2"].includes(wildlingDecision)) {
            wildlingDecision = prompt("Invalid choice. Please enter 1 or 2: ");
        }

        if (wildlingDecision === "1") {
            console.log("You follow the tracks and discover a band of wildlings led by a mysterious woman claiming to be a messenger of the Night King.");
            let wildlingConfrontation = prompt(
                "Do you:1. Attack them immediately.2. Try to negotiate and learn more about their intentions.Enter 1 or 2: "
            );

            while (!["1", "2"].includes(wildlingConfrontation)) {
                wildlingConfrontation = prompt("Invalid choice. Please enter 1 or 2: ");
            }

            if (wildlingConfrontation === "1") {
                console.log("You charge into battle, but the wildlings are prepared. Though you defeat them, you sustain grave injuries.");
            } else {
                console.log("The woman warns you of an undead army gathering beyond the Wall. You return to Winterfell with this grim news.");
            }
        } else {
            console.log("You return to Winterfell, but by the time reinforcements arrive, the wildlings have vanished.");
        }
    } else {
        console.log("Your knight reports that the wildlings have retreated, but strange symbols were found carved into the trees near the Wall.");
    }
    console.log("Back at Winterfell, your maester reveals an ancient scroll foretelling the rise of the White Walkers...");
}

// Lannister storyline
function lannisterStoryline() {
    console.log("You have chosen House Lannister, where cunning and gold are the keys to power.");
    // Add Lannister storyline here with similar input validation.
    const lannisterStart = getValidInput(
        "The Crown is deeply in debt to your house, and rebellion stirs in the Riverlands. Do you:" +
        "1. Send soldiers to quell the rebellion." +
        "2. Use your gold to bribe the rebel leaders into submission.Enter 1 or 2: ",
        ["1", "2"]
    );

    if (lannisterStart === "1") {
        console.log("Your soldiers crush the rebellion, but at great cost. The Riverlands now seethe with resentment.");
        const lannisterAftermath = getValidInput(
            "Do you:" +
            "1. Enforce harsh measures to keep the Riverlands in line." +
            "2. Send envoys to negotiate peace and rebuild trust.Enter 1 or 2: ",
            ["1", "2"]
        );

        if (lannisterAftermath === "1") {
            console.log("The Riverlands remain quiet under your rule, but whispers of treachery grow louder in King’s Landing.");
        } else {
            console.log("Your envoys secure a fragile peace, but your rivals at court see this as a sign of weakness.");
        }
    } else {
        console.log("Your gold buys the loyalty of the rebel leaders, but rumors of your wealth attract the attention of ambitious rivals.");
        const rivalThreat = getValidInput(
            "Do you:" +
            "1. Uncover the identities of the rivals plotting against you." +
            "2. Fortify your position in court to counter any threats.Enter 1 or 2: ",
            ["1", "2"]
        );

        if (rivalThreat === "1") {
            console.log("Your spies reveal the rivals' identities, allowing you to eliminate them discreetly.");
        } else {
            console.log("Your fortifications strengthen your hold on court, but the cost depletes your treasury.");
        }
    }

    console.log("Meanwhile, a secret plot against the Iron Throne begins to unfold...");
}

// Targaryen storyline
function targaryenStoryline() {
    console.log("You have chosen House Targaryen, the last scions of Valyria. Dragons and fire will be your tools.");
    // Add Targaryen storyline here with similar input validation.
    const targaryenStart = getValidInput(
        "In Essos, your forces grow stronger, but a rival claimant to the Targaryen name has emerged. Do you:" +
        "1. Challenge them to single combat." +
        "2. Send spies to uncover their weaknesses.Enter 1 or 2: ",
        ["1", "2"]
    );

    if (targaryenStart === "1") {
        console.log("You duel the pretender and emerge victorious. Your victory solidifies your claim, but your wounds slow your campaign.");
    } else {
        console.log("Your spies discover that the pretender has ties to powerful merchants. Cutting off their funds weakens their position.");
    }

    const targaryenAlliance = getValidInput(
        "Your dragons grow larger by the day, but an alliance with Dorne could turn the tide in your favor. Do you:" +
        "1. Arrange a marriage to secure the alliance." +
        "2. Send a show of strength with your dragons.Enter 1 or 2: ",
        ["1", "2"]
    );

    if (targaryenAlliance === "1") {
        console.log("The marriage cements an alliance, but your new spouse's loyalty remains uncertain.");
    } else {
        console.log("Your dragons awe the Dornish lords, but their fear may lead to betrayal in the future.");
    }

    console.log("As you sail for Westeros, a storm brews, and your destiny approaches...");
}

// Start the game
startGame();
