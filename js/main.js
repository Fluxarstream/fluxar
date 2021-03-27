const txtAnim = document.querySelector("h1");

new Typewriter(txtAnim)
.typeString('The future of the online stream')
.pauseFor(1000)
.typeString('<strong>, is us</strong> !')
.pauseFor(300)
.deleteChars(4)
.typeString('you !')
.pauseFor(2000)
.deleteChars(41)
.typeString('Fluxar is us')
.start()