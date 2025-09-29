export const translations = {
    form: {
        loading: 'Creating an API key...',

        title: 'Create API Key',
        name: 'Name',
        name_placeholder: 'Deployment Key',
        allowed_ips: 'Allowed IPs',
        allowed_ips_description:
            'Leave blank to allow any IP address to use this API key, otherwise provide each IP address on a new line.',
        submit: 'Create',
    },

    keys: {
        title: 'API Keys',
        empty: 'No API Keys created yet',
        description: 'Last used',
        copied: 'Copied the API Key to clipboard',
    },

    created: {
        title: 'Your API Key',
        description:
            'The API key you have requested is shown below. Please store this in a safe location, it will not be shown again.',
        close: 'Close',
    },

    delete: {
        loading: 'Deleting the API key...',
        success: 'API Key has been deleted',

        title: 'Delete API Key',
        description: 'All requests using the <code>{{code}}</code> key will be invalidated.',
        submit: 'Delete Key',
        cancel: 'Cancel',
    },
};
