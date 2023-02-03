// firts 100 = 100
// 101 - 200 = 90
// 201 - 300 =70

function ticketPrice(ticketQ) {
    const first100Rate = 100;
    const sec100Rate = 90;
    const restTicketRate = 50;

    if (ticketQ <= 100) {
        const price = ticketQ * first100Rate;
        return price;
    }
    else if (ticketQ <= 200 ) {
        first100Price = 100 * first100Rate;
        const restQ = ticketQ - 100;
        const restTicketPrice = restQ * sec100Rate;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
    }
    else{
        first100Price = 100 * first100Rate;
        sec100Price = 100 * sec100Rate;
        const restQ = ticketQ - 200;
        const restTicketPrice = restQ * restTicketRate;
        const totalPrice = first100Price +sec100Price+ restTicketPrice;
        return totalPrice;

    }
}

const price = ticketPrice(220);
console.log(price);