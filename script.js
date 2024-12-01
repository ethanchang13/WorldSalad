document.getElementById("generateStory").addEventListener("click", function () {
  // User inputs
  const userName = document.getElementById("name").value || "A stranger";
  const mainDish = document.getElementById("dish").value || "eggplant";
  const strangeGuest = document.getElementById("guest").value || "a raccoon";
  const partyLocation =
    document.getElementById("place").value || "a laundromat";
  const giftItem = document.getElementById("item").value || "deodorant";
  const heroName = document.getElementById("hero").value || "hero";

  // Story
  const myStory = `
        <p><strong>${userName}</strong> threw a dinner party at <strong>${partyLocation}</strong>, featuring <strong>${mainDish}</strong> as the main dish. 
        The night turned crazy when <strong>${strangeGuest}</strong> showed up carrying <strong>${giftItem}</strong>, claiming it was a family heirloom. 
        Just as chaos erupted, <strong>${heroName}</strong> leapt onto the table, yelled, "Not on my watch!" and saved the day. 
        Everyone left with full stomachs... while the <strong>${giftItem}</strong> still remains stuck in the chandelier to this day.</p>
    `;

  // Add story to modal
  document.getElementById("modalStoryContent").innerHTML = myStory;

  // Show modal
  var myModal = new bootstrap.Modal(document.getElementById("storyModal"));
  myModal.show();
});
