var Global = require("./global");

let font = new g.DynamicFont({
    game: g.game,
    fontFamily: "sans-serif",
    size: 60,
    fontWeight: "bold"
});


function Enemy(params){
    this.pos = {x: params.x, y: params.y};
    this.root = new g.E({scene: Global.scene, x:0.0, y:0.0});
    this.sound = "sound";
    this.broken = false;
    this.number = params.number;
    this.is_chosen = false;

    this.spr = new g.Label({
        scene: Global.scene,
        font: font,
        text: String(this.number),
        fontSize: 40,
        textColor: "black",
        x: this.pos.x, y:this.pos.y,
        anchorX:0.5, anchorY:0.5
        });
   
    this.waku = new g.Sprite({
        scene: Global.scene,
        src: Global.scene.asset.getImageById("target2"),
        cssColor: "black",
        x:this.pos.x, y:this.pos.y,
        anchorX:0.5, anchorY:0.5,
        scaleX:0.13, scaleY:0.13,
        opacity: 0.7
    });

    this.root.append(this.waku);
    this.root.append(this.spr);
}

Enemy.prototype.update = function(){
    if(this.broken == false){
        //let width = 0.13*570/2-20;
        let width = 15;
        let x1 = Math.min(Global.start_pos.x, Global.end_pos.x);
        let x2 = Math.max(Global.start_pos.x, Global.end_pos.x);
        let y1 = Math.min(Global.start_pos.y, Global.end_pos.y);
        let y2 = Math.max(Global.start_pos.y, Global.end_pos.y);

        let x_flag = ((x1 - this.pos.x-width)*(x2 - this.pos.x+width)<0)
        let y_flag = ((y1 - this.pos.y-width)*(y2 - this.pos.y+width)<0)

        /*
        let x_flag = ((Global.start_pos.x - this.pos.x)*(Global.end_pos.x - this.pos.x)<0)
        let y_flag = ((Global.start_pos.y - this.pos.y)*(Global.end_pos.y - this.pos.y)<0)
        */
        if(x_flag && y_flag){
            this.is_chosen = true; 
        }else{
            this.is_chosen = false;
        }
    }
}

module.exports = Enemy;