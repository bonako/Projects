var bird;
var pipes = [];

function setup() {
    createCanvas(400, 600);
    bird = new Bird();
}

function draw() {
    background(0);
    bird.update();
    bird.show();

    if (frameCount % 100 == 0) {
        pipes.push(new Pipe());
    }

    for (var i = pipes.length-1; i >= 0; i--) {
        pipes[i].update();
        pipes[i].show();

        if (pipes[i].hits(bird)) {

        }

        if (pipes[i].offscreen()) {
            pipes.splice(i, 1);
        }
    }

}

function keyPressed() {
    if (key = ' ') {
        bird.up();
    }
}