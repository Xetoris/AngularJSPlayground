import SideBarNavigationComponent from './side-bar-navigation.component';

describe('SideBarNavigationComponent', function () {
    let $componentController;

    beforeEach(angular.mock.module('components.side-bar-navigation'));
    beforeEach(inject(function (_$componentController_) {
        $componentController = _$componentController_;
    }));

    it('is bound to the isOpen binding', function () {
        let bindings = {
            isOpen: true, onClose: (nope) => {
            }
        };
        let ctrl = $componentController('sideBarNavigation', null, bindings);

        expect(ctrl.isOpen).toEqual(true);
    });

    it('invokes onClose function', function () {
        let onCloseSpy = jasmine.createSpy('onClose');
        let bindings = {isOpen: true, onClose: onCloseSpy};
        let ctrl = $componentController('sideBarNavigation', null, bindings);

        ctrl.closeSidebar();

        expect(onCloseSpy).toHaveBeenCalledWith({
            newState: {
                isOpen: false
            }
        });
    });
});