function a() {
    console.log('a', eval(window.data));
    console.log('b', eval(window.data));
    console.log('c', eval(window.data));
}

module.exports = {
    a
}