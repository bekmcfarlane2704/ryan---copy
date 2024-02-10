let projectile: Sprite = null
let mySprite: Sprite = null
let leftright = 0
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        .............ccfff..............
        ...........ccddbcf..............
        ..........ccddbbf...............
        ..........fccbbcf...............
        .....fffffccccccff.........ccc..
        ...ffbbbbbbbcbbbbcfff....ccbbc..
        ..fbbbbbbbbcbcbbbbcccff.cdbbc...
        ffbbbbbbffbbcbcbbbcccccfcdbbf...
        fbcbbb11ff1bcbbbbbcccccffbbf....
        fbbb11111111bbbbbcccccccbbcf....
        .fb11133cc11bbbbcccccccccccf....
        ..fccc31c111bbbcccccbdbffbbcf...
        ...fc13c111cbbbfcddddcc..fbbf...
        ....fccc111fbdbbccdcc.....fbbf..
        ........ccccfcdbbcc........fff..
        .............fffff..............
        `, mySprite, 100, 0)
    pause(100)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    info.changeLifeBy(-1)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    leftright = 1
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 9 9 9 9 9 9 9 9 9 9 9 . . . 
        . . 9 9 9 9 9 9 9 9 9 9 9 . . . 
        . . 9 f f f 9 9 f f f 9 9 . . . 
        . . 9 f f f 9 9 f f f 9 9 . . . 
        . . 9 f f f 9 9 f f f 9 9 . . . 
        . . 9 9 9 9 9 9 9 9 9 9 9 . . . 
        . . 9 9 9 9 9 9 9 9 9 9 9 . . . 
        . . 9 9 9 9 9 9 9 9 9 9 9 . . . 
        . . 9 9 9 9 9 9 9 9 9 9 9 . . . 
        . . . . f f . . f f . . . . . . 
        . . f f f f . . f f f f . . . . 
        . . f f f f . . f f f f . . . . 
        `)
})
info.onCountdownEnd(function () {
    game.setGameOverMessage(false, "try again")
    scene.cameraShake(4, 500)
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.setGameOverEffect(true, effects.bubbles)
    game.gameOver(true)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    leftright = 1
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 9 9 9 9 9 9 9 9 9 9 9 . . . 
        . . 9 9 9 9 9 9 9 9 9 9 9 . . . 
        . . 9 f f f 9 9 f f f 9 9 . . . 
        . . 9 f f f 9 9 f f f 9 9 . . . 
        . . 9 f f f 9 9 f f f 9 9 . . . 
        . . 9 9 9 9 9 9 9 9 9 9 9 . . . 
        . . 9 9 9 9 9 9 9 9 9 9 9 . . . 
        . . 9 9 9 9 9 9 9 9 9 9 9 . . . 
        . . 9 9 9 9 9 9 9 9 9 9 9 . . . 
        . . . . f f . . f f . . . . . . 
        . . f f f f . . f f f f . . . . 
        . . f f f f . . f f f f . . . . 
        `)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.gameOver(false)
})
forever(function () {
    pause(1000)
    music.play(music.createSoundEffect(WaveShape.Sawtooth, 4164, 3941, 255, 45, 500, SoundExpressionEffect.Vibrato, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
})
