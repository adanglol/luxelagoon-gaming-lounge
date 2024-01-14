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
        // Lounge Background Music
        this.load.audio('loungeMusic', '../Assets/gameAssets/sounds/jazzMusic.mp3');

        // Lounge Background Image
        this.load.image('loungeBackground', '../Assets/gameAssets/images/sky.png');


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
        // Lounge Background
        const loungeBackground = this.add.sprite(0,0,'loungeBackground')
        loungeBackground.setOrigin(0,0);
        loungeBackground.setScale(.8);



        // Lounge Background Music
        const loungeMusic = this.sound.add('loungeMusic');
        loungeMusic.setLoop(true);
        loungeMusic.play();
        const loungeText = this.add.text(this.scale.width * .04,this.scale.height * .05,'LuxeLagoon Gaming Lounge',{fontFamily: 'Ultra',fontSize: '6em',color: 'white'});

        // Roulette Button
        const rouletteButton = this.add.text(this.scale.width * .2,this.scale.height * .2,'Roulette',{fontFamily: 'Ultra',fontSize: '4em',color: 'white'});
        rouletteButton.setInteractive();
        rouletteButton.on('pointerdown', () => {
            loungeMusic.stop();
            this.scene.start('Roulette');
        });

        rouletteButton.on('pointerover', () => {
            rouletteButton.setColor('red');
        });

        rouletteButton.on('pointerout', () => {
            rouletteButton.setColor('white');
        });

        // Blackjack Button
        const blackjackButton = this.add.text(this.scale.width * .2,this.scale.height * .3,'Blackjack',{fontFamily: 'Ultra',fontSize: '4em',color: 'white'});
        blackjackButton.setInteractive();
        blackjackButton.on('pointerdown', () => {
            loungeMusic.stop();
            this.scene.start('Blackjack');
        });

        blackjackButton.on('pointerover', () => {
            blackjackButton.setColor('red');
        });

        blackjackButton.on('pointerout', () => {
            blackjackButton.setColor('white');
        });

        // Slots Button
        const slotsButton = this.add.text(this.scale.width * .2,this.scale.height * .4,'Slots',{fontFamily: 'Ultra',fontSize: '4em',color: 'white'});
        slotsButton.setInteractive();
        slotsButton.on('pointerdown', () => {
            loungeMusic.stop();
            this.scene.start('Slots');
        });

        slotsButton.on('pointerover', () => {
            slotsButton.setColor('red');
        });

        slotsButton.on('pointerout', () => {
            slotsButton.setColor('white');
        });

        // Poker Button
        const pokerButton = this.add.text(this.scale.width * .2,this.scale.height * .5,'Poker',{fontFamily: 'Ultra',fontSize: '4em',color: 'white'});
        pokerButton.setInteractive();
        pokerButton.on('pointerdown', () => {
            loungeMusic.stop();
            this.scene.start('Poker');
        });

        pokerButton.on('pointerover', () => {
            pokerButton.setColor('red');
        });

        pokerButton.on('pointerout', () => {
            pokerButton.setColor('white');
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
    update(){

    }

}

class Blackjack extends ConfigureScene {
    constructor() {
        super('Blackjack');
        this.deck = [];
        this.cardSprites = {};
        this.suits = ['Clubs','Diamond','Hearts','Spades'];
        this.ranks = [1,2,3,4,5,6,7,8,9,10,'J','Q','K'];

    }
    create(){
        this.add.text(this.scale.width * .4,this.scale.height * .05,'Blackjack',{fontFamily: 'Ultra',fontSize: '4em',color: 'white'});

        var ranks = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];

        // concat ranks 4 times to create a deck of cards 52 cards
        for (var i = 0; i < 4; i++) {
            this.deck = this.deck.concat(ranks);
        }
        console.log(this.deck);

        // Deal 2 Cards to the player
        var playerHand = [this.deck.splice(this.getRandomCardIndex(),1),this.deck.splice(this.getRandomCardIndex(),1)];
        console.log(playerHand);
        console.log(this.deck);

        // Deal 2 Cards to the dealer
        var dealerHand = [this.deck.splice(this.getRandomCardIndex(),1),this.deck.splice(this.getRandomCardIndex(),1)];
        console.log(dealerHand);
        console.log(this.deck);


    }
    getRandomCardIndex(){
        return Math.floor(Math.random() * this.deck.length);
    }
    update(){}


}

class Slots extends ConfigureScene {

}

class Poker extends ConfigureScene {

}

class Settings extends ConfigureScene {}


var config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.RESIZE,  // Use RESIZE mode to fill the entire browser window
        // parent: 'phaser-example',   // Replace 'phaser-example' with the id of the HTML element containing your game canvas
        autoCenter: Phaser.Scale.CENTER_BOTH, // Center the game in the middle of the screen
        width: '100%',  // Set the width of the game to 100% of the parent container
        height: '100%'  // Set the height of the game to 100% of the parent container
    },
    scene: [ConfigureScene,Lounge,Roulette,Blackjack]  // Add your scene to the configuration
};

var game = new Phaser.Game(config);
