window.onload = function () {
    console.log("onload");
    console.log(localStorage.getItem("myCat"));
    localStorage.setItem('myCat', 'Tom');
    console.log(localStorage.getItem("myCat"));
};



