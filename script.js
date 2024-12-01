document.getElementById("generateStory").addEventListener("click", function() {
    // User inputs
    const userName = document.getElementById("userName").value || "The Mysterious Guest";
    const mainDish = document.getElementById("weapon").value || "pickled eggplant surprise";
    const strangeGuest = document.getElementById("enemy").value || "a garden gnome with sunglasses";
    const partyLocation = document.getElementById("place").value || "a treehouse with Wi-Fi";
    const giftItem = document.getElementById("treasure").value || "a rubber chicken wearing a cape";
    const sidekickName = document.getElementById("sidekick").value || "Captain Snuggles the Cat";

    // Story
    const myStory = `
        <p><strong>${userName}</strong> threw a dinner party at <strong>${partyLocation}</strong>, featuring <strong>${mainDish}</strong> as the main dish. 
        The night turned crazy when <strong>${strangeGuest}</strong> showed up carrying <strong>${giftItem}</strong>, claiming it was a family heirloom. 
        Just as chaos erupted, <strong>${sidekickName}</strong> leapt onto the table, yelled, "Not on my watch!" and saved the day. 
        Everyone left with full stomachs... except the rubber chicken, which is still stuck in the chandelier.</p>
    `;

    // Add story to modal
    document.getElementById("modalStoryContent").innerHTML = myStory;

    // Show modal
    var myModal = new bootstrap.Modal(document.getElementById('storyModal'));
    myModal.show();
});