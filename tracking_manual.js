const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

const discordLinks = {
    '001': 'https://discord.gg/5nBWJuV5'
};

const newDiscordLink = discordLinks[params.campaign];

if (newDiscordLink) {
    const links = document.querySelectorAll('a[href*="https://discord.gg"]');

    for (let link of links) {
        link.href = newDiscordLink;
    }
}
