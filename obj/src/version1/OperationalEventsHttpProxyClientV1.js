"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_clients_clusters_node_1 = require("pip-clients-clusters-node");
const OperationalEventsHttpClientV1_1 = require("./OperationalEventsHttpClientV1");
class OperationalEventsHttpProxyClientV1 extends pip_clients_clusters_node_1.ClustersProxyHttpClientV1 {
    constructor(config) {
        super(OperationalEventsHttpClientV1_1.OperationalEventsHttpClientV1, 'iqs-services-opevents', 30022);
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    getEvents(correlationId, orgId, filter, paging, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }
            client.getEvents(correlationId, orgId, filter, paging, callback);
        });
    }
    logEvent(correlationId, orgId, event, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }
            client.logEvent(correlationId, orgId, event, callback);
        });
    }
    deleteEventById(correlationId, orgId, eventId, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }
            client.deleteEventById(correlationId, orgId, eventId, callback);
        });
    }
}
exports.OperationalEventsHttpProxyClientV1 = OperationalEventsHttpProxyClientV1;
//# sourceMappingURL=OperationalEventsHttpProxyClientV1.js.map