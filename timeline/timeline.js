function makeContentVisible(x) {
  document.getElementsByClassName("content-box")[0].style.visibility =
    "visible";

  if (x === 0) {
    document.getElementsByClassName("content-box")[0].innerHTML = `
    <h3>The Battle of Fulford Gate</h3>
    <h4>When: 20 September 1066<br>Who: English vs. Norwegians</h4>
    <p>The English were led by the Earls Edwin and Morcar.
    The Norwegian vikings were led by King Harald of Norway</p>
    <p>There was approximately 5 to 8000 troops on both sides.
    Harald placed his weaker troops on his flanks to face the English.
    The weaker troops were led by Tostig.
    </p> 
    <p>The English attacked first and formed a shield-wall, and were intially successful
    against Harald's weaker flanks. 
    After a long battle, the English fled in defeat. Due to the placement of the English army,
    in between a ditch and a swamp, the retreat was disasterous for the English. Jordan Poss wrote
    on the retreat, "Harald pressed his army against the fleeing English and butchered them" (53).
    The English had no where to go and Harald took advantage of the situation. The initial placement
    of the English army, while successful at preventing flanking maneuvers, it left the English with
    no where go when the retreat started.
    </p>
    `;
  }
  if (x === 1) {
    document.getElementsByClassName("content-box")[0].innerHTML = `
    <h3>The Battle of Stamford Bridge</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    `;
  }
}
