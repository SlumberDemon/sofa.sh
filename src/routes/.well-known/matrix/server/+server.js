export function GET() {
	return new Response(JSON.stringify({
		'm.server': 'matrix.sofa.sh:443'
	}), {
		headers: {
			'Content-Type': 'application/json'
		}
	});
}
