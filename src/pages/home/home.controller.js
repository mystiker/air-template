export default class HomeController {
  constructor($mdSidenav) {
    this.name = 'Air-Note';
  }

  openMenu($mdMenu, ev) {
    $mdMenu.open(ev);
  };

  close() {
    $mdSidenav('left').close()
      .then(function () {
        $log.debug("close LEFT is done");
      });
  };
}