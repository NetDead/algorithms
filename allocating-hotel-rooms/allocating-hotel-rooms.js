export const allocateHotelRooms = customers => {
  const reservedRooms = [];

  return customers.reduce((acc, customer) => {
    const freeRoomIndex = reservedRooms.findIndex(room =>
      room.every(reservedDate => (reservedDate[1] < customer[0] || reservedDate[0] > customer[1]) && room.push(customer))
    );

    return [
      ...acc,
      freeRoomIndex === -1
        ? reservedRooms.push([customer])
        : freeRoomIndex + 1
    ];
  }, []);
};
