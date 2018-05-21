import data from '../asset/data.json';//no need of loader for JSON, by default a support is provided

export default function printMe() {
    console.log('I get called from print.js! to print the data',data);

    /** the following piece of code will return this error
     * Uncaught ReferenceError: cosnole is not defined
    at HTMLButtonElement.printMe (print.js:2)
     */
    // cosnole.log('I get called from print.js!');
  }
  