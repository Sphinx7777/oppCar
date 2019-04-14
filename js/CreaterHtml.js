function CreaterHtml(startListener) {
    this._startListener = startListener;
}
CreaterHtml.prototype = {
    render: function (id) {
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
        this._buttonStartCars = document.getElementById(id).querySelectorAll("[data-role='startCar']");
        this._engineStatuses = document.getElementById(id).querySelectorAll("[data-role='engineStatus']");
        this._gearBoxStatuses = document.getElementById(id).querySelectorAll("[data-role='gearBoxStatus']");
        
        var that = this;
        
        this._processEl(this._buttonStartCars, function (buttonStartCar) {
            buttonStartCar.addEventListener('click', function(eP) {
                that._buttonStartClick(eP);
            });
        });
    },
    drawStatus: function (status) {
        this._processEl(this._engineStatuses, function (engineStatus) {
            engineStatus.innerHTML = status;
        });
    },
    _processEl: function (arreyOfEls, processor) {
        for (var i = 0; i < arreyOfEls.length; i++) {
            var item = arreyOfEls[i];
            processor.apply(this, [item]);
        }
    },
    _buttonStartClick: function(eP) {
        this._startListener(eP);
    }

}