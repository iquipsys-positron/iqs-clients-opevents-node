"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_components_node_1 = require("pip-services3-components-node");
const OperationalEventsNullClientV1_1 = require("../version1/OperationalEventsNullClientV1");
const OperationalEventsDirectClientV1_1 = require("../version1/OperationalEventsDirectClientV1");
const OperationalEventsHttpClientV1_1 = require("../version1/OperationalEventsHttpClientV1");
const OperationalEventsLambdaClientV1_1 = require("../version1/OperationalEventsLambdaClientV1");
const OperationalEventsHttpProxyClientV1_1 = require("../version1/OperationalEventsHttpProxyClientV1");
class OperationalEventsClientFactory extends pip_services3_components_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(OperationalEventsClientFactory.NullClientV1Descriptor, OperationalEventsNullClientV1_1.OperationalEventsNullClientV1);
        this.registerAsType(OperationalEventsClientFactory.DirectClientV1Descriptor, OperationalEventsDirectClientV1_1.OperationalEventsDirectClientV1);
        this.registerAsType(OperationalEventsClientFactory.HttpClientV1Descriptor, OperationalEventsHttpClientV1_1.OperationalEventsHttpClientV1);
        this.registerAsType(OperationalEventsClientFactory.LambdaClientV1Descriptor, OperationalEventsLambdaClientV1_1.OperationalEventsLambdaClientV1);
        this.registerAsType(OperationalEventsClientFactory.HttpProxyClientV1Descriptor, OperationalEventsHttpProxyClientV1_1.OperationalEventsHttpProxyClientV1);
    }
}
exports.OperationalEventsClientFactory = OperationalEventsClientFactory;
OperationalEventsClientFactory.Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-opevents', 'factory', 'default', 'default', '1.0');
OperationalEventsClientFactory.NullClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-opevents', 'client', 'null', 'default', '1.0');
OperationalEventsClientFactory.DirectClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-opevents', 'client', 'direct', 'default', '1.0');
OperationalEventsClientFactory.HttpClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-opevents', 'client', 'http', 'default', '1.0');
OperationalEventsClientFactory.LambdaClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-opevents', 'client', 'lambda', 'default', '1.0');
OperationalEventsClientFactory.HttpProxyClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-opevents', 'client', 'http-proxy', 'default', '1.0');
//# sourceMappingURL=OperationalEventsClientFactory.js.map