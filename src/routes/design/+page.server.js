export async function load() {
  const response = await fetch("https://api.sofa.sh/designs", {
    method: "GET",
  });

  const designs = await response.json();

  return {
    designs,
  };
}
