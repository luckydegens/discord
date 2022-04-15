console.log("changing discord invite link")

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

const discordID = params["invite"] || params["utm_campaign"] ;

if (discordID) {
    const links = document.querySelectorAll('a[href*="https://discord.gg"]');

    for (let link of links) {
        link.href = `https://discord.gg/${discordID}`;
    }
}
