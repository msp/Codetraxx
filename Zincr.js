#!/usr/bin/env node

var codetraxx = require('./codetraxx_lib.js');
var nowplaying = 0;
var baudio  = require('baudio');

var tau = Math.PI * 2;

var baudio_funct = function(tickCounter,bpm) {

  // console.log("TICKCOUNTER:: " + tickCounter);
  nowplaying = 1;
  // console.log("TICKCOUNTER:: " + tickCounter);
  console.log("// tickCOunter:: " + tickCounter + " BPM:: " + bpm);

  nowplaying = 0;
  var b = baudio(function (tickCounter,bpm) {
    donk = (tickCounter / 7076);
    var t = donk % 5;
    //var n = t % 7;
    var xs = [ 120, 14, 740, 450, 20 ];

    var speed = tt % 8 > 7 ? 16 : 2;
    var x = xs[Math.floor(t*speed)%xs.length]
    var z = tt % 8 < 7 ? 1000 : 80;

    //var f = x + Math.sin(z * (t % 1));

    return (
        sin(x * z * donk )
        //0.15 * Math.sin(tau * t * f)
        //z * 0.95 * Math.sin(tau * x * tickCounter) % 3
    );

    function sin (x) {
        return Math.sin(tau * t * x);
    }
});

  nowplaying = 0;

   //b.play();

};

codetraxx.subscribe( function(msg) {
  var bpm = msg.bpm, microTick = msg.microTick, tickCounter = msg.tickCounter, beat = msg.beat;
  console.log("BPM: " + bpm + " BEAT: " + beat + " MICROTICK: " + microTick + " TICKCOUNTER: " + tickCounter);

  if (/[15]/.test(beat) && /[1]/.test(microTick) && !nowplaying) {
   console.log("hola");
   baudio_funct(tickCounter,bpm);
  }

});
