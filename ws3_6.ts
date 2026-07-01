type Category = 'Electronics' | 'Clothing' | 'Foods';

interface product {
    readonly id: string;
    name: string;
    category: Category;
    price: number;
}

const Products: product[] = [
    { id: "0589648521", name: "Laptop", price: 25000, category: 'Electronics' },
    { id: "2896751235", name: "T-Shirt", price: 500, category: 'Clothing' },
    { id: "3814532859", name: "Pizza", price: 200, category: 'Foods' },
    { id: "9856321478", name: "Headphones", price: 1500, category: 'Electronics' },
    { id: "7412589630", name: "Jeans", price: 1200, category: 'Clothing' },
    { id: "9638527410", name: "Burger", price: 150, category: 'Foods' }
];

function ShowProduct(category: Category) {
    let FilteredProducts: product[] = Products.filter(p => p.category === category);
    for (const p of FilteredProducts) {
        console.log(`ID: ${p.id}, Name: ${p.name}, Category: ${p.category}, Price: ${p.price}`);
    }
}

let selectedCategory: Category = 'Electronics';
console.log(`Products in category: ${selectedCategory}`);
ShowProduct(selectedCategory);