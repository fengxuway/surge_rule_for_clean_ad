let body = $response.body;

let obj = JSON.parse(body)

obj["ad_info"] = {}

body = JSON.stringify(obj)

$done({body});
