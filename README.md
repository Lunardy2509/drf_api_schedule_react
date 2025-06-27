# 🗓️ DRF + React Schedule Viewer

This is the final project for the **Web-Based Applications** course. The objective is to create a simple full-stack web application that uses:

- 🧩 **Django Rest Framework (DRF)** to build the backend API
- ⚛️ **React.js** to build the frontend interface
- 🔄 Integrates data flow between API and frontend in a minimal schedule viewer

---

## 📌 Project Structure

```bash
drf_api_schedule_react/
├── Django_Rest_Framework_API/   # Django backend project
│   └── ...                      # models, views, serializers, urls
├── schedule/                    # React.js frontend
│   └── ...                      # React components, App.js, etc.
├── schedule.zip                 # Compressed version of full project
└── README.md
```

## 🧠 Features
- 🔗 Connects DRF backend with React frontend
- 📅 Displays schedule data from the API to the browser
- 🌐 Handles API requests with Axios or Fetch
- 🛠️ Modular codebase with clean separation of concerns

## 🚀 Getting Started
### 1. Clone the repository
```bash
git clone https://github.com/Lunardy2509/drf_api_schedule_react.git
cd drf_api_schedule_react
```

### 📦 Backend Setup (Django)
```bash
cd Django_Rest_Framework_API
python -m venv env
source env/bin/activate       # or 'env\Scripts\activate' on Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```
By default, the API runs at:
```bash
http://localhost:8000/api/schedule/
```

### 3. 🌐 Frontend Setup (React)
```bash
cd ../schedule
npm install
npm start
```
By default, the frontend runs at:
```cpp
http://localhost:3000/
```
The frontend fetches data from the backend and displays the schedule list.

## ⚙️ Technologies Used
- **Backend:** Django, Django REST Framework
- **Frontend:** ReactJS, Axios (or Fetch API)
- **Language:** Python, JavaScript
- **API Format:** JSON

## 🧪 Example Use Case
- A student/class schedule viewer
- Basic CRUD or read-only display from the REST API
- Easily expandable into a calendar or admin dashboard

## 📝 License
This project was created for academic use only.

## 📬 Contact
- GitHub: [@Lunardy2509](https://github.com/Lunardy2509)
- Email: ferdilunardy@gmail.com

If you find this helpful, feel free to ⭐️ the repo or fork for your own use!

---

Would you like help adding:
- Screenshots of the running app?
- CORS configuration for DRF?
- Deployment instructions for Vercel/Heroku?

Let me know!
