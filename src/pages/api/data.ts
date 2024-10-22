export async function GET() {
	const data = await fetch("https://yesno.wtf/api").then((res) => res.json());
	return new Response(JSON.stringify(data), {
		status: 200,
	});
}
