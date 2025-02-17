# TaskMate 📝 - A Simple To-Do List App

TaskMate is a **React Native** to-do list app built with **Expo**, allowing users to add, check, and delete tasks easily.

<img src="https://github.com/user-attachments/assets/c492493e-1f52-4b50-aff1-466774035b8b" width="300" />

## 📌 Features  
- ✅ Add tasks to your to-do list  
- ✅ Mark tasks as completed  
- ✅ Delete tasks from the list  
- ✅ Simple and user-friendly UI with **React Native Paper**  
- ✅ Navigation support with **React Navigation**
- ✅ Persistent storage (tasks are saved even after closing the app) 

## 🚀 Installation & Setup  

### 1️⃣ Clone the repository  
```bash
git clone https://github.com/luthfisauqi17/taskmate.git
cd taskmate
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Start the Expo development server
```bash
npm start
```

## 📂 Project Structure
```bash
📦 TaskMate
├── 📂 components
│   ├── TaskItem.js  # Task item component
├── 📂 screens
│   ├── HomeScreen.js  # Main task list screen
├── 📂 navigation
│   ├── AppNavigator.js  # App navigation setup
├── App.js  # Entry point of the app
└── package.json  # Project dependencies
```

## 📦 Dependencies Used
- 📌 React Native Paper - UI components
- 📌 React Navigation - Screen navigation
- 📌 Expo - React Native framework
Install missing dependencies with:
```bash
npm install react-native-paper @react-navigation/native @react-navigation/stack react-native-screens react-native-safe-area-context
```
To install AsyncStorage, run:
```bash
npm install @react-native-async-storage/async-storage
```
