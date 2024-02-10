// Where we will store all the prefabs for the game

// Create the player prefab
export class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        // Add this object to the existing scene
        this.scene.add.existing(this);

        // Enable physics
        this.enablePhysics();

    }
    enablePhysics(){}
    moveLeft(){}
    moveRight(){}
    jump(){}
    setDirection(){}
    stop(){}
    update(){}
    playAnimation(){}
    stopAnimation(){}
}


// Create Touch Controls Prefab


