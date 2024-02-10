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


// Include Cursor Script 
var script = document.createElement('script');
script.src = '../JS/Cursor.js';
document.head.appendChild(script);

// Path to the red and blue cursor images
// red when hover blue not hover
const redCursor = 'url(../Assets/images/buttons/Cursor/outlines/cursor_outline_red.png), pointer';
const blueCursor = 'url(../Assets/images/buttons/Cursor/outlines/cursor_outline_blue.png), pointer';

class ConfigureScene extends Phaser.Scene {
    constructor(scenekey) {
        super(scenekey);
        this.deck = ['ClubsA','Clubs2','Clubs3','Clubs4','Clubs5','Clubs6','Clubs7','Clubs8','Clubs9','Clubs10','ClubsJ','ClubsQ','ClubsK',
        'DiamondsA','Diamonds2','Diamonds3','Diamonds4','Diamonds5','Diamonds6','Diamonds7','Diamonds8','Diamonds9','Diamonds10','DiamondsJ','DiamondsQ','DiamondsK',
        'HeartsA','Hearts2','Hearts3','Hearts4','Hearts5','Hearts6','Hearts7','Hearts8','Hearts9','Hearts10','HeartsJ','HeartsQ','HeartsK',
        'SpadesA','Spades2','Spades3','Spades4','Spades5','Spades6','Spades7','Spades8','Spades9','Spades10','SpadesJ','SpadesQ','SpadesK'];
    }

