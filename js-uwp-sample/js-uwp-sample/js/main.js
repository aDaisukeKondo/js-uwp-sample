// 空白のテンプレートの概要については、次のドキュメントを参照してください:
// https://go.microsoft.com/fwlink/?LinkId=232509

(function () {
	"use strict";

	var app = WinJS.Application;
	var activation = Windows.ApplicationModel.Activation;
	var isFirstActivation = true;

	app.onactivated = function (args) {
		if (args.detail.kind === activation.ActivationKind.voiceCommand) {
			// TODO: 関連する ActivationKinds を処理します。たとえば、アプリが音声コマンドによって起動できる場合は、
			// 入力フィールドを事前設定するか、または別の初期ビューを選択するかどうかをここで決定します。
		}
		else if (args.detail.kind === activation.ActivationKind.launch) {
			// 起動アクティブ化は、ユーザーがタイルを介してアプリを起動するか、
			// または本文をクリックするかタップしてトースト通知を呼び出すと、実行されます。
			if (args.detail.arguments) {
				// TODO: アプリがトーストをサポートしている場合は、トースト ペイロードのこの値を使用して、
				// トースト通知の呼び出しに応答してユーザーのアプリ内の場所を決定します。
			}
			else if (args.detail.previousExecutionState === activation.ApplicationExecutionState.terminated) {
				// TODO: このアプリケーションは中断されていましたが、メモリを確保するために終了されました。
				// スムーズなユーザー エクスペリエンスとなるよう、ここでアプリケーション状態を復元し、アプリが停止したようには見えないようにします。
				// メモ: アプリケーションが最後に中断された時間を記録したり、すぐに復帰した場合は状態のみを復元したりできます。
			}
		}

		if (!args.detail.prelaunchActivated) {
			// TODO: prelaunchActivated が true であった場合は、アプリが最適化のためバックグラウンドで事前起動されたことを示します。
			// その場合、アプリはその後すぐに中断されます。
			// すべての長時間実行される操作 (コストが高いネットワークやディスク I/O など) または起動時に発生するユーザー状態に対する変更は、
			// (事前起動の場合にこれらが実行されないよう) ここで実行する必要があります。
			// あるいは、この操作を resume または visibilitychanged ハンドラーで実行することもできます。
		}

		if (isFirstActivation) {
			// TODO: アプリはアクティブになっていましたが、実行されていませんでした。ここで、スタートアップの一般的な初期化を実行します。
			document.addEventListener("visibilitychange", onVisibilityChanged);
			args.setPromise(WinJS.UI.processAll());
		}

		isFirstActivation = false;
	};

	function onVisibilityChanged(args) {
		if (!document.hidden) {
			// TODO: アプリが表示可能になりました。ここでビューを最新の状態に更新することができます。
		}
	}

	app.oncheckpoint = function (args) {
		// TODO: このアプリケーションは中断しようとしています。ここで中断中に維持する必要のある状態を保存します。
		// WinJS.Application.sessionState オブジェクトを使用している可能性があります。このオブジェクトは、中断の間自動的に保存され、復元されます。
		//ご使用のアプリケーションを中断する前に非同期の操作を完了する必要がある場合は、args.setPromise() を呼び出してください。
	};

	app.start();

})();
