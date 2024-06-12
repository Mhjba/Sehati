""" Importing the Flask """
from flask import Flask, render_template 

""" Creating a Flask application instance """
app = Flask(__name__)

""" Defining a function to handle requests to the homepage """
@app.route('/')
def index():
    """ Handles request for index """
    return render_template('index.html')

""" Running the app """
if __name__ == '__main__':
    app.run(debug=True)

