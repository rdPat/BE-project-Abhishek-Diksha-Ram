var Cylon = require('cylon');

Cylon.robot({
  connections: {
    arduino: { adaptor: 'firmata', port: 'COM5' }
  },

  devices: {
    sensor: { driver: 'analog-sensor', pin: 1, lowerLimit: 0, upperLimit: 900 }
  },

  work: function(my) {
    var analogValue = 0;

    every((0.4).second(), function() {
      analogValue = my.sensor.analogRead();
      console.log('Air quality is ', analogValue);
    });

  }
}).start();