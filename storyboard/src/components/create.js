import React, {Component} from 'react'
import '../bootstrap.css'



export default class create extends Component {

    alert () {
        alert("Story created")
    }

    render() {
        return (
            <div className="container bg-light p-3">
                <div className="form-group">
                    <label for="title">Title</label>
                    <input type="text" class="form-control" id="title" placeholder="Enter the title of your story..."></input>
                </div>

                <div className="form-group">
                    <label for="desc">Description</label>
                    <textarea type="textarea" rows="5" class="form-control" id="desc" placeholder="Tell us what your story is about..."></textarea>
                </div>

                <div class="input-group mb-4">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Upload</span>
                    </div>
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="fileInput" aria-describedby="fileInput"/>
                        <label className="custom-file-label" for="fileInput">File Label</label>
                    </div>
                </div>

                <div class="custom-control custom-checkbox mb-4">
                    <input type="checkbox" class="custom-control-input" id="checkbox"/>
                    <label class="custom-control-label" for="checkbox">Allow comments</label>
                </div>

                <div class="custom-control custom-checkbox mb-4">
                    <input type="checkbox" class="custom-control-input" id="checkbox1"/>
                    <label class="custom-control-label" for="checkbox1">Visible to Only followers</label>
                </div>

                <div class="custom-control custom-checkbox mb-4">
                    <input type="checkbox" class="custom-control-input" id="checkbox2"/>
                    <label class="custom-control-label" for="checkbox2">Searchable by search engines</label>
                </div>

                <div class="custom-control custom-radio mb-4">
                    <input type="radio" class="custom-control-input" id="radio" name="defaultName" required/>
                    <label class="custom-control-label" for="radio">I agree to the terms of service and privacy policy.</label>
                </div>

                <button type="submit" onClick={this.alert} class="btn btn-primary" id="submit">Submit</button>
                
            </div>
        )
    }


}