const Enemy = require("./enemy");
var Global = require("./global");

function EnemyManager(params) {
    this.root = new g.E({scene: Global.scene, x:0.0, y:0.0});
    this.params = params;
    this.enemies = [];
    this.setup();
}

EnemyManager.prototype.setup = function(){
    var len = this.params.length;
    for(var i=0; i< len; i++){
        let param = this.params[i];
        let enemy = new Enemy(param);
        this.root.append(enemy.root);
        this.enemies.push(enemy);
    }
}

EnemyManager.prototype.update = function() {
    var len = this.enemies.length;
    Global.sum = 0;

    for (var i = 0; i < len; i++) {
        var e = this.enemies[i];
        e.update();
    }

    if(Global.is_clicked == false){
        let num_chosen = 0;
        for (var i = 0; i < len; i++) {
            var e = this.enemies[i];
            if(e.is_chosen){
                Global.sum += e.number;
                num_chosen += 1;
            }
        }
        if(Global.sum == 10){
            let se = Global.scene.asset.getAudioById("sound"+String(Global.se_count));
            se.play().changeVolume(0.4);
            Global.se_count += 1;
            if(Global.se_count >3){
                Global.se_count = 1;
            }
            g.game.vars.gameState.score += 100*num_chosen;
            for (var i = 0; i < len; i++) {
                var e = this.enemies[i];
                if(e.is_chosen){
                    e.spr.opacity = 0.0;
                    e.broken = true;
                    e.root.destroy();
                }
            }
        }
        for (var i = 0; i < len; i++) {
            var e = this.enemies[i];
            e.is_chosen = false;
        }
    }
};

module.exports = EnemyManager;