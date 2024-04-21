function a() {
    console.log('a', eval('12'));
}
function b() {
    console.log('a', eval(window.data));
}
function c() {
    console.log('c', eval(window.data));
}


module.exports = {
    a,
    b,
    c
}