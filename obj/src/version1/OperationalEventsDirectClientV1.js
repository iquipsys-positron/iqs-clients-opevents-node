"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class OperationalEventsDirectClientV1 extends pip_services3_rpc_node_1.DirectClient {
    constructor() {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_node_1.Descriptor("iqs-services-opevents", "controller", "*", "*", "*"));
    }
    getEvents(correlationId, orgId, filter, paging, callback) {
        let timing = this.instrument(correlationId, 'operational_events.get_events');
        this._controller.getEvents(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }
    logEvent(correlationId, orgId, event, callback) {
        let timing = this.instrument(correlationId, 'operational_events.log_event');
        this._controller.logEvent(correlationId, event, (err, event) => {
            timing.endTiming();
            callback(err, event);
        });
    }
    deleteEventById(correlationId, orgId, eventId, callback) {
        let timing = this.instrument(correlationId, 'operational_events.delete_event_by_id');
        this._controller.deleteEventById(correlationId, eventId, (err, event) => {
            timing.endTiming();
            callback(err, event);
        });
    }
}
exports.OperationalEventsDirectClientV1 = OperationalEventsDirectClientV1;
//# sourceMappingURL=OperationalEventsDirectClientV1.js.map