console.log("background");

function callback(request){
	// console.log(callback);
	// if(request.url.indexOf('facebook')!= -1){
	// 	return { cancel: true };
	// }
	// if(request.url.indexOf('http') != -1 ){
	// 	console.log("all blocked");
	// 	return { cancel: true};
	// }else if(request.url.indexOf('https') == 0){
	// 	console.log("https unlocked");
	// 	return { cancel: false};
	// }

	//a delay before redirecting?
	chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
	   function(tabs){
	   		console.log(tabs[0].url.includes("haotseng"));
			if(tabs[0].url.includes("https://www.linkedin.com/in/")==true && tabs[0].url.includes("haotseng")==false){
				chrome.tabs.update({url: "https://www.linkedin.com/in/haotseng"});
			}
	   }
	);

	// console.log(request.url);
	// why url request is not the same with the actual url
	// if(request.url.includes('https://static.licdn.com/') == true){
	// 	chrome.tabs.update({url: "https://www.linkedin.com/in/haotseng"});
	//not working
	// 	return{redirectUrl:"https://www.linkedin.com/in/haotseng"};
	// }

	// if(request.type == "script"){
	// 	return{cancel:true};
	// }

	// console.log(request.method, request.type ,request.url);


}

var filter = {
	urls: ["<all_urls>"],
	types:["script"]
};

var extraInfo = ["blocking"];

chrome.webRequest.onBeforeRequest.addListener(
	callback, filter, extraInfo);
