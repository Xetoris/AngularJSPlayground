export default class DeployModal {
    constructor(awsServiceDummy, NgTableParams) {
        this.dummy = awsServiceDummy;
        this.env = '';
        this.hash = '';
        this.tableParams = new NgTableParams({}, { data: [] });
    }

    refreshData() {
        let source = this.dummy.getDeployDetails(this.hash, this.env);
        let result = [];

        source.forEach((item) => {
            let record = {};

            record.circle_build_number = item.details.circle_build_number.N;
            record.color = item.details.color.S;
            record.git_hash = item.details.git_hash.S;
            record.run_env = item.details.run_env.S;
            record.service_name = item.details.service_name.S;
            record.task_definition_version = item.details.task_definition_version.N;

            result.push(record);
        });

        console.log(result);

        this.tableParams.settings({
            dataset: result
        });
    }

    $onChanges(changes) {
        console.log(changes);
        if(changes.hash || changes.env)
        {
            this.refreshData();
        }
    }
};