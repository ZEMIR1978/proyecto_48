 

class Piso {

constructor(x,y){
    this.x = x
    this.y = y
    this.w = 120
    this.h = 10


}

display(){
    piso = createSprite(this.x,this.y,this.w,this.h);
    mariachi.collide(piso)
    skeletonGroup.collide(piso)

}

}