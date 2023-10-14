#C:\flask_dev\flaskreact\app.py
from flask import Flask, request, jsonify
from flask_bcrypt import Bcrypt #pip install Flask-Bcrypt = https://pypi.org/project/Flask-Bcrypt/
from flask_cors import CORS, cross_origin #ModuleNotFoundError: No module named 'flask_cors' = pip install Flask-Cors
from models import db,Appointment
  
app = Flask(__name__)
  
# app.config['SECRET_KEY'] = 'cairocoders-ednalan'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///flask1db.db'
 
# Databse configuration mysql                             Username:password@hostname/databasename
#app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///flaskdb.db'
 
SQLALCHEMY_TRACK_MODIFICATIONS = False
SQLALCHEMY_ECHO = True
   
bcrypt = Bcrypt(app) 
CORS(app, supports_credentials=True)
 
db.init_app(app)
   
with app.app_context():
    db.create_all()
  
@app.route("/")
def hello_world():
    return "Hello, World!"
  
@app.route("/book-appointment", methods=["POST"])
def book_appointment():
    firstname = request.json["firstname"]
    lastname = request.json["lastname"]
    email = request.json["email"]
    service = request.json["service"]
    appointmentdate = request.json["date"]
    appointmenttime = request.json["time"]

    # Create a new entry in the database
    new_appointment = Appointment(
        firstname=firstname,
        lastname=lastname,
        email=email,
        service=service,
        appointmentdate=appointmentdate,
        appointmenttime=appointmenttime
    )

    # Add and commit the new appointment to the database
    db.session.add(new_appointment)
    db.session.commit()

    return jsonify({
        "id": new_appointment.id,
        "email": new_appointment.email
    })

if __name__ == "__main__":
    app.run(debug=True)