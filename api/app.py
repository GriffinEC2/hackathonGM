from flask import Flask, request
import flask
from flask_cors import CORS

from networks import DQN_train

app = Flask(__name__)

CORS(app)

all_data = []

@app.route('/api')
def predict():
    response = flask.jsonify({'accuracy': request.args.get("data")})
    response.headers.add('Access-Control-Allow-Origin', '*')

    print(request.args.get("data"))

    if response != "done":
        all_data.append(response)
    else:
        for data in all_data:
            if data[0] == 0:
                frames_per_batch = data[1]
            elif data[0] == 1:
                total_frames = data[1]
            elif data[0] == 2:
                LR = data[1]
            elif data[0] == 3:
                activation_func = data[1]
            elif data[0] == 4:
                neurons_per_layer = data[1]
            elif data[0] == 5:
                PPO_OR_DQN = data[1]
            elif data[0] == 6:
                if data[1] == 0:
                    storage = "circular_buffer"
                elif data[1] == 1:
                    storage = "deque_memory"
                else:
                    storage = None
            elif data[0] == 7:
                if data[1] == 0:
                    env = 'CartPole-v1'
                elif data[1] == 1:
                    env = "LunarLander-v2"
                elif data[1] == 2:
                    env = "ALE/Pacman-v5"
                elif data[1] == 3:
                    env = "Pusher-v4"

            
            
            DQN_train(env, neurons_per_layer, activation_func, storage, LR, frames_per_batch, total_frames)


    

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
