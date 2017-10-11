interface IAppComponentBindings {
    username: string;
}

interface IAppController extends IAppComponentBindings, ng.IController
{
  do(): void;
}

export class AppController implements IAppController {
  static $inject = ['$state'];

  public username: string = "Tom";

  public do(): void {
    alert("test");
  }

  constructor(private $state: ng.ui.IStateService) {
    
  }
}