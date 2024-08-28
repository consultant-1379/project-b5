/**
 * App1 is defined as
 * `<e-app-1>`
 *
 * Imperatively create application
 * @example
 * let app = new App1();
 *
 * Declaratively create application
 * @example
 * <e-app-1></e-app-1>
 *
 * @extends {App}
 */
import { definition } from "@eui/component";
import { App, html } from "@eui/app";
import style from "./app1.css";
import "@eui/layout";
import "comment";
import "../../../components/e-get-data/src/EGetData";
import "../../../components/project-menu/src/ProjectMenu";

@definition("e-app-1", {
  style,
  props: {
    response: { attribute: false },
  },
})
export default class App1 extends App {
  /**
   * Uncomment this block to add initialization code
   * constructor() {
   *   super();
   *   // initialize
   * }
   */

  /**
   * Render the <e-app-1> app. This function is called each time a
   * prop changes.
   */

  render() {
    // var person = { name: "John", age: 21 };
    // var personHtmlStr = "Name: " + person.name + "  Age : " + (person.age + 1);

    const { EUI } = window;

    const projectDropdown = html`<e-project-menu></e-project-menu>`;

    return html`
      <h1>Sonarqube Vulnerabilities</h1>
      <div>${projectDropdown}</div>
    `;
  }
}

/**
 * Register the component as e-app-1.
 * Registration can be done at a later time and with a different name
 * Uncomment the below line to register the App if used outside the container
 */
// App1.register();
