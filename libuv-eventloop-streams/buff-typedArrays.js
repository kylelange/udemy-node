//ES6 Typed Arrays with the buffer
const buffer = new ArrayBuffer(8);

//this lets me read/convert the 8bit binary comming from the buffer
//now each integer(Int) takes 32 1s and 0s in an array.
const view = new Int32Array(buffer);

//learn this soon
view[0] = 5;
view[1] = 15;

//only holds two numbers, so the console log will not show:
view[2] = 30;
console.log(view);
