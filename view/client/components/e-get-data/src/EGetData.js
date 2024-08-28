/**
 * Component EGetData is defined as
 * `<e-get-data>`
 *
 * Imperatively create component
 * @example
 * let component = new EGetData();
 *
 * Declaratively create component
 * @example
 * <e-get-data></e-get-data>
 *
 * @extends {LitComponent}
 */
import { definition } from "@eui/component";
import { LitComponent, html } from "@eui/lit-component";
import style from "./eGetData.css";
import "@eui/table";
import { Tab } from "@eui/layout";
import "../../../components/project-menu/src/ProjectMenu";
import "../../../components/custom-table/src/CustomTable";
import "../../../components/print-problems/src/PrintProblems";

/**
 * @property {Boolean} propOne - show active/inactive state.
 * @property {String} propTwo - shows the "Hello World" string.
 */
@definition("e-get-data", {
  style,
  home: "e-get-data",
  props: {
    propOne: { attribute: true, type: Boolean },
    propTwo: { attribute: true, type: Text, default: "Hello World" },
    value: { attribute: true, type: "string" },
    projectname: { attribute: true, type: "string" },
  },
})
export default class EGetData extends LitComponent {
  /**
   * Render the <e-get-data> component. This function is called each time a
   * prop changes.
   */

  render() {
    const json = JSON.parse(this.value);

    const Generalcolumns = [
      { title: "Category", attribute: "col1" },
      { title: "Rating", attribute: "col2" },
      { title: "Blocker (!)", attribute: "col3" },
      { title: "Critical (|^|)", attribute: "col4" },
      { title: "Major (^)", attribute: "col5" },
      { title: "Minor (|v|)", attribute: "col6" },
      { title: "Info (i)", attribute: "col7" },
      { title: "HotSpots", attribute: "col8" },
    ];

    const jsonBlockerSum =
      json["0"].blocker +
      json["1"].blocker +
      json["2"].blocker +
      json["3"].blocker +
      json["4"].blocker +
      json["5"].blocker +
      json["6"].blocker +
      json["7"].blocker +
      json["8"].blocker +
      json["9"].blocker;
    const jsonCriticalSum =
      json["0"].critical +
      json["1"].critical +
      json["2"].critical +
      json["3"].critical +
      json["4"].critical +
      json["5"].critical +
      json["6"].critical +
      json["7"].critical +
      json["8"].critical +
      json["9"].critical;
    const jsonMajorSum =
      json["0"].major +
      json["1"].major +
      json["2"].major +
      json["3"].major +
      json["4"].major +
      json["5"].major +
      json["6"].major +
      json["7"].major +
      json["8"].major +
      json["9"].major;
    const jsonMinorSum =
      json["0"].minor +
      json["1"].minor +
      json["2"].minor +
      json["3"].minor +
      json["4"].minor +
      json["5"].minor +
      json["6"].minor +
      json["7"].minor +
      json["8"].minor +
      json["9"].minor;
    const jsonInfoSum =
      json["0"].info +
      json["1"].info +
      json["2"].info +
      json["3"].info +
      json["4"].info +
      json["5"].info +
      json["6"].info +
      json["7"].info +
      json["8"].info +
      json["9"].info;
    const jsonSecurityHotspotSum =
      json["0"].securityHotspot.length +
      json["1"].securityHotspot.length +
      json["2"].securityHotspot.length +
      json["3"].securityHotspot.length +
      json["4"].securityHotspot.length +
      json["5"].securityHotspot.length +
      json["6"].securityHotspot.length +
      json["7"].securityHotspot.length +
      json["8"].securityHotspot.length +
      json["9"].securityHotspot.length;
    const OWASPdata = [
      {
        col1: "A1- Injection",
        col2: json["0"].rating,
        col3: json["0"].blocker,
        col4: json["0"].critical,
        col5: json["0"].major,
        col6: json["0"].minor,
        col7: json["0"].info,
        col8: json["0"].securityHotspot.length,
      },
      {
        col1: "A2- Broken Authentication",
        col2: json["1"].rating,
        col3: json["1"].blocker,
        col4: json["1"].critical,
        col5: json["1"].major,
        col6: json["1"].minor,
        col7: json["1"].info,
        col8: json["1"].securityHotspot.length,
      },
      {
        col1: "A3 - Sensitive Data Exposure",
        col2: json["2"].rating,
        col3: json["2"].blocker,
        col4: json["2"].critical,
        col5: json["2"].major,
        col6: json["2"].minor,
        col7: json["2"].info,
        col8: json["2"].securityHotspot.length,
      },
      {
        col1: "A4 - XML External Entities (XXE)",
        col2: json["3"].rating,
        col3: json["3"].blocker,
        col4: json["3"].critical,
        col5: json["3"].major,
        col6: json["3"].minor,
        col7: json["3"].info,
        col8: json["3"].securityHotspot.length,
      },
      {
        col1: "A5 - Broken Access Control",
        col2: json["4"].rating,
        col3: json["4"].blocker,
        col4: json["4"].critical,
        col5: json["4"].major,
        col6: json["4"].minor,
        col7: json["4"].info,
        col8: json["4"].securityHotspot.length,
      },
      {
        col1: "A6 - Security Misconfiguration",
        col2: json["5"].rating,
        col3: json["5"].blocker,
        col4: json["5"].critical,
        col5: json["5"].major,
        col6: json["5"].minor,
        col7: json["5"].info,
        col8: json["5"].securityHotspot.length,
      },
      {
        col1: "A7 - Cross-Site Scripting (XXS)",
        col2: json["6"].rating,
        col3: json["6"].blocker,
        col4: json["6"].critical,
        col5: json["6"].major,
        col6: json["6"].minor,
        col7: json["6"].info,
        col8: json["6"].securityHotspot.length,
      },
      {
        col1: "A8 - Insecure Deserialization",
        col2: json["7"].rating,
        col3: json["7"].blocker,
        col4: json["7"].critical,
        col5: json["7"].major,
        col6: json["7"].minor,
        col7: json["7"].info,
        col8: json["7"].securityHotspot.length,
      },
      {
        col1: "A9 - Using Component with Known Vulnerabilities",
        col2: json["8"].rating,
        col3: json["8"].blocker,
        col4: json["8"].critical,
        col5: json["8"].major,
        col6: json["8"].minor,
        col7: json["8"].info,
        col8: json["8"].securityHotspot.length,
      },
      {
        col1: "A10 - Insufficient Logging & Monitoring",
        col2: json["9"].rating,
        col3: json["9"].blocker,
        col4: json["9"].critical,
        col5: json["9"].major,
        col6: json["9"].minor,
        col7: json["9"].info,
        col8: json["9"].securityHotspot.length,
      },
      {
        col1: "",
        col2: "",
        col3: jsonBlockerSum,
        col4: jsonCriticalSum,
        col5: jsonMajorSum,
        col6: jsonMinorSum,
        col7: jsonInfoSum,
        col8: jsonSecurityHotspotSum,
      },
    ];
    const OWASPtable = html`<e-custom-table
      ?sortable=${false}
      .columns=${Generalcolumns}
      .data=${OWASPdata}
      single-select="true"
      resizable="true"
      value="${this.value}"
    ></e-custom-table>`;
    const basicOWASPLayout = html`
      <eui-layout-v0-card
        card-title="Issue Breakdown by OWASP Category and Severity"
      >
        <div slot="content">${OWASPtable}</div>
      </eui-layout-v0-card>
    `;

    const SANSdata = [
      {
        col1: "Porous Defenses",
        col2: "Detail2",
        col3: "Details 3",
        col4: "Details 4",
        col5: "Details 5",
        col6: "Details 6",
        col7: "Details 7",
        col8: "Details 8",
      },
      {
        col1: "Insecure Interaction Between Components",
        col2: "Details 2",
        col3: "Details 3",
        col4: "Details 4",
        col5: "Details 5",
        col6: "Details 6",
        col7: "Details 7",
        col8: "Details 8",
      },
      {
        col1: "Risky Resource Management",
        col2: "Details 2",
        col3: "Details 3",
        col4: "Details 4",
        col5: "Details 5",
        col6: "Details 6",
        col7: "Details 7",
        col8: "Details 8",
      },
      {
        col1: "",
        col2: "",
        col3: "Details 3",
        col4: "Details 4",
        col5: "Details 5",
        col6: "Details 6",
        col7: "Details 7",
        col8: "Details 8",
      },
    ];
    const SANStable = html`<e-custom-table
      ?sortable=${false}
      .columns=${Generalcolumns}
      .data=${SANSdata}
      single-select="true"
      resizable="true"
      value="${this.value}"
    ></e-custom-table>`;
    // console.log(SANStable);
    const basicSANSLayout = html`
      <eui-layout-v0-card
        card-title="Issue Breakdown by SANS Category and Severity"
      >
        <div slot="content">${SANStable}</div>
      </eui-layout-v0-card>
    `;

    const CWEdata = [
      {
        col1: "No CWE associated",
        col2: "Details 2",
        col3: "Details 3",
        col4: "Details 4",
        col5: "Details 5",
        col6: "Details 6",
        col7: "Details 7",
        col8: "Details 8",
      },
      {
        col1: "CWE-20 - Improper Input Validation",
        col2: "Details 2",
        col3: "Details 3",
        col4: "Details 4",
        col5: "Details 5",
        col6: "Details 6",
        col7: "Details 7",
        col8: "Details 8",
      },
      {
        col1: "CWE-326 -  Inadequate Encryption Strength",
        col2: "Details 2",
        col3: "Details 3",
        col4: "Details 4",
        col5: "Details 5",
        col6: "Details 6",
        col7: "Details 7",
        col8: "Details 8",
      },
      {
        col1: "CWE-327 - Use of a Broken or Risky Cryptographic Algorithm",
        col2: "Details 2",
        col3: "Details 3",
        col4: "Details 4",
        col5: "Details 5",
        col6: "Details 6",
        col7: "Details 7",
        col8: "Details 8",
      },
      {
        col1: "CWE-328 - Reversible One-Way Hash",
        col2: "Details 2",
        col3: "Details 3",
        col4: "Details 4",
        col5: "Details 5",
        col6: "Details 6",
        col7: "Details 7",
        col8: "Details 8",
      },
      {
        col1: "CWE-476 - NULL Pointer Dereference",
        col2: "Details 2",
        col3: "Details 3",
        col4: "Details 4",
        col5: "Details 5",
        col6: "Details 6",
        col7: "Details 7",
        col8: "Details 8",
      },
      {
        col1: "CWE-489 - Leftover Debug Code",
        col2: "Details 2",
        col3: "Details 3",
        col4: "Details 4",
        col5: "Details 5",
        col6: "Details 6",
        col7: "Details 7",
        col8: "Details 8",
      },
      {
        col1: "CWE-546 - Suspicious Comment",
        col2: "Details 2",
        col3: "Details 3",
        col4: "Details 4",
        col5: "Details 5",
        col6: "Details 6",
        col7: "Details 7",
        col8: "Details 8",
      },
      {
        col1: "CWE-570 - Expression is Always False",
        col2: "Details 2",
        col3: "Details 3",
        col4: "Details 4",
        col5: "Details 5",
        col6: "Details 6",
        col7: "Details 7",
        col8: "Details 8",
      },
      {
        col1: "CWE-571 - Expression is Always True",
        col2: "Details 2",
        col3: "Details 3",
        col4: "Details 4",
        col5: "Details 5",
        col6: "Details 6",
        col7: "Details 7",
        col8: "Details 8",
      },
      {
        col1: "",
        col2: "",
        col3: "Details 3",
        col4: "Details 4",
        col5: "Details 5",
        col6: "Details 6",
        col7: "Details 7",
        col8: "Details 8",
      },
    ];
    const CWEtable = html`<e-custom-table
      ?sortable=${false}
      .columns=${Generalcolumns}
      .data=${CWEdata}
      single-select="true"
      resizable="true"
      value="${this.value}"
    ></e-custom-table>`;
    const basicCWELayout = html`
      <eui-layout-v0-card
        card-title="Issue Breakdown by CWE Category and Severity"
      >
        <div slot="content">${CWEtable}</div>
      </eui-layout-v0-card>
    `;

    const tabLayout = html`
      <eui-layout-v0-tabs>
        <eui-layout-v0-tab selected>OWASP</eui-layout-v0-tab>

        <div id="mystyle" slot="content" selected>${basicOWASPLayout}</div>

      </eui-layout-v0-tabs>
    `;

    // function f1() {
    //   if (this.checkproject === false) {
    //     html`<div class="loading">No News</div>`;
    //   } else {
    //     html`<div class="loading">HEY HEY HEY News</div>`;
    //   }
    // };
    // const test = html`<eui-table-v0-settings @eui-table-setting:apply="${(event) => console.log("IT WORKS" , event.detail.value)}" .columns=${Generalcolumns} .data=${OWASPdata} slot="content"></eui-table-v0-settings>`;

    // const test = html`<e-custom-table  .columns=${Generalcolumns} .data=${OWASPdata} single-select=true resizable=true></e-custom-table>`;

    return html`
      <h3>Security Report for : ${this.projectname}</h3>
      ${tabLayout}
    `;
  }
}

// ${console.log("In E GET DATA", this.projectname)}
// ${console.log("In E GET DATA JSON text", this.value)}
// ${console.log("In E GET DATA JSON json", json)}

// ${this.value.key1}  // as JSON
// ${this.value[0][0]}  // as Array

/**
 * Register the component as e-e-get-data.
 * Registration can be done at a later time and with a different name
 */
EGetData.register();
