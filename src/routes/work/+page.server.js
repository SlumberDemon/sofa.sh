export async function load() {
  const response = await fetch("https://api.sofa.sh/work", {
    method: "GET",
  });

  const data = await response.json();
  const jobs = data["jobs"];
  const source = data["source"];

  return {
    jobs,
    source,
  };
}
