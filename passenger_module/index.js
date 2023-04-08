const train=require('./train');
const ticket=require('./ticket');
const passenger=require('./passenger');

exports.addPassenger=passenger.addPassenger;
exports.deletePasenger=passenger.deletePasenger;
exports.editPassenger=passenger.editPassenger;
exports.findPassenger=passenger.findPassenger;
exports.getPassengersFromTrain=passenger.getPassengersFromTrain;

exports.buyTicket=ticket.buyTicket;
exports.deleteTicket=ticket.deleteTicket;
exports.findSoldTicket=ticket.findSoldTicket;
exports.changeTicket=ticket.changeTicket;
exports.getTicket=ticket.getTicket;

exports.addTrain=train.addTrain;
exports.deleteTrain=train.deleteTrain;
exports.editTrain=train.editTrain;
exports.findTrain=train.findTrain;
exports.maxAmountOfTickets=train.maxAmountOfTickets;
exports.minAmountOfTickets=train.minAmountOfTickets;
exports.getTrains=train.getTrains;