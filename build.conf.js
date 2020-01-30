module.exports = {
    module: {
        name: 'iquipsys',
        index: 'iquipsys',
        styles: 'index'
    },
    file: {
        lib: [
            'node_modules/pip-webui-lib/dist/**/*',
            'node_modules/pip-webui-css/dist/**/*',
            'node_modules/pip-webui-services/dist/**/*'
        ]
    },
    build: {
        js: true,
        ts: true,
        html: true,
        sass: true,
        css: true,
        lib: true,
        images: true,
        dist: true
    },
    app: {
        port: 8000,
        https: false,
        publish: {
            alpha: {
                bucket: 'alpha.tilabs.com',
                accessKeyId: '',
                secretAccessKey: '',
                region: 'us-west-2'
            },
            beta: {},
            production: {
                bucket: 'www.tilabs.com',
                accessKeyId: '',
                secretAccessKey: '',
                region: 'us-west-2'
            }
        }
    },
};

