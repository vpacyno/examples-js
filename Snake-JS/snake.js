class Snake {
    constructor() {
        this.position = createVector(20, 20);
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.size = SCL;  
        this.total = 0;  
        this.tail = [];  

    }

    setMoveDirection(xDir, yDir) {
        this.xSpeed = xDir * SCL;
        this.ySpeed = yDir * SCL;
    }

    update() {
        if (this.total === this.tail.length) {
            for (var i=0; i < this.tail.length - 1; i++) {

                this.tail[i] = this.tail[i+1];  
            }
        }

        if (this.total > 0) {
            this.tail[this.total - 1] = this.position.copy();  
        }

        const tempX = this.position.x + this.xSpeed;
        const tempY = this.position.y + this.ySpeed;

        this.position.x = constrain(tempX, 0, width-this.size);
        this.position.y = constrain(tempY, 0, height-this.size);
        this.show();

        this.loosesTail();
    }

    show() {
        stroke(51);
        fill(255);

        for (var i=0; i < this.tail.length; i++) {

            rect(this.tail[i].x, this.tail[i].y, this.size, this.size);
            
        }

        rect(this.position.x, this.position.y, this.size, this.size);
    }

    eatsFood(foodVector) {
        const d = this.position.dist(foodVector);

                if(d < 1) {
            this.total++;
            return true;
        }
        
        return false;
    }

    loosesTail () {
        for (var i = 0; i < this.tail.length; i++) {
            const tailPosition = this.tail[i];
            const d = this.position.dist(tailPosition);

            if(d < 1) {

                this.total = 0;
                this.tail = [];  
                return true;
            }
        }

        return false;
    }
}