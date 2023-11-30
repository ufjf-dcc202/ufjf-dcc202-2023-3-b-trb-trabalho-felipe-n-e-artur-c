function intervaloNumRandom(a, b)
{
    return Math.floor(Math.random() * (b - a + 1)) + a
}

let valorMin = 1;
let valorMax = 6;

console.log(intervaloNumRandom(valorMin, valorMax));
