from flask import Flask

app = Flask(__name__)

@app.route('/PythonVenv/data/main/route')
def predict():
    return 0