let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { ClusterV1 } from 'pip-clients-clusters-node';
import { ClustersMemoryClientV1 } from 'pip-clients-clusters-node';

import { OperationalEventsMemoryPersistence } from 'iqs-services-opevents-node';
import { OperationalEventsController } from 'iqs-services-opevents-node';
import { OperationalEventsHttpServiceV1 } from 'iqs-services-opevents-node';
import { IOperationalEventsClientV1 } from '../../src/version1/IOperationalEventsClientV1';
import { OperationalEventsHttpProxyClientV1 } from '../../src/version1/OperationalEventsHttpProxyClientV1';
import { OperationalEventsClientFixtureV1 } from './OperationalEventsClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);
var CLUSTER: ClusterV1 = {
    id: '1',
    name: 'test',
    type: 'organizations',
    active: true,
    api_host: 'localhost',
    service_ports: { 
        'iqs-services-opevents': 3000 
    },
    active_tenants: ['1']
}

suite('OperationalEventsHttpProxyClientV1', ()=> {
    let service: OperationalEventsHttpServiceV1;
    let client: OperationalEventsHttpProxyClientV1;
    let fixture: OperationalEventsClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new OperationalEventsMemoryPersistence();
        let controller = new OperationalEventsController();

        let clustersClient = new ClustersMemoryClientV1();
        clustersClient.createCluster(null, CLUSTER, (err, cluster) => {});        

        service = new OperationalEventsHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-clusters', 'client', 'memory', 'default', '1.0'), clustersClient,
            new Descriptor('iqs-services-opevents', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('iqs-services-opevents', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('iqs-services-opevents', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new OperationalEventsHttpProxyClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new OperationalEventsClientFixtureV1(client);

        service.open(null, (err) => {
            done(err);
        });
    });
    
    suiteTeardown((done) => {
        client.close(null);
        service.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
