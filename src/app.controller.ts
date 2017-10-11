interface IAppComponentBindings {
    username: string;
}

interface IAppController extends IAppComponentBindings, ng.IController {
    do(): void;
    toggle(): void;
}

export class AppController implements IAppController {
    static $inject = ['$state', '$mdSidenav'];

    public username: string = "Tom";

    public toggle(): void {
        this.$mdSidenav('menu-left')
        .toggle();
    }

    public do(): void {
        alert("test");
    }

    constructor(private $state: ng.ui.IStateService, private $mdSidenav: ng.material.ISidenavService) {
    }
}