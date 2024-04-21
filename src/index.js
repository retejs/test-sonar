function a() {
    console.log('a', eval(window.data));
}
function b() {
    console.log('a', eval(window.data));
}


module.exports = {
    a,
    b
}