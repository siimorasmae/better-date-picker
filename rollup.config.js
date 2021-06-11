import { terser } from 'rollup-plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import vue from 'rollup-plugin-vue';
import json from '@rollup/plugin-json'
import css from "rollup-plugin-import-css";

export default {
    input: 'src/index.js',
    output: {
        format: 'es',
        file: './index.js',
    },
    plugins: [terser(), nodeResolve(), commonjs(), vue(), json(), css()],
};
