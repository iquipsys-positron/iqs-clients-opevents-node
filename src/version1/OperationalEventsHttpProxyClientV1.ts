import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { ClustersProxyHttpClientV1 } from 'pip-clients-clusters-node';

import { OperationalEventV1 } from './OperationalEventV1';
import { IOperationalEventsClientV1 } from './IOperationalEventsClientV1';
import { OperationalEventsHttpClientV1 } from './OperationalEventsHttpClientV1';

export class OperationalEventsHttpProxyClientV1 extends ClustersProxyHttpClientV1<IOperationalEventsClientV1>
    implements IOperationalEventsClientV1 {       
    
    constructor(config?: any) {
        super(OperationalEventsHttpClientV1, 'iqs-services-opevents', 30022);

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
                
    public getEvents(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<OperationalEventV1>) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }

            client.getEvents(correlationId, orgId, filter, paging, callback);
        });
    }

    public logEvent(correlationId: string, orgId: string, event: OperationalEventV1,
        callback: (err: any, event: OperationalEventV1) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }

            client.logEvent(correlationId, orgId, event, callback);
        });
    }

    public deleteEventById(correlationId: string, orgId: string, eventId: string,
        callback: (err: any, event: OperationalEventV1) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }

            client.deleteEventById(correlationId, orgId, eventId, callback);
        });
    }
    
}
