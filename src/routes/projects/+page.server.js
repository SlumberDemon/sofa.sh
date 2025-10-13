export async function load() {
  const response = await fetch("https://api.sofa.sh/projects", {
    method: "GET",
  });

  const projects = await response.json();

  return {
    projects,
  };
}
