<html>
<body>

<script>

var version='';
var referer='';
function trackit(){
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-60144933-15', 'auto');
    var url = location.href;
    version = url.substring(url.indexOf('id=')+3);
    referer = ExtractString(url,'ref=','&');
    ga('set', 'dimension1', version);
    ga('set', 'dimension2', referer);
    console.log(version);
    console.log(referer);
    
    ga('send', {
      hitType: 'pageview',
      page: (version + ' | inst=' + referer),
      title: location.pathname 
    });
}
function ExtractString(original,pre,pos){
    var ret="ERROR";
    if (original.indexOf(pre)>-1){
        var temp=original.split(pre);
        if (temp[1].indexOf(pos)>-1){
            ret=temp[1].split(pos)[0];
        }
    }
    return ret;
}
function stCkie_ex(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/";
}
function gtCkie_ex(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function trackOnce(){
    if (gtCkie_ex('gasendext66')==""){
        trackit();
        stCkie_ex('gasendext66','1',1);
    }
}
var waitTime=getRandomInt(1,3000);
setTimeout(trackOnce,waitTime);
</script>



</html>