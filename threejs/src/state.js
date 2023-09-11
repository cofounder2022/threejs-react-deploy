import * as THREE from 'three'

/* white car */
// body_primary_0
//"boot_primary_0"
//"door_rr_primary_0"
//"door_rf_primary_0"
//"door_lf_primary_0"
//"door_lr_primary_0"
//"bonnet_ok_primary_0"
//"front_bumper_ok_primary_0"
//"rear_bumper_ok_primary_0"

/* red car */
//"bodyshell_primary_0"
//"bump_r_primary_0"
//"boot_primary_0"
//"door_pside_r_primary_0"
//"door_pside_f_primary_0"
//"bonnet_primary_0"
//"bump_f_primary_0"
//"door_dside_f_primary_0"
//"door_dside_r_primary_0"

const state = {
  activeMesh: {},
  activeMeshName: 'body_primary_0',
  cameraPos: new THREE.Vector3(9,2,4),
  target: new THREE.Vector3(4,0,0),
  shouldUpdate: true
}

export default state