export function GET(request: any) {
  const text = 'hello from test api :)';
  console.log(request);
  return new Response(JSON.stringify(text));
}
