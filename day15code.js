var x = 1;
test();

function test() {
  console.log("before", x);
  var x = 2;
  console.log("after", x);
}
