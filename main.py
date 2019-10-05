import sys
import cookielib
import mechanize
from bs4 import BeautifulSoup
from flask import Flask
app = Flask(__name__)


@app.route('/login/<user_id>/<pass_w>', methods = ['POST'])
def get_x(user_id='772', pass_w='!GXg6SUH3%y&'):
        """Get cookie from with BeautifulSoup
        """
        login = "https://intranet.hbtn.io/auth/sign_in"
        cj = cookielib.CookieJar()
        br = mechanize.Browser()

        try:
            br.set_cookiejar(cj)
            br.open(login)
            br.select_form(nr=0)
            br.form['user[login]'] = user_id
            br.form['user[password]'] = pass_w
            br.submit()
        except AttributeError:
            print("[ERROR] Login failed - are your auth_data credentials correct?")
            sys.exit()
        cokie = 'dfhgsjdkfsjhfd'
        for c in cj:
            cokie = str(c)
            print(str(c))
        cokie = cokie.split(' ')
        dicty = {'cokies': cokie[1]}
        return(dicty)

if __name__ == '__main__':
    app.run(host='0.0.0.0',port='3300')