import React, { useState } from "react";
import { Modal, Dimmer, Loader } from "semantic-ui-react";

const ResumeModal = ({ Button }) => {
  const [loading, setLoading] = useState(true);
  return (
    <Modal size="fullscreen" trigger={Button} closeIcon centered={true}>
      <Modal.Header>Resume</Modal.Header>
      <Modal.Content
        onLoad={() => {
          setLoading(false);
        }}
        as="iframe"
        className="resume-modal-iframe"
        src="https://drive.google.com/file/d/1iUYuisPQVyiCGgcuz1awe31KP16D7bI9/preview"
        width="100%"
        height="95%"
        style={{ display: `${loading ? "none" : ""}` }}
        title="Gustavo Valenzuela Resume"
        allowFullScreen
      ></Modal.Content>

      {loading ? (
        <Dimmer active>
          <Loader size="large">Loading</Loader>
        </Dimmer>
      ) : (
        ""
      )}
    </Modal>
  );
};

export default ResumeModal;
