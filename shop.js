const phones =[
    {name: 'Samsung', camera: 105, storage: '256GB', price: 105000, color: 'burgundy' },
    {name: 'Walton', camera: 10, storage: '32GB', price: 10500, color: 'silver' },
    {name: 'Xaomi', camera: 15, storage: '25GB', price: 12500, color: 'black' },
    {name: 'iphone', camera: 15, storage: '156GB', price: 52000, color: 'orange' },
    {name: 'Nokia', camera: 105, storage: '156GB', price: 105000, color: 'burgundy' },
    {name: 'HTC', camera: 20, storage: '56GB', price: 9000, color: 'red' }
];
function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        //console.log(phone);
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);