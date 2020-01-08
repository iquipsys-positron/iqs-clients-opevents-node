"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
class OperationalEventsNullClientV1 {
    getEvents(correlationId, orgId, filter, paging, callback) {
        callback(null, new pip_services3_commons_node_1.DataPage([], 0));
    }
    logEvent(correlationId, orgId, event, callback) {
        callback(null, event);
    }
    deleteEventById(correlationId, orgId, eventId, callback) {
        callback(null, null);
    }
}
exports.OperationalEventsNullClientV1 = OperationalEventsNullClientV1;
//# sourceMappingURL=OperationalEventsNullClientV1.js.map