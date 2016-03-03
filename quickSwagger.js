function quickSwagger() {

    var chromeStorage = chrome.storage.local;
    chromeStorage.get('apiUrl', function(item) {
        if (item.apiUrl) {
            $.get(item.apiUrl, function(res) {
                var data = {}
                data.yaml = res;

                localStorage.setItem('ngStorage-SwaggerEditorCache', JSON.stringify(data));

                location.reload();
            });
        } else {
        	alert('请先设置api文档的位置');
        }
    });


}
