canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

car1wid = 120;
car1hit = 70;
car1image = "car1.png";
car1x = 10;
car1y = 10;

car2wid = 120;
car2hit = 70;
car2image = "car2.png";
car2x = 10;
car2y = 10;

backgroundimage="racing.jpg";

function add(){

background_img = new Image();
background_img.onload = uploadbackground;
background_img.src = backgroundimage;

car1_img = new Image();
car1_img.onload = uploadcar1;
car1_img.src = car1image;

car2_img = new Image();
car2_img.onload = uploadcar2;
car2_img.src = car2image;


}

function uploadbackground(){

    ctx.drawImage(background_img,0,0,canvas.width,canvas.height);

}

function uploadcar1(){

    ctx.drawImage( car1_img,car1x,car1y,car1wid,car1hit);
    
}

function uploadcar2(){

    ctx.drawImage( car2_img,car2x,car2y,car2wid,car2hit);
    
}

window.addEventListener("keydown",my_keydown)

function my_keydown(e){

 keypressed = e.keyCode;

 if(keypressed = '38'){
   car1up();
 }
 if(keypressed = '40'){
   car1down();
 }
 if(keypressed = '37'){
    car1left();
  }
  if(keypressed = '39'){
    car1right();
  }
 if(keypressed = '87'){
     car2up();
 }
 if(keypressed = '83'){
    car2down();
}
if(keypressed = '65'){
    car2left();
}
if(keypressed = '68'){
    car2right();
}

}

function car1up(){

  if(car1y >=0){
 
     car1y = car1y + 10;
     uploadbackground();
     uploadcar1();
     uploadcar2();
 
  }

}

function car1down(){

  if(car1y <= 500){
 
     car1y = car1y - 10;
     uploadbackground();
     uploadcar1();
     uploadcar2();
 
  }
}


function car1left(){

  if(car1x >= 0){
 
     car1x = car1x + 10;
     uploadbackground();
     uploadcar1();
     uploadcar2();
 
  }
}


function car1right(){

  if(car1x <=500){
 
     car1x = car1x - 10;
     uploadbackground();
     uploadcar1();
     uploadcar2();
 
  }
}


function car2up(){

  if(car2y >=0){
 
     car2y = car2y + 10;
     uploadbackground();
     uploadcar1();
     uploadcar2();
 
  }

}

function car2down(){

  if(car2y <= 500){
 
     car2y = car2y - 10;
     uploadbackground();
     uploadcar1();
     uploadcar2();
 
  }
}


function car2left(){

  if(car2x >= 0){
 
     car2x = car2x + 10;
     uploadbackground();
     uploadcar1();
     uploadcar2();
 
  }
}


function car1right(){

  if(car2x <=500){
 
     car2x = car2x - 10;
     uploadbackground();
     uploadcar1();
     uploadcar2();
 
  }
}

