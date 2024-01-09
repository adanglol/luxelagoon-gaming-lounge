console.log("Lounge.js loaded");

// CODE LAYOUT
// -----------
// ConfigureScene - Configure the game
// Lounge - Main menu
// Roulette - Roulette game
// Blackjack - Blackjack game
// Slots - Slots game
// Poker - Poker game 
// config - Phaser configuration
// -----------

// Considerations
// --------------
// responsive design, mobile friendly, mute button - settings button, interactive lounge, bets and chips for games, full screen button


class ConfigureScene extends Phaser.Scene {
    constructor(scenekey) {
        super(scenekey);
    }

    preload() {
        // Webfont script
        this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
    }
    create() {
        WebFont.load({
            google: {
              families: ['Ultra'],
            },
            active: () => {
              game.scene.start('Lounge');
            },
          });
    }
    update() {
    }
}

// Possible Fonts
// Lobster,Roboto SLab , Bangers, luck guy

class Lounge extends ConfigureScene {
    constructor() {
        super('Lounge');
    }
    create(){
        const loungeText = this.add.text(this.scale.width * .2,this.scale.height * .05,'LuxeLagoon Gaming Lounge',{fontFamily: 'Ultra',fontSize: '4em',color: 'white'});

        // Roulette Button
        const rouletteButton = this.add.text(this.scale.width * .2,this.scale.height * .2,'Roulette',{fontFamily: 'Ultra',fontSize: '2em',color: 'white'});
        rouletteButton.setInteractive();
        rouletteButton.on('pointerdown', () => {
            this.scene.start('Roulette');
        });

        // Blackjack Button
        const blackjackButton = this.add.text(this.scale.width * .2,this.scale.height * .3,'Blackjack',{fontFamily: 'Ultra',fontSize: '2em',color: 'white'});
        blackjackButton.setInteractive();
        blackjackButton.on('pointerdown', () => {
            this.scene.start('Blackjack');
        });

        // Slots Button
        const slotsButton = this.add.text(this.scale.width * .2,this.scale.height * .4,'Slots',{fontFamily: 'Ultra',fontSize: '2em',color: 'white'});
        slotsButton.setInteractive();
        slotsButton.on('pointerdown', () => {
            this.scene.start('Slots');
        });

        // Poker Button
        const pokerButton = this.add.text(this.scale.width * .2,this.scale.height * .5,'Poker',{fontFamily: 'Ultra',fontSize: '2em',color: 'white'});
        pokerButton.setInteractive();
        pokerButton.on('pointerdown', () => {
            this.scene.start('Poker');
        });

        // // Settings Button
        // const settingsButton = this.add.text(this.scale.width * .2,this.scale.height * .6,'Settings',{fontFamily: 'Ultra',fontSize: '2em',color: 'white'});
        // settingsButton.setInteractive();
        // settingsButton.on('pointerdown', () => {
        //     this.scene.start('Settings');
        // });


    }
    update(){

    }

}

class Roulette extends ConfigureScene {
    constructor() {
        super('Roulette');
    }
    create(){
        const rouletteText = this.add.text(this.scale.width * .4,this.scale.height * .05,'Roulette',{fontFamily: 'Ultra',fontSize: '4em',color: 'white'});

    }

}

class Blackjack extends ConfigureScene {

}

class Slots extends ConfigureScene {

}

class Poker extends ConfigureScene {

}


var config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.RESIZE,  // Use RESIZE mode to fill the entire browser window
        // parent: 'phaser-example',   // Replace 'phaser-example' with the id of the HTML element containing your game canvas
        autoCenter: Phaser.Scale.CENTER_BOTH, // Center the game in the middle of the screen
        width: '100%',  // Set the width of the game to 100% of the parent container
        height: '100%'  // Set the height of the game to 100% of the parent container
    },
    scene: [ConfigureScene,Lounge,Roulette]  // Add your scene to the configuration
};

var game = new Phaser.Game(config);
