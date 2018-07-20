function setup(){
    createCanvas(1000, 1000);
    fill("gray");
    let i =0;
    while( i < 500) {
        rect(0, i, 100, 100);
        rect(100, i, 100, 100);
        rect(200, i, 100, 100);
        rect(300, i, 100, 100);
        rect(400, i, 100, 100);
        i += 100;
    }
    
}
fill("pink");
rect((Math.floor(random(0, 5))*100), (Math.floor(random(0, 5))* 100), 100, 100);

if (mouseX =  && mouseY = ){
    mouseClicked(fill("red")); 
}


// how do I specifically fill the one box with red? 
// I am obviously going to have to have more than one box. How do I do the if statements for them?

    
