/**
 *
 * @param {number} x x coordinate of the middle of the button
 * @param {number} y y coordinate of the middle of the button
 * @param {string} label What you want the button to say
 * @param {Phaser.Scene} scene The scene the button is to be included in
 * @param {string} font Optional, default is Comic Sans
 * @param {function} onClick What the button does after it is pressed
 * @param {string} hoverColor Optional, change the color when you hover over the button. Preferably in hexadecimal.
 * @param {string} backgroundColor Optional, button background color. Preferably in hexadecimal.
 * @param {string} color Optional, text color. Preferably in hexadecimal.
 */
function createButton(x, y, label, scene, onClick, backgroundColor = '#ffffff', font = '32px Comic Sans', color = '#487D9E', hoverColor = '#f39c12') {

    let button = scene.add.text(x, y, label)
        .setOrigin(.5, .5)
        .setStyle({ backgroundColor, font, fill: color })
        .setInteractive({ useHandCursor: true })
        .on('pointerdown', () => onClick(scene))
        .on('pointerover', () => button.setStyle({ fill: hoverColor }))
        .on('pointerout', () => button.setStyle({ fill: color }));

        return button;
    }
