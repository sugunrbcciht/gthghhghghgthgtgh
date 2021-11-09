namespace SpriteKind {
    export const guy = SpriteKind.create()
    export const guy2 = SpriteKind.create()
    export const guy3 = SpriteKind.create()
    export const newguy = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    guy.vy += -3
})
sprites.onOverlap(SpriteKind.guy, SpriteKind.guy2, function (sprite, otherSprite) {
    sprite.x += -1 * sprite.vx
    sprite.y += -1 * sprite.vy
    sprite.vx = 0
    sprite.vy = 0
    sprite.x += -1
    pause(100)
    sprite.x += 1
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    guy.vx += -3
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    guy.vx += 3
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    guy.vy += 3
})
sprites.onCreated(SpriteKind.guy2, function (sprite) {
    sprite.setImage(img`
        . . . . f f f f f . . . . . . . 
        . . . f 5 5 5 5 5 f . . . . . . 
        . . f d d d d 5 5 5 f . . . . . 
        . c d f d d f d 5 5 f f . . . . 
        . c d f d d f d 5 5 d d f . . . 
        c d 5 5 d d d d 5 5 b d c . . . 
        c d d d d c d d 5 5 b d c . f f 
        c c c c c d d d 5 5 f c . f 5 f 
        . f d d d d d 5 5 f f . . f 5 f 
        . . f f f f f 5 5 5 5 f . f 5 f 
        . . . . f 5 5 5 5 5 5 5 f f 5 f 
        . . . f 5 f f 5 f 5 5 5 5 f f . 
        . . . f 5 f f 5 f 5 5 5 5 f . . 
        . . . f d b f d b f f 5 f . . . 
        . . . f d d c d d b b d f . . . 
        . . . . f f f f f f f f f . . . 
        `)
    sprite.x = randint(20, scene.screenWidth() - 16)
    sprite.x = randint(75, scene.screenHeight() - 75)
})
let guy: Sprite = null
game.splash("Sniper", "Monkey")
scene.setBackgroundColor(7)
guy = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f f . . . . 
    . c d d d d d d e e d d f . . . 
    . c d f d d f d e e b d c . . . 
    c d d f d d f d e e b d c . f f 
    c d e e d d d d e e f c . f e f 
    c d d d d c d e e e f . . f e f 
    . f c c c d e e e f f . . f e f 
    . . f f f f f e e e e f . f e f 
    . . . . f e e e e e e e f f f . 
    . . f f e f e e f e e e e f . . 
    . f e f f e e f f f e e e f . . 
    f d d b d d c f f f f f f b f . 
    f d d c d d d f . . f c d d f . 
    . f f f f f f f . . . f f f . . 
    `, SpriteKind.guy)
let guy2 = sprites.create(img`
    . . . . . f f f f f . . . . . . 
    . . . . f 4 4 4 4 4 f . . . . . 
    . . . f d d d d d 4 4 f . . . . 
    . . f f f d d f f d 4 f f . . . 
    . c d d 4 4 d d d d 4 d d f . . 
    . c c d d d d c d d 4 d f f f . 
    . c d c c c c d d d 4 d f b d f 
    . . c d d d d d d 4 4 f f d d f 
    . . . c d d d d 4 4 f f 4 f f f 
    . . . . f f f 4 4 f 4 4 4 f . . 
    . . . . f 4 4 4 4 4 4 4 f f f . 
    . . . f 4 4 4 4 4 4 f f f 4 f . 
    . . f f 4 4 4 4 f f f f f 4 f . 
    . f b d f 4 4 f b b f f f 4 f . 
    . f d d f 4 4 f d d b f f f f . 
    . f f f f f f f f f f f f f . . 
    `, SpriteKind.guy2)
guy2.setPosition(52, 31)
let guy3 = sprites.create(img`
    . . . . . f f f f f . . . . . . 
    . . . . f 6 6 6 6 6 f . . . . . 
    . . . f d d d d d d 6 f . . . . 
    . . f d f f d d f f d f f . . . 
    . c d d d 6 6 d d d d 6 d f . . 
    . c d c d d d d c d d 6 f f . . 
    . c d d c c c c d d d 6 f f f f 
    . . c d d d d d d d 6 f f b d f 
    . . . c d d d d 6 6 f f f d d f 
    . . . . f f f 6 6 f 6 6 6 f f f 
    . . . . f 6 6 6 6 6 6 6 f f f . 
    . . . f 6 6 6 6 6 6 f f f 6 f . 
    . . f f 6 6 6 6 f f f f f 6 f . 
    . f b d f 6 6 f b b f f f 6 f . 
    . f d d f f f f d d b f f f f . 
    . f f f f f f f f f f f f f . . 
    `, SpriteKind.guy2)
guy3.setPosition(108, 48)
