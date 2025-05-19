import { ISkill } from '../component/skill/ISkill';

const programmingLanguages: ISkill.Skill = {
  category: 'Programming Languages',
  items: [
    {
      title: 'C++',
      level: 2,
    },
    {
      title: 'Shell Scripting',
      level: 2,
    },
    {
      title: 'Python',
      level: 2,
    },
    {
      title: 'JAVA',
      level: 2,
    },
  ],
};

const kernelDevelopment: ISkill.Skill = {
  category: 'Kernel Development',
  items: [],
};

const virtualization: ISkill.Skill = {
  category: 'Virtualization',
  items: [
    {
      title: 'Docker',
      level: 1,
    },
    {
      title: 'VirtualBox',
      level: 2,
    },
    {
      title: 'VMware ESXi',
      level: 2,
    },
  ],
};

const automation: ISkill.Skill = {
  category: 'Automation',
  items: [],
};

const networkSecurity: ISkill.Skill = {
  category: 'Network Security',
  items: [
    {
      title: 'iptables',
      level: 3,
    },
    {
      title: 'OpenSSH',
      level: 3,
    },
    {
      title: 'OpenSSL',
      level: 2,
    },
    {
      title: 'NACLs',
      level: 2,
    },
    {
      title: 'VPN Technologies',
      level: 2,
    },
    {
      title: 'Intrusion Detection',
      level: 1,
    },
  ],
};

const misc: ISkill.Skill = {
  category: 'Misc',
  items: [
    {
      title: 'Cube Solving',
    },
    {
      title: 'Jigsow Puzzle',
    },
    {
      title: 'Playing Saxophone',
    },
    {
      title: 'Joke Telling',
    },
    {
      title: 'Playing Game',
    },
    {
      title: 'Sing',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [
    programmingLanguages,
    kernelDevelopment,
    virtualization,
    automation,
    networkSecurity,
    misc,
  ],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
