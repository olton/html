import terser from '@rollup/plugin-terser'

const production = (process.env.MODE === 'production')

export default [
    {
        input: './src/browser.js',
        watch: { clearScreen: false },
        output: {
            file: './lib/html.js',
            format: 'iife',
            sourcemap: false,
            plugins: [
                production && terser({
                    keep_classnames: true,
                    keep_fnames: true,
                })
            ],
        }
    },
    {
        input: './src/index.js',
        watch: { clearScreen: false },
        output: {
            file: './dist/html.es.js',
            format: 'es',
        }
    },
    {
        input: './src/index.js',
        watch: { clearScreen: false },
        output: {
            file: './dist/html.cjs.js',
            format: 'cjs',
        }
    },
];