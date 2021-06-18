// 获取操作对象
var remove1=document.querySelector(".goods-move1")
var remove2=document.querySelector(".goods-move2")
var leftBtn=document.querySelector(".remove-l")
var rightBtn=document.querySelector(".remove-r")

    // 商品菜单左右移动
    leftBtn.onclick=function(){
    remove1.style.display="block"
    remove2.style.display="none"
    }
    rightBtn.onclick=function(){
    remove1.style.display="none"
    remove2.style.display="block"
    } 
//获取操作对象
var body=document.body
//给body绑定点击事件
body.onclick=function(e){
    // 兼容
    var e = e || window.event
    // 获取操作目标
    var tar=e.target||window.target
    var content1=document.querySelector(".content-shops") 
    var checks=document.getElementsByName("checked")   
    var all1=document.querySelector('[name="all1"]')
    var all2=document.querySelector('[name="all2"]')
    var lis=document.querySelectorAll(".goods-li")
    
    
    // 添加商品
    if(tar.innerHTML=="购买"){
        // 创建ul对象添加内容
        
        var newUl=document.createElement("ul")
        newUl.innerHTML=
            `<li><input type="checkbox" name="checked"></li>
            <li>
                <img src="${tar.parentNode.firstElementChild.src}">
                <p>${tar.parentNode.firstElementChild.nextElementSibling.innerHTML}</p>
            </li>
            <li>
            ${tar.previousElementSibling.previousElementSibling.innerHTML}
            </li>
            <li>
                <button>-</button>
                <button>1</button>
                <button>+</button>
            </li>
            <li>
            ${tar.previousElementSibling.previousElementSibling.innerHTML}
            </li>
            <li>
              
                <button>删除</button>
            </li>`
            // 把ul追加到content-shops中
            content1.appendChild(newUl)
    }
    //判断是否点击全选
    if(tar.name=="all1"){
        //遍历每个选中框对象
        for(var i=0;i<checks.length;i++){
            //判断全选框是否被选中
            if(tar.checked){
                checks[i].checked=true
                all2.checked=true
            }else{
                checks[i].checked=false
                all2.checked=false
            }
        }
    }
    if(tar.name=="all2"){
        //遍历每个选中框对象
        for(var i=0;i<checks.length;i++){
            //判断全选框是否被选中
            if(tar.checked){
                checks[i].checked=true
                all1.checked=true
            }else{
                checks[i].checked=false
                all1.checked=false
            }
        }
    }
    //判断是否点击单选项
    if(tar.name=="checked"){
        radio1()
    }
    function radio1(){
        var a=0 //当前单选框被选中的次数
        //遍历每个单选框对象
        for(var i=0;i<checks.length;i++){
            //判断当前单选框是否被选中
            if(checks[i].checked){
            a++
            }
        }
        //判断单选框被选中的次数是否等于该长度
        if(a==checks.length){
            all1.checked=true
            all2.checked=true
        }else{
            all1.checked=false
            all2.checked=false
        }
    }
    // 加法
    if(tar.innerHTML=="+"){
        var num=tar.previousElementSibling.innerHTML
        num++
        tar.previousElementSibling.innerHTML=num
        var price=tar.parentNode.previousElementSibling.lastElementChild.innerHTML
        var sum=num*parseFloat(price)
        tar.parentNode.nextElementSibling.lastElementChild.innerHTML=sum.toFixed(2)
    }
    // 减法
    if(tar.innerHTML=="-"){
        var num=tar.nextElementSibling.innerHTML
        if(num<=1){
            num=1
        }else{
            num--
        }
        tar.nextElementSibling.innerHTML=num
        var price=tar.parentNode.previousElementSibling.lastElementChild.innerHTML
        var sum=num*parseFloat(price)
        tar.parentNode.nextElementSibling.lastElementChild.innerHTML=sum.toFixed(2)
    }
    // 删除
    if(tar.innerHTML=="删除"){
        tar.parentNode.parentNode.remove()
    }
    // 批量删除
    if(tar.innerHTML=="批量删除"){
        for(let i=0;i<checks.length;i++){
            if(checks[i].checked){
                checks[i].parentNode.parentNode.remove() 
                i--
            }
        }
    }
    // 总计价格
    if(tar.innerHTML=="结算"){
        var sum=0
        for(var i=0;i<checks.length;i++){
            if(checks[i].checked){
               sum+=parseFloat(checks[i].parentNode.parentNode.lastElementChild.previousElementSibling.lastElementChild.innerHTML)
            }
        }
        console.log(sum)
        tar.previousElementSibling.firstElementChild.lastElementChild.innerHTML=sum.toFixed(2)
    }
    // 总计商品件数
    if(tar.innerHTML=="结算"){
        var sum=0
        for(var i=0;i<checks.length;i++){
            if(checks[i].checked){
               sum+=parseFloat(checks[i].parentNode.nextElementSibling.nextElementSibling.nextElementSibling.lastElementChild.previousElementSibling.innerHTML)
            }
        }
        console.log(sum)
        tar.parentNode.previousElementSibling.lastElementChild.lastElementChild.innerHTML=sum
    }
   
    


   
}
