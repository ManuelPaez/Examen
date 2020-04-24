class Villano {
constructor(){

this.x=350;
this.y=height/2;
this.velx=4;
this.vely=6;
this.img=[];
this.frame=0;
this.dir=0.5;

for(var i=0; i<29; i++){
this.img[i]= loadImage("villano/villano_"+i+".gif");
}
}

mostrar(){
push();
translate(this.x, this.y);
scale(this.dir,0.5);
imageMode(CENTER);
image(this.img[this.frame],0,0);
pop();
}

derecha(){ 
this.frame++;
this.x=this.x + this.velx;
this.dir = 0.5;
if(this.frame> 7){
this.frame=0;
}
}
izquierda(){
this.frame++;
this.x=this.x-this.velx;
this.dir=-0.5;
if(this.frame>7){
this.frame=0;
}
}
  
  arriba(){
    this.frame++;
    this.y=this.y-this.vely;
    this.dir=1;
    if(this.frame>7){
this.frame=0;
}
}
  
  abajo(){
    this.frame++;
    this.y=this.y + this.vely;
    this.dir=1;
     if(this.frame>7){
this.frame=0;
}
    
  }
}



