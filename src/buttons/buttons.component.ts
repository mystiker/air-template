class ButtonsController implements ng.IController {    
    constructor() {
    }
}

export class ButtonComponent implements ng.IComponentOptions {
    static NAME: string = 'buttonsView';
    controller: any;
    template: any;
    constructor() {
        this.controller = ButtonsController;
        this.template = require('./buttons.html');
    }
}