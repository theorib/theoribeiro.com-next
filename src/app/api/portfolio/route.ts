import { type NextRequest, NextResponse } from 'next/server';
import portfolioJson from '@/data/portfolio.json';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: NextRequest): Promise<Response> {
  try {
    const portfolio = portfolioJson;

    // const response = new Response(JSON.stringify(portfolio), {
    return NextResponse.json(portfolio);
  } catch (err) {
    return new Response(null, { status: 500 });
  }
}
