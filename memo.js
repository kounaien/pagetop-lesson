idの方が若干処理速度早い

外部cssの文字コード指定
スタイルシートがhtmlとは分離したファイルに存在する場合は文字コードを決定しなければならないというルール
今回の場合style.cssの一番上に@charset "UTF-8"; とすることで明記している
外部cssの文字コード指定では必ずcssファイルの先頭に記述しています

jQueryでマウスクリックイベント
$(function(){
    $('#back a').on('click', function(event){
        $('body, html').animate({
            scrollTop: 0
        }, 800);
        event.preventDefault();
    })
})

$(function(){
    $('#back a').on('click', function(event){
        //#back内の<a>タグがクリックされたときの処理
    })
})

セレクタ(id, a)cssと同じで子要素のみに適用

クリックされたときの処理
$('body html').aniamate({
    scrollTop: 0
}, 800);
event.preventDefault();

animate()はアニメーション効果を設定するjQueryの関数
HTML要素のcssプロパティを変化させることで動きを設定

$('セレクタ名').animate({
    変化対象のプロパティ名:変化値
}, アニメーションの稼働時間)

セレクタのbody, htmlはbody要素またはhtml要素の意味
２つの要素を指定するのはユーザの利用環境によって指定対象の要素が変化するため

event.preventDefault();は、aタグの機能を無効にするメッド
aタグは画面遷移する機能を保ちますが今回は必要ないため無効