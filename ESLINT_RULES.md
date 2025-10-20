# ESLintルール設定の説明

## 設定したESLintルール

### 基本的なコード品質
- `no-unused-vars`: 未使用変数の検出（`_`で始まる引数は除外）
- `no-console`: console.logの警告（サーバーサイドは除外）
- `no-debugger`: debugger文の禁止
- `no-alert`: alert()の禁止
- `no-eval`: eval()の禁止

### セキュリティ関連
- `no-new-func`: Function()コンストラクタの禁止
- `no-script-url`: javascript:URLの禁止
- `no-proto`: __proto__の禁止

### モダンJavaScript強制
- `prefer-const`: 再代入しない変数はconstを強制
- `no-var`: varの使用を禁止（let/constを使用）
- `prefer-arrow-callback`: アロー関数の推奨
- `prefer-template`: テンプレートリテラルの推奨
- `prefer-destructuring`: 分割代入の推奨

### no-restricted-syntax による文法強制
1. **関数式禁止**: 関数式の代わりにアロー関数を強制
2. **var禁止**: var文を完全に禁止
3. **setTimeout/setInterval**: 遅延時間の指定を強制
4. **厳密等価演算子**: ==, != の代わりに ===, !== を強制
5. **for-in禁止**: Object.keys()やObject.entries()を推奨
6. **innerHTML禁止**: XSS対策でtextContentを推奨
7. **eval禁止**: eval()とFunction()コンストラクタを禁止

### パフォーマンス・可読性
- `max-nested-callbacks`: コールバックの入れ子を4階層まで
- `max-depth`: ブロックの入れ子を4階層まで
- `complexity`: 循環的複雑度を10まで
- `no-magic-numbers`: マジックナンバーの使用に警告

## 使用方法

```bash
# リンターを実行
npm run lint

# 自動修正可能なエラーを修正
npm run lint:fix

# 設定の確認
npm run lint:check
```

## 除外ファイル
- `public/**/*.html`: HTMLファイル内のスクリプト
- `node_modules/**`: 依存関係
- `*.min.js`: 圧縮済みファイル

このルールセットにより、セキュアで保守性の高いモダンなJavaScriptコードの作成が強制されます。