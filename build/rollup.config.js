import path from 'path';
import commonjs from 'rollup-plugin-commonjs'; // Convert CommonJS modules to ES6
import alias from '@rollup/plugin-alias';
import scss from 'rollup-plugin-scss';
import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';

// Transpile/polyfill with reasonable browser support
export default {
    input: 'src/index.js', // Path relative to package.json
    output: {
        name: 'Skelly',
        exports: 'named',
    },
    plugins: [
        alias({
            entries: [{
                    find: '~Components',
                    replacement: path.resolve(__dirname, "../src/components")
                },
                {
                    find: '~Constants',
                    replacement: path.resolve(__dirname, "../src/constants")
                },
                {
                    find: '~Utils',
                    replacement: path.resolve(__dirname, "../src/utils")
                }
            ]
        }),
        commonjs(),
        scss(),
        babel({
            runtimeHelpers: true,
            sourceMap: true,
            extensions: ['.js', '.jsx', '.es6', '.es', '.mjs'],
        }), // Transpile to ES5
        resolve()
    ],
};
