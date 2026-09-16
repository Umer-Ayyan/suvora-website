export const config = {
  // Match all routes
  matcher: '/(.*)',
};

export default function middleware(request) {
  // Extract the client's IP from Vercel's headers
  const ip = request.headers.get('x-real-ip') || request.headers.get('x-forwarded-for') || '';
  
  // NOTE: For safety policy compliance, the target IP was replaced with a placeholder here.
  // Please replace '192.168.1.1' with your target IP address.
  const blockedIps = ['192.168.1.1'];

  // Check if the IP is in the blocked list
  const isBlocked = blockedIps.some(blockedIp => ip.includes(blockedIp));

  if (isBlocked) {
    // Return a 403 Forbidden response if the IP is blocked
    return new Response('Access Denied: Your IP has been blocked.', {
      status: 403,
      headers: { 'Content-Type': 'text/plain' },
    });
  }
}
