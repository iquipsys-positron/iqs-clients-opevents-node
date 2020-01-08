import { Descriptor } from 'pip-services3-commons-node';
import { Factory } from 'pip-services3-components-node';

import { OperationalEventsNullClientV1 } from '../version1/OperationalEventsNullClientV1';
import { OperationalEventsDirectClientV1 } from '../version1/OperationalEventsDirectClientV1';
import { OperationalEventsHttpClientV1 } from '../version1/OperationalEventsHttpClientV1';
import { OperationalEventsLambdaClientV1 } from '../version1/OperationalEventsLambdaClientV1';
import { OperationalEventsHttpProxyClientV1 } from '../version1/OperationalEventsHttpProxyClientV1';

export class OperationalEventsClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('iqs-services-opevents', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('iqs-services-opevents', 'client', 'null', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('iqs-services-opevents', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('iqs-services-opevents', 'client', 'http', 'default', '1.0');
	public static LambdaClientV1Descriptor = new Descriptor('iqs-services-opevents', 'client', 'lambda', 'default', '1.0');
	public static HttpProxyClientV1Descriptor = new Descriptor('iqs-services-opevents', 'client', 'http-proxy', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(OperationalEventsClientFactory.NullClientV1Descriptor, OperationalEventsNullClientV1);
		this.registerAsType(OperationalEventsClientFactory.DirectClientV1Descriptor, OperationalEventsDirectClientV1);
		this.registerAsType(OperationalEventsClientFactory.HttpClientV1Descriptor, OperationalEventsHttpClientV1);
		this.registerAsType(OperationalEventsClientFactory.LambdaClientV1Descriptor, OperationalEventsLambdaClientV1);
		this.registerAsType(OperationalEventsClientFactory.HttpProxyClientV1Descriptor, OperationalEventsHttpProxyClientV1);
	}
	
}
