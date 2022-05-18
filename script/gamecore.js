var Global = require("./global");
var Enemy = require("./enemy");

var lw = 3;

function Gamecore(){
    this.root = new g.E({scene: Global.scene, x:0.0, y:0.0});
    this.setup_lines();

    /*
    let param = {x:g.game.width/2, y:g.game.height/2, number:3}
    this.number = new Enemy(param);
    this.root.append(this.number.root);

    let param2 = {x:g.game.width/2+100, y:g.game.height/2, number:5}
    this.number2 = new Enemy(param2);
    this.root.append(this.number2.root);

    let param3 = {x:g.game.width/2+200, y:g.game.height/2, number:5}
    this.number3 = new Enemy(param3);
    this.root.append(this.number3.root);
    */


    //this.setup_numbers();
}

Gamecore.prototype.setup_lines = function(){
    this.horizontal_line1 = new g.FilledRect({
        scene: Global.scene,
        width: lw,
        height: lw,
        cssColor: "black",
        x:10,
        y:100,
        opacity: 0.0
    });
    this.root.append(this.horizontal_line1);

    this.horizontal_line2 = new g.FilledRect({
        scene: Global.scene,
        width: lw,
        height: lw,
        cssColor: "black",
        x:10,
        y:100,
        opacity: 0.0
    });
    this.root.append(this.horizontal_line2);

    this.vertical_line1 = new g.FilledRect({
        scene: Global.scene,
        width: lw,
        height: lw,
        cssColor: "black",
        x:10,
        y:100,
        opacity: 0.0
    });
    this.root.append(this.vertical_line1);

    this.vertical_line2 = new g.FilledRect({
        scene: Global.scene,
        width: lw,
        height: lw,
        cssColor: "black",
        x:10,
        y:100,
        opacity: 0.0
    });
    this.root.append(this.vertical_line2);
}

Gamecore.prototype.update = function(){
    let _this = this;
    if(Global.is_clicked){
        _this.horizontal_line1.width = Math.abs(Global.start_pos.x - Global.end_pos.x);
        _this.horizontal_line1.x = Math.min(Global.start_pos.x,Global.end_pos.x);
        _this.horizontal_line1.y = Global.start_pos.y;
        _this.horizontal_line1.opacity = 1.0;

        _this.horizontal_line2.width = Math.abs(Global.start_pos.x - Global.end_pos.x);
        _this.horizontal_line2.x = Math.min(Global.start_pos.x,Global.end_pos.x);
        _this.horizontal_line2.y = Global.end_pos.y;
        _this.horizontal_line2.opacity = 1.0;

        _this.vertical_line1.height = Math.abs(Global.start_pos.y - Global.end_pos.y);
        _this.vertical_line1.x = Global.start_pos.x;
        _this.vertical_line1.y = Math.min(Global.start_pos.y,Global.end_pos.y);
        _this.vertical_line1.opacity = 1.0;

        _this.vertical_line2.height = Math.abs(Global.start_pos.y - Global.end_pos.y)+lw;
        _this.vertical_line2.x = Global.end_pos.x;
        _this.vertical_line2.y = Math.min(Global.start_pos.y,Global.end_pos.y);
        _this.vertical_line2.opacity = 1.0;
    }else{
        _this.horizontal_line1.opacity = 0.0;
        _this.horizontal_line2.opacity = 0.0;
        _this.vertical_line1.opacity = 0.0;
        _this.vertical_line2.opacity = 0.0;
    }
}

module.exports = Gamecore;