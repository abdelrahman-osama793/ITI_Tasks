class devTeamLeader {
    constructor(name) {
        if (devTeamLeader.instance != null) {
            throw new Error("There can only be one team leader for the development team");
        }
        this.name = name;
        this.job = 'Developer Team Leader';
        devTeamLeader.instance = this;
    }
}

class testingTeamLeader {
    constructor(name) {
        if (testingTeamLeader.instance != null) {
            throw new Error("There can only be one team leader for the testing team");
        }
        this.name = name;
        this.job = 'Testing Team Leader';
        testingTeamLeader.instance = this;
    }
}

class qualityTeamLeader {
    constructor(name) {
        if (qualityTeamLeader.instance != null) {
            throw new Error("There can only be one team leader for the quality team");
        }
        this.name = name;
        this.job = 'Quality Team Leader';
        qualityTeamLeader.instance = this;
    }
}

class designTeamLeader {
    constructor(name) {
        if (designTeamLeader.instance != null) {
            throw new Error("There can only be one team leader for the design team");
        }
        this.name = name;
        this.job = 'Design Team Leader';
        designTeamLeader.instance = this;
    }
}

class developing {
    static devleader = new devTeamLeader();
    constructor(name) {
        this.name = name;
        this.job = "Developer";
    }
}

class testing {
    constructor(name) {
        this.name = name;
        this.job = "Tester";
    }
}
class qualityControl {
    constructor(name) {
        this.name = name;
        this.job = "Quality control";
    }
}
class designers {
    constructor(name) {
        this.name = name;
        this.job = "Designer";
    }
}

function empFactory() {
    this.create = function (receivedObject) {

        switch (receivedObject.job) {
            case 1:
                return new developing(receivedObject.name);
                break;
            case 2:
                return new testing(receivedObject.name);
                break;
            case 3:
                return new qualityControl(receivedObject.name);
                break;
            case 4:
                return new designers(receivedObject.name);
                break;
        }

    }

    let worker1 = {
        name: "Abdelrahman Osama",
        job: 1,
    };
    let worker2 = {
        name: "Youssef Osama",
        job: 2,
    };
    let worker3 = {
        name: "Khalil Ahmed",
        job: 1,
    };
    let worker4 = {
        name: "Ali Ali",
        job: 2,
    };

    let worker5 = {
        name: "Ali Ali",
        job: 5,
    };

    let worker6 = {
        name: "Ali Ali",
        job: 5,
    };

    let employee = new empFactory();
    let emp1 = employee.create(worker1);
    let emp2 = employee.create(worker2);
    let emp3 = employee.create(worker3);
    let emp4 = employee.create(worker4);
    let emp5 = employee.create(worker5);
    let emp6 = employee.create(worker6);

    let devTeam = [];
    let designTeam = [];
    let qualityTeam = [];
    let testingTeam = [];

    function addToArray(obj) {

        switch (obj.job) {
            case 'Developer' || 'Developer Team Leader':
                devTeam.push(obj);
                break;
            case 'Tester' || 'Testing Team Leader':
                testingTeam.push(obj);
                break;
            case 'Designer' || 'Design Team Leader':
                designTeam.push(obj);
                break;
            case 'Quality control' || 'Quality Team Leader':
                qualityTeam.push(obj);
                break;
        }
    }

    addToArray(emp1);
    addToArray(emp2);
    addToArray(emp3);
    addToArray(emp4);


    function displayData(arr) {
        for (const key in arr) {
            console.log(`Name: ${arr[key].name}\nJob: ${arr[key].job}`);
        }
    }

    displayData(devTeam);
    displayData(testingTeam);