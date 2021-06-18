let zhiding=document.querySelector('.zhiding')
let timesTop
zhiding.onclick=function(){
    console.log(111);
    timesTop=setInterval(function(){
        document.documentElement.scrollTop=document.documentElement.scrollTop-30;
        if(document.documentElement.scrollTop<=0){
            document.documentElement.scrollTop=0;
            clearInterval(timesTop)
        }
    },1)
}