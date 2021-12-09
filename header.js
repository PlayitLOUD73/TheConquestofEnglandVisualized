class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
            <!-- Site Navigation Menu-->
            <div class="navbar">
            <a href="TheConquestofEnglandVisualized/index.html">Home</a>
            <div class="dropdown">
              <button class="dropbtn">Maps
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a href="TheConquestofEnglandVisualized/map/map1066.html">1066 Map</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div> 
            <a href="TheConquestofEnglandVisualized/timeline/timeline.html">Timeline</a>
            <a href="TheConquestofEnglandVisualized/people/people.html">People</a>
            <a style="float:right" href="TheConquestofEnglandVisualized/sources/sources.html">Sources</a>
          </div>
        `;
  }
}

customElements.define("header-component", Header);
