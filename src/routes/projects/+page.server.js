export async function load() {
  const data = [
    {
      date: "Started 2024",
      description:
        "Fishweb is a simple cli that makes it easy to run Python ASAGI applications effortlessly. It may be thought of as the Python equivalent of smallweb. Turn a new folder into a website without the need to start a development server or even setup a virtual environment.",
      key: "Fishweb",
      links: [
        {
          name: "Showcase",
          url: "https://bsky.app/profile/sofa.sh/post/3lgqy7usvvs2m",
        },
        {
          name: "Github (Soon)",
          url: "https://github.com/SlumberDemon/fishweb",
        },
      ],
      stack: ["Python"],
      state: "Closed Alpha",
    },
    {
      date: "2024",
      description:
        "Pal is a modular command-line interface with AI function calling. Pal at its core provides a few in-built plugins, but it can easily be extended. Pal is a personal exploration project.",
      key: "Pal",
      links: [{ name: "Github", url: "https://github.com/SlumberDemon/pal" }],
      stack: ["Python", "Ollama"],
      state: "Open Source",
    },
    {
      date: "Started 2024",
      description:
        "Spleeb is a little Discord app that has useful and fun features. It was originally created to test Discord's new user-installable applications and to learn more about serverless Discord apps/bots. It is currently closed-source and only available to a limited number of people.",
      key: "Spleeb",
      links: [{ name: "Website", url: "https://spleeb.sofa.sh" }],
      stack: ["Deta", "Python"],
      state: "Closed Source",
    },
    {
      date: "2024",
      description:
        "A small python cli to talk with and index webcrate content.",
      key: "Websi",
      links: [
        {
          name: "Demo",
          url: "https://x.com/SlumberDemon/status/1817689793893159004",
        },
      ],
      stack: ["Python", "Chroma", "Ollama", "Deta"],
      state: "Closed Source",
    },
    {
      date: "Started 2023",
      description:
        "The smart and adaptive, intelligent bean. An AI powered chatbot with an adaptable personality, long/short term memory and vision.",
      key: "Beanbrain",
      stack: ["Python", "Chroma", "PostgreSQL", "Ollama"],
      state: "Closed Source",
    },
    {
      date: "Started 2023",
      description: "My archlinux dotfiles",
      key: "Dotfiles",
      links: [
        { name: "Github", url: "https://github.com/SlumberDemon/dotfiles" },
      ],
      stack: ["Python", "CSS", "Shell"],
      state: "Open Source",
    },
    {
      date: "2023",
      description: "Use Deta Space Teletype directly from Raycast",
      key: "Teletype",
      links: [
        { name: "Github", url: "https://github.com/SlumberDemon/teletype" },
        {
          name: "Raycast Store",
          url: "https://www.raycast.com/detahq/deta-space",
        },
      ],
      stack: ["TypeScript"],
      state: "Open Source",
    },
    {
      date: "2022",
      description: "☁️ Your personal image cloud",
      key: "SpaceShuttle",
      links: [
        {
          name: "Github",
          url: "https://github.com/SpaceShuttleApp/SpaceShuttle",
        },
      ],
      stack: ["JavaScript", "Python", "Deta", "HTML", "CSS"],
      state: "Open Source",
    },
    {
      date: "2021",
      description:
        "B.O.A.T (Bot of a turtle) the general purpose bot. A discord bot with all kinds of features. Started off as a bot for a discord server with friends and later went public reaching 122 servers.",
      key: "B.O.A.T",
      links: [{ name: "Website", url: "https://b-o-a-t.carrd.co/" }],
      stack: ["Python", "Deta"],
      state: "Closed Source",
    },
  ];

  return {
    projects: data,
  };
}
