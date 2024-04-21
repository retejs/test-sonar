function a() {
    console.log('a', eval('12'));
}
function b() {
    console.log('a', eval(window.data));
}


module.exports = {
    a,
    b
}