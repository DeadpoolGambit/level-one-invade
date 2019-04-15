from flask import Flask
from flask_restful import Resource, Api
from flask_cors import CORS, cross_origin
import requests
import json

app = Flask(__name__)
api = Api(app)

CORS(app)

class Summoner(Resource):
    def get(self, summonerName):
        #TODO: Add key at the end of the URL but don't push it to github
        url = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + summonerName + "?api_key="
        response = requests.get(url)
        return json.loads(response.content)

api.add_resource(Summoner, "/summoner/<summonerName>")

if __name__ == "__main__":
     app.run(port=8080)