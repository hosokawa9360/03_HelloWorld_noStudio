

cc.game.onStart = function(){
    if(!cc.sys.isNative && document.getElementById("cocosLoading")) //If referenced loading.js, please remove it
        document.body.removeChild(document.getElementById("cocosLoading"));

    // Pass true to enable retina display, on Android disabled by default to improve performance
    cc.view.enableRetina(cc.sys.os === cc.sys.OS_IOS ? true : false);
    
    // プログラムの画面全体を表示領域の画面に合わせる　Adjust viewport meta
    cc.view.adjustViewPort(true);
    
    // 画面の縦横比をドットで指定するSetup tu can also set the real pixel resolution size
    // Uncomment the following line and delete the previous line.
    // cc.view.setRealPixelResolution(960, 640, cc.ResolutionPolicy.SHOW_ALL);
    // The game will be resized when browser size change
   
    // 表示領域がリサイズされた場合、自動的にプログラムの画面をリサイズさせる
    cc.view.resizeWithBrowserSize(true);
    //シーンのプリロードload resources
    //プリロードとは、画面を表示する前に、必要な画像などをすべて読み込むことです。
    //プリロードすることにより、画面が切り替わってから順に画面に必要な要素が表示され始めるようなことを避けられます
    cc.LoaderScene.preload(g_resources, function () {
        cc.director.runScene(new HelloWorldScene());
    }, this);
};
//最後にgameオブジェクトを実行
cc.game.run();
