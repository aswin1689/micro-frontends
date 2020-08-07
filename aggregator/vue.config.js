module.exports = {
    chainWebpack: config => {
		config.merge({
			externals: {
				'vue': 'Vue',
                'vue-router': 'VueRouter'
            },
		});
	},
    pluginOptions: {
        externals: {
            common: [{
                id: 'vue',
                assets: [
                    {
                        path: 'https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.11/vue.min.js',
                        type: 'js'
                    }
                ],
                global: 'Vue'
            },
            {
                id: 'vue-router',
                assets: [
                    {
                        path: 'https://cdnjs.cloudflare.com/ajax/libs/vue-router/3.2.0/vue-router.min.js',
                        type: 'js'
                    }
                ],
                global: 'VueRouter'
            },
            {
                id: 'react',
                assets: [
                    {
                        path: 'https://unpkg.com/react@16/umd/react.production.min.js',
                        type: 'js'
                    }
                ],
                global: 'React'
            },
            {
                id: 'react-dom',
                assets: [
                    {
                        path: 'https://unpkg.com/react-dom@16/umd/react-dom.production.min.js',
                        type: 'js'
                    }
                ],
                global: 'ReactDOM'
            }]
        }
    },
    css: {
		extract: false,
    	sourceMap: true
  	},
    configureWebpack: {
        devServer: {
            transportMode: "ws",
            injectClient: false
        }
    }
} 