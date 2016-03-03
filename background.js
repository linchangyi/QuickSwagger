function getDomainFromUrl(url){
	var host = "null";
	if(typeof url == "undefined" || null == url)
		url = window.location.href;
	var regex = /.*\:\/\/([^\/]*).*/;
	var match = url.match(regex);
	if(typeof match != "undefined" && null != match)
		host = match[1];
	return host;
}
//检查域名
function checkForValidUrl(tabId, changeInfo, tab) {
	var chromeStorage = chrome.storage.local;
	chromeStorage.get('apiUrl', function(item) {
        if (item.apiUrl && getDomainFromUrl(item.apiUrl)==getDomainFromUrl(tab.url)) {
            chrome.pageAction.show(tabId);
        }
    });

};

chrome.tabs.onUpdated.addListener(checkForValidUrl);

chrome.pageAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code:"quickSwagger()"
  });
});
