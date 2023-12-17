from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/result', methods=['POST'])
def result():
    if request.method == 'POST':
        word = request.form['word']
        return render_template('result.html', word=word)

if __name__ == '__main__':
    app.run(debug=True)