import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import toastr from 'toastr';

const CLOUDINARY_UPLOAD_PRESET = 'ggmysyok';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/db1ihpdcx/upload';

export default class ContactForm extends Component {
    constructor(props) {
        super(props);
    }

    onImageDrop(files) {
        this.setState({
            uploadedFile: files[0]
        });

        this.handleImageUpload(files[0]);
    }

    handleImageUpload(file) {
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
            .field('file', file);

        upload.end((err, response) => {
            if (err) {
                toastr.error(err);
            }

            if (response.body.secure_url !== '') {
                this.props.updateParent(response.body.secure_url);
            }
        });
    }

    render() {
        return (
            <div>
                <div className='FileUpload'>
                    <Dropzone
                        className='dropzone'
                        multiple={false}
                        accept="image/*"
                        onDrop={this.onImageDrop.bind(this)}>
                        <p>Drop an image or click to select a file to upload.</p>
                    </Dropzone>
                </div>
            </div>
        )
    }
}