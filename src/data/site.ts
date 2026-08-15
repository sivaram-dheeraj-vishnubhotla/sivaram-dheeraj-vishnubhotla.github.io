export const site = {
  name: 'Sivaram Dheeraj Vishnubhotla',
  shortName: 'Sivaram V',
  role: 'Robotics & Simulation Engineer',
  location: 'Harrisburg, Pennsylvania',
  intro: 'AI and robotics engineer building intelligent systems across robotic simulation, XR, computer vision, backend systems, and data-driven applications.',
  aboutShort: 'I work across robotics simulation, XR interaction, computer vision, backend systems, and hardware-software integration, with a focus on turning complex experiments into usable systems.',
  aboutLong: 'My experience spans NVIDIA Isaac Sim and Omniverse, ROS 2, UR5 control, digital twins, VR teleoperation, vision-guided manipulation, open-vocabulary perception, FastAPI services, PostgreSQL, AWS automation, and structured data pipelines.',
  focus: 'Robotics simulation, digital twins, XR teleoperation, and computer vision',
  currentWork: 'Robotics Technician at Harrisburg University',
  education: 'M.Eng. Robotics, University of Maryland, College Park',
  links: {
    github: 'https://github.com/sivaram-dheeraj-vishnubhotla',
    linkedin: 'https://www.linkedin.com/in/sivaram-dheeraj-vishnubhotla/',
    scholar: 'https://scholar.google.com/citations?hl=en&pli=1&user=QpSemXMAAAAJ',
    resume: 'https://drive.google.com/file/d/1s6vBA5IH9WiDXPfba_ijRlkBBS2-RVmD/view?usp=sharing',
    email: 'mailto:vishnubhotlad@gmail.com'
  },
  contactEmail: 'vishnubhotlad@gmail.com'
} as const;

export const workHistory = [
  {
    role: 'Robotics Technician',
    organization: 'Harrisburg University of Science and Technology, Harrisburg, PA',
    period: 'June 2025 - Present',
    description: 'Develop NVIDIA Isaac Sim, Omniverse, and ROS 2 workflows for UR5 simulation, digital twins, Smart Factory automation, and sim-to-real integration. Build VR-based UR5 teleoperation, XR digital twins, and vision-guided manipulation for autonomous pancake preparation.'
  },
  {
    role: 'AI & ML Intern',
    organization: 'Alpha Clinical Systems, Piscataway, NJ (Remote)',
    period: 'Feb. 2026 - May 2026',
    description: 'Built MAYA, a FastAPI and Google ADK B2B health assistant with PostgreSQL session persistence, event-sourced APIs, structured JSON meal-plan generation, automated Swagger and script-runner tests, and LLM-as-a-judge evaluation.'
  },
  {
    role: 'AI & CV Intern',
    organization: 'HealthHustler.ai (Live150.ai)',
    period: 'Nov. 2025 - Feb. 2026',
    description: 'Built an open-vocabulary computer vision pipeline using GroundingDINO and SAM2.1 for food-ingredient segmentation, improving detection accuracy from approximately 60% to 95% and reducing inference latency by 47%.'
  },
  {
    role: 'Programmer Intern',
    organization: 'Volpe Information Technology Group, Ellicott City, MD',
    period: 'Sept. 2025 - Dec. 2025',
    description: 'Developed Python data ingestion and analysis pipelines using AWS Cost Explorer APIs, S3, Lambda, and SNS, reducing manual monitoring by more than 40% across 15+ AWS services. Supported CI/CD deployment through Jenkins.'
  }
] as const;

export const Experience = workHistory;

export const education = [
  {
    degree: 'M.Eng. Robotics',
    institution: 'University of Maryland, College Park',
    period: 'Aug. 2023 - May 2025'
  },
  {
    degree: 'B.Tech. Mechanical Engineering',
    specialization: 'Robotics and Mechatronics',
    institution: 'KL University, Guntur District, Andhra Pradesh, India',
    period: 'Aug. 2019 - April 2023'
  }
] as const;

export const skills = [
  'NVIDIA Isaac Sim', 'Omniverse', 'ROS 2', 'MoveIt', 'Nav2', 'UR5', 'Digital twins', 'VR/XR teleoperation',
  'Simulation to real', 'Robotic manipulation', 'Inverse kinematics', 'MetaWorld', 'MuJoCo', 'PyTorch', 'TensorFlow',
  'Hugging Face Transformers', 'OpenCV', 'GroundingDINO', 'SAM2.1', 'Computer vision', 'Python', 'C++', 'MATLAB',
  'FastAPI', 'REST APIs', 'PostgreSQL', 'SQLite', 'AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Git', 'CMake'
] as const;

export const projects = [
  {
    title: 'UR5 VR Teleoperation',
    type: 'Digital twin / research prototype',
    description: 'VR-based UR5 teleoperation using 6-DoF controller tracking, inverse kinematics, coordinate-frame transforms, motion mapping, and calibration.',
    tags: ['Isaac Sim', 'Omniverse', 'VR', 'ROS 2'],
    image: '',
    status: 'Featured'
  },
  {
    title: 'Vision-Guided Manipulation',
    type: 'Robot perception / manipulation',
    description: 'Vision-guided UR5 manipulation for autonomous pancake preparation, combining camera-based localization, cooking-state perception, trajectory execution, and robotic tool handling.',
    tags: ['Computer vision', 'UR5', 'Python'],
    image: '',
    status: 'Selected work'
  },
  {
    title: 'Open-Vocabulary Vision',
    type: 'Perception pipeline',
    description: 'An open-vocabulary food-ingredient perception pipeline using GroundingDINO and SAM2.1, improving detection accuracy from approximately 60% to 95% and reducing latency by 47%.',
    tags: ['Vision-language', 'Detection', 'Python'],
    image: '',
    status: 'Selected work'
  },
  {
    title: 'Robust Preference-Based RL with Noisy Feedback',
    type: 'Reinforcement learning research',
    description: 'RIME-augmented preference-based reinforcement learning with a denoising discriminator and warm-start rewards, achieving more than 50% task success under 40% noisy labels versus less than 10% for PEBBLE on MetaWorld ButtonPress.',
    tags: ['RL', 'PbRL', 'MetaWorld', 'Machine learning'],
    image: '',
    status: 'Research project'
  },
  {
    title: 'Finder Bots - Swarm Intelligence',
    type: 'Multi-robot systems',
    description: 'A ROS 2 warehouse search system for a 12-TurtleBot swarm, coordinating robot-specific goals with LiDAR, odometry, camera streams, and OpenCV-based visual target detection.',
    tags: ['C++', 'ROS 2', 'Gazebo', 'OpenCV'],
    image: '',
    status: 'Selected work'
  },
  {
    title: 'TrackAI - Human Detector and Tracker',
    type: 'Robotic perception',
    description: 'A C++ and OpenCV perception pipeline using YOLOv8 and ONNX for real-time people detection, CSRT tracking, identity assignment, and camera-to-robot reference-frame transforms.',
    tags: ['C++', 'OpenCV', 'YOLOv8', 'ONNX'],
    image: '',
    status: 'Selected work'
  }
] as const;