    preload() {
        // Webfont script
        this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
        // Lounge Background Music
        this.load.audio('loungeMusic', '../Assets/gameAssets/sounds/jazzMusic.mp3');

        // Lounge Background Image
        this.load.image('loungeBackground', '../Assets/gameAssets/images/sky.png');

        // Star Image for the cursor
        this.load.image('star', '../Assets/images/buttons/star.png');

        // Back of the card
        this.load.image('backOfCard', '../Assets/gameAssets/images/LargeCards/Back Blue 1.png');
        this.load.image('redCard', '../Assets/gameAssets/images/LargeCards/Back Red 1.png');



        // C:\Users\adrag\OneDrive\Desktop\Projects\luxelagoon-gaming-lounge\Assets\gameAssets\images\LargeCards\Back Blue 1.png
        // Adding card images
        this.load.image('ClubsA', '../Assets/gameAssets/images/LargeCards/Clubs 1.png');
        this.load.image('Clubs2', '../Assets/gameAssets/images/LargeCards/Clubs 2.png');
        this.load.image('Clubs3', '../Assets/gameAssets/images/LargeCards/Clubs 3.png');
        this.load.image('Clubs4', '../Assets/gameAssets/images/LargeCards/Clubs 4.png');
        this.load.image('Clubs5', '../Assets/gameAssets/images/LargeCards/Clubs 5.png');
        this.load.image('Clubs6', '../Assets/gameAssets/images/LargeCards/Clubs 6.png');
        this.load.image('Clubs7', '../Assets/gameAssets/images/LargeCards/Clubs 7.png');
        this.load.image('Clubs8', '../Assets/gameAssets/images/LargeCards/Clubs 8.png');
        this.load.image('Clubs9', '../Assets/gameAssets/images/LargeCards/Clubs 9.png');
        this.load.image('Clubs10', '../Assets/gameAssets/images/LargeCards/Clubs 10.png');
        this.load.image('ClubsJ', '../Assets/gameAssets/images/LargeCards/Clubs 11.png');
        this.load.image('ClubsQ', '../Assets/gameAssets/images/LargeCards/Clubs 12.png');
        this.load.image('ClubsK', '../Assets/gameAssets/images/LargeCards/Clubs 13.png');

        this.load.image('DiamondsA', '../Assets/gameAssets/images/LargeCards/Diamond 1.png');
        this.load.image('Diamonds2', '../Assets/gameAssets/images/LargeCards/Diamond 2.png');
        this.load.image('Diamonds3', '../Assets/gameAssets/images/LargeCards/Diamond 3.png');
        this.load.image('Diamonds4', '../Assets/gameAssets/images/LargeCards/Diamond 4.png');
        this.load.image('Diamonds5', '../Assets/gameAssets/images/LargeCards/Diamond 5.png');
        this.load.image('Diamonds6', '../Assets/gameAssets/images/LargeCards/Diamond 6.png');
        this.load.image('Diamonds7', '../Assets/gameAssets/images/LargeCards/Diamond 7.png');
        this.load.image('Diamonds8', '../Assets/gameAssets/images/LargeCards/Diamond 8.png');
        this.load.image('Diamonds9', '../Assets/gameAssets/images/LargeCards/Diamond 9.png');
        this.load.image('Diamonds10', '../Assets/gameAssets/images/LargeCards/Diamond 10.png');
        this.load.image('DiamondsJ', '../Assets/gameAssets/images/LargeCards/Diamond 11.png');
        this.load.image('DiamondsQ', '../Assets/gameAssets/images/LargeCards/Diamond 12.png');
        this.load.image('DiamondsK', '../Assets/gameAssets/images/LargeCards/Diamond 13.png');

        this.load.image('HeartsA', '../Assets/gameAssets/images/LargeCards/Hearts 1.png');
        this.load.image('Hearts2', '../Assets/gameAssets/images/LargeCards/Hearts 2.png');
        this.load.image('Hearts3', '../Assets/gameAssets/images/LargeCards/Hearts 3.png');
        this.load.image('Hearts4', '../Assets/gameAssets/images/LargeCards/Hearts 4.png');
        this.load.image('Hearts5', '../Assets/gameAssets/images/LargeCards/Hearts 5.png');
        this.load.image('Hearts6', '../Assets/gameAssets/images/LargeCards/Hearts 6.png');
        this.load.image('Hearts7', '../Assets/gameAssets/images/LargeCards/Hearts 7.png');
        this.load.image('Hearts8', '../Assets/gameAssets/images/LargeCards/Hearts 8.png');
        this.load.image('Hearts9', '../Assets/gameAssets/images/LargeCards/Hearts 9.png');
        this.load.image('Hearts10', '../Assets/gameAssets/images/LargeCards/Hearts 10.png');
        this.load.image('HeartsJ', '../Assets/gameAssets/images/LargeCards/Hearts 11.png');
        this.load.image('HeartsQ', '../Assets/gameAssets/images/LargeCards/Hearts 12.png');
        this.load.image('HeartsK', '../Assets/gameAssets/images/LargeCards/Hearts 13.png');

        this.load.image('SpadesA', '../Assets/gameAssets/images/LargeCards/Spades 1.png');
        this.load.image('Spades2', '../Assets/gameAssets/images/LargeCards/Spades 2.png');
        this.load.image('Spades3', '../Assets/gameAssets/images/LargeCards/Spades 3.png');
        this.load.image('Spades4', '../Assets/gameAssets/images/LargeCards/Spades 4.png');
        this.load.image('Spades5', '../Assets/gameAssets/images/LargeCards/Spades 5.png');
        this.load.image('Spades6', '../Assets/gameAssets/images/LargeCards/Spades 6.png');
        this.load.image('Spades7', '../Assets/gameAssets/images/LargeCards/Spades 7.png');
        this.load.image('Spades8', '../Assets/gameAssets/images/LargeCards/Spades 8.png');
        this.load.image('Spades9', '../Assets/gameAssets/images/LargeCards/Spades 9.png');
        this.load.image('Spades10', '../Assets/gameAssets/images/LargeCards/Spades 10.png');
        this.load.image('SpadesJ', '../Assets/gameAssets/images/LargeCards/Spades 11.png');
        this.load.image('SpadesQ', '../Assets/gameAssets/images/LargeCards/Spades 12.png');
        this.load.image('SpadesK', '../Assets/gameAssets/images/LargeCards/Spades 13.png');

        // Background image blackjack
        
        this.load.image('blackjackBackground', '../Assets/gameAssets/images/table.jpg');

       





    }
    create() {
        WebFont.load({
            google: {
              families: ['Ultra'],
            },
            active: () => {
              game.scene.start('Menu');
            },
          });
    }
    update() {
    }
}

// Possible Fonts
// Lobster,Roboto SLab , Bangers, luck guy

