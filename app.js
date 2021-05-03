function on(x){
    x.src='on.jpg'
}
function off(x){
    x.src='off.jpg'
}
function mj(){
    var a =document.getElementById("img1");
  if (a.src.match('off.jpg')){
      a.src=('on.jpg')
  }else{
    a.src=('off.jpg')
  }
}