/* eslint-disable @typescript-eslint/no-unused-vars */
import tseslint from 'typescript-eslint';
import eslintJs from '@eslint/js';
import tsdoc from 'eslint-plugin-tsdoc';
import react from 'eslint-plugin-react';
import reactRefresh from 'eslint-plugin-react-refresh';
import * as reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-config-prettier';
import vitest from '@vitest/eslint-plugin';
import jestDom from 'eslint-plugin-jest-dom';
// @ts-expect-error there are no type definitions for this
import next from '@next/eslint-plugin-next';
import globals from 'globals';
import jsxA11y from 'eslint-plugin-jsx-a11y';
// @ts-expect-error there are no type definitions for this
import importPlugin from 'eslint-plugin-import';
import { FlatCompat } from '@eslint/eslintrc';
import { fixupPluginRules } from '@eslint/compat';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { type Linter, type ESLint } from 'eslint';
import { type TSESLint } from '@typescript-eslint/utils';

/**
 * Replace Types from 'eslint' such as the ones from Linter and ESLint and it's sub types such as Linter.Config with stricter types from '\@typescript-eslint/utils'
 * Replace Types from 'eslint' such as the ones from Linter and ESLint and it's sub types such as Linter.Config with stricter types from '\@typescript-eslint/utils'
 * @see {@link https://typescript-eslint.io/packages/utils}
 */
// Eslint Default is Linter.Config
type Config = TSESLint.FlatConfig.Config;
// Eslint Default is Array<Linter.Config>
type ConfigArray = TSESLint.FlatConfig.ConfigArray;
// Eslint Default is Array<string | string[]>
type ConfigFiles = TSESLint.FlatConfig.Config['files'];
// Eslint Default is Array<string>
type ConfigIgnores = TSESLint.FlatConfig.Config['ignores'];
// Eslint Default is ESLint.Plugin
type ConfigPlugin = TSESLint.FlatConfig.Plugin;
// Eslint Default is Record<string, ESLint.Plugin>
type ConfigPlugins = TSESLint.FlatConfig.Plugins | undefined;
// Eslint Default is Linter.RulesRecord
type ConfigRules = TSESLint.FlatConfig.Config['rules'];
// Eslint Default is Linter.LanguageOptions
type ConfigLanguageOptions = TSESLint.FlatConfig.Config['languageOptions'];

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * FlatCompat is a utility class that allows us to use eslintrc Config files (pre ESLint v9) with ESlint v9  Flat Config files
 * @see {@link https://eslint.org/docs/latest/use/configure/migration-guide#using-eslintrc-configs-in-flat-config }
 */
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: eslintJs.configs.recommended,
  resolvePluginsRelativeTo: __dirname,
  // allConfig: eslintJs.configs.all,
});

const JS_FILE_PATTERNS = ['**/*.?(c|m)js'] satisfies ConfigFiles;
const JSX_FILE_PATTERNS = ['**/*.?(c|m)jsx'] satisfies ConfigFiles;
const TS_FILE_PATTERNS = ['**/*.?(c|m)ts'] satisfies ConfigFiles;
const TSX_FILE_PATTERNS = ['**/*.?(c|m)tsx'] satisfies ConfigFiles;
const JSX_TSX_FILE_PATTERNS = [
  ...JSX_FILE_PATTERNS,
  ...TSX_FILE_PATTERNS,
] satisfies ConfigFiles;
const JS_JSX_TS_TSX_FILE_PATTERNS = [
  ...JS_FILE_PATTERNS,
  ...JSX_FILE_PATTERNS,
  ...TS_FILE_PATTERNS,
  ...TSX_FILE_PATTERNS,
] satisfies ConfigFiles;
const NEXT_JS_JSX_TS_TSX_FILE_PATTERNS = [
  'src/**/*.?(c|m)[jt]s?(x)',
] satisfies ConfigFiles;

