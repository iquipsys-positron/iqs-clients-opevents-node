let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { PagingParams } from 'pip-services3-commons-node';

import { OperationalEventV1 } from '../../src/version1/OperationalEventV1';
import { SeverityV1 } from '../../src/version1/SeverityV1';
import { IOperationalEventsClientV1 } from '../../src/version1/IOperationalEventsClientV1';

let EVENT1: OperationalEventV1 = {
    id: '1',
    org_id: '1',
    create_time: new Date(),
    time: new Date(),
    rule_id: '1',
    type: 'auto',
    severity: SeverityV1.Medium,
    description: 'Test event #1'
};
let EVENT2: OperationalEventV1 = {
    id: '2',
    org_id: '1',
    create_time: new Date(),
    time: new Date(),
    type: 'manual',
    severity: SeverityV1.High,
    description: 'Test event #2'
};

export class OperationalEventsClientFixtureV1 {
    private _client: IOperationalEventsClientV1;
    
    constructor(client: IOperationalEventsClientV1) {
        this._client = client;
    }
        
    public testCrudOperations(done) {
        let event1, event2;

        async.series([
        // Create one event
            (callback) => {
                this._client.logEvent(
                    null,
                    '1',
                    EVENT1,
                    (err, event) => {
                        assert.isNull(err);

                        assert.isObject(event);
                        assert.equal(event.org_id, EVENT1.org_id);
                        assert.equal(event.type, EVENT1.type);
                        assert.equal(event.description, EVENT1.description);

                        event1 = event;

                        callback();
                    }
                );
            },
        // Create another event
            (callback) => {
                this._client.logEvent(
                    null,
                    '1',
                    EVENT2,
                    (err, event) => {
                        assert.isNull(err);

                        assert.isObject(event);
                        assert.equal(event.org_id, EVENT2.org_id);
                        assert.equal(event.type, EVENT2.type);
                        assert.equal(event.description, EVENT2.description);

                        event2 = event;

                        callback();
                    }
                );
            },
        // Get all events
            (callback) => {
                this._client.getEvents(
                    null,
                    '1',
                    null,
                    new PagingParams(0,5,false),
                    (err, events) => {
                        assert.isNull(err);

                        assert.isObject(events);
                        assert.isTrue(events.data.length >= 2);

                        callback();
                    }
                );
            },
        // Delete event
            (callback) => {
                this._client.deleteEventById(
                    null,
                    '1',
                    event1.id,
                    (err) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            }
        ], done);
    }
}
