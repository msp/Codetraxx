#!/usr/bin/env node

var codetraxx = require('./codetraxx_lib.js');
var nowplaying = 0;
var b  = require('baudio');

var baudio_funct = function() {

  nowplaying = 1;

  b.push(function (t) {
      return Math.sin(2 * Math.PI * 1760 * t) * (t < 0.1);
      nowplaying = 0;
  })



};

codetraxx.subscribe( function(msg) {
  var bpm = msg.bpm, tick = msg.tick, currentTick = msg.currentTick;
  console.log("BPM: " + bpm + " TICK: " + tick + " CURRENT TICK: " + currentTick);

  if (currentTick === 1 && nowplaying != 1) {
   baudio_funct();
  }

});