const TEST_FILE_PATTERNS_JS = [
  '**/__tests__/**/*.?(c|m)js?(x)',
  '**/*.(spec|test).?(c|m)js?(x)',
] satisfies ConfigFiles;
const TEST_FILE_PATTERNS_TS = [
  '**/__tests__/**/*.?(c|m)ts?(x)',
  '**/*.(spec|test).?(c|m)ts?(x)',
] satisfies ConfigFiles;

const TEST_FILE_PATTERNS = [
  ...TEST_FILE_PATTERNS_JS,
  ...TEST_FILE_PATTERNS_TS,
] satisfies ConfigFiles;

const IGNORE_PATTERNS = [
  '.next/',
  '**/node_modules/',
  '.git/',
  'out',
  'dist',
  'coverage',
  '**/dist/',
  '**/coverage/',
  'playwright-report/',
  'test-results/',
  'tests-examples/',
] satisfies ConfigIgnores;

/**
 * 'eslint-plugin-tsdoc' does not have a recommended config that is directly compatible with flat config files ESlint v9+ so we need to create our own
 * @see {@link https://github.com/microsoft/tsdoc/issues/374#issuecomment-2336536959}
 */
const tsdocRecommended = {
  name: 'tsdoc/recommended',
  plugins: {
    tsdoc: tsdoc,
  },
  rules: {
    'tsdoc/syntax': 'warn',
  },
} satisfies Config;

/**
 * This is the recommended configuration for React projects
 * @see {@link https://github.com/jsx-eslint/eslint-plugin-react?tab=readme-ov-file#configuring-shared-settings}
 * There are some additional parsing options inspired by Sharif's
 * @see {@link https://github.com/AndreaPontrandolfo/sheriff/blob/master/packages/eslint-config-sheriff/src/getReactConfig.ts}
 */
const reactRecommended = {
  name: 'react/recommended',
  files: [...JS_JSX_TS_TSX_FILE_PATTERNS],
  ...react.configs.flat.recommended,
  languageOptions: {
    ...react.configs.flat.recommended.languageOptions,
    parser: tseslint.parser,
    parserOptions: {
      ...react.configs.flat.recommended.languageOptions?.parserOptions,
      ecmaFeatures: {
        ...react.configs.flat.recommended.languageOptions?.parserOptions
          ?.ecmaFeatures,
        modules: true,
        jsx: true,
      },
      project: true, // change this to your project's tsconfig.json
      jsxPragma: null, // useful for typescript x react@17 https://github.com/jsx-eslint/eslint-plu
    },
    globals: {
      ...globals.serviceworker,
      ...globals.browser,
    },
  },
  settings: { react: { version: 'detect' } },
} satisfies Config;

/**
 * JSX Runtime is recommended for React v17+ projects
 * @see {@link https://github.com/jsx-eslint/eslint-plugin-react?tab=readme-ov-file#configuring-shared-settings}
 */
const reactJsxRuntime = {
  name: 'react/jsx-runtime',
  files: [...JS_JSX_TS_TSX_FILE_PATTERNS],
  ...react.configs.flat['jsx-runtime'],
} satisfies Config;

/**
 * This eslint plugin enforces React's Rule of Hooks
 * @see {@link https://react.dev/reference/rules/rules-of-hooks}
 * This configuration follows the plugin's latest recommended rules with the addition of adding the files property for narrowing down the files that should be linted.
 */
const reactHooksRecommended = {
  ...reactHooks.configs['recommended-latest'],
  files: [...JS_JSX_TS_TSX_FILE_PATTERNS],
} satisfies Config;

/**
 * Since eslint-plugin-react-hooks@6.0.0-rc.1,  eslint-plugin-react-compiler was merged into eslint-plugin-react-hooks.
 * @see {@link https://react.dev/blog/2025/04/21/react-compiler-rc}
 */

const reactCompilerRecommended = {
  ...reactHooks.configs['recommended-latest'],
  name: 'react/compiler',
  files: [...JS_JSX_TS_TSX_FILE_PATTERNS],
  rules: {
    'react-hooks/react-compiler': 'warn',
  },
} satisfies Config;

