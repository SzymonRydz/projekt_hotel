from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from models import db

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mssql+pyodbc://sa:baza123@localhost/hotel_db?driver=ODBC+Driver+17+for+SQL+Server'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

with app.app_context():
    db.create_all()

@app.route('/api/data', methods=['GET'])
def test_endpoint():
    return jsonify({"message": "Hello from Flask!"})

if __name__ == '__main__':
    app.run(debug=True, port=5001)
