document.getElementsByTagName("div")[0].innerHTML = "我是外部脚本";
function maopaohandller(event) {
    console.log("冒泡事件");
    console.log(event);
}
var divObj = document.getElementById("testdiv");
divObj.addEventListener("click", maopaohandller, false);
divObj.addEventListener("click", maopaohandller, true);
// divObj.removeEventListener("click", maopaohandller);