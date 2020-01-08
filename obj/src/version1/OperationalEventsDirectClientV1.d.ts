import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';
import { IOperationalEventsClientV1 } from './IOperationalEventsClientV1';
import { OperationalEventV1 } from './OperationalEventV1';
export declare class OperationalEventsDirectClientV1 extends DirectClient<any> implements IOperationalEventsClientV1 {
    constructor();
    getEvents(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<OperationalEventV1>) => void): void;
    logEvent(correlationId: string, orgId: string, event: OperationalEventV1, callback: (err: any, event: OperationalEventV1) => void): void;
    deleteEventById(correlationId: string, orgId: string, eventId: string, callback: (err: any, event: OperationalEventV1) => void): void;
}
