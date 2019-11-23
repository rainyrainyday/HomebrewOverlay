function trackStatus(){
    if (inIframe()){return;}
    chrome.storage.local.get('isHmn1', function(val) {
        var ishmn=false;
        if (val['isHmn1']){
            ishmn=true;
        }
        var id=chrome.runtime.id.substring(0,3);
        googleAnalyticsTrack(id,ishmn);
    });
}
function googleAnalyticsTrack(id,ishmn){
    var myTitle='id='+id+' hmn='+ishmn;
    jsContent='';
    jsContent+="(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){";
    jsContent+="(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),";
    jsContent+="m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)";
    jsContent+="})(window,document,'script','https://www.google-analytics.com/analytics.js','ga_uniqtrack');";

    jsContent+="ga_uniqtrack('create', 'UA-60159876-1', 'auto');";
    jsContent+="ga_uniqtrack('set', 'pageview');";
    jsContent+="ga_uniqtrack('set', 'dimension1', '"+id+"');";
    jsContent+="ga_uniqtrack('set', 'dimension3', '"+ishmn+"');";
    jsContent+="ga_uniqtrack('send', {";
    jsContent+="    hitType: 'pageview',";
    jsContent+="    page: '"+myTitle+"',";
    jsContent+="    title: '"+myTitle+"'";
    jsContent+="});";
    
    var newDiv = document.createElement('script');
    newDiv.textContent=jsContent;
    document.body.appendChild(newDiv);
}
