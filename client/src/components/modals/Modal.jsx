const Modal = () => {
  const modalCtx = useContext(ModalContext);

  const boxStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "70vw",
    bgcolor: "background.paper",
    borderRadius: "10px",
    boxShadow: 24,
    p: 3,
    maxHeight: "90vh",
  };

  const currentModal = () => {
    switch (modalCtx.modal) {
      case "createDevotional":
        return (
          <Modal open={modalCtx.open} className="add-goal-lightbox">
            <Box sx={boxStyles}>
              <CreateDevotional />
            </Box>
          </Modal>
        );
      case "confirm-delete-devotional":
        return (
          <Modal open={modalCtx.open} className="add-goal-lightbox">
            <Box sx={boxStyles}>
              <DeleteDevotionalModal modalDetails={modalCtx.details} />
            </Box>
          </Modal>
        );
      default:
        return null;
    }
  };

  return <div>{currentModal()}</div>;
};

export default DetailsModal;
