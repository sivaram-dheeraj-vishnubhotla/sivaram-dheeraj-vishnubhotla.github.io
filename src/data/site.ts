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
    period: 'June 2025 – Present',
    bullets: [
      'Develop NVIDIA Isaac Sim / Omniverse / ROS 2 workflows for UR5 simulation, digital twins, Smart Factory automation, and sim-to-real integration.',
      'Build VR-based UR5 teleoperation using 6-DoF controller tracking, inverse kinematics, coordinate-frame transforms, motion mapping, and calibration.',
      'Develop interactive XR digital twins with ray-cast component selection, exploded-view assemblies, reusable simulation assets, and immersive robotics visualization.',
      'Develop vision-guided UR5 manipulation for autonomous pancake preparation, integrating camera-based localization, cooking-state perception, trajectory execution, and robotic tool handling.'
    ]
  },
  {
    role: 'AI & ML Intern',
    organization: 'Alpha Clinical Systems, Piscataway, NJ (Remote)',
    period: 'Feb 2026 – May 2026',
    bullets: [
      'Built MAYA, a FastAPI + Google ADK (Runner/Agent, DatabaseSessionService) B2B health assistant with PostgreSQL session persistence, strict screen/question-lock guardrails, runtime context injection to prevent prompt-example leakage, and automated bulk CSV cleanup and API-orchestrated JSON meal-plan generation, with persona mapping and summary reporting.',
      'Implemented 7+ REST APIs for session lifecycle (create, resume, list, latest, messages, transcript, delete) with event-sourced state (current step, latest answers, change history) and automated Swagger + script-runner tests replaying 100+ steps.',
      'Extended the platform to diet/meal-plan and activity-plan workflows (v1/v2 iterations) via engineered prompts and question slugs routing with mode-based validation, conditional branching (multi-select, numeric inputs, dynamic follow-ups), and previous_selection tracking while enforcing navigation constraints and preserving immutable event auditability.',
      'Designed LLM-as-a-judge batch evaluation system using Gemini 3.1 flash-lite to score coach-assistant transcripts across 5 clinical dimensions with auto-discovery of completed sessions (plan_created state flag), batch processing, and ZIP report generation for internal quality assurance.'
    ]
  },
  {
    role: 'AI & CV Intern',
    organization: 'HealthHustler.ai (Live150.ai)',
    period: 'Nov 2025 – Feb 2026',
    bullets: [
      'Built an open-vocabulary computer vision pipeline using GroundingDINO and SAM2.1 for instance segmentation of overlapping food ingredients, enabling accurate detection in complex images through a modular multi-stage architecture.',
      'Improved ingredient detection accuracy from ~60% to ~95% by applying confidence thresholding, multimodal verification, and canonical label mapping to reduce false positives and resolve label ambiguity.',
      'Reduced inference latency by 47% (15s to 8s per image) by pruning low-confidence detections and limiting candidate regions, trading off recall for small ingredients.',
      'Developed an evaluation pipeline to benchmark baseline vs post-processed outputs, generating structured JSON, segmentation masks, and QA visualizations to support validation and iterative improvement.'
    ]
  },
  {
    role: 'Programmer Intern',
    organization: 'Volpe Information Technology Group, Ellicott City, MD',
    period: 'Sept 2025 – Dec 2025',
    bullets: [
      'Developed Python data ingestion and analysis pipelines using AWS Cost Explorer APIs, S3, Lambda, and SNS to automate reporting and reduce manual monitoring by 40%+.',
      'Wrote structured data processing logic for 90-day cost analysis, anomaly detection, service-level reporting, and operational alerts across 15+ AWS services.',
      'Supported CI/CD deployment through Jenkins and documented workflows for repeatable monitoring and reporting.'
    ]
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

export const skillGroups = [
  {
    category: 'Robotics / Simulation / XR',
    items: ['NVIDIA Isaac Sim', 'Omniverse', 'ROS 2', 'MoveIt', 'Nav2', 'UR5', 'Digital Twins', 'VR/XR Teleoperation', 'Sim-to-Real', 'Robotic Manipulation', 'Inverse Kinematics', '6-DoF Pose Tracking', 'Coordinate-Frame Transformations', 'MetaWorld / MuJoCo']
  },
  {
    category: 'AI & ML',
    items: ['PyTorch', 'TensorFlow', 'Keras', 'Hugging Face Transformers', 'LangChain', 'OpenCV', 'GroundingDINO', 'SAM3 (Segment Anything)', 'Scikit-learn', 'NumPy', 'Pandas', 'Computer Vision', 'Robotic Perception', 'LLMs', 'LLM Evaluation', 'Conversational AI Systems', 'RAG (Basics)']
  },
  {
    category: 'Programming Languages',
    items: ['Python', 'C++', 'MATLAB', 'Octave']
  },
  {
    category: 'Frameworks / Platforms',
    items: ['FastAPI', 'REST APIs', 'State Management (Event-Sourced Systems)', 'Google ADK (Runner/Agent, DatabaseSessionService)', 'AWS (Cost Explorer, S3, Lambda, SNS)']
  },
  {
    category: 'Software Libraries / Tools',
    items: ['PostgreSQL', 'SQLite', 'OpenAPI/Swagger', 'Docker', 'Kubernetes', 'CI/CD', 'Jenkins', 'Git', 'OpenTelemetry', 'FinOps', 'Hydra', 'CMake', 'NVIDIA Isaac Teleop', 'CloudXR', 'SolidWorks', 'Fusion 360', 'CATIA V5', 'ANSYS Mechanical']
  }
] as const;

export const projects = [
  {
    title: 'Pizzaro - Multi-Agent Pizza Assembly',
    type: 'Multi-agent manipulation / research prototype',
    description: 'Multi-agent assembly using two UR10 manipulators for collaborative pizza topping placement. Reinforcement learning trains the manipulation policy in Omniverse Isaac Gym/Sim. Includes a custom UR10Assembler environment built on OmniIsaacGymEnvs for UR10 control.',
    tags: ['Isaac Sim', 'RL', 'ROS 2', 'UR10'],
    image: '/pizzaro.gif',
    link: 'https://github.com/sivaram-dheeraj-vishnubhotla/pizzaro.git',
    status: 'Featured'
  },
  {
    title: 'Finder-Bots-Swarm-Intelligence',
    type: 'Multi-robot systems',
    description: 'A ROS-based swarm of 20+ TurtleBots developed with Acme Robotics to autonomously locate misplaced warehouse items. Uses ArUco/OpenCV, SLAM, and navigation for coordinated search and obstacle avoidance. Validated in Gazebo and RViz before real-world deployment.',
    tags: ['ROS2', 'Gazebo', 'SLAM', 'CV', 'Multi-Robot Systems'],
    image: '/simulation.gif',
    link: 'https://github.com/sivaram-dheeraj-vishnubhotla/Finder-Bots-Swarm-Intelligence.git',
    status: 'Selected work'
  },
  {
    title: 'TrackAI - Human Detector And Tracker',
    type: 'Robotic perception',
    description: 'A monocular vision system developed for ACME Robotics to detect and track humans in dynamic environments. Uses YOLOv8 with CSRT/SORT tracking to maintain unique identities across frames. Converts camera detections into robot/world coordinates for safer navigation and path planning.',
    tags: ['YOLOv8', 'OpenCV', 'C++', 'Object Tracking (CSRT)', 'Coordinate Transformations'],
    image: '/output.gif',
    link: 'https://github.com/sivaram-dheeraj-vishnubhotla/TrackAI-Human-Detector-and-Tracker.git',
    status: 'Selected work'
  },
  {
    title: 'Robust Preference-Based RL with Noisy Feedback',
    type: 'Reinforcement learning research',
    description: 'RIME-augmented preference-based reinforcement learning with a denoising discriminator and warm-start rewards, achieving more than 50% task success under 40% noisy labels versus less than 10% for PEBBLE on MetaWorld ButtonPress.',
    tags: ['RL', 'PbRL', 'MetaWorld', 'Machine learning'],
    image: '',
    status: 'Research project'
  }
] as const;
