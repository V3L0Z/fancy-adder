from flask import Flask, request

app = Flask(__name__)

@app.route('/add')
def add_numbers():
    x = request.args.get('x')
    y = request.args.get('y')
    return { 'add': int(x) + int(y) }