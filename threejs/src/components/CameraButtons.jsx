import state from "../state";

const style = {
  position: "absolute",
  bottom: "30vh",
  zIndex: 1,
  height: "30px",
  width: "30px",
  background: "white",
  borderRadius: "100%",
  fontSize: 20,
  fontWeight: "bold",
  opacity: 0.7,
  border: "1px solid black",
  cursor: "pointer",
};

const CameraButtons = ({}) => {
  const sets = {
    // model_3
    1: {
      position: [9, 2, 4],
      target: [4, 0, 0],
      name: [
        "body_primary_0",
        "boot_primary_0",
        "door_rr_primary_0",
        "door_rf_primary_0",
        "door_lf_primary_0",
        "door_lr_primary_0",
        "bonnet_ok_primary_0",
        "front_bumper_ok_primary_0",
        "rear_bumper_ok_primary_0",
      ],
    },
    // model_p
    2: {
      position: [0, 2, 5],
      target: [-4, 0, 0],
      name: [
        "bodyshell_primary_0",
        "bump_r_primary_0",
        "boot_primary_0",
        "door_pside_r_primary_0",
        "door_pside_f_primary_0",
        "bonnet_primary_0",
        "bump_f_primary_0",
        "door_dside_f_primary_0",
        "door_dside_r_primary_0",
      ],
    },
  };
  const handleClick = (num) => {
    state.cameraPos.set(...sets[num].position);
    state.target.set(...sets[num].target);
    state.activeMeshName = sets[num].name[0]
    state.shouldUpdate = true;
  };

  return (
    <>
      <button
        onClick={(e) => handleClick(2)}
        style={{ ...style, left: "45vw" }}
      >
        {"<"}
      </button>
      <button
        onClick={(e) => handleClick(1)}
        style={{ ...style, right: "45vw" }}
      >
        {">"}
      </button>
    </>
  );
};

export default CameraButtons;
