import mangoIceCream from '../../images/mango-ice-cream.jpeg'
import chocolateIceCream1 from '../../images/chocolate-ice-cream-1.jpg'
import chocolateIceCream2 from '../../images/chocolate-ice-cream-2.jpeg'
import chocolateIceCream3 from '../../images/chocolate-ice-cream-3.jpeg'
import watermelonIceCream from '../../images/watermelon-ice-cream.jpeg'
import caramelIceCream from '../../images/caramel-ice-cream-1.jpeg'
import caramelIceCream2 from '../../images/caramel-ice-cream-2.jpeg'
import coffeeIceCream1 from '../../images/coffee-ice-cream-1.jpeg'
import coffeeIceCream2 from '../../images/coffee-ice-cream-2.jpeg'
import coffeeIceCream3 from '../../images/coffee-ice-cream-3.jpeg'
import strawberryIceCream1 from '../../images/strawberry-ice-cream-1.jpeg'
import strawberryIceCream2 from '../../images/strawberry-ice-cream-2.jpeg'
import strawberryIceCream3 from '../../images/strawberry-ice-cream-3.jpeg'
import appleIceCream from '../../images/apple-ice-cream.jpeg'
import appleIceCream2 from '../../images/apple-ice-cream-2.jpeg'
import peachIceCream1 from '../../images/peach-ice-cream-1.jpeg'
import peachIceCream2 from '../../images/peach-ice-cream-2.jpeg'
import vanillaIceCream from '../../images/vanilla-ice-cream.jpeg'
import appleAndStrawberryIceCream from '../../images/apple-and-strawberry-ice-cream.jpeg'
import chocolateAndStrawberryIceCream1 from '../../images/chocolate-and-strawberry-ice-cream.jpeg'
import chocolateAndStrawberryIceCream2 from '../../images/chocolate-and-strawberry-ice-cream-2.jpeg'
import cherryIceCream from '../../images/cherry-ice-cream.jpeg'





const Products = [
    {
        'id': 1,
        'title': 'chocolate ice cream 2',
        'price': 5,
        img: chocolateIceCream2
    },
    {
        'id': 2,
        'title': 'apple and strawberry ice cream',
        'price': 10,
        img: appleAndStrawberryIceCream
    },
    {
        'id': 3,
        'title': 'peach ice cream',
        'price': 8,
        img: peachIceCream2
    },
    {
        'id': 4,
        'title': 'strawberry ice cream 2',
        'price': 13,
        img: strawberryIceCream2
    },
    {
        'id': 5,
        'title': 'coffee ice cream 1',
        'price': 12,
        img: coffeeIceCream1
    },
    {
        'id': 6,
        'title': 'coffee ice cream 2',
        'price': 8,
        img: coffeeIceCream2
    },
    {
        'id': 7,
        'title': 'watermelon ice cream',
        'price': 10,
        img: watermelonIceCream
    },
    {
        'id': 8,
        'title': 'caramel ice cream',
        'price': 15,
        img: caramelIceCream
    },
    {
        'id': 9,
        'title': 'peach ice cream',
        'price': 10,
        img: peachIceCream1
    },
    {
        'id': 10,
        'title': 'mango ice cream',
        'price': 12,
        img: mangoIceCream
    },
    {
        'id': 11,
        'title': 'apple ice cream',
        'price': 15,
        img: appleIceCream
    },
    {
        'id': 12,
        'title': 'strawberry ice cream 1',
        'price': 5,
        img: strawberryIceCream1
    },
    {
        'id': 13,
        'title': 'chocolate ice cream 3',
        'price': 4,
        img: chocolateIceCream3
    }
]




export const Special = [
    {
        'id': 14,
        'title': 'chocolate ice cream 4',
        'price': 25,
        img: chocolateIceCream1,
        "sauce": "caramel sauce",
        "size": "small",
        "flavors": ["chocolate", "biscuit"]
    },
    {
        'id': 15,
        'title': 'caramel ice cream',
        'price': 20,
        img: caramelIceCream2,
        "sauce": "strawberry sauce",
        "size": "big",
        "flavors": ["caramel", "chocolate chips"]
    },
    {
        'id': 16,
        'title': 'strawberry ice cream 3',
        'price': 20,
        img: strawberryIceCream3,
        "sauce": "chocolate sauce",
        "size": "small",
        "flavors": ["strawberry", "biscuit",]
    },
    {
        'id': 17,
        'title': 'chocolate and strawberry ice cream 1',
        'price': 15,
        img: chocolateAndStrawberryIceCream1,
        "sauce": "chocolate sauce",
        "size": "small",
        "flavors": ["chocolate", "strawberry"]
    },
    {
        'id': 18,
        'title': 'vanilla ice cream',
        'price': 18,
        img: vanillaIceCream,
        "sauce": "caramel sauce",
        "size": "small",
        "flavors": ["vanilla", "chocolate chips",]
    },
    {
        'id': 19,
        'title': 'apple ice cream 2',
        'price': 17,
        img: appleIceCream2,
        "sauce": "caramel sauce",
        "size": "big",
        "flavors": ["apple", "chocolate chips",]
    },
    {
        'id': 20,
        'title': 'coffee ice cream 3',
        'price': 12,
        img: coffeeIceCream3,
        "sauce": "caramel sauce",
        "size": "small",
        "flavors": ["coffee",]
    },
    {
        'id': 21,
        'title': 'chocolate and strawberry ice cream 2',
        'price': 24,
        img: chocolateAndStrawberryIceCream2,
        "sauce": "chocolate sauce",
        "size": "big",
        "flavors": ["chocolate", "strawberry"]
    },
    {
        'id': 22,
        'title': 'cherry ice cream',
        'price': 20,
        img: cherryIceCream,
        "sauce": "chocolate sauce",
        "size": "big",
        "flavors": ["cherry", "chocolate chips",]
    },
]









export default Products;