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
                accessKeyId: 'AKIAIUIMYH5EZ552KQAA',
                secretAccessKey: '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',
                region: 'us-west-2'
            },
            beta: {},
            production: {
                bucket: 'www.tilabs.com',
                accessKeyId: 'AKIAIUIMYH5EZ552KQAA',
                secretAccessKey: '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',
                region: 'us-west-2'
            }
        }
    },
};

