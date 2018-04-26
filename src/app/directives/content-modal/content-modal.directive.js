import angular from 'angular';

export default angular.module('directives.modal', [])
    .directive('contentModal', () => {
        return {
            restrict: 'E',
            transclude: true,
            template: require('./content-modal.template.html')
        }
    })
    .name;