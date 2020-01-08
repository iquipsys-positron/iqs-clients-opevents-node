import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableHttpClient } from 'pip-services3-rpc-node';
import { OperationalEventV1 } from './OperationalEventV1';
import { IOperationalEventsClientV1 } from './IOperationalEventsClientV1';
export declare class OperationalEventsHttpClientV1 extends CommandableHttpClient implements IOperationalEventsClientV1 {
    constructor(config?: any);
    getEvents(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<OperationalEventV1>) => void): void;
    logEvent(correlationId: string, orgId: string, event: OperationalEventV1, callback: (err: any, event: OperationalEventV1) => void): void;
    deleteEventById(correlationId: string, orgId: string, eventId: string, callback: (err: any, event: OperationalEventV1) => void): void;
}
