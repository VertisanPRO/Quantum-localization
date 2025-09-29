export const translations = {
    form: {
        loading: 'Adding an SSH key...',
        success: 'SSH Key has been added',

        title: 'Add SSH Key',
        name: 'Name',
        name_placeholder: 'Access Key',
        public_key: 'Public Key',
        submit: 'Create',
    },

    keys: {
        title: 'SSH Keys',
        empty: 'No SSH Keys added yet',
        description: 'Added on',
        copied: 'Copied the SHA256 fingerprint to clipboard',
    },

    delete: {
        loading: 'Removing the SSH key...',
        success: 'SSH Key has been removed',

        title: 'Remove SSH Key',
        description: 'Removing the <code>{{code}}</code> SSH key will invalidate its usage across the Panel.',
        submit: 'Remove Key',
        cancel: 'Cancel',
    },
};
