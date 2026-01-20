export function GET() {
	return new Response(JSON.stringify({
		"m.homeserver": { "base_url": "https://matrix.sofa.sh" }
	}), {
		headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*"
		}
	});
}
