class Train {
    constructor(direction, code) {
        this.direction=direction;
        this.code=code;
        this.passengerList=[];
        this.ticketListInTrain=[];
        if(typeof direction==='undefined') this.direction='NoDirection';
        if(typeof code==='undefined') this.code='NoCode';
    }

}
let trainsList=new Array();

function addTrain(direction, code) {
    let train=new Train(direction,code);
    trainsList.push(train);
    return train;
}

function editTrain(direction,code,newDirection,newCode) {
    for(let id=0;id<trainsList.length;id++) {
        let train = trainsList[id];
        if(train.direction===direction&&train.code===code) {
            trainsList[id].direction=newDirection;
            trainsList[id].code=newCode;
            return 1;
        }
    }
    return -1;
}

function findTrain(direction,code) {
    for(let train in trainsList) {
        if(direction===train.direction&&code===train.code) return train;

    }
    return -1;
}

function deleteTrain(direction, code) {
    for(let id=0;id<trainsList.length;id++) {
        let train=trainsList[id];
        if(train.direction===direction&&train.code===code) {
            trainsList.splice(id,1);
            return 1;
        }
    }
    return -1;
}

function maxAmountOfTickets() {
    let max =trainsList[0];
    for(let id=1;id<trainsList.length;id++) {
        if( max.ticketListInTrain.length<trainsList[id].ticketListInTrain.length) {
            max=trainsList[id];
        }
    }
    return max;
}
function minAmountOfTickets() {
    let min =trainsList[0];
    for(let id=1;id<trainsList.length;id++) {
        if( min.ticketListInTrain.length>trainsList[id].ticketListInTrain.length) {
            min=trainsList[id];
        }
    }
    return min;
}
function getTrains() {
    console.log("\nALL TRAINS\n");
    for(let id=0;id<trainsList.length; id++) {
        let tr=trainsList[id];
        console.log(`Direction ${tr.direction} code ${tr.code}`);
    }
    console.log();
    return trainsList;
}

exports.addTrain=addTrain;
exports.deleteTrain=deleteTrain;
exports.editTrain=editTrain;
exports.findTrain=findTrain;
exports.maxAmountOfTickets=maxAmountOfTickets;
exports.minAmountOfTickets=minAmountOfTickets;
exports.getTrains=getTrains;