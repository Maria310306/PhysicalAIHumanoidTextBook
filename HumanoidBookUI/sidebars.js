// @ts-check

/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    // 👇 INTRO FIRST
    'intro',

    {
      type: 'category',
      label: 'Physical AI & Humanoid Robotics',
      items: [
        {
          type: 'category',
          label: 'Module 1: Robotic Nervous System (ROS 2)',
          items: [
            'module-1-robotic-nervous-system/overview',
            'module-1-robotic-nervous-system/learning-objectives',
            'module-1-robotic-nervous-system/prerequisites',
            'module-1-robotic-nervous-system/simulation-vs-real',
            'module-1-robotic-nervous-system/core-concepts',
            'module-1-robotic-nervous-system/exercises',
            'module-1-robotic-nervous-system/mini-projects',
            'module-1-robotic-nervous-system/quizzes',
            'module-1-robotic-nervous-system/common-pitfalls',
            'module-1-robotic-nervous-system/summary',
          ],
        },
        {
          type: 'category',
          label: 'Module 2: Digital Twin (Gazebo & Unity)',
          items: [
            'module-2-digital-twin/overview',
            'module-2-digital-twin/learning-objectives',
            'module-2-digital-twin/prerequisites',
            'module-2-digital-twin/simulation-vs-real',
            'module-2-digital-twin/core-concepts',
            'module-2-digital-twin/exercises',
            'module-2-digital-twin/mini-projects',
            'module-2-digital-twin/quizzes',
            'module-2-digital-twin/common-pitfalls',
            'module-2-digital-twin/summary',
          ],
        },
        {
          type: 'category',
          label: 'Module 3: AI Robot Brain (NVIDIA Isaac)',
          items: [
            'module-3-ai-robot-brain/overview',
            'module-3-ai-robot-brain/learning-objectives',
            'module-3-ai-robot-brain/prerequisites',
            'module-3-ai-robot-brain/simulation-vs-real',
            'module-3-ai-robot-brain/core-concepts',
            'module-3-ai-robot-brain/exercises',
            'module-3-ai-robot-brain/mini-projects',
            'module-3-ai-robot-brain/quizzes',
            'module-3-ai-robot-brain/common-pitfalls',
            'module-3-ai-robot-brain/summary',
          ],
        },
        {
          type: 'category',
          label: 'Module 4: Vision-Language-Action (VLA)',
          items: [
            'module-4-vision-language-action/overview',
            'module-4-vision-language-action/learning-objectives',
            'module-4-vision-language-action/prerequisites',
            'module-4-vision-language-action/simulation-vs-real',
            'module-4-vision-language-action/core-concepts',
            'module-4-vision-language-action/exercises',
            'module-4-vision-language-action/mini-projects',
            'module-4-vision-language-action/quizzes',
            'module-4-vision-language-action/common-pitfalls',
            'module-4-vision-language-action/summary',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
