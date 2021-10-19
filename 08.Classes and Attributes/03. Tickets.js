function solve(array, sortBy){
    class Ticket {
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    let tickets = [];
    array.forEach(element => {
        let splited = element.split('|');
        let ticket = new Ticket(splited[0], Number(splited[1]), splited[2]);
        tickets.push(ticket);
    });

    if(sortBy == 'destination'){
        tickets.sort((a, b) => {
            return a.destination.localeCompare(b.destination);
        });
    } else if(sortBy == 'price'){
        tickets.sort((a, b) => {
            return a.price - b.price;
        });
    }
    else if(sortBy == 'status'){
        tickets.sort((a, b) => {
            return a.status.localeCompare(b.status);
        });
    }
    return tickets;
}

solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination')