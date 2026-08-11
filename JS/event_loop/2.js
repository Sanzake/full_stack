function c() {
    console.log("start c")
    console.log("end c")
}
function b() {
    console.log("start b")
    c()
    console.log("end b")
}
function a() {
    console.log("start a")
    b()
    console.log("end a")
}
a()