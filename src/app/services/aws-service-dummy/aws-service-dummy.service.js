import angular from 'angular';

class AwsServiceDummy {
    /**
     * Returns a mock version of our deploy details call.
     * @param {string} hash - The git hash we would normally look up.
     * @param {string} env - The name of the environment we would look in.
     */
    getDeployDetails(hash, env) {
        let response = [];

        for(let i = 0; i < 5; i++) {
            let detail = {};

            detail.details = {};
            detail.details.circle_build_number = { N:i.toString() };
            detail.details.color = { S:'blue' };
            detail.details.git_hash = { S:hash };
            detail.details.run_env = { S:env };
            detail.details.service_name = { S:'test_a' };
            detail.details.task_definition_version = { N: i.toString() };

            response.push(detail)
        }

        return response;
    }
}

export default angular.module('services.aws-service-dummy', [])
    .service('awsServiceDummy', AwsServiceDummy)
    .name;