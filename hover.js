
const BACKGROUND = {
    "t00": "t00",
    "t01": "t01",
    "t02": "t02",
    "t03": "t03",
    "t04": "t04",
    "t05": "t05",
    "t06": "t06",
    "t07": "t07",
    "t08": "t08",
    "t09": "t09",
    "t11": "t11",
    "t12": "t12",
    "t13": "t13",
    "t14": "t14",
    "t15": "t15",
    "t16": "t16",
    "t17": "t17",
    "t18": "t18",
    "t19": "t19",
    "t20": "t20",
    "t21": "t21",
    "t22": "t22",
    "t23": "t23"
}
document.addEventListener("DOMContentLoaded", function () {
    for (const x of Object.keys(BACKGROUND)) {
        const element = document.getElementById(x)
        element.addEventListener("mouseover", function() {
            document.documentElement.style.backgroundColor = getDarkColor();
            for (const x of document.getElementsByClassName("tags")) {
                if (x != element) x.style.opacity = "0.2"
            }
        });
        element.addEventListener("mouseout", function () {
            document.documentElement.style.backgroundColor = "black";
            for (const x of document.getElementsByClassName("tags")) x.style.opacity = "1"
        });
    }
})

// Temporarily Color but will be changed to image
function getDarkColor() {
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += Math.floor(Math.random() * 10);
    }
    return color;
}