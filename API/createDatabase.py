from UserModel import db
import os
if os.path.isfile('database.db'):
    os.remove('database.db')
    print('Previous session removed.')
db.create_all()