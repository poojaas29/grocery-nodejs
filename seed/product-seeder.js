var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');
// var pro= new Product() so by doing this we store 1 product of SCHEMA "Product" in variable pro....but here we have 
//done the same thing in array so that we can use loop.
var products = [
    new Product({
        imagePath: 'https://rukminim1.flixcart.com/image/352/352/j65cnm80/flour/z/s/r/1-superior-mp-atta-whole-wheat-flour-aashirvaad-original-imaewzbkfqhy4dhq.jpeg?q=70',
        title: 'Fresh Chakki Aata',
        description: '1 Kg',
        price: 32
    }),
    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/61ZhyN3P4tL._SX425_.jpg',
        title: 'Maida',
        description: '1 Kg',
        price: 30
    }),
    new Product({
        imagePath: 'https://cdn.grofers.com/app/images/products/full_screen/pro_52.jpg',
        title: 'Soyabean Oil',
        description: '1 L',
        price: 45
    }),
    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/61SacrIvdEL._SL1000_.jpg',
        title: 'Salt',
        description: '1 Kg',
        price: 18
    }),
    new Product({
        imagePath: 'https://m.media-amazon.com/images/I/61XhlsB3NCL._SY450_.jpg',
        title: 'Bournvita',
        description: '1 Kg',
        price: 62
    }),
    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/61kMbAz6gqL._SL1000_.jpg',
        title: 'Surf-Excel',
        description: '2 Kg',
        price: 72
    }),
    new Product({
        imagePath: 'https://cdn.shopclues.com/images1/thumbnails/78326/320/320/133733160-78326689-1540560903.jpg',
        title: 'Almonds',
        description: '1 Kg',
        price: 123
    }),
    new Product({
        imagePath: 'https://m.media-amazon.com/images/I/81iNQwS+INL._SL1500_.jpg',
        title: 'Ghee',
        description: '1 Kg',
        price: 68
    }),
    new Product({
        imagePath: 'https://assetscdn1.paytm.com/images/catalog/product/F/FA/FASFORTUNE-MUSTBIGB98583274A0622B/1561494139550_0.jpg?imwidth=320&impolicy=hq',
        title: 'Mustard-Oil',
        description: '1 L',
        price: 55
    }),
    new Product({
        imagePath: 'https://5.imimg.com/data5/YD/DJ/MY-70422967/skyplus-sugar-500x500.jpg',
        title: 'Sugar',
        description: '1 Kg',
        price: 40
    }),
    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/71qyzy9QnML._SL1500_.jpg',
        title: 'Oats',
        description: '1 Kg',
        price: 45
    }),
    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/610US2bRp0L._SX466_.jpg',
        title: 'Colgate',
        description: '110 g',
        price: 28
    }),
    new Product({
        imagePath: 'https://i5.walmartimages.com/asr/f0d3e9bf-ac3f-47c2-a058-4562c8380bfb_1.5b84b462ac7fd1c3e744dc51ecf6b236.jpeg',
        title: 'Corn Flakes',
        description: '1 Kg',
        price: 40
    }),
    new Product({
        imagePath: 'https://m.media-amazon.com/images/I/51fDyY27ThS._SY450_.jpg',
        title: 'Dettol',
        description: '500 mL',
        price: 62
    }),
    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/81kRgoWLYWL._SX679_.jpg',
        title: 'Nescafe Coffee',
        description: '250 g',
        price: 45
    })

];
//array of product name is products
var done = 0;
//looping is done over all products but as we know that node is a-synchronous so when we save a particular product 
//in database named shopping ...but till it is getting saved ....till then it may disconnect the sercer so when 
//our counter become equal to the length of items then only disconnect elese never disconnect.
for (var i = 0; i < products.length; i++) {
    products[i].save(function (err, result) {
        done++;
        if (done == products.length)
            exit();
    });
}
function exit() {
    mongoose.disconnect();
}