/**
 * This plugin Validate that your components can safely be updated with Fast Refresh or hot reloading.
 * This configuration is the same as the recommended config with the addition of adding the files property as well as a name for the config.
 * @see {@link https://github.com/ArnaudBarre/eslint-plugin-react-refresh?tab=readme-ov-file#recommended-config}
 */
const reactRefreshRecommended = {
  name: 'react-refresh/recommended',
  files: [...JS_JSX_TS_TSX_FILE_PATTERNS],
  ...reactRefresh.configs.recommended,
} satisfies Config;

/**
 * This plugin does a static evaluation of the JSX in your code to spot accessibility issues in React apps.
 * Bellow is the recommended config from the plugin's documentation with the addition of adding the files property as well as a name for the config.
 * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main}
 */
const jsxA11yRecommended = {
  files: [...JS_JSX_TS_TSX_FILE_PATTERNS],
  ...jsxA11y.flatConfigs.recommended,
  name: 'jsx-a11y/recommended',
} satisfies Config;

/**
 * This plugin Turns off all eslint rules that are unnecessary or might conflict with Prettier.
 * This lets you use your favorite shareable configs without letting their stylistic choices get in the way when using Prettier.
 * This configuration is the same as the recommended config with the addition of adding the files property as well as a name for the config.
 * @see {@link https://github.com/prettier/eslint-config-prettier}
 */
const prettierRecommended = {
  files: [...JS_JSX_TS_TSX_FILE_PATTERNS],
  ...prettier,
  name: 'prettier/recommended',
} satisfies Config;

/**
 * The current recommended ways of implementing 'eslint-plugin-next' is:
 * @see {@link https://nextjs.org/docs/pages/api-reference/config/eslint}
 * However, as of 'eslint-plugin-next' v15.1.6 and 'eslint' v9.19.0 there is a bug when implementing their config.
 * This configuration follows the plugin's custom configuration suggestion which is currently exactly the same as what their recommended config should be.
 */
const nextNextRecommended = {
  name: '@next/next/recommended',
  plugins: {
    '@next/next': fixupPluginRules(next as ESLint.Plugin),
  },

  rules: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- This is a bug in eslint-plugin-next
    ...(next.configs.recommended.rules as ConfigRules),
  },
  files: [...NEXT_JS_JSX_TS_TSX_FILE_PATTERNS],
} satisfies Config;

/**
 * The current recommended ways of implementing 'eslint-config-next' is:
 * @see {@link https://nextjs.org/docs/pages/api-reference/config/eslint}
 * However, as of 'eslint-config-next' v15.1.6 and 'eslint' v9.19.0 there is a bug when implementing their config.
 * It generates an Error: Failed to patch ESLint because the calling module was not recognized. on '/node_modules/eslint-config-next/index.js'
 * @see {@link https://github.com/microsoft/rushstack/issues/4965}
 * @see {@link https://github.com/microsoft/rushstack/issues/5049}
 * @see {@link https://github.com/microsoft/rushstack/issues/4635#issuecomment-2487050625}
 *
 * Tried a few workarounds but none worked:
 * @see {@link https://github.com/kirill-konshin/utils/blob/main/packages/eslint-config-next-custom/index.js}
 * @see {@link https://github.com/microsoft/rushstack/issues/4965#issuecomment-2645922401}
 * @see {@link https://blog.linotte.dev/eslint-9-next-js-935c2b6d0371}
 * Only solution I found was to try to rebuild the whole config from scratch referencing:
 * @see {@link https://github.com/vercel/next.js/blob/canary/packages/eslint-config-next/index.js}
 * I haven't managed to make recreate the parser: @see {@link https://github.com/vercel/next.js/blob/main/packages/eslint-config-next/parser.js}
 */
