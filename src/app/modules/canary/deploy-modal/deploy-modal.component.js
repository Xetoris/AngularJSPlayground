import angular from 'angular';
import DeployModalController from './deploy-modal.controller.js';
import awsServiceDummy from '../../common/aws-service-dummy/aws-service-dummy.service';


export default angular.module('components.deploy-modal', [awsServiceDummy, "ngTable"])
    .component('deployModal', {
        template: require('./deploy-modal.template.html'),
        controller: DeployModalController,
        bindings: {
            'hash': '<',
            'env' : '<'
        }
    })
    .name;