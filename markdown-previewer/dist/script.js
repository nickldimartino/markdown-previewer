import React from 'https://esm.sh/react@18.2.0';
import ReactDOM from 'https://esm.sh/react-dom@18.2.0';

// App is a stateful component because it will be changing as the user enters text into the
// textarea element
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // default text for the text area the user will enter terxt into
      markdown: `# Heading
## Heading 2
[freeCodeCamp](https://www.freecodecamp.org/)
- Markdown Previewer
- This is **bold** text, an _emphasis_ , a _**combined emphasis**_ , and a ~~strikethrough~~
- Inline \`code\`
> Blockquote
\`\`\`
// code block
function func() {
  return x;
}
\`\`\`
![Space](https://tse3.mm.bing.net/th/id/OIP.JvJlzAtZEMQAIKPuJ_RjgAHaFj?w=238&h=180&c=7&r=0&o=5&pid=1.7)
`,
      textAreaHeight: 20 // variable used to set the height of the textarea
    };
    // bind the handleOnChange() method to this component
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  // sets the markdown textarea to whatever is entered by the user
  handleOnChange(event) {
    this.setState({
      markdown: event.target.value });

  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "container" }, /*#__PURE__*/
      React.createElement("div", { id: "editor-box" }, /*#__PURE__*/
      React.createElement("h2", { id: "editor-heading" }, "Editor"), /*#__PURE__*/
      React.createElement("textarea", {
        id: "editor",
        value: this.state.markdown // the text in the textarea is set to the state's markdwon attribute
        , onChange: this.handleOnChange // event listener that calls a method when modified by user
        , rows: Math.round(this.state.textAreaHeight) // textarea does not have height, rows is used instead
      })), /*#__PURE__*/


      React.createElement("div", { id: "preview-box" }, /*#__PURE__*/
      React.createElement("h2", { id: "preview-heading" }, "Previewer"), /*#__PURE__*/
      React.createElement("div", {
        id: "preview"
        // dangerouslySet.. is similar to innerHTML but it is used on element directly compared to using a selector
        // to grab the HTML element. It is also better for dynamically changing elements such as textarea
        , dangerouslySetInnerHTML: {
          __html: marked(this.state.markdown) // marked is used for markdown compilation
        } }))));





  }}


// Render the React component APP to the HTML element with the id of app
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));