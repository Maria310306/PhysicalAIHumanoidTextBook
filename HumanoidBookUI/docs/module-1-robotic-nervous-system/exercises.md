# Exercises: Robotic Nervous System (ROS 2)

## Exercise 1: Basic Publisher-Subscriber Implementation (Beginner)

Create a ROS 2 publisher-subscriber pair that simulates sending joint position commands and receiving feedback from a humanoid robot. 

**Steps:**
1. Create a publisher node that sends sine wave joint positions (simulating a rhythmic movement)
2. Create a subscriber node that listens to these positions and prints them to the console
3. Configure appropriate QoS settings for reliable communication
4. Visualize the sine wave data using RViz

**Questions:**
- How does changing the publisher frequency affect the smoothness of the motion?
- What happens when the subscriber processes messages slower than they arrive?

## Exercise 2: Service Communication for Robot Control (Intermediate)

Implement a service-based interface for querying the humanoid robot's current pose and requesting simple movements.

**Steps:**
1. Define a custom service message for pose queries
2. Create a server that responds to pose requests with mock data
3. Create a client that periodically queries the robot's pose
4. Extend the service to support simple movement commands (translation, rotation)

**Questions:**
- What are the advantages of the service pattern over topic publishing for this use case?
- How could you extend this service to handle concurrent requests?

## Exercise 3: Action-Based Navigation System (Advanced)

Develop an action-based system for waypoint navigation that enables a humanoid robot to move to specified positions with feedback.

**Steps:**
1. Create a Fibonacci action server (as in the ROS 2 tutorial) but adapted for navigation
2. Implement a navigation client that sends waypoint goals
3. Add feedback reporting indicating distance to goal
4. Implement preemptive behavior for dynamic obstacle avoidance

**Questions:**
- How would you modify this system to handle multiple simultaneous navigation requests?
- What safety checks would you implement before executing navigation commands?

## Exercise 4: Parameter Management for Different Environments (Intermediate)

Design a parameter-based configuration system that allows the same robot controller to operate in simulation versus real-world environments.

**Steps:**
1. Create a controller node with adjustable gains using ROS parameters
2. Define parameter files for simulation and real-world operation
3. Implement a parameter change callback to adjust behavior dynamically
4. Test that the controller adapts appropriately when switching between configurations

**Questions:**
- How would you handle parameter validation to prevent invalid settings?
- What parameters would be dangerous to change during operation?

## Exercise 5: Multi-Node System for Humanoid Coordination (Advanced)

Build a distributed system coordinating multiple aspects of humanoid robot behavior.

**Steps:**
1. Create a perception node that publishes detected objects
2. Implement a planning node that subscribes to objects and generates motion plans
3. Design a control node that executes these plans on the robot
4. Add a monitoring node that observes the system state and reports anomalies

**Questions:**
- How would you implement graceful degradation when individual nodes fail?
- What QoS settings would you choose for each communication channel?

## Exercise 6: Lifecycle Management (Expert)

Build a lifecycle-based system that controls when different robot capabilities are active.

**Steps:**
1. Convert one of your previous nodes to a lifecycle node
2. Create a manager node that controls the lifecycle state transitions
3. Implement state-dependent behavior (different actions in different states)
4. Add monitoring of lifecycle state transitions and report any failures

**Questions:**
- How would lifecycle management improve the reliability of a humanoid robot?
- What states would be most important for different robot subsystems?

## Exercise 7: Time-Synchronized Perception-Action Loop (Expert)

Create a synchronized system that coordinates sensor data acquisition and actuator commands.

**Steps:**
1. Implement a sensor node that timestamps data using ROS time
2. Create a fusion node that synchronizes multiple sensor inputs
3. Design a controller that uses this fused data to generate commands
4. Test with both real time and simulated time sources

**Questions:**
- How would you handle timestamp differences between sensor readings?
- What tolerance would be acceptable for sensor synchronization in your application?

## Exercise 8: Secure ROS 2 Communication (Expert)

Configure security policies for inter-node communication in the humanoid robot's nervous system.

**Steps:**
1. Generate security certificates for your ROS nodes
2. Configure secure communication between selected nodes
3. Test that unauthorized nodes cannot join the network
4. Monitor encrypted traffic to verify secure communication

**Questions:**
- What parts of the robot's nervous system most critically require security?
- How would security measures affect real-time performance requirements?