class Menu extends ConfigureScene {
    constructor() {
        super('Menu');
    }
    create(){
        setCustomCursor(this,blueCursor);
        var star = this.add.sprite(400, 300, 'star');


        // Lounge Background
        const loungeBackground = this.add.sprite(0,0,'loungeBackground')
        loungeBackground.setOrigin(0,0);
        loungeBackground.setScale(.8);

        // var star = this.add.sprite(0,0, 'star');

        var star = this.add.sprite(0,0, 'star');
        star.setScale(.2);
        star.setVisible(false);




        // Lounge Background Music
        const loungeMusic = this.sound.add('loungeMusic');
        loungeMusic.setLoop(true);
        loungeMusic.play();
        const loungeText = this.add.text(this.scale.width * .04,this.scale.height * .05,'LuxeLagoon Gaming Lounge',{fontFamily: 'Ultra',fontSize: '6em',color: 'white'});


        
        // Roulette Button
        const enterButton = this.add.text(this.scale.width * .4,this.scale.height * .3,'Enter',{fontFamily: 'Ultra',fontSize: '4em',color: 'white'});
        enterButton.setInteractive();
        enterButton.on('pointerdown', () => {
            loungeMusic.stop();
            this.scene.start('Lounge');
        });

        enterButton.on('pointerover', () => {
            enterButton.setColor('red');
            setCustomCursor(this,redCursor);
            enterButton.setStroke('black', 6);
            star.setVisible(true);
            star.x = enterButton.x -30;
            star.y = enterButton.y +20;
        });

        enterButton.on('pointerout', () => {
            enterButton.setColor('white');
            setCustomCursor(this,blueCursor);
            enterButton.setStroke('blue',1);
            star.setVisible(false);

        });





        // Roulette Button
        // const rouletteButton = this.add.text(this.scale.width * .4,this.scale.height * .3,'Roulette',{fontFamily: 'Ultra',fontSize: '4em',color: 'white'});
        // rouletteButton.setInteractive();
        // rouletteButton.on('pointerdown', () => {
        //     loungeMusic.stop();
        //     this.scene.start('Roulette');
        // });

        // rouletteButton.on('pointerover', () => {
        //     rouletteButton.setColor('red');
        //     setCustomCursor(this,redCursor);
        //     rouletteButton.setStroke('black', 6);
        //     star.setVisible(true);
        //     star.x = rouletteButton.x -30;
        //     star.y = rouletteButton.y +20;
        // });

        // rouletteButton.on('pointerout', () => {
        //     rouletteButton.setColor('white');
        //     setCustomCursor(this,blueCursor);
        //     rouletteButton.setStroke('blue',1);
        //     star.setVisible(false);

        // });

        // Blackjack Button
        const blackjackButton = this.add.text(this.scale.width * .4,this.scale.height * .45,'Blackjack',{fontFamily: 'Ultra',fontSize: '4em',color: 'white'});
        blackjackButton.setInteractive();
        blackjackButton.on('pointerdown', () => {
            loungeMusic.stop();
            this.scene.start('Blackjack');
        });

        blackjackButton.on('pointerover', () => {
            blackjackButton.setColor('red');
            setCustomCursor(this,redCursor);
            blackjackButton.setStroke('black', 6);
            star.setVisible(true);
            star.x = blackjackButton.x -30;
            star.y = blackjackButton.y +20;
        });

        blackjackButton.on('pointerout', () => {
            blackjackButton.setColor('white');
            setCustomCursor(this,blueCursor);
            blackjackButton.setStroke('blue', 1);
            star.setVisible(false);

        });

        // Slots Button
        const slotsButton = this.add.text(this.scale.width * .4,this.scale.height * .6,'Slots',{fontFamily: 'Ultra',fontSize: '4em',color: 'white'});
        slotsButton.setInteractive();
        slotsButton.on('pointerdown', () => {
            loungeMusic.stop();
            this.scene.start('Slots');
        });

        slotsButton.on('pointerover', () => {
            slotsButton.setColor('red');
            setCustomCursor(this,redCursor);
            slotsButton.setStroke('black', 6);
            star.setVisible(true);
            star.x = slotsButton.x -30;
            star.y = slotsButton.y +20;

            
        });

        slotsButton.on('pointerout', () => {
            slotsButton.setColor('white');
            setCustomCursor(this,blueCursor);
            slotsButton.setStroke('blue', 1);
            star.setVisible(false);

        });

        // Poker Button
        const pokerButton = this.add.text(this.scale.width * .4,this.scale.height * .75,'Poker',{fontFamily: 'Ultra',fontSize: '4em',color: 'white'});
        pokerButton.setInteractive();
        pokerButton.on('pointerdown', () => {
            loungeMusic.stop();
            this.scene.start('Poker');
        });

        pokerButton.on('pointerover', () => {
            pokerButton.setColor('red');
            setCustomCursor(this,redCursor);
            pokerButton.setStroke('black', 6);
            star.setVisible(true);
            star.x = pokerButton.x -30;
            star.y = pokerButton.y +20;

        });

        pokerButton.on('pointerout', () => {
            pokerButton.setColor('white');
            setCustomCursor(this,blueCursor);
            pokerButton.setStroke('blue', 1);
            star.setVisible(false);
        });

        // // Settings Button
        // const settingsButton = this.add.text(this.scale.width * .2,this.scale.height * .6,'Settings',{fontFamily: 'Ultra',fontSize: '2em',color: 'white'});
        // settingsButton.setInteractive();
        // settingsButton.on('pointerdown', () => {
        //     this.scene.start('Settings');
        // });
        // var star = this.add.sprite(0,0, 'star');
        // star.setScale(.2);
        // star.setVisible(false);


    }
    update(){

    }

}


