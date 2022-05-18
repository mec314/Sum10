var Global = require("./global");

let font = new g.DynamicFont({
    game: g.game,
    fontFamily: "sans-serif",
    size: 80,
});

function Background(){

    this.root = new g.E({scene: Global.scene, x:0.0, y:0.0})
    this.background = new g.FilledRect({
        scene: Global.scene,
        width: g.game.width, 
        height: g.game.height,
        cssColor: Global.color,
      });
 
    this.root.append(this.background);
}

module.exports = Background;