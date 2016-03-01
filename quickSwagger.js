function quickSwagger() {

    var chromeStorage = chrome.storage.local;
    chromeStorage.get('apiAdd', function(item) {
        if (item.apiAdd) {
            $.get(item.apiAdd, function(res) {
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
