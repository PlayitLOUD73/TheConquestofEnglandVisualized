function makeContentVisible(x) {
  if (x === 0) {
    document.getElementsByClassName("content-box")[0].innerHTML = `
    <h3>The Battle of Fulford Gate</h3>
    <h4>When: 20 September 1066<br>Who: English vs. Norwegians</h4>
    <p>The English were led by the Earls Edwin and Morcar.
    The Norwegian vikings were led by King Harald of Norway with help from Tostig.</p>
    <p>There were approximately 5 to 8000 troops on both sides.
    Harald placed his weaker troops on his flanks to face the English.
    The weaker troops were led by Tostig.
    </p> 
    <p>The English attacked first and formed a shield-wall, and they were intially successful
    against Harald's weaker flanks. 
    After a long battle, the English fled in defeat. Due to the placement of the English army,
    in between a ditch and a swamp, the retreat was disasterous for the English. Jordan Poss wrote
    on the retreat, "Harald pressed his army against the fleeing English and butchered them" (53).
    The English had no where to go, and Harald took advantage of the situation. The initial placement
    of the English army, while successful at preventing flanking maneuvers, left the English with
    no where to go when the retreat started.
    </p>
    `;
  }
  if (x === 1) {
    document.getElementsByClassName("content-box")[0].innerHTML = `
    <h3>The Battle of Stamford Bridge</h3>
    <h4>When: 25 September 1066<br>Who: English vs. Norwegians</h4>
    <p>The English were led by King Harold of England. 
    The Norweigans were led by King Harald of Norway with help from Tostig.</p>
    <p>
      The army of King Hardrada was camped in the surrounding areas of Stamford Bridge.
      King Harold caught the Norweigan army unprepared.
      Poss wrote in <cite>Behind the Shield-wall: The Experience of Combat in Late Anglo-Saxon England</cite>,
      "...the sun bright and hot, so hot that Harald's men "left their mail coats behind..." (64).
      The English sent in their calvary and were largely successful. On Stamford Bridge, a lone viking warrior
      made a last stand to give the Norwegians time to regroup (57).
      Hardrada was killed by an arrow through his throat (Manley) and Tostig was killed when the English were
      finishing off the remaining warriors who were willing to fight until the end.
      The Norwegians left England in only 24 ships out of the nearly 300 they arrived in (Poss 65).

    </p>
    `;
  }
  if (x == 2) {
    document.getElementsByClassName("content-box")[0].innerHTML = `
    <h3>The Battle of Hastings</h3>
    <h4>When: 14 October 1066<br>Who: English vs. Normans</h4>
    <p>The English were led by King Harold of England.
    The Normans were led by William of Normandy.</p>
    <p>The English held the high ground in this battle. For most of the battle, the English were able to 
        hold the line against the Norman infantry and calvary. The Normans would retreat and then turn on
        the English that pursued them. The battle turned when Harold was fatally injured. Jordan Poss wrote,
        "... a Norman arrow sailed out of the evening sky and pierced his eye and sank through the eye socket
        into the base of his brain" (97).</p>
    <p>The injury and death of Harold caused chaos in the English army and eventually allowed the Norman
        calvray to mop up the remaining soldiers (Poss 99). </p>


    <p>For more strategy about the battle and a map, <a href="/map/mapHastings.html">click here.</a></p>
    `;
  }
}
