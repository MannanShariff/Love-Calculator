document.getElementById('loveForm').addEventListener('submit',function(e){
     e.preventDefault();
     const yourName = document.getElementById('yourName').value.trim();
     const crushName = document.getElementById('crushName').value.trim();
     const result = document.getElementById('result');
     
     
     if(!yourName || !crushName){
        alert("please fill box with name");
        return;
     }
     const lovepercent=Math.floor(Math.random()*100)

     let message ='';
     if(lovepercent>=90){
         message='math made in heaven!';

     } else if(lovepercent >=75){
        message= 'there is something working pleace keep on trying';
     } else{
        message='you got saved,enjoy your life';
     }
     result.classList.remove('d-none');
     result.innerHTML= `${yourName} and ${crushName} =${lovepercent}% -${message}`;
})
 