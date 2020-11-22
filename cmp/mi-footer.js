class MiFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `Copyright &copy; 2020 David Getzael Medina Vazquez.`;
  }
}
customElements.define("mi-footer", MiFooter);
