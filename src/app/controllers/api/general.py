from flask import Blueprint, request, make_response, jsonify, send_file, session
# from src.app.services.service import *
# from src.app.connectors.database.database_connector import db_session, Session

MASTER_KEY = 'qwerqwer12341234'

bp = Blueprint('api_general', __name__)