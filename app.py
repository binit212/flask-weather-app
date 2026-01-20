from flask import Flask, render_template, request
import requests
import os
from dotenv import load_dotenv
from datetime import datetime

load_dotenv()

app = Flask(__name__)
@app.template_filter("datetimeformat")
def datetimeformat(value):
    date = datetime.strptime(value, "%Y-%m-%d")
    return date.strftime("%a")


API_KEY = os.getenv("WEATHER_API_KEY")
BASE_URL = "http://api.weatherapi.com/v1/forecast.json"


@app.route("/", methods=["GET", "POST"])
def index():

    weather_data = None
    error = None

    if request.method == "POST":

        city = request.form.get("city")

        if city:

            params = {
                "key": API_KEY,
                "q": city,
                "days": 3,
                "aqi": "no",
                "alerts": "no"
            }

            try:
                response = requests.get(BASE_URL, params=params)
                data = response.json()

                if "error" in data:
                    error = "City not found"
                else:
                    weather_data = data

            except:
                error = "Server error"

    return render_template("index.html", weather=weather_data, error=error)


if __name__ == "__main__":
    app.run(debug=True)
