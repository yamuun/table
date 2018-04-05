/* @flow */
const path = require('path');
const fs = require('fs');
const {rollup} = require('rollup');
const babel = require('rollup-plugin-babel');
// const closure = require('rollup-plugin-closure-compiler-js');
const commonjs = require('rollup-plugin-commonjs');
const prettier = require('rollup-plugin-prettier');
const replace = require('rollup-plugin-replace');
// const stripBanner = require('rollup-plugin-strip-banner');
const json = require('rollup-plugin-json');
const resolve = require('rollup-plugin-node-resolve');

// const closureOptions = {
//   compilationLevel: 'SIMPLE',
//   languageIn: 'ECMASCRIPT6_STRICT',
//   languageOut: 'ECMASCRIPT5_STRICT',
//   env: 'CUSTOM',
//   warningLevel: 'VERBOSE',
//   applyInputSourceMaps: false,
//   useTypesForOptimization: false,
//   processCommonJsModules: false,
// };

const isProduction = process.env.NODE_ENV === 'production';

const appDirectory = fs.realpathSync(process.cwd());
const resolvePath = relativePath => path.resolve(appDirectory, relativePath);

async function build() {
  try {
    const bundle = await rollup({
      input: resolvePath('src/index.js'),
      external: ['lodash', 'react', 'react-dom'],
      plugins: [
        resolve({
          customResolveOptions: {
            moduleDirectory: resolvePath('node_modules'),
          },
        }),
        babel({
          exclude: 'node_modules/**',
          babelrc: false,
          presets: [
            '@babel/flow',
            [
              '@babel/preset-env',
              {
                targets: {node: '8.11.1'},
                modules: false,
              },
            ],
          ],
          plugins: [
            [
              '@babel/plugin-transform-runtime',
              {
                helpers: true,
                polyfill: false,
                regenerator: false,
                moduleName: '@babel/runtime',
              },
            ],
            ['@babel/plugin-proposal-class-properties', {loose: true}],
            '@babel/plugin-proposal-decorators',
            '@babel/plugin-proposal-export-default-from',
            '@babel/plugin-proposal-export-namespace-from',
            '@babel/plugin-syntax-class-properties',
            '@babel/plugin-syntax-decorators',
            '@babel/plugin-syntax-export-default-from',
            '@babel/plugin-syntax-export-namespace-from',
            '@babel/plugin-syntax-optional-chaining',
          ],
          runtimeHelpers: true,
        }),
        // TODO: optimizing JavaScript with google-closure-compiler-js
        // isProduction &&
        //   closure({
        //     ...closureOptions,
        //     // Don't let it create global variables in the browser.
        //     // https://github.com/facebook/react/issues/10909
        //     assumeFunctionWrapper: false,
        //     // Works because `google-closure-compiler-js` is
        //     // forked in Yarn lockfile.
        //     // We can remove this if GCC merges my PR:
        //     // https://github.com/google/closure-compiler/pull/2707
        //     // and then the compiled version is released
        //     // via `google-closure-compiler-js`.
        //     renaming: false,
        //   }),
        replace({
          __DEV__: isProduction ? 'false' : 'true',
          'process.env.NODE_ENV': isProduction
            ? "'production'"
            : "'development'",
        }),
        commonjs(),
        json(),
        // TODO: COPYRIGHT
        // stripBanner(),
        isProduction && prettier(),
      ],
    });

    bundle.write({
      sourceMap: false,
      format: 'es',
      file: resolvePath('lib/index.es.js'),
      name: 'ValidateRegexp',
    });
  } catch (error) {
    console.error(error);
  }
}

build();