'use strict';
// Copyright IBM Corp. 2015,2016. All Rights Reserved.
// Node module: loopback-example-access-control
// This file is licensed under the Artistic License 2.0.
// License text available at https://opensource.org/licenses/Artistic-2.0

module.exports = function(app) {
  var User = app.models.User;

  User.create([{
    email: 'sounton@gmail.com',
    password: '4CDLrr000@Xlog'}], function(err, users) {
    if (err) throw err;

    console.log('Created users:', users);
  });
};
