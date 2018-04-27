export default class SideBarNavigationController {
    constructor() {
        this.isOpen = false;
        this.sidebarPosition = { "left": '-255px' }
    }

    closeSidebar() {
        console.log("Close called.");
        this.isOpen = false;
        this.sidebarPosition = { "left": '-255px' }
    }

    $onChanges(change){
        console.log(change);

        if(change.isOpen && change.isOpen.currentValue) {
            this.sidebarPosition = { "left": '0px' }
        }
    }
}