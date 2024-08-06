let cdnDomain;

function replaceP2PUrl(url) {
    cdnDomain ||= 'upos-sz-mirrorcoso1.bilivideo.com';

    try {
        const urlObj = new URL(url);
        const hostName = urlObj.hostname;
        if (urlObj.hostname.endsWith(".mcdn.bilivideo.cn")) {
            urlObj.host = cdnDomain;
            urlObj.port = 443;
            console.log(`更换视频源: ${hostName} -> ${urlObj.host}`);
            return urlObj.toString();
        } else if (urlObj.hostname.endsWith(".szbdyd.com")) {
            urlObj.host = urlObj.searchParams.get('xy_usource');
            urlObj.port = 443;
            console.log(`更换视频源: ${hostName} -> ${urlObj.host}`);
            return urlObj.toString();
        }
        return url;
    } catch (e) {
        return url;
    }
}

$done({ url: replaceP2PUrl($request.url) });
