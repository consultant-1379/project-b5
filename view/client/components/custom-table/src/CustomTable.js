/**
 * Component CustomTable is defined as
 * `<e-custom-table>`
 *
 * Imperatively create component
 * @example
 * let component = new CustomTable();
 *
 * Declaratively create component
 * @example
 * <e-custom-table></e-custom-table>
 *
 * @extends {Table}
 */
import { Table } from "@eui/table";
import { definition } from "@eui/component";
import { html } from "@eui/lit-component";
import style from "./customTable.css";
import "../../../components/project-menu/src/ProjectMenu";

@definition("e-custom-table", {
  style,
  props: {
    value: { attribute: true, type: "string" },
    // projectname: {attribute: true, type: 'string'}
  },
})
export default class CustomTable extends Table {
  /**
   * Override cell from base class. Called each time a cell should be rendered.
   * This .
   *
   * @function cell
   * @param {Object} row - Row data.
   * @param {Object} column - Column definition.
   * @param {Number} rowIndex - The row index of the cell.
   * @param {Object} colIndex - The column index of the cell.
   * @returns contents of cell.
   */

  // json = JSON.parse(this.value);

  print(rowID) {
    const json = JSON.parse(this.value);
    var v = json[rowID].vulnerabilities;
    var a = [];
    var max = 0;
    for (var j = 0; j < v.length; j++) {
      var file = v[j].component.split("/");

      var temp = (j+1) + ". In File: " + file[file.length - 1] + " at line " + v[j].textRange.startLine + " -> " + v[j].message;
      a.push(temp);
    }
    alert("ISSUES : \n" + a.join("\r\n\n"));
  }

  print_hotspot(rowID) {
    const json = JSON.parse(this.value);
    var v = json[rowID].securityHotspot;
    var a = [];
    for (var j = 0; j < v.length; j++) {
      var file = v[j].component.split("/");
      var temp = (j+1) + ". In File: " + file[file.length - 1] + " at line " + v[j].textRange.startLine + " -> " + v[j].message;
      a.push(temp);
    }
    // console.log("ANS : ", a);
    alert("ISSUES : \n" + a.join("\r\n\n"));
  }

