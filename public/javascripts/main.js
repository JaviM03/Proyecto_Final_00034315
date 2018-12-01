let app={
    init:function(){
        this.addEvents();
    },
    addEvents=function(){
        let loadContent=function(){
            fetch('/Lentes')
            .then(res=>res.json())
            .then(data=>{
                let Lentes=document.getElementsByClassName("lentes")[0];

                
            });
            Lentes.innerHTML=data.reduce((cadena.element) 
            
            );


           
        }
        let form=document.forms.save;
form.addEventlistener('submit',function(event){
    event.preventDefault();
    fetch(form.action,{
        method:'POST',
        body:newURISearchParams(new FormData(form))
    }).then(res=>res.json())
    .then(data=>{
        console.log(data);
        LoadContent();
    });
});
LoadContent();

windows.onload()=app.init();
    }
}


