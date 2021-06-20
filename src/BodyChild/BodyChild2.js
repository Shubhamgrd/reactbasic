import React, { Component } from "react";
import files from "../JSON data/test/";

export default class BodyChild2 extends Component {
  importAll(r) {
    return r.keys().map(r);
  }
  componentWillMount() {
    listOffiles = this.importAll(require.context(files, false, /\.(json)$/));
  }
  render() {
    return (
      <div>
        {[listOffiles].map((data, index) => (
          <h1>{data.docroot}</h1>
        ))}
      </div>
    );
  }
}
