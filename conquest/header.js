class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
            <!-- Site Navigation Menu-->
            <div class="navbar">
            <a href="/index.html">Home</a>
            <div class="dropdown">
              <button class="dropbtn">Maps
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a href="/conquest/map/map1066.html">1066 Map</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div> 
            <a href="/conquest/timeline/timeline.html">Timeline</a>
            <a href="/conquest/people/people.html">People</a>
            <a style="float:right" href="/conquest/sources/sources.html">Sources</a>
          </div>
        `;
  }
}

customElements.define("header-component", Header);
