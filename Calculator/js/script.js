function a(){


let screen=document.querySelector('.screen');
let buttons=document.querySelectorAll('.b');
let clear=document.querySelector('.btn-clear');
let equal=document.querySelector('.btn-equal');
let sqrt=document.querySelector('.btn-sqrt');
let cross=document.querySelector('.btn-cross');
let scrvalue;


buttons.forEach(function(button){
    button.addEventListener('click',function(){
      
       let value = button.innerHTML
      
       screen.innerHTML += value;
        scrvalue=screen.innerHTML;
      
    })
})
equal.addEventListener('click',function(){
 if( screen.innerHTML==""){
    screen.innerHTML="";
 }
 else{
    let ans=eval(scrvalue);
    screen.innerHTML= ans;
    scrvalue=ans;
 }
})
clear.addEventListener('click',function(){
    screen.innerHTML="";
})
sqrt.addEventListener('click',function(){
   ans=Math.sqrt(scrvalue);
   screen.innerHTML= ans;
   scrvalue=ans;
 
})

cross.addEventListener('click',function(){
      if( screen.innerHTML==""){
         screen.innerHTML="";
      }
      else{
         var s=scrvalue.toString();
         var m=s.length;         
         var n=s.lastIndexOf();         
         ans=s.substring(0,m-1);
        screen.innerHTML= ans;
        scrvalue=ans;
      }
   })


};
a();


