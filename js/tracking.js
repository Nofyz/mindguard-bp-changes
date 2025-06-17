// Google Tag Manager
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','G-HKCW4J722D');

// Microsoft Clarity
(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/YOUR_PROJECT_ID";
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "YOUR_PROJECT_ID");

// ClickFlare Tracking
document.addEventListener("DOMContentLoaded", function() {
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    }

    function trackClick(clickId) {
        const img = new Image();
        img.src = `https://go.${location.hostname}/cf/cv?click_id=${clickId}&ct=pageview`;
        img.style.display = "none";
        document.body.appendChild(img);
    }

    const clickId = new URLSearchParams(location.search).get("clickid") || getCookie("cf_click_id");
    if (clickId) trackClick(clickId);
});

// GA4 PageView
(function(){
    const measurementId = 'G-HKCW4J722D';
    const maxAttempts = 20;
    const interval = 200;
    let attempts = 0;

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    }

    function trackPageView(userId) {
        gtag('config', measurementId, {
            'user_id': userId
        });
        gtag('set', 'user_properties', {
            'clickid': userId
        });
        gtag('event', 'PageView_DTC', {
            'clickid': userId
        });
    }

    function attemptTracking() {
        const clickId = getCookie('cf_click_id');
        if (clickId) {
            trackPageView(clickId);
            return true;
        }
        if (++attempts < maxAttempts) {
            setTimeout(attemptTracking, interval);
            return false;
        }
        return false;
    }

    const urlClickId = new URLSearchParams(location.search).get('clickid');
    if (urlClickId) {
        trackPageView(urlClickId);
    } else {
        setTimeout(attemptTracking, interval);
    }
})(); 