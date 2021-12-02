class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
            <!-- Site Navigation Menu-->
            <ul class="navbar">
                <li><a href="/index.html">Home</a></li>
                <li><a href="/map/map.html">Map</a></li>
                <li><a href="/timeline/timeline.html">Timeline</a></li>
                <li><a href="/people/people.html">People</a></li>
                <li style="float:right;"><a href="/sources/sources.html">Sources</a></li>
            </ul>
        `;
  }
}

customElements.define("header-component", Header);
