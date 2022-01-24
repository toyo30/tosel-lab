from flask import Flask
from .connectors.database.models import *
from .controllers.view.general import bp as view
from .controllers.api.general import bp as controller



app = Flask(__name__)
app.secret_key = "asdfasdfasdfasdf"
app.register_blueprint(view, url_prefix='/')
app.register_blueprint(controller, url_prefix='/api')

