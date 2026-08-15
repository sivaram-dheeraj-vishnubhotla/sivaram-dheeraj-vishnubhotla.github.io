export const site = {
  name: 'Dheeraj Vishnubhotla',
  shortName: 'Dheeraj V.',
  role: 'Robotics Engineer & Simulation Researcher',
  location: 'Harrisburg, Pennsylvania',
  intro: 'I build simulated and physical robot systems that make complex manipulation easier to understand, test, and deploy.',
  focus: 'Robotics simulation, digital twins, and real robot integration',
  currentWork: 'Advanced Manufacturing & Robotics at Harrisburg University',
  education: 'M.Eng. Robotics, University of Maryland, College Park',
  links: {
    github: 'https://github.com/sivaram-dheeraj-vishnubhotla',
    linkedin: 'https://www.linkedin.com/',
    resume: 'https://drive.google.com/file/d/1s6vBA5IH9WiDXPfba_ijRlkBBS2-RVmD/view?usp=sharing',
    email: 'mailto:hello@example.com'
  }
} as const;

export const projects = [
  {
    title: 'UR5 VR Teleoperation',
    type: 'Digital twin / research prototype',
    description: 'A place for the Isaac Sim, Meta Quest, and UR5 teleoperation system story.',
    tags: ['Isaac Sim', 'Omniverse', 'VR', 'ROS 2'],
    image: '',
    status: 'Featured'
  },
  {
    title: 'Vision-Guided Manipulation',
    type: 'Robot perception / manipulation',
    description: 'A visual home for the UR5 manipulation workflow, from camera observations to robot motion.',
    tags: ['Computer vision', 'UR5', 'Python'],
    image: '',
    status: 'Selected work'
  },
  {
    title: 'Open-Vocabulary Vision',
    type: 'Perception pipeline',
    description: 'A concise project record for the open-vocabulary computer vision experiments.',
    tags: ['Vision-language', 'Detection', 'Python'],
    image: '',
    status: 'Selected work'
  }
] as const;
