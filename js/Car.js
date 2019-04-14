function Car(id) {
    var that = this;
    this._engine = new Engine();
    this._ggearBox = new GearBox();
    this._logger = new Logger();
    this._createrHtml = new CreaterHtml(function(){
           that.startCar();
    });
    this._createrHtml.render(id);
}

Car.prototype = {
    startCar: function () {
        var randomStart = Math.random();

        if (randomStart > 0.5) {
            this._engineStarted();
            this._gearBoxStart();
        } else {
            this._engineNotStarted();
        }
    },
    _engineStarted: function () {
        this._createrHtml.drawStatus('Car have started');
        this._logger.log('Car have started');
        this._processEl(this._gearBoxStatuses, function (gearBoxStatus) {
            gearBoxStatus.innerHTML = '1';
        });
        this._processEl(this._buttonStartCars, function (buttonStartCar) {
            buttonStartCar.classList.add('hide');
        });

    },
    _engineNotStarted: function () {
       this._createrHtml.drawStatus('Car don\'t started. Tray again');
        this._logger.log('Car don\'t started. Tray again');


    },
    _gearBoxStart: function () {
        this._logger.log('GB start');
    },
    



}