// var config = {
//     type: Phaser.AUTO,
//     width: 3392,
//     height: 600,
//     zoom: 1,
//     // pixelArt: true,
//     scene: {
//         preload: preload,
//         create: create,
//         update: update,
//         render: render,
//     }
// };

// var game = new Phaser.Game(config);

// function preload() {

//     this.load.tilemapTiledJSON('mario', 'super_mario.json')

//     this.load.image('tiles', 'super_mario.png');

//     this.load.on('progress', function (value) {
//         console.log('Asset loading progress:', value);
//     });
// }

// function create() {

//     //  The 'mario' key here is the Loader key given in game.load.tilemap
//     // var map = this.make.tilemap({ key: 'mario' , tileWidth: 16, tileHeight: 16 });
//     var map = this.add.tilemap('mario');
    
//     map.addTilesetImage('SuperMarioBros-World1-1', 'tiles');
    
//     // Create a blank dynamic layer
//     var layer = map.createLayer('World1', 'tiles');

//     var layerWidth = layer.width;
//     var layerHeight = layer.height;
//     console.log('Layer width: ' + layerWidth);
//     console.log('Layer height: ' + layerHeight);

//     var layerX = layer.x;
//     var layerY = layer.y;
//     console.log('Layer x: ' + layerX);
//     console.log('Layer y: ' + layerY);

//     // Log the layer name and tileset name to the console
//     console.log('Layer name:', map.layers[0].name);
//     console.log('Tileset name:', map.tilesets[0].name);

//     var layerAlpha = layer.alpha;
//     console.log('Layer alpha: ' + layerAlpha);
//     var tilemap = layer.tilemap;
//     console.log(tilemap);

//     layer.setVisible(true);
    
//     this.add.existing(layer);
    

//     //  This resizes the game world to match the layer dimensions
//     if (layer instanceof Phaser.Tilemaps.TilemapLayer) {
//         // layer.resizeWorld();
//     }

//     this.cameras.main.setSize(layer.width, layer.height);

// }

// function update() {

// }

// function render() {

// }

var config = {
    type: Phaser.AUTO,
    width: 1800,
    height: 800,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    pixelArt: false,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var controls;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.tilemapTiledJSON('map1', 'untitled.json');
    this.load.image('tiles1', 'tileset.png');
}

function create ()
{
    var map1 = this.make.tilemap({ key: 'map1' });
    var tileset1 = map1.addTilesetImage('tileset.png', 'tiles1');
    var layer1 = map1.createLayer('layer2', tileset1, 0, 0).setScale(2)

    var cursors = this.input.keyboard.createCursorKeys();

    var controlConfig = {
        camera: this.cameras.main,
        left: cursors.left,
        right: cursors.right,
        up: cursors.up,
        down: cursors.down,
        speed: 0.5
    };

    controls = new Phaser.Cameras.Controls.FixedKeyControl(controlConfig);

    this.cameras.main.setBounds(0, 0, layer1.x + layer1.width, layer1.height * 3);
}

function update (time, delta)
{
    controls.update(delta);
}
