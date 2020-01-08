import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';

import { IOperationalEventsClientV1 } from './IOperationalEventsClientV1';
//import { IOperationalEventsController } from 'iqs-services-opevents-node';
import { OperationalEventV1 } from './OperationalEventV1';

export class OperationalEventsDirectClientV1 extends DirectClient<any> implements IOperationalEventsClientV1 {
            
    public constructor() {
        super();
        this._dependencyResolver.put('controller', new Descriptor("iqs-services-opevents", "controller", "*", "*", "*"))
    }

    public getEvents(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<OperationalEventV1>) => void): void {
        let timing = this.instrument(correlationId, 'operational_events.get_events');
        this._controller.getEvents(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }

    public logEvent(correlationId: string, orgId: string, event: OperationalEventV1, 
        callback: (err: any, event: OperationalEventV1) => void): void {
        let timing = this.instrument(correlationId, 'operational_events.log_event');
        this._controller.logEvent(correlationId, event, (err, event) => {
            timing.endTiming();
            callback(err, event);
        });
    }

    public deleteEventById(correlationId: string, orgId: string, eventId: string,
        callback: (err: any, event: OperationalEventV1) => void): void {
        let timing = this.instrument(correlationId, 'operational_events.delete_event_by_id');
        this._controller.deleteEventById(correlationId, eventId, (err, event) => {
            timing.endTiming();
            callback(err, event);
        });
    }
}