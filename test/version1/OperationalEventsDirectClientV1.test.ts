let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { OperationalEventsMemoryPersistence } from 'iqs-services-opevents-node';
import { OperationalEventsController } from 'iqs-services-opevents-node';
import { IOperationalEventsClientV1 } from '../../src/version1/IOperationalEventsClientV1';
import { OperationalEventsDirectClientV1 } from '../../src/version1/OperationalEventsDirectClientV1';
import { OperationalEventsClientFixtureV1 } from './OperationalEventsClientFixtureV1';

suite('OperationalEventsDirectClientV1', ()=> {
    let client: OperationalEventsDirectClientV1;
    let fixture: OperationalEventsClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new OperationalEventsMemoryPersistence();
        let controller = new OperationalEventsController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('iqs-services-opevents', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('iqs-services-opevents', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new OperationalEventsDirectClientV1();
        client.setReferences(references);

        fixture = new OperationalEventsClientFixtureV1(client);

        client.open(null, done);
    });
    
    suiteTeardown((done) => {
        client.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
