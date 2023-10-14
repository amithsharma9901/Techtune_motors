#C:\flask_dev\flaskreact\models.py
from flask_sqlalchemy import SQLAlchemy
from uuid import uuid4
from sqlalchemy import Date, Time
  
db = SQLAlchemy()
  
def get_uuid():
    return uuid4().hex
  
class Appointment(db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    firstname = db.Column(db.String(100), nullable=False)
    lastname = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    service = db.Column(db.String(100), nullable=False)
    appointmentdate = db.Column(Date, nullable=False)
    appointmenttime = db.Column(Time, nullable=False)