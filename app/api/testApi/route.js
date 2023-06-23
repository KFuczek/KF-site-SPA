export async function GET(request) {
    const text = 'hello from test api :)';
    return new Response(JSON.stringify(text));
}