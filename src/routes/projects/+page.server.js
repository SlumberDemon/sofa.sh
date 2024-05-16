export async function load() {
  const response = await fetch("https://api.sofa.sh/projects", {
    method: "GET",
    headers: {
      "X-Space-App-Key": `${process.env.API_KEY}`,
    },
  });

  const data = await response.json();

  return {
    projects: data,
  };
}
