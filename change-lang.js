$.lang = {};

$.lang.ko = {
    0: '자기소개',
    1: '이름 : 류정은(柳貞恩)',
    2: 'ID : jeongeun',
    3: '별명 : 공실이',
    4: '감성적인 프로그래머가 되고싶습니다.'
};

$.lang.jp = {
    0: '自己紹介',
    1: '名前 : リュジョンソン(柳貞恩)',
    2: 'ID : jeongeun',
    3: '別名 : ゴンシリ',
    4: '感性的なプログラマーになりたいです。'
};

function setLanguage(currentLanguage) {
    $('[data-langNum]').each(function () {
        var $this = $(this);
        $this.html($.lang[currentLanguage][$this.data('langnum')]);
    });
}

// 언어 변경
$('button').click(function () {
    var lang = $(this).data('lang');
    setLanguage(lang);
});