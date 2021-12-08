var x=20, y=20, r=5;
var ysamm=1, ykiirendus=0.4;
var t, g, a, b, c; //tahvel, graafiline kontekst
function algus(){

    t=document.getElementById("tahvel");
    a=t.getContext("2d");
    g=t.getContext("2d");
    b=t.getContext("2d");
    c=t.getContext("2d");
    //setInterval('liigu()', 50);
}
function elka(){
    a.clearRect(0, 0, t.width, t.height);
    a.strokeStyle="brown";
    a.fillStyle="brown";
    a.beginPath()
    a.fillRect(0,450,10000,100);
    a.stroke();
    a.fill();

    a.strokeStyle="brown";
    a.fillStyle="brown";
    a.beginPath()
    a.fillRect(240,430,50,50);
    a.stroke();
    a.fill();

    a.strokeStyle="green";
    a.fillStyle="green";
    a.beginPath()
    a.moveTo(150,430);
    a.lineTo(260,330);
    a.lineTo(380,430);
    a.stroke();
    a.fill();

    a.strokeStyle="green";
    a.fillStyle="green";
    a.beginPath()
    a.moveTo(180,350);
    a.lineTo(260,230);
    a.lineTo(350,350);
    a.stroke();
    a.fill();

    a.strokeStyle="green";
    a.fillStyle="green";
    a.beginPath()
    a.moveTo(200,260);
    a.lineTo(260,150);
    a.lineTo(320,260);
    a.stroke();
    a.fill();
    a.closePath();
}
function mangud(){

    g.strokeStyle="red";
    g.fillStyle="red";
    g.beginPath()
    g.arc(280, 220, r, 0, 2*Math.PI, true);
    g.stroke();
    g.fill();

    g.strokeStyle="yellow";
    g.fillStyle="yellow";
    g.beginPath()
    g.arc(235, 380, r, 0, 2*Math.PI, true);
    g.stroke();
    g.fill();

    g.strokeStyle="blue";
    g.fillStyle="blue";
    g.beginPath()
    g.arc(245, 300, r, 0, 2*Math.PI, true);
    g.stroke();
    g.fill();

    g.strokeStyle="purple";
    g.fillStyle="purple";
    g.beginPath()
    g.arc(240,240 , r, 0, 2*Math.PI, true);
    g.stroke();
    g.fill();

    g.strokeStyle="lightblue";
    g.fillStyle="lightblue";
    g.beginPath()
    g.arc(300, 320, r, 0, 2*Math.PI, true);
    g.stroke();
    g.fill();

}
function zvezda(){
    b.strokeStyle="yellow";
    b.fillStyle="yellow";
    b.beginPath();
    b.lineTo(250,97);
    b.lineTo(264,132);
    b.lineTo(304,131);
    b.lineTo(267,145);
    b.lineTo(255,178);
    b.lineTo(239,147);
    b.lineTo(205,142);
    b.lineTo(239,130);
    b.lineTo(248,99);

    b.stroke();
    b.fill();
}
function sneg(){
    c.strokeStyle="white";
    c.fillStyle="white";
    c.beginPath()
    c.arc(x, y, r, 0, 2*Math.PI, true);
    c.stroke();
    c.fill();
    c.stroke()

    c.beginPath()
    c.arc(x+123, y+100, r, 0, 2*Math.PI, true);
    c.stroke();
    c.fill();
    c.stroke()

    c.beginPath()
    c.arc(x+200, y, r, 0, 2*Math.PI, true);
    c.stroke();
    c.fill();
    c.stroke()
}
/*function liigu(){
    ysamm=ysamm+ykiirendus;
    y=y+ysamm;
    sneg();
}*/
