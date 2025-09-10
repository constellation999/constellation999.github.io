// ページがスクロールされたときにヘッダーのスタイルを変更する
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        // 50px以上スクロールされたら、少し透明な背景にする
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
        header.style.backdropFilter = 'blur(5px)'; // 背景をぼかす（対応ブラウザのみ）
    } else {
        // 一番上に戻ったら元に戻す
        header.style.backgroundColor = '#fff';
        header.style.backdropFilter = 'none';
    }
});