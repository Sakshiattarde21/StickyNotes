 let createBox=document.getElementsByClassName("createBox")[0];
        let notes= document.getElementsByClassName("notes")[0];
        let input=document.getElementById("userInput");
        let i=0;

        createBox.addEventListener('keydown',content);

        document.getElementById("create").addEventListener("click",function(){
            createBox.style.display="block";
        });

        function content(e){
            if(e.keyCode=='13'){        //keycode='13' is for Enter Key
                divStyle(input.value);
                input.value="";
                createBox.style.display="none";
            }
        }

        function color(){
            let randomColors=["#C1E7E3", "#FFDCF4","#C1BBDD","EF9595","#D291BC", "#D7EAF5","#E1CEC9", "#D4CFBD"]
            if(i>randomColors.length-1){
                i=0;
            }
            return randomColors[i++];   
        }

        function divStyle(text){
            let div=document.createElement("div");
            div.className='note';
            div.innerHTML='<div class="details">'+'<h3>'+text+'</h3>'+'</div>';

            //remove note on double click
            div.addEventListener('dblclick', function(){
                div.remove()
            });

            //fill random colors in notes
            div.setAttribute('style','background:'+color()+'');

            notes.appendChild(div);
        }