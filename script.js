document.getElementById("generateStory").addEventListener("click", function() {
    //prompts
    const userName = document.getElementById("userName").value || "The Guest";
    const weapon = document.getElementById("weapon").value || "pickled eggplant";
    const enemy = document.getElementById("enemy").value || "a mime artist";
    const place = document.getElementById("place").value || "underwater lair";
    const treasure = document.getElementById("treasure").value || "a rubber chicken";
    const sidekick = document.getElementById("sidekick").value || "the inflatable flamingo";

    //create story
    const myStory = `
        <h2>What Happened at the Dinner Party</h2>
        <p><strong>${userName}</strong> arrived at the party, where the main dish was <strong>${weapon}</strong>. 
        Things got weird when <strong>${enemy}</strong> showed up at the <strong>${place}</strong> and brought <strong>${treasure}</strong> as a gift. 
        Luckily, <strong>${sidekick}</strong> saved the night, and everyone went home with a full stomach.</p>
    `;

    //display story
    document.getElementById("story").innerHTML = myStory;
});