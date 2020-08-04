//オションを指定してskipprの実行
$(".theTarget").skippr({
    //スライドショーの変化
    transition: 'fade',
    //変化に書かkる時間（ミリ秒）
    speed: 1000,
    //easingの種類
    easing: 'easeOutQuartE',
    //ナビゲーションの形("block" or "bubble")
    navType: 'block',
    //子要素の種類("div" or "img")
    childrenElementType: 'div',
    //ナビゲーション矢印の表示(trueで表示)
    arrows: true,
    //スライドショーの自動再生(falaseで自動なし)
    autoPlay: false,
    //自動再生事のスライド切り替え間隔（ミリ秒）
    autoPlayDuration: 5000,
    //キーボードの矢印キーによるスライド送りの設定（trueで有効）
    keyboardOnAlways: true,
    //一枚目のスライド表示時に戻る矢印を表示するかどうか
    hidePrevious: false,
});

