import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Embodied Intelligence',
    image: require('@site/static/img/First.png').default,
    description: (
      <>
        Explore how AI moves from digital-only models to physically interacting
        with the world through humanoid robots, learning from sensors,
        perception, and human-like actions.
      </>
    ),
  },
  {
    title: 'Cognitive Robotics',
    image: require('@site/static/img/Second.png').default,
    description: (
      <>
        Integrate AI brains with ROS 2, NVIDIA Isaac, and LLM-driven planning to
        enable humanoids to perceive, reason, and act autonomously in dynamic
        environments.
      </>
    ),
  },
  {
    title: 'Digital Twin & Simulation',
    image: require('@site/static/img/Third.png').default,
    description: (
      <>
        Learn to create high-fidelity robot simulations in Gazebo and Unity, test
        physics, sensors, and movements virtually before deploying in real-world
        robots.
      </>
    ),
  },
];

function Feature({image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img
          src={image}
          alt={title}
          className={styles.featureImg}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
