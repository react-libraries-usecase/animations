let Js_SourceCode = '';


console.log(require.resolve("./../src/Basic") );


/**
 * Load local files
 * @type {Promise<Response>}
 */
const Js = fetch('./../src/Basic').then(code => (Js_SourceCode = code));

/**
 * to make it easy wait until load source codes
 * @type {Promise<Response[]>}
 */
const PromiseAll = Promise.all([Js]).then((values) => {
  console.log(values);
  /**
   * We will write every explanation of our codes right here
   */
  return `
# Source code


~~~js
${values[0]}
~~~
`;

});

export default PromiseAll;
