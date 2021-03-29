// Rollup plugins

// For transpiling ES 
import babel from 'rollup-plugin-babel';

export default {
    input: 'main.js',
    output: {
        file: 'bundle.js',
        format: 'iife',
        name: 'bundle'
    },
    plugins: [
        // 
        babel({
            exclude: 'node_modules/**',
			configFile: './config/babel.config.js'
        })
    ]
}