import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableHttpClient } from 'pip-services3-rpc-node';

import { OperationalEventV1 } from './OperationalEventV1';
import { IOperationalEventsClientV1 } from './IOperationalEventsClientV1';

export class OperationalEventsHttpClientV1 extends CommandableHttpClient implements IOperationalEventsClientV1 {       
    
    constructor(config?: any) {
        super('v1/operational_events');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
                
    public getEvents(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<OperationalEventV1>) => void): void {
        this.callCommand( 
            'get_events', 
            correlationId,
            {
                filter: filter,
                paging: paging
            }, 
            callback
        );
    }

    public logEvent(correlationId: string, orgId: string, event: OperationalEventV1,
        callback: (err: any, event: OperationalEventV1) => void): void {
        this.callCommand(
            'log_event',
            correlationId,
            {
                event: event
            }, 
            callback
        );
    }

    public deleteEventById(correlationId: string, orgId: string, eventId: string,
        callback: (err: any, event: OperationalEventV1) => void): void {
        this.callCommand(
            'delete_event_by_id', 
            correlationId,
            {
                event_id: eventId
            }, 
            callback
        );
    }
    
}
