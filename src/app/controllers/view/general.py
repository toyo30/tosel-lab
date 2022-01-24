from flask import Blueprint, request, make_response, jsonify, send_file, session, render_template
# from src.app.services.service import *
# from src.app.connectors.database.database_connector import db_session, Session
# import random

MASTER_KEY = 'qwerqwer12341234'

bp = Blueprint('view', __name__)

# @bp.before_request
# def before_request():
#     global db_session
#     try:
#         conn = db_session.connection()
#     except:
#         db_session.close()
#         db_session = Session()

@bp.route('/')
def index():
    # session['user_idx'] = random.randint(0, 10)
    return render_template('/index.html')

@bp.route('/header')
def header():
    # session['user_idx'] = random.randint(0, 10)
    return render_template('/common/header.html')