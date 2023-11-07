interface Room {
    room: number;
    reserved: boolean;
}

const rooms: Room[] = [
    {room: 10, reserved: true },
    {room: 15, reserved: false },
    {room: 20, reserved: true },
    {room: 25, reserved: false },
    {room: 30, reserved: true },
    {room: 35, reserved: false },
]

function update () {
    let emptyRooms: number = 0
    let occupiedRooms: number = 0
    rooms.forEach(r => {
        r.reserved ? occupiedRooms++ : emptyRooms++
    })
    console.log(`Quartos ocupados: ${occupiedRooms}`)
    console.log(`Quartos vazios: ${emptyRooms}`)
}
update()

function reserve (room: number) {
    rooms.filter(r => {
       if(room === r.room) {
            if(r.reserved) {
                console.log(`Quarto ${room} indísponivel. Impossivel reservar.`);
            } else {
                console.log(`Quarto ${room} disponivel. Reservado com sucesso`);
                r.reserved = true
            }
       }
    })   
}
reserve(25)
update()

function search (room: number) {
    const found = rooms.filter (r => room === r.room);
    console.log(found)
}

search(25)

function cancelReserve (room: number) {
    rooms.filter(r => {
        if (room === r.room) {
            if(room === r.room && r.reserved === false) {
                console.log("O quarto não está reservado. Impossível concelar")
            } else {
                console.log(`Reserva para o quarto ${room} cancelada`)
                r.reserved = false
            }
        }
    }) 
}
cancelReserve(25)
update()

