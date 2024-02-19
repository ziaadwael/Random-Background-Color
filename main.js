var btn = document.getElementsByTagName("button")[0];
var anchor = document.getElementsByTagName("a")[0];

const Colors = [
    "#51e2f5",
    "#9df9ef",
    "#edf756",
    "#ffa8B6",
    "#a28089",
    "#a0d2eb",
    "#e5eaf5",
    "#d0bdf4",
    "#8458B3",
    "#a28089",
];

function ChangeBackground() {
    document.body.style.backgroundColor =
        Colors[Math.floor(Math.random() * Colors.length)];
    btn.style.color = document.body.style.backgroundColor;
    anchor.style.color = document.body.style.backgroundColor;
}
