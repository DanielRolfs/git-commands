const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzQ2MjkyMywiZXhwIjoxOTU5MDM4OTIzfQ.P3RcKSjvaJx0XAV8cty4Zh_9g5eGycc__ld0omY5kvM";
const commandsList = document.getElementById("commands-list");

// Example POST method implementation:
async function getData(url = "") {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      apikey: SUPABASE_KEY,
      Authorization: "Bearer" + SUPABASE_KEY,
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

async function populateList() {
  let data = await getData(
    "https://uzahtkeaortoovtlkcdn.supabase.co/rest/v1/commands?select=*"
  );

  commandsList.insertAdjacentHTML("afterbegin", "<ul>");
  for (element of data) {
    console.log(element.command);
    console.log(element.description);

    let loopElement = `
    <li>
        <span>
            ${element.command}:
        </span>
        <span>
            ${element.description}
        </span>
    </li>
`;
    commandsList.insertAdjacentHTML("beforeend", loopElement);
  }

  commandsList.insertAdjacentHTML("beforeend", "</ul>");
}

populateList();
