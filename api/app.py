from flask import Flask, request
import flask
from flask_cors import CORS

from networks import DQN_train, PPO_train

app = Flask(__name__)

CORS(app)

@app.route('/api')
def predict():
    response = flask.jsonify({'accuracy': request.args.get("data")})
    response.headers.add('Access-Control-Allow-Origin', '*')

    print(request.args.get("data"))

    

    return response
    
    
# Thing for app.js
# import './App.css';
# import Card from './Card.js'
# import React, {useState, useEffect} from 'react'


# function App() {

#   const [accuracy, setAccuracy] = useState(2)
#   const [inputValue, setInputValue] = useState("");

#   // useEffect(() => {
#   //   submitToApi
#   // }, [])

#   const submitToApi = (e) => {
#     e.preventDefault();
    
#     fetch(`http://127.0.0.1:5000/api?data=${inputValue}`)
#     .then(res => res.json())
#     .then(data => {
#       setAccuracy(data.accuracy);
#     })
#   }

#   return (
#   <div>
#     <form onSubmit={submitToApi}>
#       <input placeholder='hello' onChange={(e) => setInputValue(e.target.value)} />
#       <button type="submit">Text</button>
#     </form>
#     <p>Output: {accuracy} </p>;
#   </div>
#   )
# }

# export default App;
