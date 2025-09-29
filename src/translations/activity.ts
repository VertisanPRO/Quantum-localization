export const translations = {
    form: {
        search_placeholder: 'Search...',
        search_by_placeholder: 'Search by Username/Email',
        filter: 'Filter',
        select_actions: 'Select actions',
        selected_one: '{{count}} action selected',
        selected_other: '{{count}} actions selected',
        sort_by: 'Sort by',
        newest: 'Newest',
        oldest: 'Oldest',
        per_page: 'Per page',
    },

    system: 'System',
    using_api: 'Using API Key',
    using_sftp: 'Using SFTP',
    information: 'View additional information',
    no_logs: 'No activity logs found',
    close: 'Close',

    written: 'Content updated files',
    files: 'Created files',
    directories: 'Created directories',
    compressed: 'Compressed files',
    deleted: 'Deleted files',
    renamed: 'Renamed files',
    locked: 'Locked',
    unlocked: 'Unlocked',
    failed: 'Failed',
    given: 'Given permissions',
    updated: 'Updated permissions',
    old: 'Old permissions',
    new: 'New permissions',

    events: {
        auth: {
            fail: 'Failed sign in',
            success: 'Signed in',
            'reset-password': 'Requested password reset',
            checkpoint: 'Requested two-factor authentication',
            'ip-blocked': 'Blocked API request from unlisted IP address for <bold>{{identifier}}</bold>',
            sftp: {
                fail: 'Failed SFTP connection',
            },
        },

        user: {
            account: {
                'email-changed': 'Changed email from <bold>{{old}}</bold> to <bold>{{new}}</bold>',
                'password-changed': 'Changed password',
            },

            'api-key': {
                create: 'Created API key <bold>{{identifier}}</bold>',
                delete: 'Deleted API key <bold>{{identifier}}</bold>',
            },

            'ssh-key': {
                create: 'Added SSH key <bold>{{fingerprint}}</bold>',
                delete: 'Removed SSH key <bold>{{fingerprint}}</bold>',
            },

            'two-factor': {
                create: 'Enabled two-factor authentication',
                delete: 'Disabled two-factor authentication',
            },
        },

        server: {
            console: {
                command: 'Executed <bold>{{command}}</bold>',
            },

            power: {
                start: 'Started the server',
                stop: 'Stopped the server',
                kill: 'Killed the server',
                restart: 'Restarted the server',
            },

            file: {
                read: 'Read <bold>{{file}}</bold>',
                download: 'Downloaded <bold>{{file}}</bold>',
                write: 'Content updated in <bold>{{file}}</bold>',
                create_one: 'Created <bold>{{files.0}}</bold>',
                create_other: 'Created <bold>{{count}}</bold> files',
                'create-directory': 'Created directory <bold>{{directory}}{{name}}</bold>',
                rename_one:
                    'Renamed <bold>{{directory}}{{files.0.from}}</bold> to <bold>{{directory}}{{files.0.to}}</bold>',
                rename_other: 'Renamed <bold>{{count}}</bold> files',
                copy: 'Created a copy of <bold>{{file}}</bold>',
                compress_one: 'Compressed <bold>{{directory}}{{files.0}}</bold>',
                compress_other: 'Compressed <bold>{{count}}</bold> files',
                decompress: 'Decompressed <bold>{{files}}</bold> files in <bold>{{directory}}</bold>',
                delete_one: 'Deleted <bold>{{directory}}{{files.0}}</bold>',
                delete_other: 'Deleted <bold>{{count}}</bold> files',
                uploaded: 'Uploaded <bold>{{directory}}{{file}}</bold>',

                sftp: {
                    write_one: 'Content updated in <bold>{{files.0}}</bold>',
                    write_other: 'Content updated in <bold>{{count}}</bold> files',
                    create_one: 'Created <bold>{{files.0}}</bold>',
                    create_other: 'Created <bold>{{count}}</bold> files',
                    'create-directory_one': 'Created directory <bold>{{files.0}}</bold>',
                    'create-directory_other': 'Created <bold>{{count}}</bold> directories',
                    rename_one: 'Renamed <bold>{{files.0.from}}</bold> to <bold>{{files.0.to}}</bold>',
                    rename_other: 'Renamed <bold>{{count}}</bold> files',
                    delete_one: 'Deleted <bold>{{files.0}}</bold>',
                    delete_other: 'Deleted <bold>{{count}}</bold> files',
                },
            },

            database: {
                create: 'Created a database <bold>{{name}}</bold>',
                'rotate-password': 'Password rotated for <bold>{{name}}</bold>',
                delete: 'Deleted database <bold>{{name}}</bold>',
            },

            schedule: {
                create: 'Created a schedule <bold>{{name}}</bold>',
                update_active: 'Updated schedule <bold>{{name}}</bold>; Current state - <bold>active</bold>',
                update_inactive: 'Updated schedule <bold>{{name}}</bold>; Current state - <bold>inactive</bold>',
                execute: 'Manually executed schedule <bold>{{name}}</bold>',
                delete: 'Deleted schedule <bold>{{name}}</bold>',
            },

            task: {
                create: 'Created a <bold>{{action}}</bold> task for schedule <bold>{{name}}</bold> with the payload <bold>{{payload}}</bold>',
                update: 'Updated a <bold>{{action}}</bold> task for schedule <bold>{{name}}</bold> with the payload <bold>{{payload}}</bold>',
                delete: 'Deleted a task for schedule <bold>{{name}}</bold>',
            },

            subuser: {
                create: 'Added a subuser <bold>{{email}}</bold>',
                update: 'Updated permissions for a subuser <bold>{{email}}</bold>',
                delete: 'Removed a subuser <bold>{{email}}</bold>',
            },

            backup: {
                start: 'Started creating a backup <bold>{{name}}</bold>',
                lock: 'Locked backup <bold>{{name}}</bold>',
                unlock: 'Unlocked backup <bold>{{name}}</bold>',
                delete: 'Deleted backup <bold>{{name}}</bold>',
                delete_failed: 'Deleted failed backup <bold>{{name}}</bold>',
                download: 'Downloaded backup <bold>{{name}}</bold>',
                restore: 'Restored backup <bold>{{name}}</bold>',
                restore_deleted: 'Restored backup <bold>{{name}}</bold> and deleted all existing files',
                complete: 'Marked backup <bold>{{name}}</bold> as complete',
                fail: 'Marked backup <bold>{{name}}</bold> as failed',
                'restore-complete': 'Completed restoration of backup <bold>{{name}}</bold>',
                'restore-failed': 'Failed restoration of backup <bold>{{name}}</bold>',
            },

            allocation: {
                create: 'Added an allocation <bold>{{allocation}}</bold>',
                notes: 'Updated notes for an allocation <bold>{{allocation}}</bold> from <bold>{{old}}</bold> to <bold>{{new}}</bold>',
                primary: 'Set allocation <bold>{{allocation}}</bold> as the primary allocation',
                delete: 'Removed allocation <bold>{{allocation}}</bold>',
            },

            startup: {
                edit: 'Changed variable <bold>{{variable}}</bold> from <bold>{{old}}</bold> to <bold>{{new}}</bold>',
                edit_old: 'Cleared variable <bold>{{variable}}</bold> from <bold>{{old}}</bold>',
                edit_new: 'Changed variable <bold>{{variable}}</bold> to <bold>{{new}}</bold>',
                image: 'Changed the Docker Image from <bold>{{old}}</bold> to <bold>{{new}}</bold>',
            },

            settings: {
                rename: 'Renamed server from <bold>{{old}}</bold> to <bold>{{new}}</bold>',
                description: 'Changed the server description from <bold>{{old}}</bold> to <bold>{{new}}</bold>',
                description_old: 'Removed the server description from <bold>{{old}}</bold>',
                description_new: 'Added a server description <bold>{{new}}</bold>',
            },

            reinstall: 'Reinstalled the server',
            sftp: {
                denied: 'Blocked SFTP access',
            },
        },
    },

    permissions: {
        websocket: {
            connect: 'View the console',
        },

        control: {
            console: 'Send commands',
            start: 'Start the server',
            stop: 'Stop the server',
            restart: 'Restart the server',
        },

        file: {
            create: 'Create files and folders',
            read: 'View directory files',
            'read-content': 'View and download files',
            update: 'Update files and directories',
            delete: 'Delete files and directories',
            archive: 'Archive and decompress files',
            sftp: 'Connect via SFTP',
        },

        database: {
            create: 'Create databases',
            read: 'View database details',
            update: 'Rotate database password',
            delete: 'Delete databases',
            view_password: 'View database password',
        },

        schedule: {
            create: 'Create schedules',
            read: 'View schedules and tasks',
            update: 'Update schedules and tasks',
            delete: 'Delete schedules',
        },

        user: {
            create: 'Invite subusers',
            read: 'View subusers and their permissions',
            update: 'Modify subusers',
            delete: 'Remove subusers',
        },

        backup: {
            read: 'View backups',
            create: 'Create backups',
            delete: 'Delete backups',
            download: 'Download backups',
            restore: 'Restore server from a backup',
        },

        allocation: {
            read: 'View allocations',
            create: 'Create allocations',
            update: 'Change primary allocation and edit notes',
            delete: 'Remove allocations',
        },

        startup: {
            read: 'View startup parameters',
            update: 'Update startup parameters',
            'docker-image': 'Change the Docker image',
        },

        settings: {
            rename: 'Rename the server and update the description',
            reinstall: 'Reinstall the server',
        },

        activity: {
            read: "View server's activity logs",
        },
    },
};