const configNext = {
  name: 'config-next',

  plugins: { import: importPlugin as ConfigPlugin },
  languageOptions: {
    parser: tseslint.parser,
    // parser: babelParser,
    globals: {
      ...globals.browser,
      ...globals.node,
    },
    parserOptions: {
      project: true,
      tsconfigRootDir: import.meta.dirname,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
      requireConfigFile: false,
      projectService: true,
      allowImportExportEverywhere: true,
      babelOptions: {
        presets: ['next/babel'],
        caller: {
          // Eslint supports top level await when a parser for it is included. We enable the parser by default for Babel.
          supportsTopLevelAwait: true,
        },
      },
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'import/no-anonymous-default-export': 'warn',
    'react/no-unknown-property': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/alt-text': [
      'warn',
      {
        elements: ['img'],
        img: ['Image'],
      },
    ],
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',
    'react/jsx-no-target-blank': 'off',
  },
  files: [...NEXT_JS_JSX_TS_TSX_FILE_PATTERNS],
} satisfies Config;

/**
 * Some Next.js files have default async exports with function such as GET, POST, generateMetadata, generateStaticParams, etc.
 * When these functions are used, depending on the implementation they don't necessarily need to await for values thus we ewnt to turn some rules into warnings only in some specific files.
 */
const configNextCustomRoutes = {
  name: 'next/custom-routes',
  files: ['src/**/?(route|page|layout).?(c|m)?(t|j)s?(x)'],
  rules: {
    '@typescript-eslint/require-await': ['warn'],
  },
} satisfies Config;

/**
 * next/core-web-vitals updates eslint-plugin-next to error on a number of rules that are warnings by default if they affect Core Web Vitals
 * @see {@link https://nextjs.org/docs/app/api-reference/config/eslint#with-core-web-vitals}
 * @see {@link https://web.dev/articles/vitals}
 */
const coreWebVitals = {
  name: 'core-web-vitals',
  files: [...NEXT_JS_JSX_TS_TSX_FILE_PATTERNS],
  plugins: {
    ...nextNextRecommended.plugins,
  },
  rules: {
    '@next/next/no-html-link-for-pages': 'error',
    '@next/next/no-sync-scripts': 'error',
  },
} satisfies Config;

/**
 * 'eslint-plugin-vitest' is a plugin that provides linting rules for automated testing with vitest.
 * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest}
 * This config follows their recommended rules with type testing enabled.
 * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest?tab=readme-ov-file#enabling-with-type-testing}
 */
const vitestRecommended = {
  name: 'vitest/recommended',
  files: [...TEST_FILE_PATTERNS],
  plugins: { vitest },
  rules: {
    ...vitest.configs.recommended.rules,
  },
  settings: {
    vitest: {
      typecheck: true,
    },
  },
  languageOptions: {
    // parser: tseslint.parser,
    // parserOptions: {
    //   project: true,
    //   tsconfigRootDir: import.meta.dirname,
    // },
    globals: {
      ...vitest.environments.env.globals,
    },
  },
} satisfies Config;

/**
 * 'eslint-plugin-vitest' is a plugin that provides linting rules for automated testing with vitest.
 * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest}
 * This config removes type testing from non typescript files.
 */
const vitestDisableTypeChecked = {
  name: 'vitest/disable-type-checked',
  files: [...TEST_FILE_PATTERNS_TS],
  ignores: [...IGNORE_PATTERNS, ...TEST_FILE_PATTERNS_JS],
  rules: {
    '@typescript-eslint/await-thenable': 'warn',
  },
} satisfies Config;

/**
 * 'eslint-plugin-jest-dom' is a plugin to follow best practices and anticipate common mistakes when writing tests with jest-dom.
 * We are following the their recommended configuration:
 * @see {@link https://github.com/testing-library/eslint-plugin-jest-dom?tab=readme-ov-file#recommended-configuration}
 */
const jestDomRecommended = {
  name: 'jest-dom/recommended',
  files: [...TEST_FILE_PATTERNS],
  ...jestDom.configs['flat/recommended'],
};

/**
 * This config file is a wrapper for all the ESlint ignore patterns for this project.
 */
