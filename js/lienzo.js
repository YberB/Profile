const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

const w = canvas.width = document.body.offsetWidth;
const h = canvas.height = document.body.offsetHeight;

const cols = Math.floor(w / 20) + 1;
const posicion_y = Array(cols).fill(0);

ctx.fillStyle = '#000';
ctx.fillRect(0, 0, w, h);

function matrix(){
    ctx.fillStyle = '#0001';
    ctx.fillRect(0, 0, w, h);

    ctx.fillStyle = '#edff21';
    ctx.font = "25pt monospace";

    posicion_y.forEach((y, ind)=>{
        const text = String.fromCharCode(Math.random() * 128);
        const x = ind * 20;
        ctx.fillText(text, x, y);
        if (y > 100 + Math.random() * 10000) {
            posicion_y[ind] = 0;
        }
        else posicion_y[ind] = y + 20;
    }); 
}

setInterval(matrix, 50);

