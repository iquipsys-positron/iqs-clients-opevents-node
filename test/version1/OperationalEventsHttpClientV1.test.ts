let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { OperationalEventsMemoryPersistence } from 'iqs-services-opevents-node';
import { OperationalEventsController } from 'iqs-services-opevents-node';
import { OperationalEventsHttpServiceV1 } from 'iqs-services-opevents-node';
import { IOperationalEventsClientV1 } from '../../src/version1/IOperationalEventsClientV1';
import { OperationalEventsHttpClientV1 } from '../../src/version1/OperationalEventsHttpClientV1';
import { OperationalEventsClientFixtureV1 } from './OperationalEventsClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('OperationalEventsHttpClientV1', ()=> {
    let service: OperationalEventsHttpServiceV1;
    let client: OperationalEventsHttpClientV1;
    let fixture: OperationalEventsClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new OperationalEventsMemoryPersistence();
        let controller = new OperationalEventsController();

        service = new OperationalEventsHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('iqs-services-opevents', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('iqs-services-opevents', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('iqs-services-opevents', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new OperationalEventsHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new OperationalEventsClientFixtureV1(client);

        service.open(null, (err) => {
            client.open(null, done);
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
