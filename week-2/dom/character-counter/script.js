let counter= 280;
document.getElementById('message').addEventListener('input',function(e){
    
  document.getElementById('counter').textContent=`${counter - e.target.value.length} characters remaining `
    if(e.target.value.length <= 260){
        document.getElementById('counter').style.color ='white'
    }else{
                document.getElementById('counter').style.color ='red'

    }
})