function createCar(id) {
    function createHtml() {
        var container = document.getElementById(id);
        container.innerHTML = `
        <div class="myCar">
        <div class="infoPanel">
            <label>Engine: </label><span data-role="engineStatus">OFF</span>
        </div>
        <div class="controlPanel">
            <input type="button" data-role="startCar" class="startedCar" value="Start Car">
            <input type="button" data-role="startCar" class="startedCar" value="Start Car from Android">
            <hr>
            <label>GearBox: </label><span data-role="gearBoxStatus">N</span>
        </div>
        </div>
        `;
    }

    function buttonStartClick() {
        engineStart();
    }
    function engineStart() {
        var randomStart = Math.random();

        if (randomStart > 0.5) {
            engineStarted();
            gearBoxStart();
        } else {
            engineNotStarted();
        }
    }
    function engineStarted() {
        processEl(engineStatuses, function (engineStatus) {
            engineStatus.innerHTML = 'Car have started';
        });

        processEl(gearBoxStatuses, function (gearBoxStatus) {
            gearBoxStatus.innerHTML = '1';
        });
        processEl(buttonStartCars, function (buttonStartCar) {
            buttonStartCar.classList.add('hide');
        });
        statusLogs('Car have started');
        planeCrashed();
    }

    function engineNotStarted() {
        processEl(engineStatuses, function (engineStatus) {
            engineStatus.innerHTML = 'Car don\'t started. Tray again';
        });
        statusLogs('Car don\'t started. Tray again');
    }
    function planeCrashed() {
        setTimeout(crashedCar, 3000);
        statusLogs('Plane crash car 3 sec.')
    }
    function crashedCar() {
        processEl(engineStatuses, function (engineStatus) {
            engineStatus.innerHTML = 'Engine crashed. Car stopped';
        });
        processEl(buttonStartCars, function (buttonStartCar) {
            buttonStartCar.classList.remove('hide');
        });
        processEl(gearBoxStatuses, function (gearBoxStatus) {
            gearBoxStatus.innerHTML = 'N';
        });
        window.clearInterval(intervalClean);
        statusLogs('Crash Car');
    }
    function gearBoxStart() {
        var gearBoxValue = '1';
        processEl(gearBoxStatuses, function (gearBoxStatus) {
            gearBoxStatus.innerHTML = gearBoxValue;
        });
        function gearBoxIncrements() {
            if (gearBoxValue < 5) {
                gearBoxValue++;
                processEl(gearBoxStatuses, function (gearBoxStatus) {
                    gearBoxStatus.innerHTML = gearBoxValue;
                });
            }
        }
        intervalClean = setInterval(gearBoxIncrements, 1000);
    }
    function statusLogs(message) {
        console.log(message);
    }
    createHtml();
    var intervalClean;
    var buttonStartCars = document.getElementById(id).querySelectorAll("[data-role='startCar']");
    var engineStatuses = document.getElementById(id).querySelectorAll("[data-role='engineStatus']");
    var gearBoxStatuses = document.getElementById(id).querySelectorAll("[data-role='gearBoxStatus']");
    
    processEl(buttonStartCars, function (buttonStartCar) {
        buttonStartCar.addEventListener('click', buttonStartClick);
    });

    function processEl(arreyOfEls, processor) {
        for (var i = 0; i < arreyOfEls.length; i++) {
            var item = arreyOfEls[i];
            processor(item);
        }
    }
}

