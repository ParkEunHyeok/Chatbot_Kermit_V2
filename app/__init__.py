from flask import Flask, request, jsonify
from . import models

models.startModel()

def create_app():
    app = Flask(__name__) # 플라스크 app 생성

    from .views import main_views
    app.register_blueprint(main_views.bp) # main html 파일 불러오기
    

    @app.route('/chatApi', methods=['GET', 'POST']) # 데이터 json으로 받아서, 예측해서, json return
    def chat_Api():

        sent = request.data.decode('utf-8')  # '요즘 기분이 우울한 느낌이에요'
        print(sent)

        predictData = models.predict(sent)


        print("Answer: ", predictData)
        print(100 * '-')

        return jsonify("개굴. " + predictData) # json response return

    return app