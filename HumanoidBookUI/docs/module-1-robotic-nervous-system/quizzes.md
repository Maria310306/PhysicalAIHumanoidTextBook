# Quizzes: Robotic Nervous System (ROS 2)

## Quiz 1: ROS 2 Fundamentals

### 1. Which of the following best describes the role of DDS in ROS 2?

- a) A programming language for robotics  
- b) The communication middleware that handles message routing  
- c) A simulation environment for testing robots  
- d) A visualization tool for robot debugging  

<details>
<summary><strong>Answer</strong></summary>

**Correct Answer:** b) The communication middleware that handles message routing

</details>

---

### 2. Which communication pattern would be most appropriate for publishing sensor data that multiple nodes need to consume?

- a) Service  
- b) Action  
- c) Topic  
- d) Parameter  

<details>
<summary><strong>Answer</strong></summary>

**Correct Answer:** c) Topic

</details>

---

### 3. True or False: ROS 2 nodes must be written in the same programming language to communicate with each other.

- a) True  
- b) False  

<details>
<summary><strong>Answer</strong></summary>

**Correct Answer:** b) False

</details>

---

### 4. What does QoS stand for in ROS 2?

- a) Quality of Service  
- b) Quick Operating System  
- c) Quantum Operations System  
- d) Queued Operation Sequence  

<details>
<summary><strong>Answer</strong></summary>

**Correct Answer:** a) Quality of Service

</details>

---

### 5. In the publish-subscribe model:

- a) Publishers and subscribers must know each other's identity  
- b) Publishers and subscribers are decoupled and unaware of each other  
- c) Each publisher can only have one subscriber  
- d) Communication is bidirectional between publisher and subscriber  

<details>
<summary><strong>Answer</strong></summary>

**Correct Answer:** b) Publishers and subscribers are decoupled and unaware of each other

</details>

---

## Quiz 2: ROS 2 Communication Patterns

### 1. Which communication pattern should you use for a long-running task that provides periodic feedback and can be preempted?

- a) Topic  
- b) Service  
- c) Action  
- d) Parameter  

<details>
<summary><strong>Answer</strong></summary>

**Correct Answer:** c) Action

</details>

---

### 2. What is the primary difference between a service and an action in ROS 2?

- a) Services are faster than actions  
- b) Actions support feedback and goal preemption, while services are request-response only  
- c) Only services can carry complex data types  
- d) Actions are synchronous while services are asynchronous  

<details>
<summary><strong>Answer</strong></summary>

**Correct Answer:** b) Actions support feedback and goal preemption, while services are request-response only

</details>

---

### 3. Which QoS policy determines how many messages are kept in a publisher's queue?

- a) Reliability  
- b) Durability  
- c) History  
- d) Deadline  

<details>
<summary><strong>Answer</strong></summary>

**Correct Answer:** c) History

</details>

---

### 4. When would you use "best effort" reliability instead of "reliable" for a topic?

- a) When you need guaranteed message delivery  
- b) When occasional message loss is acceptable (e.g., sensor streams)  
- c) When communicating with safety-critical systems  
- d) When you need message ordering guarantees  

<details>
<summary><strong>Answer</strong></summary>

**Correct Answer:** b) When occasional message loss is acceptable (e.g., sensor streams)

</details>

---

### 5. True or False: Parameters in ROS 2 can only be set at node startup and cannot be changed during runtime.

- a) True  
- b) False  

<details>
<summary><strong>Answer</strong></summary>

**Correct Answer:** b) False

</details>
