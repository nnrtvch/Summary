"""Creating api."""
from flask import Blueprint
from flask_restplus import Api

from api.technology.technology_namespace import TECHNOLOGY_NAMESPACE


def create_api():
    """Method for creating api."""
    blueprint = Blueprint("api", __name__, url_prefix='/api')
    api = Api(blueprint, title="Summary")
    api.add_namespace(TECHNOLOGY_NAMESPACE)
    return blueprint
