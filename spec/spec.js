var jasmine = require('./../grader.js');

describe('test1', function(){
  it('gives a grade', function(){
    expect(jasmine.letterGrader(93)).toEqual('A-');
  });
});
describe('test2', function(){
  it('gets an avg', function(){
    expect(jasmine.avgerageScore([90, 95, 87, 60])).toEqual(83);
  });
});
describe('test3', function(){
  it('gets median', function(){
    expect(jasmine.medianScore([52,80,80,86,94,35])).toEqual(80);
  });
});
describe('test4', function(){
  it('gets mode', function(){
    expect(jasmine.modeScore([82, 92, 75, 91, 92, 89, 95, 100, 86])).toEqual(92);
  });
});
