let ゆらゆら = 0
input.onSound(DetectedSound.Loud, function () {
    if (music.volume() == 127) {
        basic.showIcon(IconNames.No)
        music.setVolume(0)
        music.stopAllSounds()
    } else {
        basic.showIcon(IconNames.EigthNote)
        music.setVolume(127)
        music.setTempo(120)
        music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Forever)
    }
})
input.onGesture(Gesture.Shake, function () {
    ゆらゆら = randint(0, 1)
    if (ゆらゆら == 1 && music.tempo() < 240) {
        basic.showIcon(IconNames.Happy)
        music.changeTempoBy(40)
        basic.clearScreen()
    } else if (ゆらゆら == 0 && music.tempo() > 60) {
        basic.showIcon(IconNames.Sad)
        music.changeTempoBy(-40)
        basic.clearScreen()
    } else {
        music.playMelody("C C5 C C5 C C5 C C5 ", 600)
        music.setTempo(120)
        music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Forever)
    }
})
basic.forever(function () {
    input.setSoundThreshold(SoundThreshold.Loud, 150)
})
