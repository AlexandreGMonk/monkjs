export default {
  partTypes: {
    field: 'part_type',
    values: ['ignore', 'background', 'bumper_back', 'bumper_front', 'door_back_left', 'door_back_right', 'door_front_left', 'door_front_right', 'fender_back_left', 'fender_back_right', 'fender_front_left', 'fender_front_right', 'fog_light_back_left', 'fog_light_back_right', 'fog_light_front_left', 'fog_light_front_right', 'grill', 'grill_low', 'grill_radiator', 'handle_back_left', 'handle_back_right', 'handle_front_left', 'handle_front_right', 'head_light_left', 'head_light_right', 'header_panel', 'hood', 'hook', 'hubcap', 'hubcap_back_left', 'hubcap_back_right', 'hubcap_front_left', 'hubcap_front_right', 'indicator_light_left', 'indicator_light_right', 'license_plate_back', 'license_plate_front', 'logo', 'mirror_support', 'mirror_left', 'mirror_right', 'petrol_door', 'pillar', 'quarter_window_back_left', 'quarter_window_back_right', 'quarter_window_front_left', 'quarter_window_front_right', 'rear_spoiler', 'rocker_panel', 'rocker_panel_left', 'rocker_panel_right', 'roof', 'tail_light_center', 'tail_light_left', 'tail_light_right', 'trunk', 'turn_signal_front_lateral_left', 'turn_signal_front_lateral_right', 'wheel_back_left', 'wheel_back_right', 'wheel_front_left', 'wheel_front_right', 'window_back_left', 'window_back_right', 'window_corner_left', 'window_corner_right', 'window_front_left', 'window_front_right', 'windshield_back', 'windshield_front', 'wiper', 'wiper_back', 'wiper_front', 'wheel'],
  },
  damageTypes: {
    field: 'damage_type',
    values: ['body_crack', 'broken_glass', 'broken_light', 'dent', 'dirt', 'hubcap_scratch', 'misshape', 'missing_hubcap', 'missing_piece', 'paint_peeling', 'rustiness', 'scattered_scratches', 'scratch', 'smash', 'light_reflection', 'shadow', 'car_curve'],
  },
  severityTypes: {
    field: 'severity',
    values: ['< 3 cm', '3-8 cm', '8-15 cm', '15-30 cm', '> 30 cm', 'Important', 'Not defined'],
  },
};
