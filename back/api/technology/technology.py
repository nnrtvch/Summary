"""Endpoint for init."""
from flask_restplus import Resource

from api.technology.technology_namespace import TECHNOLOGY_NAMESPACE as api


@api.route("/")
class Technology(Resource):
    """Class for endpoint."""
    api.expect()
    @classmethod
    def get(cls):
        """GET for sending tech stack."""
        return {"msg": "hello"}
