import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import { Modal, Icon, Upload } from 'antd';

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

export default class Component extends React.Component {
  state = {
    image: {
      file: null,
      fileList: []
    },
    previewImage: '',
    previewVisible: ''
  }

  handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true
    });
  };

  handleCancel = () => this.setState({ previewVisible: false });

  render() {
    const { image: { file, fileList }, previewImage, previewVisible } = this.state;
    return (
      <div style={{ height: 50 }} >
        <Upload
          listType="picture-card"
          beforeUpload={() => false}
          onChange={val => this.setState({ image: val })}
          onPreview={this.handlePreview}
          accept="image/*"
        >
          {fileList.length < 1 && <Icon type="upload" />}
        </Upload>
        <Modal
          title={file ? file.name : ''}
          visible={Boolean(previewVisible)}
          footer={null}
          onCancel={this.handleCancel}
        >
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}

Component.defaultProps = {
  placeholder: ''
};

Component.propTypes = {
  input: PropTypes.object.isRequired,
  placeholder: PropTypes.string
};
