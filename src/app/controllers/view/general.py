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
    return render_template('/main/index.html')

def header():
    # session['user_idx'] = random.randint(0, 10)
    return render_template('/common/header.html')

@bp.route('/footer')
def footer():
    # session['user_idx'] = random.randint(0, 10)
    return render_template('/common/footer.html')

@bp.route('/service')
def service():
    # session['user_idx'] = random.randint(0, 10)
    return render_template('/menu/service.html')

@bp.route('/content')
def content():
    # session['user_idx'] = random.randint(0, 10)
    return render_template('/menu/use-content.html')


@bp.route('/dashboard')
def dashboard():
    # session['user_idx'] = random.randint(0, 10)
    return render_template('/dashboard/dashboard-main.html')

@bp.route('/dashboard_stu')
def dashboard_stu_id():
    page = request.args.get('page')
    return render_template('/dashboard/dashboard-student-id.html', page=page)

@bp.route('/dashboard_analy')
def dashboard_analy():
    page = request.args.get('page')
    return render_template('/dashboard/dashboard-study-analy.html', page=page)

@bp.route('/dashboard_ai')
def dashboard_ai():

    return render_template('/dashboard/dashboard-ai-consult.html')



@bp.route('/com')
def com():
    # session['user_idx'] = random.randint(0, 10)
    return render_template('/component.html')


