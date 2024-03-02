from flask import Flask

app = Flask(__name__)

@app.route('/api/<data>')
def predict(data):
    print(data)


    response = flask.jsonify({'accuracy': 10})
    response.headers.add('Access-Control-Allow-Origin', '*')

    return response
    
# Thing for app.js
# const [accuracy, setAccuracy] = useState(2)

#   useEffect(() => {
#     fetch("http://127.0.0.1:5000/api")
#     .then(res => res.json())
#     .then(data => {
#       console.log(data);
#       setAccuracy(data.accuracy);
#     })
#   }, [])

#   return <p>Output: {accuracy} </p>;