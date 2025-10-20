import js from '@eslint/js';

export default [
    js.configs.recommended,
    {
        ignores: ['public/**/*.html', 'node_modules/**', '*.min.js']
    },
    {
        languageOptions: {
            ecmaVersion: 2024,
            sourceType: 'module',
            globals: {
                console: 'readonly',
                window: 'readonly',
                document: 'readonly',
                navigator: 'readonly',
                screen: 'readonly',
                HTMLCanvasElement: 'readonly',
                HTMLElement: 'readonly',
                Event: 'readonly',
                MouseEvent: 'readonly',
                TouchEvent: 'readonly',
                KeyboardEvent: 'readonly',
                CanvasRenderingContext2D: 'readonly',
                Image: 'readonly',
                Audio: 'readonly',
                XMLHttpRequest: 'readonly',
                fetch: 'readonly',
                Promise: 'readonly',
                setTimeout: 'readonly',
                clearTimeout: 'readonly',
                setInterval: 'readonly',
                clearInterval: 'readonly',
                requestAnimationFrame: 'readonly',
                cancelAnimationFrame: 'readonly',
                URL: 'readonly',
                URLSearchParams: 'readonly',
                WebSocket: 'readonly',
                performance: 'readonly',
                Date: 'readonly',
                Math: 'readonly',
                parseInt: 'readonly',
                parseFloat: 'readonly',
                isNaN: 'readonly',
                isFinite: 'readonly',
                encodeURIComponent: 'readonly',
                decodeURIComponent: 'readonly',
                btoa: 'readonly',
                atob: 'readonly'
            }
        },
        rules: {
            // 基本的なコード品質
            'no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
            'no-console': 'warn',
            'no-debugger': 'error',
            'no-alert': 'error',
            'no-eval': 'error',
            'no-implied-eval': 'error',

            // セキュリティ関連
            'no-new-func': 'error',
            'no-script-url': 'error',
            'no-proto': 'error',

            // コードスタイルの強制
            'prefer-const': 'error',
            'no-var': 'error',
            'no-magic-numbers': ['warn', {
                'ignore': [-1, 0, 1, 2, 3, 4, 5, 10, 100, 1000],
                'ignoreArrayIndexes': true,
                'ignoreDefaultValues': true
            }],

            // 文法強制のno-restricted-syntax
            'no-restricted-syntax': [
                'error',
                {
                    'selector': 'FunctionExpression',
                    'message': '関数式の代わりにアロー関数を使用してください'
                },
                {
                    'selector': 'VariableDeclaration[kind="var"]',
                    'message': 'var の使用は禁止されています。let または const を使用してください'
                },
                {
                    'selector': 'CallExpression[callee.name="setTimeout"][arguments.length=1]',
                    'message': 'setTimeout には必ず遅延時間を指定してください'
                },
                {
                    'selector': 'CallExpression[callee.name="setInterval"][arguments.length=1]',
                    'message': 'setInterval には必ず間隔時間を指定してください'
                },
                {
                    'selector': 'BinaryExpression[operator="=="]',
                    'message': '== の代わりに === を使用してください'
                },
                {
                    'selector': 'BinaryExpression[operator="!="]',
                    'message': '!= の代わりに !== を使用してください'
                },
                {
                    'selector': 'ForInStatement',
                    'message': 'for-in ループは避けて、Object.keys() や Object.entries() を使用してください'
                },
                {
                    'selector': 'CallExpression[callee.property.name="innerHTML"]',
                    'message': 'innerHTML の使用は XSS の危険があります。textContent または安全なDOM操作を使用してください'
                },
                {
                    'selector': 'CallExpression[callee.name="eval"]',
                    'message': 'eval() の使用は禁止されています'
                },
                {
                    'selector': 'NewExpression[callee.name="Function"]',
                    'message': 'Function コンストラクタの使用は禁止されています'
                }
            ],

            // 禁止されたglobals
            'no-restricted-globals': [
                'error',
                {
                    'name': 'event',
                    'message': 'グローバルな event の使用は避けて、イベントハンドラーの引数を使用してください'
                },
                {
                    'name': 'name',
                    'message': 'グローバルな name は window.name と衝突する可能性があります'
                }
            ],

            // 禁止されたプロパティ
            'no-restricted-properties': [
                'error',
                {
                    'object': 'arguments',
                    'message': 'arguments オブジェクトの使用は避けて、rest parameters (...args) を使用してください'
                },
                {
                    'property': '__proto__',
                    'message': '__proto__ の使用は非推奨です。Object.getPrototypeOf() を使用してください'
                },
                {
                    'object': 'Math',
                    'property': 'pow',
                    'message': 'Math.pow の代わりに ** 演算子を使用してください'
                }
            ],

            // アロー関数の推奨
            'prefer-arrow-callback': 'error',
            'arrow-spacing': 'error',
            'arrow-parens': ['error', 'as-needed'],

            // テンプレートリテラルの推奨
            'prefer-template': 'error',
            'template-curly-spacing': 'error',

            // 分割代入の推奨
            'prefer-destructuring': ['error', {
                'array': false,
                'object': true
            }],

            // その他のベストプラクティス
            'no-duplicate-imports': 'error',
            'no-useless-constructor': 'error',
            'no-useless-rename': 'error',
            'object-shorthand': 'error',
            'prefer-spread': 'error',
            'prefer-rest-params': 'error',

            // 3D/WebGL開発特有のルール
            'no-loss-of-precision': 'error',
            'no-floating-decimal': 'error',

            // パフォーマンス関連
            'no-constant-condition': ['error', { 'checkLoops': false }],
            'no-loop-func': 'error',

            // 可読性向上
            'max-nested-callbacks': ['warn', 4],
            'max-depth': ['warn', 4],
            'complexity': ['warn', 10],
            'max-statements-per-line': ['error', { 'max': 1 }],

            // ESLint推奨ルールをより厳格に
            'no-empty': ['error', { 'allowEmptyCatch': false }],
            'no-extra-boolean-cast': 'error',
            'no-irregular-whitespace': 'error',
            'no-misleading-character-class': 'error',
            'no-prototype-builtins': 'error',
            'no-regex-spaces': 'error',
            'no-sparse-arrays': 'error',
            'no-template-curly-in-string': 'error',
            'no-unreachable': 'error',
            'no-unsafe-finally': 'error',
            'no-unsafe-negation': 'error',
            'use-isnan': 'error',
            'valid-typeof': 'error'
        }
    },
    {
        // サーバーサイドファイル用の設定
        files: ['server.js', 'src/**/*.js'],
        languageOptions: {
            globals: {
                process: 'readonly',
                Buffer: 'readonly',
                __dirname: 'readonly',
                __filename: 'readonly',
                exports: 'writable',
                module: 'writable',
                require: 'readonly',
                global: 'readonly'
            }
        },
        rules: {
            'no-console': 'off' // サーバーサイドではconsoleログを許可
        }
    },
    {
        // HTMLファイル内のスクリプト用の緩い設定
        files: ['public/**/*.html'],
        rules: {
            'no-unused-vars': 'off',
            'no-undef': 'off'
        }
    }
];