from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Position(db.Model):
    __tablename__ = 'Position'
    Position_ID = db.Column(db.BigInteger, primary_key=True)
    Position_Type = db.Column(db.Text)
    On_Shift = db.Column(db.Text)

class Hotels(db.Model):
    __tablename__ = 'Hotels'
    Hotels_ID = db.Column(db.BigInteger, primary_key=True)
    Name = db.Column(db.Text)

class Staff(db.Model):
    __tablename__ = 'Staff'
    Staff_ID = db.Column(db.BigInteger, primary_key=True)
    On_Shift = db.Column(db.Text)
    Position_ID = db.Column(db.BigInteger, db.ForeignKey('Position.Position_ID'))
    Pwd = db.Column(db.String)

class Client(db.Model):
    __tablename__ = 'Client'
    Client_ID = db.Column(db.BigInteger, primary_key=True)
    Type = db.Column(db.Text)
    Name = db.Column(db.Text)
    Phone = db.Column(db.Integer)
    Email = db.Column(db.String)
    Pwd = db.Column(db.String)
    City = db.Column(db.Text)
    Postcode = db.Column(db.String)

class Room(db.Model):
    __tablename__ = 'Room'
    Room_ID = db.Column(db.BigInteger, primary_key=True)
    Hotel_ID = db.Column(db.BigInteger, db.ForeignKey('Hotels.Hotels_ID'))
    Type = db.Column(db.Text)
    Price = db.Column(db.Integer)
    Availability = db.Column(db.Integer)

class Events(db.Model):
    __tablename__ = 'Events'
    Event_ID = db.Column(db.BigInteger, primary_key=True)
    Room_ID = db.Column(db.BigInteger, db.ForeignKey('Room.Room_ID'))
    Type = db.Column(db.Text)
    Position_ID = db.Column(db.BigInteger, db.ForeignKey('Position.Position_ID'))
    Date = db.Column(db.String)
    Priority = db.Column(db.Text)

class Payment(db.Model):
    __tablename__ = 'Payment'
    Payment_ID = db.Column(db.BigInteger, primary_key=True)
    Date = db.Column(db.String)
    Price = db.Column(db.Integer)
    Status = db.Column(db.Text)
    Payment_Type = db.Column(db.Text)

class Reservation(db.Model):
    __tablename__ = 'Reservation'
    Reservation_ID = db.Column(db.BigInteger, primary_key=True)
    Room_ID = db.Column(db.BigInteger, db.ForeignKey('Room.Room_ID'))
    Payment_ID = db.Column(db.BigInteger, db.ForeignKey('Payment.Payment_ID'))
    Client_ID = db.Column(db.BigInteger, db.ForeignKey('Client.Client_ID'))
    MoveIn = db.Column(db.String)
    MoveOut = db.Column(db.String)
    Reservation_Status = db.Column(db.Text)


