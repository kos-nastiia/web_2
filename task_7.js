const mod = require('./passenger_module');
const { addTrain } = require('./passenger_module/train');

//********************************TRAINS********************************
let tr_1 = mod.addTrain("Kyiv-Lviv", "E125");
let tr_2=mod.addTrain("Lviv-Kharkiv", "B222");
let  tr_3 = mod.addTrain("Boryslav-Donets", "A45");

mod.editTrain("Kyiv-Lviv", "E125", "Kyiv-Kharkiv", "E999");

let find_2=mod.findTrain("Lviv-Kharkiv", "B222");
console.log(`Прошук потяга ${tr_2.direction}, ${tr_2.code} - ${find_2!==-1? "знайдено" : "не знайдено"}`);

mod.getTrains();
mod.deleteTrain("Kyiv-Kharkiv",  "E999");
mod.getTrains();

//******************************PASSENGERS******************************
let pas_1=mod.addPassenger("Anastasia", "Kostyrka", tr_1);
let pas_2=mod.addPassenger("Kateryna" ,"Radyvoniuk", tr_3);
let pas_3=mod.addPassenger("Daryna", "Riabokin", tr_1);
let pas_4=mod.addPassenger("Vladyslav", "Karabinovych", tr_2);
let pas_5=mod.addPassenger("Bohdan", "Darmoris", tr_1);
mod.getPassengersFromTrain(tr_1);
mod.deletePasenger("Kateryna", "Radyvoniuk", tr_1);
mod.getPassengersFromTrain(tr_1);
mod.editPassenger("Anastasia" ,"Kostyrka","Vitaliy","Beresh", tr_3);
let find_pas=mod.findPassenger("Daryna", "Riabokin", tr_1);
console.log(`Пошук пасажира ${pas_5.name} ${pas_5.surname} - ${find_pas!==-1? "знайдено":"не знайдено"}`);


//*******************************TICKETS*******************************
let t_1=mod.buyTicket(45, 3,pas_1, tr_1);
let t_2=mod.buyTicket(11,12,pas_2,tr_1);
let t_3=mod.buyTicket(52,10,pas_4,tr_1);
let t_4=mod.buyTicket(34,2,pas_5,tr_2);
let t_5=mod.buyTicket(44,9,pas_3,tr_3);

mod.getTicket(tr_1);
mod.deleteTicket(11,12,pas_2,tr_1);
mod.getTicket(tr_1);
mod.changeTicket(34,2,pas_5,tr_2,tr_1);
mod.getTicket(tr_1);