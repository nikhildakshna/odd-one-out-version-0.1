function randomizeimage(){
    //random image variables.  


  
    
    switch(randfruIMG){
    case 1: fruIMG = apple;
    break;
    
    case 2: fruIMG = banana;
    break;
    
    case 3: fruIMG = strawberry;
    break;
    
    case 4: fruIMG = watermelon;
    break;
    }
    
    switch(randvegIMG){
    case 1: vegIMG = brinjal;
    break;
    
    case 2: vegIMG = capsicum;
    break;
    
    case 3: vegIMG = carrot;
    break;
    
    case 4: vegIMG = potato;
    break;
    }
    
    switch(randanmIMG){
    case 1: anmIMG = cow;
    break;
    
    case 2: anmIMG = dog;
    break;
    
    case 3: anmIMG = goat;
    break;
    
    case 4: anmIMG = monkey;
    break;
    }
    
    switch(randplaIMG){
    case 1: plaIMG = planet_atmo;
    break;
    
    case 2: plaIMG = planet_earth;
    break;
    
    case 3: plaIMG = planet_mars;
    break;
    
    case 4: plaIMG = planet_mook;
    break;
    }
    
    switch(randIMGchooser){
    case 1:sprIMG = fruIMG;
    break;
    
    case 2:sprIMG = vegIMG;
    break;
    
    case 3:sprIMG = anmIMG;
    break;
    
    case 4:sprIMG = plaIMG;
    break;
    }
    
    switch(randoddsprIMGchooser){
    case 1:oddsprIMG = fruIMG;
           if(sprIMG == fruIMG){
           oddsprIMG = vegIMG;
           }
    break;
    
    case 2:oddsprIMG = vegIMG;
    if(sprIMG == vegIMG){
    oddsprIMG = fruIMG;
    }
    break;
    
    case 3:oddsprIMG = anmIMG;
    if(sprIMG == anmIMG){
    oddsprIMG = plaIMG;
    }
    break;
    
    case 4:oddsprIMG = plaIMG;
    if(sprIMG == plaIMG){
    oddsprIMG = anmIMG;
    }
    break;
    }

   
        
    }

 
