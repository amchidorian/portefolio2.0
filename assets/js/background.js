var ww = window.innerWidth,
    wh = window.innerHeight,
    canvas = document.getElementById("scene"),
    ctx = canvas.getContext("2d"),
    amount = 250,
    particles = []
colors = ["#005572", "#006573", "#008B8D", "#81BEAA", "#F4D4AD", "#81BEAA", "#008B8D", "#006573", "#005572"];

ctx.canvas.width = ww;
ctx.canvas.height = wh;

function init() {
    for (var i = 0; i < amount; i++) {
        particles.push(new Particle(i));
    }
    // window.addEventListener("mousemove", onMouseMove);
    window.onresize = onResize;

    requestAnimationFrame(render);
}

function Particle(i) {

    this.x = ((ww / amount) * i) + ((Math.random() - 0.5) * 100);
    this.y = Math.random() * wh;
    this.speed = Math.random() / 4 + 0.05;
    this.radius = (Math.random()) / 5;
    this.colour = "hsl(" + ((360 / amount) * i) + ",50%,50%)";
    this.colour = colors[Math.floor(this.x / (ww / 9))];

    return this;

}

Particle.prototype.render = function (a) {
    a=100;
    ctx.fillStyle = this.colour;
    this.y += this.speed;
    if (this.y >= (wh + this.radius)) {
        this.y = (-this.radius);
    }
    this.radius = this.radius;
    ctx.globalAlpha = 0.08;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fill();

}

function onResize() {
    ww = window.innerWidth;
    wh = window.innerHeight;
    ctx.canvas.width = ww;
    ctx.canvas.height = wh;
    // cancelAnimationFrame(requestAnimationFrame(render));
};

function render(a) {
    console.log(a)
    if (a == null || 15000 > a) {
        requestAnimationFrame(render);

        for (var i = 0; i < amount; i++) {
            particles[i].render(a);
        }
    }

};

init();