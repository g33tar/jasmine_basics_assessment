var jasmine = require('./../grader.js');

describe('test1', function(){
  it('gives a grade', function(){
    expect(jasmine.letterGrader(98)).toEqual('A+');
    expect(jasmine.letterGrader(96)).toEqual('A');
    expect(jasmine.letterGrader(93)).toEqual('A-');
    expect(jasmine.letterGrader(88)).toEqual('B+');
    expect(jasmine.letterGrader(85)).toEqual('B');
    expect(jasmine.letterGrader(82)).toEqual('B-');
    expect(jasmine.letterGrader(78)).toEqual('C+');
    expect(jasmine.letterGrader(75)).toEqual('C');
    expect(jasmine.letterGrader(72)).toEqual('C-');
    expect(jasmine.letterGrader(68)).toEqual('D+');
    expect(jasmine.letterGrader(65)).toEqual('D');
    expect(jasmine.letterGrader(62)).toEqual('D-');
    expect(jasmine.letterGrader(45)).toEqual('F');
  });
});
describe('test2', function(){
  it('gets an avg', function(){
    expect(jasmine.avgerageScore([90, 95, 87, 60])).toEqual(83);
    expect(jasmine.avgerageScore([15, 23, 76, 22, 95, 52])).toEqual(47.166666666666667);
  });
});
describe('test3', function(){
  it('gets median', function(){
    expect(jasmine.medianScore([52,80,80,86,94,35])).toEqual(80);
    expect(jasmine.medianScore([16,78,22,43,67])).toEqual(43);
  });
});
describe('test4', function(){
  it('gets mode', function(){
    expect(jasmine.modeScore([82, 92, 75, 91, 92, 89, 95, 100, 86])).toEqual(92);
    expect(jasmine.modeScore([12, 35,67,42,9,14,32, 35])).toEqual(35);
    expect(jasmine.modeScore([5,12,4,7,52])).toEqual(5);
  });
});