const ignoreConfig = {
  name: 'ignores',
  ignores: [...IGNORE_PATTERNS],
} satisfies Config;

/**
 * This config file is a wrapper for all the ESlint recommended rules from '\@eslint/js'.
 * This config follows the recommended rules for '\@eslint/js':
 * @see {@link https://github.com/eslint/eslint/tree/main/packages/js}
 * @see {@link https://eslint.org/docs/latest/use/getting-started#configuration}
 */
const eslintDefaults = [
  {
    name: 'eslint/recommended/language-options',
    languageOptions: { globals: globals.browser },
  },
  {
    name: 'eslint/recommended',
    ...eslintJs.configs.recommended,
  },
] satisfies ConfigArray;

/**
 * 'typescript-eslint' enables ESLint to run on TypeScript code. It brings in the best of both tools to help you write the best JavaScript or TypeScript code you possibly can.
 * This config is a wrapper for 'typescript-eslint' with the recommended type checked configuration.
 * @see {@link https://typescript-eslint.io/getting-started/typed-linting}
 * The only difference is that we are not using the tseslint.config(...) optional helper for clarity. For more information on the helper function @see {@link https://typescript-eslint.io/packages/typescript-eslint#config}
 */
const typescriptEslintRecommendedTypeChecked = [
  ...tseslint.configs.recommendedTypeChecked,
] satisfies ConfigArray;

/**
 * This config adds the recommended type checked language options for 'typescript-eslint'.
 * @see {@link https://typescript-eslint.io/getting-started/typed-linting}
 */
const typescriptEslintRecommendedTypeCheckedLanguageOptions = {
  name: '@typescript-eslint/recommended-type-checked/language-options',
  languageOptions: {
    sourceType: 'module',
    parser: tseslint.parser,
    parserOptions: {
      projectService: true,
      ecmaFeatures: { modules: true },
      tsconfigRootDir: import.meta.dirname,
    },
  },
} satisfies Config;

/**
 * This config disables type checking set by typescriptEslintRecommendedTypeChecked for non typescript files to avoid false positives.
 * @see {@link https://typescript-eslint.io/getting-started/typed-linting}
 */
const typescriptEslintDisableTypeChecked = {
  name: '@typescript-eslint/disable-type-checked',
  files: [...JS_FILE_PATTERNS, ...JSX_FILE_PATTERNS],

  rules: {
    ...tseslint.configs.disableTypeChecked.rules,
  },
} satisfies Config;

const eslintConfig = [
  ignoreConfig,
  tsdocRecommended,
  ...eslintDefaults,
  ...typescriptEslintRecommendedTypeChecked,
  typescriptEslintRecommendedTypeCheckedLanguageOptions,
  typescriptEslintDisableTypeChecked,
  reactRecommended,
  reactJsxRuntime,
  reactHooksRecommended,
  reactCompilerRecommended,
  reactRefreshRecommended,

  jsxA11yRecommended,

  nextNextRecommended,
  configNext,
  configNextCustomRoutes,

  coreWebVitals,
  vitestRecommended,
  vitestDisableTypeChecked,
  jestDomRecommended,
  prettierRecommended,
  {
    name: 'custom-config',
    files: [...JS_JSX_TS_TSX_FILE_PATTERNS],
    ignores: [...IGNORE_PATTERNS],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      ...jsxA11yRecommended.plugins,
    },
    rules: {
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          disallowTypeAnnotations: true,
          fixStyle: 'inline-type-imports',
        },
      ],
      'react/jsx-filename-extension': [
        'error',
        {
          extensions: ['.tsx', '.jsx'],
        },
      ],
      'react-refresh/only-export-components': [
        'off',
        { allowConstantExport: true },
      ],
      '@typescript-eslint/array-type': ['error', { default: 'generic' }],
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-floating-promises': [
        'error',
        {
          ignoreIIFE: true,
        },
      ],
      'jsx-a11y/anchor-has-content': 'warn',
    },
  },
] satisfies ConfigArray;

export default eslintConfig;
