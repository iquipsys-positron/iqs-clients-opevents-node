import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';

import { IOperationalEventsClientV1 } from './IOperationalEventsClientV1';
import { OperationalEventV1 } from './OperationalEventV1';

export class OperationalEventsNullClientV1 implements IOperationalEventsClientV1 {
            
    public getEvents(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<OperationalEventV1>) => void): void {
        callback(null, new DataPage<OperationalEventV1>([], 0));
    }

    public logEvent(correlationId: string, orgId: string, event: OperationalEventV1, 
        callback: (err: any, event: OperationalEventV1) => void): void {
        callback(null, event);
    }

    public deleteEventById(correlationId: string, orgId: string, eventId: string,
        callback: (err: any, event: OperationalEventV1) => void): void {
        callback(null, null);
    }
}