from flask import Blueprint, request
from flask.templating import render_template

bp = Blueprint('main', __name__, url_prefix='/')

@bp.route('/')
def index():
    return render_template('base.html')