function smoothScroll() {
  [...document.querySelectorAll("a.internal")].map(el =>
    el.addEventListener("click", e => {
      e.preventDefault();
      const href = "#" + e.target.href.split("#")[1];
      console.log();
      document.querySelector(href).scrollIntoView({ behavior: "smooth" });
    })
  );
}

function populateTeam() {
  const members = [
    {
      name: "Priyanshi Ahuja",
      image: "priyanshi.png",
      description:
        "Priyanshi is our business lead, ensuring that our solutions are feasible and viable in their expected markets. She is a keen social worker and a member of TheGirlCode and Project Saans. She is an enthusiastic writer and has participated in various advocacy programs."
    },
    {
      name: "Ashvin Verma",
      image: "ashvin.jpg",
      description:
        "Ashvin is our management and design lead, with experience leading international 60+ people teams in engineering competitions. He has also been a Summit Finalist in the Conrad Challenge. He is also our design visualizer."
    },
    {
      name: "Somesh Kar",
      image: "somesh.png",
      description:
        "Somesh has an active interest in microcomputers. It is from his experience that this idea arose. He has built a startup which became a Y Combinator W2018 batch finalist. He has connections with various YC alumni, including Solomon Hykes, the Founder and CTO of Docker."
    },
    {
      name: "Angad Singh",
      image: "angad.jpeg",
      description:
        "Angad is passionate about problem-solving with technology and is proficient in many forms of application development. He also has interests in economics and public policy. Angad is also a frequent volunteer at TheGirlCode."
    }
  ];

  const template = ({ name, designation, image, description }) => `
          <div class="team-member">
            <div class="image"><img src="${image}" alt="${name}"/></div>
            <div class="meta">
              <div class="name">${name}</div>
              <div class="description">${description}</div>
              <!-- TODO: Contact info buttons -->
            </div>
          </div>`;

  const parent = document.querySelector(".section.team .s-content");
  parent.innerHTML = members.map(template).join("\n");
}

populateTeam();
smoothScroll();
