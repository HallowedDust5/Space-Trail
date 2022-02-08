class Button {
    /**
     * 
     * @param {number} x 
     * @param {number} y 
     * @param {string} label What you want the button to say
     * @param {Phaser.scene} scene The scene the button is to be included in
     * @param {string} fontFamily Default is Comic Sans
     * @param {function} callback What the button does after it is pressed
     */
    constructor(x, y, label, scene,fontFamily = 'Comic Sans', callback) {
        const button = scene.add.text(x, y, label)
            .setOrigin(.5,.5)
            .setFontFamily(fontFamily)
            .setStyle({ backgroundColor: '#111' })
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => callback())
            .on('pointerover', () => button.setStyle({ fill: '#f39c12' }))
            .on('pointerout', () => button.setStyle({ fill: '#FFF' }));
    }
}