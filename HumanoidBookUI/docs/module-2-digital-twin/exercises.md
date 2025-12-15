# Exercises: Digital Twin (Gazebo & Unity)

## Exercise 1: Basic Robot Model Creation (Beginner)

Create a simple humanoid robot model in URDF/SDF format and simulate it in Gazebo.

**Steps:**
1. Design a simplified humanoid robot with at least 6 DOF (3 for each leg)
2. Create the URDF file with appropriate links, joints, and inertial properties
3. Load the model into Gazebo and verify it spawns correctly
4. Test basic joint movements using Gazebo's interface

**Questions:**
- How do the physical properties in your URDF affect the robot's behavior in simulation?
- What happens when you modify the mass or inertia values?

## Exercise 2: Sensor Integration in Gazebo (Intermediate)

Add realistic sensors to your humanoid robot model and test sensor data generation.

**Steps:**
1. Add a camera sensor to the robot model
2. Include an IMU sensor for orientation estimation
3. Add a lidar sensor for environment perception
4. Verify that sensor topics are published properly
5. Visualize sensor data in RViz

**Questions:**
- How do the sensor parameters in your URDF affect the quality of the data?
- What are the differences between perfect simulation data and real sensor data?

## Exercise 3: Unity Environment Creation (Intermediate)

Create a simple virtual environment in Unity for humanoid robot testing.

**Steps:**
1. Set up a basic Unity project with appropriate lighting
2. Import or create a humanoid robot model
3. Implement a simple locomotion controller
4. Add obstacles for navigation testing
5. Export the environment as a Unity application

**Questions:**
- How does Unity's rendering differ from Gazebo's visualization?
- What are the advantages of Unity for perception tasks?

## Exercise 4: Gazebo-ROS Integration (Advanced)

Connect your Gazebo simulation to ROS/ROS 2 for more complex control.

**Steps:**
1. Set up ROS control plugins for your robot model
2. Create a ROS node to send joint commands to the simulated robot
3. Implement a joint trajectory controller
4. Test trajectory execution in simulation

**Questions:**
- How does communication latency in the simulation compare to real hardware?
- What QoS settings are appropriate for simulation vs. reality?

## Exercise 5: Unity ML-Agents Training (Advanced)

Use Unity's ML-Agents to train a simple behavior for your humanoid robot.

**Steps:**
1. Install Unity ML-Agents package
2. Set up a basic training environment
3. Create a behavior script for your robot
4. Train a neural network to perform a simple task
5. Deploy the trained model on the simulated robot

**Questions:**
- How well does the trained behavior transfer to different environments?
- What domain randomization techniques can improve transferability?

## Exercise 6: Simulation-to-Reality Validation (Expert)

Design and perform experiments to validate your simulation model against known physical behaviors.

**Steps:**
1. Design an experiment that can be performed in both simulation and reality
2. Execute the experiment in simulation and record results
3. Perform the same experiment on a physical robot if available
4. Compare the results and quantify differences
5. Identify parameters that most affect the reality gap

**Questions:**
- Which physical parameters have the largest impact on simulation accuracy?
- How could you adjust your simulation to better match real-world behavior?

## Exercise 7: Multi-Physics Simulation Comparison (Expert)

Compare the same robot model running in both Gazebo and Unity, highlighting platform differences.

**Steps:**
1. Create equivalent robot models in both Gazebo and Unity
2. Implement the same controller in both platforms
3. Execute the same movement pattern in both simulations
4. Record and compare kinematic and dynamic responses
5. Analyze the differences in behavior between platforms

**Questions:**
- How do the different physics engines affect robot behavior?
- What are the trade-offs between computational speed and accuracy in each platform?

## Exercise 8: Sensor Fusion in Simulation (Expert)

Implement a sensor fusion algorithm using multiple simulated sensors.

**Steps:**
1. Configure multiple sensors (IMU, camera, lidar) on your robot model
2. Implement a sensor fusion algorithm (e.g., Kalman filter)
3. Test the fusion algorithm in various simulation environments
4. Compare fusion results with individual sensor outputs
5. Evaluate the improvement in state estimation accuracy

**Questions:**
- How does the addition of multiple sensors improve robot localization?
- What are the computational requirements of sensor fusion in simulation vs. reality?