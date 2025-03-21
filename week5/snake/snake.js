// requires ../lambda/lambda.js


const north = pair( 0)(-1);
const east  = pair( 1)( 0);
const south = pair( 0)( 1);
const west  = pair(-1)( 0);

let direction = north;

const clockwise = [north, east, south, west, north];
const countercw = [north, west, south, east, north];

let snake = [
    pair(10)(5),
    pair(10)(6),
    pair(10)(7),
    pair(10)(8),
];
let food = pair(15)(15);

// function snakeEquals(a, b) { return a.x === b.x && a.y === b.y }
const pairEq = a => b =>  fst(a) === fst(b) && snd(a) === snd(b);

// Pair + Pair = Pair        // Monoid
const pairPlus = a => b =>  pair (fst(a) + fst(b)) (snd(a) + snd(b));

// Funktion und Pair = Pair  // Functor
const pairMap = f => p =>  pair ( f (fst(p)) ) ( f (snd(p)) );


function changeDirection(orientation) {
    const idx = orientation.indexOf(direction);
    console.log(idx);
    direction = orientation[idx + 1];
}

function safeGetElementById(id) {
    let result = document.getElementById(id);
    return result === undefined || result === null
           ? Left  ("cannot find element with id "+id)
           : Right (result)
}

const log = s => console.log(s);

function start() {

    // either (safeGetElementById("canvas"))
    //        (log)
    //        (startWithCanvas);
    // id (safeGetElementById("canvas"))
    //        (log)
    //        (startWithCanvas);
    safeGetElementById("canvas")
        (log)
        (startWithCanvas);
}

const startWithCanvas = canvas => {

    const context = canvas.getContext("2d");

    const rightArrow = 39;
    const leftArrow  = 37;
    window.onkeydown = evt => {
        console.log(event.keyCode);
        const orientation = (evt.keyCode === rightArrow) ? clockwise : countercw;
        changeDirection(orientation);
    };

    setInterval(() => {
        nextBoard();
        display(context);
    }, 1000 / 5);
};

const inBounds = max => x => {
    if (x < 0)   { return max - 1 }
    if (x >= max) { return 0 }
    return x
};

function nextBoard() {
    const max = 20;
    const oldHead = snake[0];

    const newHead = pairPlus (oldHead) (direction);
    const head    = pairMap  (inBounds(max)) (newHead) ;

    const pickRandom = () => Math.floor(Math.random() * max);
    if (pairEq(food)(head)) {  // have we found any food?
        food = pair(pickRandom())(pickRandom());
    } else {
        snake.pop(); // no food found => no growth despite new head => remove last element
    }
    snake.unshift(head); // put head at front of the list
}

function display(context) {
    // clear
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
    // draw all elements
    context.fillStyle = "cyan";
    snake.forEach(element =>
        fillBox(context, element)
    );
    // draw head
    context.fillStyle = "green";
    fillBox(context, snake[0]);
    // draw food
    context.fillStyle = "red";
    fillBox(context, food);
}

function fillBox(context, element) {
    context.fillRect(fst(element) * 20 + 1, snd(element) * 20 + 1, 18, 18);
}


