import React from "react";
// import '../modal.css'
import '../bootstrap.css'

export default class Modal extends React.Component {

    onClose = e => {
        this.props.onClose && this.props.onClose(e);
      };

  render() {
    if (!this.props.show) {
        return null;
      }
    return (
        <div>
            <h2>Modal Window</h2>
            <div>
                {this.props.children}
            </div>
        </div>
    )
    }
}