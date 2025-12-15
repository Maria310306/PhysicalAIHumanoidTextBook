# Core Concepts: Robotic Nervous System (ROS 2)

This section introduces the fundamental concepts underlying ROS 2 as the nervous system for robotic platforms, emphasizing the distributed architecture that enables complex humanoid robot behaviors.

## 1. ROS 2 Architecture Overview

### Client Library Layer
ROS 2 abstracts complex distributed communication through client libraries available in multiple languages (C++, Python, Rust, etc.). These libraries provide consistent APIs regardless of the underlying middleware, enabling developers to focus on robotic algorithms rather than communication protocols.

### Middleware Layer (DDS)
The Data Distribution Service (DDS) serves as the communication backbone, handling message routing, Quality of Service (QoS) policies, and ensuring reliable data delivery across potentially unreliable networks. DDS implements the publish-subscribe pattern at its core, enabling loose-coupling between robotic components.

### Node-Based Architecture
A ROS 2 node represents a single process that performs computation. Nodes communicate with each other through:
- **Topics**: Unidirectional streaming of data (publish/subscribe pattern)
- **Services**: Bidirectional request/response interactions
- **Actions**: Extended services with feedback and goal preemption capabilities

## 2. Publish-Subscribe Communication Pattern

### Topics and Messages
Topics facilitate asynchronous communication through a publish-subscribe model. Publishers send data to topics, and subscribers receive messages from topics without direct awareness of each other. This decoupling allows for flexible system composition and robust communication patterns.

Example: Sensor data streams from IMU publishers to multiple subscriber nodes (state estimation, balance control, logging).

```cpp
// Publisher example
auto publisher = this->create_publisher<std_msgs::msg::Float64MultiArray>("joint_commands", 10);
```

```cpp
// Subscriber example
auto subscription = this->create_subscription<std_msgs::msg::Float64MultiArray>(
    "sensor_data", 10,
    [this](const std_msgs::msg::Float64MultiArray::SharedPtr msg) {
        // Process sensor data
    });
```

### Quality of Service (QoS) Settings
QoS policies control message delivery behavior, including:
- Reliability (reliable vs. best-effort delivery)
- Durability (transient/local vs. volatile)
- History depth (keep-all vs. keep-last)
- Deadline and lifespan constraints

For safety-critical humanoid applications, reliable delivery with appropriate durability settings ensures critical sensor and control data reaches all necessary components.

## 3. Service and Action Patterns

### Services
Services enable synchronous request-response communication, appropriate for operations that return results within bounded time frames.

Example: Asking a perception node to identify objects in a camera image and return the recognized objects.

```cpp
// Service client
auto client = this->create_client<vision_msgs::srv::DetectObjects>("detect_objects");
```

### Actions
Actions extend services to support long-running operations with feedback and goal management. This pattern is essential for humanoid robot tasks that require continuous monitoring and potential interruption.

Example: Navigation to a destination in a human environment where the path may need adjustment based on dynamic obstacles.

```cpp
// Action client
auto action_client = rclcpp_action::create_client<Fibonacci>("fibonacci");
```

## 4. Parameter System

ROS 2's parameter system enables dynamic configuration of nodes without recompilation. Parameters can be:
- Declared within nodes with type and range constraints
- Loaded from YAML configuration files
- Modified at runtime using the parameter service
- Passed programmatically during node instantiation

This flexibility is crucial for humanoid robots that operate in varying environments and need to adjust control parameters accordingly.

## 5. Launch System

The launch system coordinates the startup and management of multiple ROS 2 nodes. Launch files define:
- Node compositions and configurations
- Parameter loading and assignment
- Remapping of topics, services, and actions
- Conditional launching based on arguments

For humanoid robots with dozens of interconnected nodes, the launch system ensures proper startup sequence and configuration management.

## 6. Composition and Lifecycle Management

### Node Composition
Node composition allows multiple components to run within a single process, reducing communication overhead and improving performance for time-critical control loops in humanoid robots.

### Lifecycle Nodes
Lifecycle nodes provide explicit control over node state transitions (unconfigured → inactive → active → finalized), enabling systematic activation and deactivation of robot functionalities.

```cpp
class MyLifecycleNode : public rclcpp_lifecycle::LifecycleNode
{
public:
    explicit MyLifecycleNode(const std::string & name);
    
protected:
    CallbackReturn on_configure(const rclcpp_lifecycle::State & state);
    CallbackReturn on_activate(const rclcpp_lifecycle::State & state);
    CallbackReturn on_deactivate(const rclcpp_lifecycle::State & state);
    CallbackReturn on_cleanup(const rclcpp_lifecycle::State & state);
};
```

## 7. Time and Synchronization

ROS 2 provides two time sources:
- **System time**: Wall-clock time from the operating system
- **ROS time**: Simulated time from playback bags or simulators

Time synchronization is critical for humanoid robots performing coordinated movements across multiple joints and sensors.

## 8. Namespaces and Naming Conventions

Namespaces provide logical grouping of nodes, topics, and services, essential for managing complex humanoid robot systems with multiple subsystems. Proper naming conventions ensure consistent and intuitive system organization.

## 9. Security Framework

ROS 2 includes security features including:
- Authentication: Verifying node identities
- Authorization: Controlling access to resources
- Encryption: Protecting message contents

For humanoid robots operating in public spaces, security is essential to prevent unauthorized control and protect sensitive data.

## 10. Real-Time Considerations

ROS 2 supports real-time scheduling through:
- Integration with operating system real-time features
- Deterministic communication patterns
- Time-bounded execution guarantees
- Priority-based task scheduling

Humanoid robot control systems require real-time capabilities to maintain stability and respond appropriately to environmental changes.