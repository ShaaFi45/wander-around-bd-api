const config = require('config');

// const config = require('./config/local.json'); // Assuming your config is in local.json
const CONSTANTS = {
    config: config,
    settings: {
        roles: {
            "User": 1,
            "Admin": 2,
            "Super Admin": 3,
            "Organization Owner": 4,
            "Organization Member": 5,
            "Project Owner": 6,
            "Product Manager": 7,
            "Project Manager": 8,
            "Developer": 9,
            "QA": 10,
            "Designer": 11
        },
        auth_type: {
            "Password Login": 0,
            "Microsoft Login": 1,
            "Facebook Login": 2,
            "Google Login": 3
        },
        status: {
            "Inactive User": 0,
            "Active User": 1,
            "Pending Verification": 2,
            "Archived": 3
        },
        project_status: {
            "Inactive": 0,
            "Active": 1,
            "Archived": 2
        },
        org_status: {
            "Inactive": 0,
            "Active": 1,
            "Archived": 2
        },
        task_status: {
            "Open": 0,
            "InProgress": 1,
            "Done": 2
        },
        plans: {
            'Special': 1,
            'Trial': 2,
            'Standard': 3,
            'Partnership': 4
        }
    },
    aws_file_base_path: "https://s3.us-west-2.amazonaws.com/tracker.w3engineers.com/",
    working_hour_in_sec: 8 * 60 * 60,
    hour_slot_in_sec: 10 * 60,
    time_zone: 'GMT',
    date_format: 'YYYY-MM-DD HH:mm:ss Z',
    date_time_format: 'YYYY-MM-DD HH:mm:ss',
    start_date_format: 'YYYY-MM-DD 18:00:00.000',
    end_date_format: 'YYYY-MM-DD 17:59:59.999',
    access_token_expiry_limit: '1d',
    access_token_expiry_limit_for_reset: '300s',
    refresh_token_expiry_limit: '5d',
    scope_me: "me",
    scope_all: "all",
    system: "debug"

};

module.exports = CONSTANTS;