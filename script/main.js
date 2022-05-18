var Global = require("./global");
var tutorialscene = require("./tutorialscene");
var mainscene = require("./mainscene");

g.game.vars.gameState = { score: 0 };

exports.main = void 0;
function main(param) {
    Global.isAtsumaru = param.isAtsumaru;
    let scene = tutorialscene();
   // let scene = mainscene();
    g.game.pushScene(scene);
}
exports.main = main;