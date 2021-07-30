import React, { useState } from 'react';
import { Modal, Dimmer, Loader } from 'semantic-ui-react';

const ResumeModal = ({ Button }) => {
  const [loading, setLoading] = useState(true);
  return (
    <Modal style={{ height: '95%' }} trigger={Button} closeIcon centered>
      <Modal.Header>Resume</Modal.Header>
      <Modal.Content
        onLoad={() => {
          setLoading(false);
        }}
        as="iframe"
        className="resume-modal-iframe"
        src="https://drive.google.com/file/d/1iUYuisPQVyiCGgcuz1awe31KP16D7bI9/preview"
        width="100%"
        height="90%"
        style={{
          display: `${loading ? 'none' : ''}`,
        }}
        title="Gustavo Valenzuela Resume"
        // allowFullScreen
      />

      {loading ? (
        <Dimmer active>
          <Loader size="large">Fetching latest resume...</Loader>
        </Dimmer>
      ) : (
        ''
      )}
    </Modal>
  );
};

export default ResumeModal;
