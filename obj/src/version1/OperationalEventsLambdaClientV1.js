"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_aws_node_1 = require("pip-services3-aws-node");
class OperationalEventsLambdaClientV1 extends pip_services3_aws_node_1.CommandableLambdaClient {
    constructor(config) {
        super('operational_events');
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    getEvents(correlationId, orgId, filter, paging, callback) {
        this.callCommand('get_events', correlationId, {
            filter: filter,
            paging: paging
        }, callback);
    }
    logEvent(correlationId, orgId, event, callback) {
        this.callCommand('log_event', correlationId, {
            event: event
        }, callback);
    }
    deleteEventById(correlationId, orgId, eventId, callback) {
        this.callCommand('delete_event_by_id', correlationId, {
            event_id: eventId
        }, callback);
    }
}
exports.OperationalEventsLambdaClientV1 = OperationalEventsLambdaClientV1;
//# sourceMappingURL=OperationalEventsLambdaClientV1.js.map