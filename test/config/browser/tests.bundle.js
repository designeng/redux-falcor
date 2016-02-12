var context = require.context('./../../', true, /\.spec\.js$/);
context.keys().forEach(context);

// polifill
var objectAssign = require('object-assign');
Object.assign = objectAssign;
