const product = [
    {
        id: 1,
        image: './images/headphones.webp',
        title: ' Phillips Headphones',
        price: '₹5,999'
    },
    {
        id: 2,
        image: './images/HP-laptop.jpg',
        title: 'HP laptop',
        price: '₹34,999'
    },
    {
        id: 3,
        image: './images/fireboltt-watch2.jpg',
        title: 'Fireboltt Smart Watch',
        price: '₹4,999'
    },
    {
        id: 4,
        image: './images/OP-nord-ce.png',
        title: 'OnePlus Nord CE 3',
        price: '₹24,999'
    },
    {
        id: 5,
        image: './images/s21-ultra.jpg',
        title: 'Samsung Galaxy S21 Ultra',
        price: '₹55,999'
    },
    {
        id: 6,
        image: './images/boat-earphone.png',
        title: 'Boat Rockerz 255 Pro+',
        price: '₹1,999'
    },
    {
        id: 7,
        image: './images/z-flip-3.jpg',
        title: 'Z Flip 3 Foldable Mobile',
        price: '₹83,999'
    },
    {
        id: 8,
        image: './images/nitro-5.png',
        title: 'Acer Nitro 5',
        price: '₹82,999'
    },
]
const categories = [...new Set(product.map((item)=>
{return item}))]

let img = document.getElementById('root')
img.innerHTML = categories.map((item)=>
{
var {image, title, price} = item;
   return(
   `<div class="box">
        <div class="img-box">
            <img src=${image}></img>
        </div>
        <div class="left">
            <p>${title}</p>
            <h2>${price}</h2>
            <button>Add to Cart</button>    
        </div>
    </div>`)
}).join('')