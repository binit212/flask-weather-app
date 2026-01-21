# 🌤 Flask Weather Dashboard

A modern, animated **Weather Dashboard Web App** built using **Flask (Python backend)** with a clean UI and real-time weather data.

This project demonstrates full-stack development using Flask, API integration, dynamic UI updates, and responsive design.

---

## 🚀 Live Demo

👉 Live App:https://flask-weather-app-oldz.onrender.com 



---

## ✨ Features

- 🌎 Search weather by city name  
- 🎨 Dark / Light mode toggle  
- 🌧 Realistic rain animation  
- ❄ Snowfall animation  
- 📊 Detailed weather stats  
- 📅 3-day forecast (toggle view)  
- ⚡ Fast API-based data fetching  
- 🧭 Visibility, wind, humidity, pressure, UV index  
- 📱 Mobile responsive UI  
- 🔐 Secure API key using environment variables  

---

## 🛠 Tech Stack

### Backend
- Python  
- Flask  
- Requests  
- WeatherAPI  
- Gunicorn (Production Server)

### Frontend
- HTML5  
- CSS3  
- JavaScript (UI & animations only)  
- Google Material Icons  

### Deployment
- Render Cloud Platform  

---

## 📁 Project Structure
```
flask-weather-app/
│
├── app.py
├── Procfile
├── requirements.txt
├── .env
│
├── templates/
│ └── index.html
│
├── static/
│ ├── weather.css
│ └── weather.js
│
└── README.md

```
---

## ⚙ Installation (Local Setup)

### 1️⃣ Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/flask-weather-app.git
cd flask-weather-app
```
2️⃣ Create Virtual Environment
```bash
python -m venv venv
```
Activate:

Windows:

```bash
venv\Scripts\activate
 ```
Mac/Linux

```bash
  source venv/bin/activate
 ```
3️⃣ Install Dependencies

 ```bash
 pip install -r requirements.txt
 ```
4️⃣ Set Environment Variable

Create .env file in root folder:
 ```bash
WEATHER_API_KEY=your_api_key_here

```

 5️⃣ Run Application

 ```bash
python app.py
```
6️⃣ Open Browser

Visit:
 ```bash
http://127.0.0.1:5000
```
## 🌦 Weather Animations Logic

Weather effects are triggered dynamically:

- 🌧 Rain animation → Rain / Thunder / Drizzle  
- ❄ Snow animation → Snow condition  
- ☀ Clean UI fallback for clear weather  

## 🔐 Security Notes

- API keys are NOT hardcoded  
- Environment variables are used  
- `.env` file is ignored using `.gitignore`  

---

## 👨‍💻 Author

**BINIT**
GitHub: https://github.com/binit212

---

## ⭐ Show Your Support

If you like this project:

- Give a ⭐ on GitHub  
- Share with friends  
- Fork and improve  


