export const translations = {
    password: {
        schema: {
            current: 'Please enter your account password',
            password: 'Password must be at least 8 characters',
            confirmation: 'Password confirmation does not match the new password',
        },

        form: {
            loading: 'Updating password...',

            title: 'Update Password',
            current: 'Current Password',
            new: 'New Password',
            confirm: 'Confirm New Password',
            submit: 'Update Password',
        },
    },

    email: {
        schema: {
            email: 'A valid email address must be provided',
            password: 'Please enter your account password',
        },

        form: {
            loading: 'Updating your email address...',
            success: 'Your primary email has been updated',

            title: 'Update Email Address',
            email: 'Email',
            password: 'Confirm Password',
            submit: 'Update Email',
        },
    },

    '2fa': {
        title: 'Two-Step Verification',

        disable: {
            description: 'You do not currently have two-step verification enabled on your account',

            schema: {
                password: 'Please enter your account password',
            },

            form: {
                trigger: 'Disable Two-Step',

                loading: 'Disabling two-step authentication...',
                success: 'Two-step authentication has been disabled',

                title: 'Disable Two-Step Verification',
                description: 'Disabling two-step verification will make your account less secure.',
                password: 'Current Password',
                submit: 'Disable',
                cancel: 'Cancel',
            },
        },

        enable: {
            description: 'Two-step verification is currently enabled on your account',

            schema: {
                code: 'Please enter the authentication code',
                password: 'Please enter your account password',
            },

            form: {
                trigger: 'Enable Two-Step',

                loading: 'Enabling two-step authentication...',
                success: {
                    title: 'Two-Step Authentication Enabled',
                    description:
                        'Store the codes below somewhere safe. If you lose access to your phone you can use these backup codes to sign in. These codes will not be shown again.',
                    copied: 'Copied the recovery codes to clipboard',
                    done: 'Done',
                },

                title: 'Enable Two-Step Verification',
                description:
                    "Help protect your account from unauthorized access. You'll be prompted for a verification code each time you sign in.",
                qr: {
                    loading: 'Loading...',
                    copied: 'Copied the authentication code to clipboard',
                    instructions:
                        'Scan the QR code above using the two-step authentication app of your choice. Then, enter the 6-digit code generated into the field below.',
                },
                code: 'Verification Code',
                password: 'Current Password',
                submit: 'Enable',
                cancel: 'Cancel',
            },
        },
    },
};
