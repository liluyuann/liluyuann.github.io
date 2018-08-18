var myHeading=document.querySelector('h1')
myHeading.textContent='Hello world!'

// 点击图片更换图片
var oImg=document.querySelector('img')
oImg.onclick=function(){
    var imgSrc=oImg.src
    console.log(imgSrc)
    var imgUrl=oImg.getAttribute('src')
    console.log(imgUrl)
    if(imgUrl==='images/firefox.jpg'){
        // oImg.src='images/chrome.jpg'
        oImg.setAttribute('src','images/chrome.jpg')
        oImg.style.width='500px'
        oImg.style.height='500px'
    }else{
        // oImg.src='images/firefox.jpg'
        oImg.setAttribute('src','images/firefox.jpg')
    }
}

// 得到按钮对象
var oBtn=document.querySelector('button')

// 定义设置名字函数
function setUserName(){
    var myName=prompt('Please enter your name.')
    localStorage.setItem('name',myName)
    myHeading.textContent='Mozilla is cool, '+myName
}

if(!localStorage.getItem('name')){
    setUserName()
} else{
    var storedName=localStorage.getItem('name')
    myHeading.textContent='Mozilla is cool, '+storedName
}

oBtn.onclick=function(){
    setUserName()
}