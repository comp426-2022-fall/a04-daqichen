// This is going to be the main file and also 
// where you will put your dice-rolling function(s).

export const roll = (sideNum, diceNum, rollNum) => {
    let rollResult = [];
    for (var i = 0; i < rollNum; i++){
        let curr = 0;
        for (var j = 0; j < diceNum; j++){
            curr += getRandOneDice(sideNum);
        }
        rollResult.push(curr);
    }

    const init = {
        sides: sideNum,
        dice: diceNum,
        rolls: rollNum,
        results: rollResult
    };

    return init;
}

const getRandOneDice = (sides) => {
    return Math.floor(Math.random() * sides) + 1;
}