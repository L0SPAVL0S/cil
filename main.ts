radio.setTransmitPower(7)
// radio.setFrequencyBand(10)
radio.setGroup(128)
radio.setTransmitSerialNumber(true)

//15 = kalibrace




//kalibrace
let tma = 0
let timer = false
let cas = 0



function kalibrace(): void {
    tma = 0
    for (let i = 0; i < 5; i++) {
        tma += input.lightLevel()
        basic.pause(400)
    }
    tma = tma / 5

    console.log("=======" + tma)
    
}




radio.onReceivedNumber(function(receivedNumber: number) {
    if (receivedNumber == 15){
        kalibrace()
        basic.showNumber(1)
        radio.sendNumber(17)
        }
    if (receivedNumber == 16){
        // timer = true
        // cas = 0
        // basic.showNumber(0)
        basic.clearScreen()
        cas=0
        do{
            cas += 0.1
            // basic.showNumber(cas)
            basic.pause(10)
        } while(input.lightLevel() > tma - 60)
        
        whaleysans.showNumber(cas)
        
    }
})


while(timer){
    cas += 0.1
    basic.showNumber(cas)
    basic.pause(100)
}
// control.inBackground(function() {
//     if (timer && input.lightLevel() < tma - 60 ){
//         timer = false
//         console.log(cas)
//     }
// })