class Lounge extends ConfigureScene {
    constructor() {
        super('Lounge');
    }
    create(){
        setCustomCursor(this,blueCursor);
        this.add.text(this.scale.width * .4,this.scale.height * .05,'Lounge',{fontFamily: 'Ultra',fontSize: '4em',color: 'white'});
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

    }
    create(){
        setCustomCursor(this,blueCursor);

        // const blackjackBackground = this.add.sprite(0,0,'blackjackBackground');

        const blackjackBackground = this.add.sprite(0,0,'blackjackBackground')
        blackjackBackground.setOrigin(0,0);
        blackjackBackground.setScale(2);




        const blackJackText = this.add.text(this.scale.width * .4,this.scale.height * .03,'Blackjack',{fontFamily: 'Ultra',fontSize: '5em',color: 'black'});



        // Deal 2 Cards to the player
        var playerHand = [this.deck.splice(this.getRandomCardIndex(),1),this.deck.splice(this.getRandomCardIndex(),1)];
        console.log(playerHand);
        // console.log(playerHand[0])
        console.log(this.deck);
        

        // Set the initial X coordinate for the first card
        var initialX = this.scale.width * .45;

        for (var i = 0; i < playerHand.length; i++) {
            // Display each card sprite with a horizontal spacing
            var cardSprite = this.add.sprite(initialX + i * 100, this.scale.height * .8, playerHand[i]);
            console.log(playerHand[i]);
        }



        // Deal 2 Cards to the dealer
        var dealerHand = [this.deck.splice(this.getRandomCardIndex(),1),this.deck.splice(this.getRandomCardIndex(),1)];
        console.log(dealerHand);
        console.log(this.deck);


        // Set the initial X coordinate for the first card
        var initialX = this.scale.width * .45;

        for (var i = 0; i < dealerHand.length; i++) {
            // Display each card sprite with a horizontal spacing
            var cardSprite = this.add.sprite(initialX + i * 100, this.scale.height * .3, dealerHand[i]);
            console.log(dealerHand[i]);
        }

        var hitCard = this.add.sprite(this.scale.width * .8, this.scale.height * .8, 'backOfCard');
        var standCard = this.add.sprite(this.scale.width * .9, this.scale.height * .8, 'backOfCard');



        
        hitCard.setInteractive();
        hitCard.on('pointerover', () => {
            setCustomCursor(this,redCursor);
            hitCard.setTexture('redCard');
            blackJackText.text = 'Hit?';
        });
        hitCard.on('pointerout', () => {
            setCustomCursor(this,blueCursor);
            hitCard.setTexture('backOfCard');
            blackJackText.text = 'Blackjack';
        });
        hitCard.on('pointerdown', () => {
            console.log('hit');
        });

        standCard.setInteractive();
        standCard.on('pointerover', () => {
            setCustomCursor(this,redCursor);
            standCard.setTexture('redCard');
            blackJackText.text = 'Stay?';
        });
        standCard.on('pointerout', () => {
            setCustomCursor(this,blueCursor);
            standCard.setTexture('backOfCard');
            blackJackText.text = 'Blackjack';
        });
        standCard.on('pointerdown', () => {
            console.log('split');
        });


     

    }
    getRandomCardIndex(){
        return Math.floor(Math.random() * this.deck.length);
    }
    hit(){

    }
    over(){

    }
    stand(){

    }
    outcome(){

    }
    update(){

    }


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
    scene: [ConfigureScene,Menu,Lounge,Roulette,Blackjack]  // Add your scene to the configuration
};

var game = new Phaser.Game(config);
