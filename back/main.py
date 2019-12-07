"""Start point."""
from flask import Flask

from api.api import create_api


if __name__ == '__main__':
    APP = Flask(__name__)
    APP.register_blueprint(create_api())
    APP.run()
