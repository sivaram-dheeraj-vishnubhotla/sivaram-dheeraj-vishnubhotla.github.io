export const site = {
  name: 'Sivaram Dheeraj Vishnubhotla',
  shortName: 'Sivaram V',
  role: 'Robotics & Simulation Engineer',
  location: 'Harrisburg, Pennsylvania',
  intro: 'I am a robotics and simulation engineer passionate about building intelligent systems that connect simulation with real-world robots.',
  aboutShort: 'I work at the intersection of robotics simulation, perception, and physical robot integration, with a focus on making complex systems easier to test and understand.',
  aboutLong: 'My work explores how simulation, digital twins, computer vision, and robot interfaces can work together to move ideas from an experiment toward a reliable physical system.',
  focus: 'Robotics simulation, digital twins, and real robot integration',
  currentWork: 'Robotics Technician at Harrisburg University',
  education: 'M.Eng. Robotics, University of Maryland, College Park',
  links: {
    github: 'https://github.com/sivaram-dheeraj-vishnubhotla',
    linkedin: 'https://www.linkedin.com/',
    resume: 'https://drive.google.com/file/d/1s6vBA5IH9WiDXPfba_ijRlkBBS2-RVmD/view?usp=sharing',
    email: 'mailto:hello@example.com'
  }
} as const;

export const education = [
  {
    degree: 'M.Eng. Robotics',
    institution: 'University of Maryland, College Park',
    period: 'Add dates'
  }
] as const;

export const workHistory = [
  {
    role: 'Robotics Technician',
    organization: 'Harrisburg University',
    period: 'Current',
    description: 'Advanced manufacturing and robotics work focused on simulation, digital twins, and real robot integration.'
  }
] as const;

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
