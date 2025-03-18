import {build, context} from "esbuild";
import progress from "@olton/esbuild-plugin-progress";
import { replace } from "esbuild-plugin-replace";
import pkg from "./package.json" with {type: "json"};

const production = process.env.MODE === "production"
const version = pkg.version

const banner = `
/*!
 * Html.js v${version}
 * Description: Creating HTML Elements with JavaScript
 * Build: ${new Date().toLocaleString()}
 * Copyright ${new Date().getFullYear()} by Serhii Pimenov
 * Licensed under MIT
 */
`

const drop = []

const options = {
    entryPoints: ['./src/index.js'],
    outfile: './dist/html.js',
    bundle: true,
    format: "esm",
    minify: production,
    sourcemap: false,
    banner: {
        js: banner
    },
    plugins: [
        progress({
            text: 'Building Html...',
            succeedText: `Html built successfully in %s ms!`
        }),
        replace({
            '__BUILD_TIME__': new Date().toLocaleString(),
            '__VERSION__': version,
        })
    ],
    drop, 
}

if (production) {
    // drop.push("console")    
}

if (production) {
    await build({
        ...options,
    })
} else {
    const ctx = await context({
        ...options,
        sourcemap: true,
    })

    await Promise.all([
        ctx.watch(),
    ])
}

