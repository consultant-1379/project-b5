// /**
//  * Component PrintProblems is defined as
//  * `<e-print-problems>`
//  *
//  * Imperatively create component
//  * @example
//  * let component = new PrintProblems();
//  *
//  * Declaratively create component
//  * @example
//  * <e-print-problems></e-print-problems>
//  *
//  * @extends {LitComponent}
//  */
// import { definition } from "@eui/component";
// import { LitComponent, html } from "@eui/lit-component";
// import style from "./printProblems.css";

// /**
//  * @property {Boolean} propOne - show active/inactive state.
//  * @property {String} propTwo - shows the "Hello World" string.
//  */
// @definition("e-print-problems", {
//   style,
//   home: "print-problems",
//   props: {
//     value: { attribute: true, type: "string" },
//   },
// })
// export default class PrintProblems extends LitComponent {
//   /**
//    * Render the <e-print-problems> component. This function is called each time a
//    * prop changes.
//    */

//   senddata() {
//     console.log("HELLO");
//   }

//   render() {
//     const json = JSON.parse(this.value);

//     var a_blocker = [];
//     var a_critical = [];
//     var a_major = [];
//     var a_minor = [];
//     var a_info = [];

//     for (var i = 0; i < 10; i++) {
//       console.log(json[i].vulnerabilities);
//       for (var j = 0; j < json[i].vulnerabilities.length; j++) {
//         var temp = json[i].vulnerabilities[j];
//         if (temp.severity == "BLOCKER") {
//           a_blocker.push(temp.textRange.startLine);
//         }
//         if (temp.severity == "CRITICAL") {
//           a_critical.push(temp.textRange.startLine);
//         }
//         if (temp.severity == "MAJOR") {
//           a_major.push(temp.textRange.startLine);
//         }
//         if (temp.severity == "MINOR") {
//           a_minor.push(temp.textRange.startLine);
//         }
//         if (temp.severity == "INFO") {
//           a_info.push(temp.textRange.startLine);
//         }
//       }
//       console.log("Blocker : ", a_blocker);
//       console.log("Critical : ", a_critical);
//       console.log("Major : ", a_major);
//       console.log("Minor : ", a_minor);
//       console.log("Info : ", a_info);
//     }

//     return html`
//     `;
//   }
// }

// /**
//  * Register the component as e-print-problems.
//  * Registration can be done at a later time and with a different name
//  */
// PrintProblems.register();
