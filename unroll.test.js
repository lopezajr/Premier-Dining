const unroll = require("./unroll");

describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  it("unrolls a 4x4 array of arrays", function(){
    let squareArray =[
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ];

    let result = unroll(squareArray);
    expect(result).toEqual([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]);
  });

  it("unrolls a 3x3 array of arrays with letters", function(){
    let squareArray = [
      ["a", "b", "c"],
      ["d", "e", "f"],
      ["g", "h", "i"]
    ];
    let result = unroll(squareArray);
    expect(result).toEqual(["a", "b", "c", "f", "i", "h", "g", "d", "e"]);
  });


});