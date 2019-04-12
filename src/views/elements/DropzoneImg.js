import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

const CLOUDINARY_UPLOAD_PRESET = 'mockfinal19'
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dv7rbbhuf/upload'


export default class DropzoneImg extends Component {
    constructor(props) {
        super(props)

        this.state = {
            uploadedFileCloudinaryUrl: '',
            progress: 0,
            alert: false
        };
    }

    onImageDrop(files) {

        this.setState({
            uploadedFile: files[0]
        })
        this.handleImageUpload(files[0])


    }
    handleImageUpload = (file) => {
        if (file.size < 3145728) {
            this.setState({ alert: false })
            let upload = request.post(CLOUDINARY_UPLOAD_URL)
                .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                .field('file', file).on('progress',
                    (data) => {
                        const progress = Math.round(((data.loaded * 100.0) / data.total))
                        this.setState({ progress })

                    }

                );


            upload.end((err, response) => {
                if (err) {
                    console.error(err);
                }
                if (response.body.secure_url !== '') {
                    this.setState({
                        uploadedFileCloudinaryUrl: response.body.secure_url
                    })
                    this.props.onHandleAvatar(response.body.secure_url)
                }
            })

        } else {
            this.setState({ alert: true })
        }

    }
    render() {

        return (
            <div>
                <div className="FileUpload" style={{
                    height: '4em',
                    background: '#ccc', textAlign: 'center'
                }}>
                    <Dropzone
                        multiple={false}
                        accept="image/*"
                        onDrop={this.onImageDrop.bind(this)}>
                        {({ getRootProps, getInputProps }) => {
                            return (
                                <div {...getRootProps()} >

                                    <input {...getInputProps()} />
                                    {
                                        <p > Kéo ảnh hoặc click để chọn ảnh </p>
                                    }
                                </div>
                            )
                        }}

                    </Dropzone>
                </div>
                <div>
                    {this.state.alert ? <span>Ảnh không được trên 3MB </span> : null}
                    {this.state.uploadedFileCloudinaryUrl === '' ?
                        ( this.props.id ? <span><img src={this.props.txtAvatar} 
                         style={{ width: '30em', height: '30em', borderRadius: '50%' }} /></span> : null )
                        :
                        <div>
                            <p>{this.state.uploadedFile.name}</p>
                            <img style={{ height: '50%', width: '50%' }} src={this.state.uploadedFileCloudinaryUrl} />


                        </div>


                    }
                    <Progress percent={this.state.progress} />
                </div>
            </div>
        )
    }
}
