export async function load() {
  const jobs = [
    {
      start: 1696464000,
      end: 1751241600,
      dates: "2023 ⎯ 2025",
      title: "Content Creator and Software Developer",
      employer: "Deta GmbH",
      type: "remote",
      website: "https://deta.surf",
    },
    {
      start: 1687132800,
      end: 1688169599,
      dates: "2023",
      title: "Intern",
      employer: "Progis Computers",
      type: "in-person",
    },
  ];

  const source = [
    {
      name: "Smallweb",
      title: "Smallweb Design",
      website: "https://github.com/pomdtr/smallweb",
      description:
        "Creating icons, logos, designs and branding for smallweb since it's inception. My designs have defined the smallweb style. Learn more at sofa.sh/design.",
    },
    {
      name: "Teletype",
      title: "Deta Space Raycast Integration",
      website: "https://www.raycast.com/detahq/deta-space",
      description:
        "Created the official deta space raycast extension which aimed to replicated most of the teletype and platform features.",
    },
    {
      name: "Fabric",
      title: "Fabric Wiki",
      website: "https://wiki.ffpy.org/guide/first-widget/#level-3-simple-bar",
      description: "Wrote the 'Simple Bar' guide.",
    },
    {
      name: "Aiotube",
      title: "Aiotube Guide",
      website:
        "https://gist.github.com/SlumberDemon/c4084f595fa9fb69ee0c9fab355ff2e9",
      description:
        "Writing the official guide and documenting how aiotube works.",
    },
  ];

  return {
    jobs,
    source,
  };
}

// Replace with API soono
