import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

export async function GET() {
  const response = new NextResponse('ok');
  // const response = new Response('ok', {
  //   status: 200,
  //   statusText: 'ok',
  // });

  return response;
}
