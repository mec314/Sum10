var Global = require("./global");
var mainscene = require("./mainscene");

let font = new g.DynamicFont({
    game: g.game,
    fontFamily: "sans-serif",
    size: 60,
});

function TutorialScene(){
    let time = 0;
    var scene = new g.Scene({
        game: g.game,
        assetPaths:["/audio/*", "/image/*"]
    });

    Global.scene = scene;

    scene.onLoad.add(function(){

        let root = new g.Sprite({
            scene: scene,
            src: scene.asset.getImageById("tutorial_img"),
            anchorX:0.5, anchorY:0.5,
            touchable: true,
            x: g.game.width/2, y:g.game.height/2,
        })

        scene.append(root);
    })

    scene.onUpdate.add(function(){
        time += 1/g.game.fps;
        if(time > 6.0){
            g.game.replaceScene(mainscene());
        }
    });

    return scene;
}

module.exports = TutorialScene;