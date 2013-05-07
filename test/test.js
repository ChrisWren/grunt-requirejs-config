var fs = require('fs');
var should = require('should');
var spawn = require('child_process').spawn;

after(function() {
  fs.unlink('./test/main.js');
});

describe('When grunt require is run', function () {
  it('it makes the expected changes to the src file', function (done) {
    var childProcess = spawn('grunt');
    childProcess.on('close', function () {
      var fixtureFile = fs.readFileSync('./test/fixtures/fixtureOut.js', 'utf8');
      var generatedFile = fs.readFileSync('./test/main.js', 'utf8');
      generatedFile.should.equal(fixtureFile);
      done();
    });
  });
});
