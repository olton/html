import { terser } from 'rollup-plugin-terser'
import glob from 'glob'

function getI18N() {
    return glob.sync('src/*/*.js', {
        ignore: [
            'src/core/*.js',
            'src/plugins/*.js',
            'src/helpers/*.js',
            'src/*.js',
        ],
    });
}

export default [
    {
        input: 'src/browser.js',
        output: [
            {
                file: 'lib/html.js',
                format: 'iife',
                name: "",
                plugins: [
                ]
            },
            {
                file: 'lib/html.min.js',
                format: 'iife',
                name: "",
                plugins: [
                    terser()
                ]
            }
        ]
    }
]
