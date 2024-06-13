import terser from '@rollup/plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import fs from "node:fs"
import pkg from "./package.json" assert {type: "json"}

const production = (process.env.MODE === 'production')

const banner = `
/*!
 * HtmlJS - Create html elements with JS
 * Copyright ${new Date().getFullYear()} by Serhii Pimenov
 * Licensed under MIT
 !*/
`

let txt

txt = fs.readFileSync(`src/index.js`, 'utf8')
txt = txt.replace(/version = ".+"/g, `version = "${pkg.version}"`)
txt = txt.replace(/build_time = ".+"/g, `build_time = "${new Date().toLocaleString()}"`)
fs.writeFileSync(`src/index.js`, txt, { encoding: 'utf8', flag: 'w+' })

txt = fs.readFileSync(`src/browser.js`, 'utf8')
txt = txt.replace(/version = ".+"/g, `version = "${pkg.version}"`)
txt = txt.replace(/build_time = ".+"/g, `build_time = "${new Date().toLocaleString()}"`)
fs.writeFileSync(`src/browser.js`, txt, { encoding: 'utf8', flag: 'w+' })


export default [
    {
        input: './src/browser.js',
        watch: { clearScreen: false },
        plugins: [nodeResolve()],
        output: {
            file: './lib/html.js',
            format: 'iife',
            sourcemap: false,
            banner,
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
        plugins: [nodeResolve()],
        output: {
            file: './dist/html.esm.js',
            format: 'es',
            banner,
        }
    },
    {
        input: './src/index.js',
        watch: { clearScreen: false },
        plugins: [nodeResolve()],
        output: {
            file: './dist/html.cjs.js',
            format: 'cjs',
            banner,
        }
    },
];