# User Info App

## 📌 Overview
This is a simple **React Native** application that fetches user details from an API and displays them in a list. Users can navigate through different screens to view individual user details.

## 📂 Project Structure
```
InfoApp/
│── src/
│   ├── components/
│   │   ├── Home.js
│   │   ├── List.js
│   │   ├── Details.js
│── App.js
│── global.css
│── package.json
│── README.md
```

## 🚀 Installation & Setup
### 1️⃣ Prerequisites
Make sure you have **Node.js** and **React Native** installed.

### 2️⃣ Clone the Repository
```sh
git clone https://github.com/KarthikaMovva/InfoApp_ReactNative.git
cd InfoApp
```

### 3️⃣ Install Dependencies
```sh
npm install
```

### 4️⃣ Run the App
#### For Android
```sh
npm run android
```

#### For iOS
```sh
npm run ios
```

## 📜 Screens
### 1️⃣ Home Screen
- Displays a welcome message.
- Provides a **Get Started** button to navigate to the List screen.

### 2️⃣ List Screen
- Fetches user data from an API.
- Displays user names and emails.
- Allows navigation to the **Details Screen** when a user is clicked.


### 3️⃣ Details Screen
- Displays full details of the selected user.
- Receives user data via navigation props.

## 📌 API Used
[JSONPlaceholder API](https://jsonplaceholder.typicode.com/users) for fetching user data.

## 📌 Technologies Used
- **React Native**
- **Tailwind CSS** (with React Native styling classes)
- **Fetch API** (for data fetching)
- **React Navigation** (for screen navigation)

