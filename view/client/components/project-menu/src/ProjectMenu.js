/**
 * Component ProjectMenu is defined as
 * `<e-project-menu>`
 *
 * Imperatively create component
 * @example
 * let component = new ProjectMenu();
 *
 * Declaratively create component
 * @example
 * <e-project-menu></e-project-menu>
 *
 * @extends {LitComponent}
 */
import { definition } from "@eui/component";
import { LitComponent, html } from "@eui/lit-component";
import style from "./projectMenu.css";
import "../../../components/e-get-data/src/EGetData";
import "../../../components/custom-table/src/CustomTable";

/**
 * @property {Boolean} propOne - show active/inactive state.
 * @property {String} propTwo - shows the "Hello World" string.
 */
@definition("e-project-menu", {
  style,
  home: "project-menu",
  props: {
    propOne: { attribute: true, type: Boolean },
    propTwo: { attribute: true, type: String, default: "Hello World" },
    projectname: { attribute: false, type: "string", default: "Project" },
    value: { attribute: false, type: "string", default: '{"A":1, "B":2}' },
    listofprojects: {
      attribute: false,
      type: "string",
      default: '{"AB":123, "CD":345}',
    }, //contains all the valid projects
    buttonDisabled: { attribute: false, type: Boolean, default: true },
    checkproject: { attribute: false, type: Boolean, default: false }, //checks if it is a valid project
  },
})
export default class ProjectMenu extends LitComponent {
  /**
   * Render the <e-project-menu> component. This function is called each time a
   * prop changes.
   */

  didConnectReport() {
    let url =
      "http://localhost:8081/sonarqube/report?projectKey=" + this.projectname;
    // let url = "http://localhost:8081/" + this.projectname;
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(
        function (json) {
          this.value = JSON.stringify(json); // as Json
          // this.value = Object.entries(json); //as Array
          // console.log("Parsed JSON : ", json);
          // console.log(this.value);
        }.bind(this)
      )
      .catch(function (error) {
        // console.log("Parsing Failed : ", error);
        console.log("SAMPLE URL : ", url);
      });
  }

  didConnectProjects() {
    let url1 = "http://localhost:8081/sonarqube/getAllProjects";
    // let url1 = "http://localhost:8081/array";
    fetch(url1)
      .then(function (response) {
        return response.json();
      })
      .then(
        function (json1) {
          this.listofprojects = JSON.stringify(json1); // as Json
          // this.value = Object.entries(json); //as Array
          // console.log("Parsed JSON : ", json1);
          // console.log(this.listofprojects);
        }.bind(this)
      )
      .catch(function (error) {
        console.log("Parsing Failed : ", error);
      });
    this.check();
  }

  _onChangeHandlerDisable(value) {
    if (value === "") {
      this.buttonDisabled = true;
    } else {
      this.buttonDisabled = false;
    }
  }

  _onChangeHandlerProject(value) {
    if (value === "") {
      this.projectname = "Project";
    } else {
      this.projectname = value;
    }
  }

  check() {
    var l = [];
    let json1 = JSON.parse(this.listofprojects);
    for (var i in json1) {
      l.push(json1[i]);
    }
    // console.log("This is the array : ", l);
    if (l.includes(this.projectname)) {
      this.checkproject = true;
      this.didConnectReport();
    } else {
      this.checkproject = false;
    }
  }

  render() {
    const json1 = JSON.parse(this.listofprojects);
    // console.log("IS IT JSON : ", json1);

    const projectButton = html` <div>
      <eui-base-v0-text-field
        @input="${(event) => {
          this._onChangeHandlerDisable(event.currentTarget.value);
        }}"
        @change="${(event) => {
          this._onChangeHandlerProject(event.currentTarget.value);
          this.didConnectProjects();
        }}"
        placeholder="com.project.example..."
        fullwidth
        required
      >
        <eui-v0-icon slot="icon" name="search"></eui-v0-icon>
      </eui-base-v0-text-field>
      <eui-base-v0-button
        ?disabled="${this.buttonDisabled}"
        @click="${() => {
          this.didConnectProjects();
        }}"
        primary
        icon="check"
        reverse
        fullwidth
      >
        Print Report
      </eui-base-v0-button>
    </div>`;

    const calltotable = html` <div>
      <e-get-data
        projectname="${this.projectname}"
        value="${this.value}"
      ></e-get-data>
      <e-custom-table
        projectname="${this.projectname}"
        value="${this.value}"
      ></e-custom-table>
      <e-print-problems value="${this.value}"></e-print-problems>
    </div>`;

    const condition =
      this.checkproject == false
        ? html`<br />
            <div>Please enter correct project name.</div>`
        : html`${calltotable}`;

    return html`
      <h2>Enter the Project ID</h2>
      <div>${projectButton}</div>
      ${condition}
      <br />
    `;
  }
}

// ${console.log("In PROJECT MENU ", this.projectname)}
/**
 * Register the component as e-project-menu.
 * Registration can be done at a later time and with a different name
 */
ProjectMenu.register();
