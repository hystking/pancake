# ペラN のテンプレートです

## 必要なもの
* Node.js, npm
* GraphicsMagick (スプライトの生成に使う)

## Installation

1. GraphicsMagick をインストール（ImageMagick の GPU 使う版）
  ```sh
  brew install graphicsmagick
  ```

2. npm install する
  ```
  npm install
  ```

## コマンド

### npm run build

ビルド  

### npm run serve

0.0.0.0:9000 にサーバを立てる

### npm run watch

build, serve のあと、  
jade, stylus, coffee の監視

### npm run bower

bower install のあと、  
main ファイルを src/js/lib 以下に吐き出す

### npm run sprite

src/img/sprite 以下のディレクトリのスプライトを作る    
画像は、src/img に  
mixinファイルは、src/stylus/sprite に  
それぞれ出力される
    
個別のタスクは、 sprite-#{directory_name} で登録される。

### npm test

test/ 以下のテストを走らせる。  
phantom とかは入れてないので、ユニットテストだけ

#### コマンドオプション

全部共通です。

* --src source directory
* --dest destination directory
* --release release build
* --pc switch enviroment to pc mode

**オプションは、すべて"--"を挟む**

```
npm run build -- --release
```

## ファイル構成について

### base.jade, base.styl

* サイト共通パーツ
* mixinも基本ここ

### index.jade, style.styl, app.coffee

* エントリポイント  
* モジュールとパーツの読み込み。

### module/\*\*/\*.jade, module/\*\*/\*.styl, module/\*\*/\*.coffee

* 使いまわせるモジュールとか、使いまわさなくても分けたいセクションとか

### Stylus の @include と @require について

* 極力 @require を利用する（複数回読んでも、css には一回しか出力されない）
* スタイルが順番に依存するようなときは、そもそもの設計を見直すべき
