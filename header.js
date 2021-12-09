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
              <button class="dropbtn">Map
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a href="/map/map1066.html">1066 Map</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div> 
            <a href="/timeline/timeline.html">Timeline</a>
            <a href="/people/people.html">People</a>
            <a style="float:right" href="/sources/sources.html">Sources</a>
          </div>
        `;
  }
}

customElements.define("header-component", Header);
