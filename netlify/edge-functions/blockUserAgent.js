export default async (event) => {
    // Get the User Agent from the request headers
    const userAgent = event.headers.get('user-agent');
    // Define the excluded User Agent
    const excludedUserAgent = 'AlipayDeveloper';
    
    
    // Check if the User Agent matches the excluded agent
    const uaForbidden = userAgent.includes(excludedUserAgent);
    
    
    // Return custom response for excluded agent
    if (uaForbidden) {
    const errorStatus = { status: 403, statusText: 'Forbidden' };
    return new Response('Forbidden', errorStatus);
    }
    // Default response if User Agent doesn't match
    return;
    };
    