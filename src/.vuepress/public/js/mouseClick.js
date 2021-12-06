var a_idx = 0;

function getRandom(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function css(el,styles) {
  for (style in styles) {
    el.style.setProperty(style, styles[style]);
  }
};

window.onload = function(){
  document.querySelector("body").onclick = (e)=>{
    var a = new Array("", "", "", "", "", "", "", "", "", "", "", "");
    var span = document.createElement("span");
    span.innerText = '(づ￣3￣)づ╭❤～' + a[a_idx];
    a_idx = (a_idx + 1) % a.length;
    var x = e.clientX,
      y = e.clientY;
    css(span,{
      "z-index": 999999,
      "top": y - 20 + "px",
      "left": x - 60 + "px",
      "position": "fixed",
      "font-weight": "bold",
      "color": `rgb(${getRandom(255,0)},${getRandom(255,0)},${getRandom(255,0)})`,
      "user-select": "none",
      "cursor": "default",
      "opacity": 1,
      "transition": "all 1s"
    });
    document.querySelector("body").appendChild(span);
    setTimeout(()=>{
      css(span,{
        "opacity": 0,
        "top": y - 100 + "px",
      })
    },0)
    setTimeout(()=>{
      span.parentNode.removeChild(span)
    },1500)
  };
};
