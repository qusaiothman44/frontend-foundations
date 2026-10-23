let btn =document.querySelectorAll('.feq-qu');
let ans = document.querySelectorAll('.feq-ans');
btn.forEach((q,i)=>{
    q.addEventListener('click',function(){
ans.forEach((a)=>{
    a.style.display = 'none'
})
    ans[i].style.display='block'

    })
})
