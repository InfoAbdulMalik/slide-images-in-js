var thumb= document.getElementsByClassName('thumb');
for(i=0; i< thumb.length; i++){
    
    thumb[i].onclick= function(){
         for( var j=0; j<thumb.length; j++){
            thumb[j].style.border='none';
         }
        this.style.border= '5px solid black';
        var newSrc= this.src;
         var preview= document.getElementById('preview');
        preview.src=this.src;
     }
}