import { ICredentialType, INodeProperties } from 'n8n-workflow';

export class MemosCredentialsApi implements ICredentialType {
	name = 'memosCredentialsApi';
	displayName = 'Memos Credentials API';
	documentationUrl = 'https://github.com/rpb-dev/memos-n8n-connector';
	properties: INodeProperties[] = [
		{
			displayName: 'API',
			name: 'api',
			type: 'string',
			default: '',
			placeholder: 'https://api.memos.example.com',
			description: 'The API endpoint for Memos',
		},
		{
			displayName: 'Webhook URL',
			name: 'webhookUrl',
			type: 'string',
			default: '',
			placeholder: 'https://yourdomain.com/webhook',
			description: 'URL to receive webhook events from Memos',
		},
        {
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			placeholder: 'eyJhbGciOi...',
			description: 'Memos API Key for authentication',
		}
	];
}
