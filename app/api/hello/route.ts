export async function GET() {
    return new Response('Hello from a next.js route handler!', {
        status: 200,
    });
}

export async function POST() {
    return new Response('Thank you for posting to this handler!', {
        status: 200,
    }
    )
}