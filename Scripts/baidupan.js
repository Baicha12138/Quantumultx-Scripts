const url = $request.url;
const method = $request.method;

if (url.includes('https://pan.baidu.com/share/wxlist?') && method === 'POST') {
    if ($request.body) {
        console.log('检测到百度网盘链接');
        
        const bodyParams = new URLSearchParams($request.body);
        const shorturl = bodyParams.get('shorturl');
        const pwd = bodyParams.get('pwd');
        
        if (shorturl && pwd) {

            const fullLink = `https://pan.baidu.com/s/${shorturl}&pwd=${pwd}`;
           
            console.log(fullLink);
        } else {
            console.error('未找到完整的链接信息');
        }
    } else {
        console.error('请求体为空');
    }
}

$done({});
