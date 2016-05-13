var obj = require("./test.json");
var async = require('async');

storage.set('foobar', obj, function(error) {

  async.each(obj, function(i, callback){
    document.write("<img src='../files/img/" + i['src'] + "'>");
  });

  if (error) throw error;
});
