function FindProxyForURL(url, host) {    

  var direct = dnsResolve(host);    
  if (canConnect(direct)) {    
    return "DIRECT"; // 如果能够直接访问，则直接连接    
  }    
      
  // 如果无法直接访问，则使用代理    
  var proxy = "SOCKS suguiheng.work.dg:49170"; // 默认使用特定的 SOCKS 代理    
  if (shExpMatch(host, "*.com")) {    
    proxy = "SOCKS suguiheng.work.dg:49170"; // 对以.com结尾的域名使用另一个 SOCKS 代理    
  }    
      
  return proxy; // 默认情况下使用代理，如果存在特定规则则使用特定代理    
}