  cell(row, column, rowIndex, colIndex) {
    // console.log("This is row : ", row);
    // console.log("This is row : ", column);

    const url = "http://localhost:8081/value-2";
    const json = JSON.parse(this.value);
    // console.log("INSIDE CUSTOM : ", json);

    function getSpanID(value) {
      if (value == "A") {
        return "a-circle";
      }
      if (value == "B") {
        return "b-circle";
      }
      if (value == "C") {
        return "c-circle";
      }
      if (value == "D") {
        return "d-circle";
      }
      if (value == "E") {
        return "e-circle";
      }
      return "";
    }

    // =================================================================
    // =======================  COL 1 ==================================
    // =================================================================

    if (rowIndex == 0 && colIndex == 1) {
      var sid = getSpanID(row[column.attribute]);
      return html` <span class=${sid}>${row[column.attribute]}</span> `;
    }
    if (rowIndex == 1 && colIndex == 1) {
      var sid = getSpanID(row[column.attribute]);
      return html` <span class=${sid}>${row[column.attribute]}</span> `;
    }
    if (rowIndex == 2 && colIndex == 1) {
      var sid = getSpanID(row[column.attribute]);
      return html` <span class=${sid}>${row[column.attribute]}</span> `;
    }

    if (rowIndex == 3 && colIndex == 1) {
      var sid = getSpanID(row[column.attribute]);
      return html` <span class=${sid}>${row[column.attribute]}</span> `;
    }

    if (rowIndex == 4 && colIndex == 1) {
      var sid = getSpanID(row[column.attribute]);
      return html` <span class=${sid}>${row[column.attribute]}</span> `;
    }

    if (rowIndex == 5 && colIndex == 1) {
      var sid = getSpanID(row[column.attribute]);
      return html` <span class=${sid}>${row[column.attribute]}</span> `;
    }

    if (rowIndex == 6 && colIndex == 1) {
      var sid = getSpanID(row[column.attribute]);
      return html` <span class=${sid}>${row[column.attribute]}</span> `;
    }

    if (rowIndex == 7 && colIndex == 1) {
      var sid = getSpanID(row[column.attribute]);
      return html` <span class=${sid}>${row[column.attribute]}</span> `;
    }

    if (rowIndex == 8 && colIndex == 1) {
      var sid = getSpanID(row[column.attribute]);
      return html` <span class=${sid}>${row[column.attribute]}</span> `;
    }
    if (rowIndex == 9 && colIndex == 1) {
      var sid = getSpanID(row[column.attribute]);
      return html` <span class=${sid}>${row[column.attribute]}</span> `;
    }

    // =================================================================
    // =======================  ROW 0 ==================================
    // =================================================================
    if (rowIndex == 0 && colIndex == 2 && row[column.attribute] > 0) {
      return html`
        <eui-base-v0-button
          fullwidth
          @click="${() => {
            this.print(rowIndex);
          }}"
        >
          ${row[column.attribute]}
        </eui-base-v0-button>
      `;
    }
    if (rowIndex == 0 && colIndex == 3 && row[column.attribute] > 0) {
      return html`
        <eui-base-v0-button
          fullwidth
          @click="${() => {
            this.print(rowIndex);
          }}"
        >
          ${row[column.attribute]}
        </eui-base-v0-button>
      `;
    }
    if (rowIndex == 0 && colIndex == 4 && row[column.attribute] > 0) {
      return html`
        <eui-base-v0-button
          fullwidth
          @click="${() => {
            this.print(rowIndex);
          }}"
        >
          ${row[column.attribute]}
        </eui-base-v0-button>
      `;
    }
    if (rowIndex == 0 && colIndex == 5 && row[column.attribute] > 0) {
      return html`
        <eui-base-v0-button
          fullwidth
          @click="${() => {
            this.print(rowIndex);
          }}"
        >
          ${row[column.attribute]}
        </eui-base-v0-button>
      `;
    }
    if (rowIndex == 0 && colIndex == 6 && row[column.attribute] > 0) {
      return html`
        <eui-base-v0-button
          fullwidth
          @click="${() => {
            this.print(rowIndex);
          }}"
        >
          ${row[column.attribute]}
        </eui-base-v0-button>
      `;
    }
    if (rowIndex == 0 && colIndex == 7 && row[column.attribute] > 0) {
      return html`
        <eui-base-v0-button
          fullwidth
          @click="${() => {
            this.print_hotspot(rowIndex);
          }}"
        >
          ${row[column.attribute]}
        </eui-base-v0-button>
      `;
    }

    // =================================================================
    // =======================  ROW 1 ==================================
    // =================================================================
    if (rowIndex == 1 && colIndex == 2 && row[column.attribute] > 0) {
      return html`
        <eui-base-v0-button
          fullwidth
          @click="${() => {
            this.print(rowIndex);
          }}"
        >
          ${row[column.attribute]}
        </eui-base-v0-button>
      `;
    }
    if (rowIndex == 1 && colIndex == 3 && row[column.attribute] > 0) {
      return html`
        <eui-base-v0-button
          fullwidth
          @click="${() => {
            this.print(rowIndex);
          }}"
        >
          ${row[column.attribute]}
        </eui-base-v0-button>
      `;
    }
    if (rowIndex == 1 && colIndex == 4 && row[column.attribute] > 0) {
      return html`
        <eui-base-v0-button
          fullwidth
          @click="${() => {
            this.print(rowIndex);
          }}"
        >
          ${row[column.attribute]}
        </eui-base-v0-button>
      `;
    }
    if (rowIndex == 1 && colIndex == 5 && row[column.attribute] > 0) {
      return html`
        <eui-base-v0-button
          fullwidth
          @click="${() => {
            this.print(rowIndex);
          }}"
        >
          ${row[column.attribute]}
        </eui-base-v0-button>
      `;
    }
    if (rowIndex == 1 && colIndex == 6 && row[column.attribute] > 0) {
      return html`
        <eui-base-v0-button
          fullwidth
          @click="${() => {
            this.print(rowIndex);
          }}"
        >
          ${row[column.attribute]}
        </eui-base-v0-button>
      `;
    }
    if (rowIndex == 1 && colIndex == 7 && row[column.attribute] > 0) {
      return html`
        <eui-base-v0-button
          fullwidth
          @click="${() => {
            this.print_hotspot(rowIndex);
          }}"
        >
          ${row[column.attribute]}
        </eui-base-v0-button>
      `;
    }

    // =================================================================
    // =======================  ROW 2 ==================================
    // =================================================================
    if (rowIndex == 2 && colIndex == 2 && row[column.attribute] > 0) {
      return html`
        <eui-base-v0-button
          fullwidth
          @click="${() => {
            this.print(rowIndex);
          }}"
        >
          ${row[column.attribute]}
        </eui-base-v0-button>
      `;
    }
    if (rowIndex == 2 && colIndex == 3 && row[column.attribute] > 0) {
      return html`
        <eui-base-v0-button
          fullwidth
          @click="${() => {
            this.print(rowIndex);
          }}"
        >
          ${row[column.attribute]}
        </eui-base-v0-button>
      `;
    }
    if (rowIndex == 2 && colIndex == 4 && row[column.attribute] > 0) {
      return html`
        <eui-base-v0-button
          fullwidth
          @click="${() => {
            this.print(rowIndex);
          }}"
        >
          ${row[column.attribute]}
        </eui-base-v0-button>
      `;
    }
    if (rowIndex == 2 && colIndex == 5 && row[column.attribute] > 0) {
      return html`
        <eui-base-v0-button
          fullwidth
          @click="${() => {
            this.print(rowIndex);
          }}"
        >
          ${row[column.attribute]}
        </eui-base-v0-button>
      `;
    }
    if (rowIndex == 2 && colIndex == 6 && row[column.attribute] > 0) {
      return html`
        <eui-base-v0-button
          fullwidth
          @click="${() => {
            this.print(rowIndex);
          }}"
        >
          ${row[column.attribute]}
        </eui-base-v0-button>
      `;
    }
    if (rowIndex == 2 && colIndex == 7 && row[column.attribute] > 0) {
      return html`
        <eui-base-v0-button
          fullwidth
          @click="${() => {
            this.print_hotspot(rowIndex);
          }}"
        >
          ${row[column.attribute]}
        </eui-base-v0-button>
      `;
    }

    // =================================================================
    // =======================  ROW 3 ==================================
    // =================================================================
    if (rowIndex == 3 && colIndex == 2 && row[column.attribute] > 0) {
      return html`
        <eui-base-v0-button
          fullwidth
          @click="${() => {
            this.print(rowIndex);
          }}"
        >
          ${row[column.attribute]}
        </eui-base-v0-button>
      `;
    }
    if (rowIndex == 3 && colIndex == 3 && row[column.attribute] > 0) {
      return html`
        <eui-base-v0-button
          fullwidth
          @click="${() => {
            this.print(rowIndex);
          }}"
        >
          ${row[column.attribute]}
        </eui-base-v0-button>
      `;
    }
    if (rowIndex == 3 && colIndex == 4 && row[column.attribute] > 0) {
      return html`
        <eui-base-v0-button
          fullwidth
          @click="${() => {
            this.print(rowIndex);
          }}"
        >
          ${row[column.attribute]}
        </eui-base-v0-button>
      `;
    }
    if (rowIndex == 3 && colIndex == 5 && row[column.attribute] > 0) {
      return html`
        <eui-base-v0-button
          fullwidth
          @click="${() => {
            this.print(rowIndex);
          }}"
        >
          ${row[column.attribute]}
        </eui-base-v0-button>
      `;
    }
    if (rowIndex == 3 && colIndex == 6 && row[column.attribute] > 0) {
      return html`
        <eui-base-v0-button
          fullwidth
          @click="${() => {
            this.print(rowIndex);
          }}"
        >
          ${row[column.attribute]}
        </eui-base-v0-button>
      `;
    }
    if (rowIndex == 3 && colIndex == 7 && row[column.attribute] > 0) {
      return html`
        <eui-base-v0-button
          fullwidth
          @click="${() => {
            this.print_hotspot(rowIndex);
          }}"
        >
          ${row[column.attribute]}
        </eui-base-v0-button>
      `;
    }

    // =================================================================
    // =======================  ROW 4 ==================================
    // =================================================================
    if (rowIndex == 4 && colIndex == 2 && row[column.attribute] > 0) {
      return html`
        <eui-base-v0-button
          fullwidth
          @click="${() => {
            this.print(rowIndex);
          }}"
        >
          ${row[column.attribute]}
        </eui-base-v0-button>
      `;
    }
    if (rowIndex == 4 && colIndex == 3 && row[column.attribute] > 0) {
      return html`
        <eui-base-v0-button
          fullwidth
          @click="${() => {
            this.print(rowIndex);
          }}"
        >
          ${row[column.attribute]}
        </eui-base-v0-button>
      `;
    }
    if (rowIndex == 4 && colIndex == 4 && row[column.attribute] > 0) {
      return html`
        <eui-base-v0-button
          fullwidth
          @click="${() => {
            this.print(rowIndex);
          }}"
        >
          ${row[column.attribute]}
        </eui-base-v0-button>
      `;
    }
    if (rowIndex == 4 && colIndex == 5 && row[column.attribute] > 0) {
      return html`
        <eui-base-v0-button
          fullwidth
          @click="${() => {
            this.print(rowIndex);
          }}"
        >
          ${row[column.attribute]}
        </eui-base-v0-button>
      `;
    }
    if (rowIndex == 4 && colIndex == 6 && row[column.attribute] > 0) {
      return html`
        <eui-base-v0-button
          fullwidth
          @click="${() => {
            this.print(rowIndex);
          }}"
        >
          ${row[column.attribute]}
        </eui-base-v0-button>
      `;
    }
    if (rowIndex == 4 && colIndex == 7 && row[column.attribute] > 0) {
      return html`
        <eui-base-v0-button
          fullwidth
          @click="${() => {
            this.print_hotspot(rowIndex);
          }}"
        >
          ${row[column.attribute]}
        </eui-base-v0-button>
      `;
    }

    // =================================================================
    // =======================  ROW 5 ==================================
    // =================================================================
    if (rowIndex == 5 && colIndex == 2 && row[column.attribute] > 0) {
      return html`
        <eui-base-v0-button
          fullwidth
          @click="${() => {
            this.print(rowIndex);
          }}"
        >
          ${row[column.attribute]}
        </eui-base-v0-button>
      `;
    }
    if (rowIndex == 5 && colIndex == 3 && row[column.attribute] > 0) {
      return html`
        <eui-base-v0-button
          fullwidth
          @click="${() => {
            this.print(rowIndex);
          }}"
        >
          ${row[column.attribute]}
        </eui-base-v0-button>
      `;
    }
    if (rowIndex == 5 && colIndex == 4 && row[column.attribute] > 0) {
      return html`
        <eui-base-v0-button
          fullwidth
          @click="${() => {
            this.print(rowIndex);
          }}"
        >
          ${row[column.attribute]}
        </eui-base-v0-button>
      `;
    }
    if (rowIndex == 5 && colIndex == 5 && row[column.attribute] > 0) {
      return html`
        <eui-base-v0-button
          fullwidth
          @click="${() => {
            this.print(rowIndex);
          }}"
        >
          ${row[column.attribute]}
        </eui-base-v0-button>
      `;
    }
    if (rowIndex == 5 && colIndex == 6 && row[column.attribute] > 0) {
      return html`
        <eui-base-v0-button
          fullwidth
          @click="${() => {
            this.print(rowIndex);
          }}"
        >
          ${row[column.attribute]}
        </eui-base-v0-button>
      `;
    }
    if (rowIndex == 5 && colIndex == 7 && row[column.attribute] > 0) {
      return html`
        <eui-base-v0-button
          fullwidth
          @click="${() => {
            this.print_hotspot(rowIndex);
          }}"
        >
          ${row[column.attribute]}
        </eui-base-v0-button>
      `;
    }

    // =================================================================
    // =======================  ROW 6 ==================================
    // =================================================================
    if (rowIndex == 6 && colIndex == 2 && row[column.attribute] > 0) {
      return html`
        <eui-base-v0-button
          fullwidth
          @click="${() => {
            this.print(rowIndex);
          }}"
        >
          ${row[column.attribute]}
        </eui-base-v0-button>
      `;
    }
    if (rowIndex == 6 && colIndex == 3 && row[column.attribute] > 0) {
      return html`
        <eui-base-v0-button
          fullwidth
          @click="${() => {
            this.print(rowIndex);
          }}"
        >
          ${row[column.attribute]}
        </eui-base-v0-button>
      `;
    }
    if (rowIndex == 6 && colIndex == 4 && row[column.attribute] > 0) {
      return html`
        <eui-base-v0-button
          fullwidth
          @click="${() => {
            this.print(rowIndex);
          }}"
        >
          ${row[column.attribute]}
        </eui-base-v0-button>
      `;
    }
    if (rowIndex == 6 && colIndex == 5 && row[column.attribute] > 0) {
      return html`
        <eui-base-v0-button
          fullwidth
          @click="${() => {
            this.print(rowIndex);
          }}"
        >
          ${row[column.attribute]}
        </eui-base-v0-button>
      `;
    }
    if (rowIndex == 6 && colIndex == 6 && row[column.attribute] > 0) {
      return html`
        <eui-base-v0-button
          fullwidth
          @click="${() => {
            this.print(rowIndex);
          }}"
        >
          ${row[column.attribute]}
        </eui-base-v0-button>
      `;
    }
    if (rowIndex == 6 && colIndex == 7 && row[column.attribute] > 0) {
      return html`
        <eui-base-v0-button
          fullwidth
          @click="${() => {
            this.print_hotspot(rowIndex);
          }}"
        >
          ${row[column.attribute]}
        </eui-base-v0-button>
      `;
    }

    // =================================================================
    // =======================  ROW 7 ==================================
    // =================================================================
    if (rowIndex == 7 && colIndex == 2 && row[column.attribute] > 0) {
      return html`
        <eui-base-v0-button
          fullwidth
          @click="${() => {
            this.print(rowIndex);
          }}"
        >
          ${row[column.attribute]}
        </eui-base-v0-button>
      `;
    }
    if (rowIndex == 7 && colIndex == 3 && row[column.attribute] > 0) {
      return html`
        <eui-base-v0-button
          fullwidth
          @click="${() => {
            this.print(rowIndex);
          }}"
        >
          ${row[column.attribute]}
        </eui-base-v0-button>
      `;
    }
    if (rowIndex == 7 && colIndex == 4 && row[column.attribute] > 0) {
      return html`
        <eui-base-v0-button
          fullwidth
          @click="${() => {
            this.print(rowIndex);
          }}"
        >
          ${row[column.attribute]}
        </eui-base-v0-button>
      `;
    }
    if (rowIndex == 7 && colIndex == 5 && row[column.attribute] > 0) {
      return html`
        <eui-base-v0-button
          fullwidth
          @click="${() => {
            this.print(rowIndex);
          }}"
        >
          ${row[column.attribute]}
        </eui-base-v0-button>
      `;
    }
    if (rowIndex == 7 && colIndex == 6 && row[column.attribute] > 0) {
      return html`
        <eui-base-v0-button
          fullwidth
          @click="${() => {
            this.print(rowIndex);
          }}"
        >
          ${row[column.attribute]}
        </eui-base-v0-button>
      `;
    }
    if (rowIndex == 7 && colIndex == 7 && row[column.attribute] > 0) {
      return html`
        <eui-base-v0-button
          fullwidth
          @click="${() => {
            this.print_hotspot(rowIndex);
          }}"
        >
          ${row[column.attribute]}
        </eui-base-v0-button>
      `;
    }

    // =================================================================
    // =======================  ROW 8 ==================================
    // =================================================================
    if (rowIndex == 8 && colIndex == 2 && row[column.attribute] > 0) {
      return html`
        <eui-base-v0-button
          fullwidth
          @click="${() => {
            this.print(rowIndex);
          }}"
        >
          ${row[column.attribute]}
        </eui-base-v0-button>
      `;
    }
    if (rowIndex == 8 && colIndex == 3 && row[column.attribute] > 0) {
      return html`
        <eui-base-v0-button
          fullwidth
          @click="${() => {
            this.print(rowIndex);
          }}"
        >
          ${row[column.attribute]}
        </eui-base-v0-button>
      `;
    }
    if (rowIndex == 8 && colIndex == 4 && row[column.attribute] > 0) {
      return html`
        <eui-base-v0-button
          fullwidth
          @click="${() => {
            this.print(rowIndex);
          }}"
        >
          ${row[column.attribute]}
        </eui-base-v0-button>
      `;
    }
    if (rowIndex == 8 && colIndex == 5 && row[column.attribute] > 0) {
      return html`
        <eui-base-v0-button
          fullwidth
          @click="${() => {
            this.print(rowIndex);
          }}"
        >
          ${row[column.attribute]}
        </eui-base-v0-button>
      `;
    }
    if (rowIndex == 8 && colIndex == 6 && row[column.attribute] > 0) {
      return html`
        <eui-base-v0-button
          fullwidth
          @click="${() => {
            this.print(rowIndex);
          }}"
        >
          ${row[column.attribute]}
        </eui-base-v0-button>
      `;
    }
    if (rowIndex == 8 && colIndex == 7 && row[column.attribute] > 0) {
      return html`
        <eui-base-v0-button
          fullwidth
          @click="${() => {
            this.print_hotspot(rowIndex);
          }}"
        >
          ${row[column.attribute]}
        </eui-base-v0-button>
      `;
    }

    // =================================================================
    // =======================  ROW 9 ==================================
    // =================================================================
    if (rowIndex == 9 && colIndex == 2 && row[column.attribute] > 0) {
      return html`
        <eui-base-v0-button
          fullwidth
          @click="${() => {
            this.print(rowIndex);
          }}"
        >
          ${row[column.attribute]}
        </eui-base-v0-button>
      `;
    }
    if (rowIndex == 9 && colIndex == 3 && row[column.attribute] > 0) {
      return html`
        <eui-base-v0-button
          fullwidth
          @click="${() => {
            this.print(rowIndex);
          }}"
        >
          ${row[column.attribute]}
        </eui-base-v0-button>
      `;
    }
    if (rowIndex == 9 && colIndex == 4 && row[column.attribute] > 0) {
      return html`
        <eui-base-v0-button
          fullwidth
          @click="${() => {
            this.print(rowIndex);
          }}"
        >
          ${row[column.attribute]}
        </eui-base-v0-button>
      `;
    }
    if (rowIndex == 9 && colIndex == 5 && row[column.attribute] > 0) {
      return html`
        <eui-base-v0-button
          fullwidth
          @click="${() => {
            this.print(rowIndex);
          }}"
        >
          ${row[column.attribute]}
        </eui-base-v0-button>
      `;
    }
    if (rowIndex == 9 && colIndex == 6 && row[column.attribute] > 0) {
      return html`
        <eui-base-v0-button
          fullwidth
          @click="${() => {
            this.print(rowIndex);
          }}"
        >
          ${row[column.attribute]}
        </eui-base-v0-button>
      `;
    }
    if (rowIndex == 9 && colIndex == 7 && row[column.attribute] > 0) {
      return html`
        <eui-base-v0-button
          fullwidth
          @click="${() => {
            this.print_hotspot(rowIndex);
          }}"
        >
          ${row[column.attribute]}
        </eui-base-v0-button>
      `;
    }

    // =================================================================
    // =======================  ROW 10 ==================================
    // =================================================================
    if (rowIndex == 10 && colIndex == 2 && row[column.attribute] > 0) {
      return html`
        <span class="custom-table__cell_red">${row[column.attribute]}</span>
      `;
    }
    if (rowIndex == 10 && colIndex == 3 && row[column.attribute] > 0) {
      return html`<span class="custom-table__cell_red"
        >${row[column.attribute]}</span
      > `;
    }
    if (rowIndex == 10 && colIndex == 4 && row[column.attribute] > 0) {
      return html`
        <span class="custom-table__cell_red">${row[column.attribute]}</span>
      `;
    }
    if (rowIndex == 10 && colIndex == 5 && row[column.attribute] > 0) {
      return html`
        <span class="custom-table__cell_red">${row[column.attribute]}</span>
      `;
    }
    if (rowIndex == 10 && colIndex == 6 && row[column.attribute] > 0) {
      return html`
        <span class="custom-table__cell_red">${row[column.attribute]}</span>
      `;
    }
    if (rowIndex == 10 && colIndex == 7 && row[column.attribute] > 0) {
      return html`
        <span class="custom-table__cell_red">${row[column.attribute]}</span>
      `;
    }

    // if (row[column.attribute] > 0 && row[column.attribute] <= 1) {
    //   return html`
    //     <span class="custom-table__cell_green">${row[column.attribute]}</span>
    //   `;
    // }
    // if (row[column.attribute] > 1 && row[column.attribute] <= 2) {
    //   return html`
    //     <span class="custom-table__cell_orange">${row[column.attribute]}</span>
    //   `;
    // }
    // if (row[column.attribute] > 2) {
    //   return html`
    //     <span class="custom-table__cell_red">${row[column.attribute]}</span>
    //   `;
    // }
    return super.cell(row, column);
  }
}

/**
 * Register the component as e-custom-table.
 * Registration can be done at a later time and with a different name
 */
CustomTable.register();
