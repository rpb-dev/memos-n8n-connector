import type {
    INodeType,
    INodeTypeDescription,
    IWebhookFunctions,
    IWebhookResponseData,
} from 'n8n-workflow';
import { NodeConnectionType } from 'n8n-workflow';


export class MemosTrigger implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Memos Trigger',
        name: 'memosTrigger',
        icon: 'file:memo.svg',
        group: ['trigger'],
        version: 1,
        description: 'Triggers when a new memo is created/deleted/edited in Memos',
        defaults: {
            name: 'Memos Trigger',
        },
        credentials:[
            {
                name: 'memosCredentialsApi',
                required: true,
            }
        ],
        inputs: [],
        outputs: [NodeConnectionType.Main],
        properties: [
            {
                displayName: 'Memos Webhook Path',
                name: 'path',
                type: 'string',
                default: 'memos',
                placeholder: 'memos',
                description: 'The webhook path to receive events from Memos',
            },
        ],
        webhooks: [
            {
                name: 'default',
                httpMethod: 'POST',
                isFullPath: true,
                responseMode: 'onReceived',
                path: '={{$parameter["path"]}}',
            },
        ],
    };

    // The webhook method is called when an HTTP POST request is received on the specified path.
    async webhook(this: IWebhookFunctions): Promise<IWebhookResponseData> {
        const req = this.getRequestObject();
        const bodyData = req.body;

        // You may add any custom logic here to process the incoming data
        return {
            workflowData: [this.helpers.returnJsonArray(bodyData)],
        };
    }
}