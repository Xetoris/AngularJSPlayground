import awsDummyService from './aws-service-dummy.service';

describe('My dummy service', () => {
    let model;

    beforeEach(angular.mock.module(awsDummyService));
    beforeEach(inject((awsServiceDummy) => {
        model = awsServiceDummy;
    }));

    it('can return the response object', function(){
        let hash = 'aaaaaaaaa1111111111';
        let env = 'dev';

        let data = model.getDeployDetails(hash, env);
        expect(data).not.toBeNull();

        data.forEach((record) => {
            expect(record.details).not.toBeNull();
            expect(record.details.color.S).toEqual('blue');
            expect(record.details.git_hash.S).toEqual(hash);
            expect(record.details.run_env.S).toEqual(env);
        });
    });
});